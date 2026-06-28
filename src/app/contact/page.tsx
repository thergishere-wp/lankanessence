'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BRAND } from '@/lib/constants'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Please include a message'),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, interests: data.subject }),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or contact us directly.')
    }
  }

  const inputClass = "w-full px-4 py-3 border border-cream-dark bg-cream font-body text-forest text-sm focus:outline-none focus:border-gold transition-colors"
  const labelClass = "block font-body text-label-caps text-forest/60 uppercase tracking-wider text-xs mb-2"
  const errorClass = "font-body text-red-500 text-xs mt-1"

  return (
    <main>
      {/* Hero */}
      <section className="bg-forest-deep py-20 md:py-28">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Get in Touch</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Contact Us</h1>
        </div>
      </section>

      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-display text-display-xs text-forest mb-6">Let&apos;s Talk</h2>
              <p className="font-body text-forest/60 text-base leading-relaxed mb-8">
                Whether you have a question about our packages, need help with your ETA, or simply want to talk through your dream Sri Lanka trip — we&apos;re here.
              </p>

              <div className="flex flex-col gap-6">
                {/* WhatsApp */}
                <a
                  href={BRAND.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <svg className="w-5 h-5 text-gold group-hover:text-forest transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-1">WhatsApp (Fastest)</p>
                    <p className="font-body text-forest text-sm font-medium group-hover:text-gold transition-colors">Chat with us now</p>
                  </div>
                </a>

                {/* Phone SL */}
                <a href={`tel:${BRAND.contact.phoneSL.replace(/-/g, '')}`} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <svg className="w-5 h-5 text-gold group-hover:text-forest transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-1">Sri Lanka Office</p>
                    <p className="font-body text-forest text-sm font-medium group-hover:text-gold transition-colors">{BRAND.contact.phoneSL}</p>
                  </div>
                </a>

                {/* Phone NZ */}
                <a href={`tel:${BRAND.contact.phoneIndia.replace(/-/g, '')}`} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <svg className="w-5 h-5 text-gold group-hover:text-forest transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-1">India Office</p>
                    <p className="font-body text-forest text-sm font-medium group-hover:text-gold transition-colors">{BRAND.contact.phoneIndia}</p>
                  </div>
                </a>

                {/* Email */}
                <a href={`mailto:${BRAND.contact.email}`} className="flex items-start gap-4 group cursor-pointer">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <svg className="w-5 h-5 text-gold group-hover:text-forest transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-1">Email</p>
                    <p className="font-body text-forest text-sm font-medium group-hover:text-gold transition-colors">{BRAND.contact.email}</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-1">Address</p>
                    <p className="font-body text-forest text-sm">{BRAND.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white border-l-4 border-l-gold p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 mb-6">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-display-xs text-forest mb-3">Message Sent!</h3>
                  <p className="font-body text-forest/60 text-base">
                    We&apos;ll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white border-l-4 border-l-gold p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input {...register('name')} className={inputClass} placeholder="Your name" />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input {...register('email')} type="email" className={inputClass} placeholder="your@email.com" />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass}>Subject *</label>
                    <input {...register('subject')} className={inputClass} placeholder="How can we help?" />
                    {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
                  </div>

                  <div className="mb-6">
                    <label className={labelClass}>Message *</label>
                    <textarea
                      {...register('message')}
                      rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="Your message..."
                    />
                    {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                  </div>

                  {error && (
                    <p className="font-body text-red-500 text-sm mb-4 text-center">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-forest hover:text-cream transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
