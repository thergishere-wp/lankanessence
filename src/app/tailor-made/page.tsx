'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BRAND } from '@/lib/constants'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  country: z.string().optional(),
  travelDates: z.string().optional(),
  groupSize: z.string().optional(),
  packageInterest: z.string().optional(),
  interests: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more about your trip'),
})

type FormData = z.infer<typeof schema>

export default function TailorMadePage() {
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
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again or email us directly.')
    }
  }

  const inputClass = "w-full px-4 py-3 border border-cream-dark bg-white font-body text-forest text-sm focus:outline-none focus:border-gold transition-colors"
  const labelClass = "block font-body text-label-caps text-forest/60 uppercase tracking-wider text-xs mb-2"
  const errorClass = "font-body text-red-500 text-xs mt-1"

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-56 md:h-72 flex items-end pb-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1580803834051-abee96a9ac79?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        <div className="absolute inset-0 bg-forest-deep/75" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-2">Bespoke Journeys</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Tailor-Made Tours</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-20">
            {/* Left: Brand messaging */}
            <div className="lg:col-span-2">
              <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Your Journey, Your Way</p>
              <h2 className="font-display text-display-sm text-forest mb-6">
                Every Detail, Crafted Around You
              </h2>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <p className="font-body text-forest/70 text-base leading-relaxed mb-6">
                No two travelers are the same. Whether you&apos;re chasing wildlife at dawn in Yala, seeking serenity in a Nuwara Eliya tea estate, or immersing yourself in Colombo&apos;s vibrant street food scene — we build the journey around what moves you.
              </p>
              <p className="font-body text-forest/70 text-base leading-relaxed mb-8">
                Share your vision and we&apos;ll handle everything: flights, accommodation, private guides, restaurant reservations, and 24/7 in-country support. You simply show up and experience.
              </p>

              {/* Contact details */}
              <div className="bg-white border-l-4 border-l-gold p-6">
                <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-4">Prefer to talk?</p>
                <div className="flex flex-col gap-3">
                  <a href={BRAND.contact.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 font-body text-sm text-forest hover:text-gold transition-colors">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Us
                  </a>
                  <a href={`tel:${BRAND.contact.phoneSL.replace(/-/g, '')}`}
                    className="flex items-center gap-3 font-body text-sm text-forest hover:text-gold transition-colors">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    {BRAND.contact.phoneSL} (Sri Lanka)
                  </a>
                  <a href={`tel:${BRAND.contact.phoneIndia.replace(/-/g, '')}`}
                    className="flex items-center gap-3 font-body text-sm text-forest hover:text-gold transition-colors">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                    </svg>
                    {BRAND.contact.phoneIndia} (India)
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border-l-4 border-l-gold p-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 mb-6">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-display-xs text-forest mb-3">Thank You!</h3>
                  <p className="font-body text-forest/60 text-base leading-relaxed">
                    Your inquiry has been received. Our team will get back to you within 24 hours to start planning your perfect Sri Lanka journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white border-l-4 border-l-gold p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input {...register('name')} className={inputClass} placeholder="Your full name" />
                      {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input {...register('email')} type="email" className={inputClass} placeholder="your@email.com" />
                      {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input {...register('phone')} className={inputClass} placeholder="+1 555 000 0000" />
                    </div>
                    <div>
                      <label className={labelClass}>Country of Residence</label>
                      <input {...register('country')} className={inputClass} placeholder="Australia, NZ, UK..." />
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Travel Dates</label>
                      <input {...register('travelDates')} className={inputClass} placeholder="e.g. March 2025, flexible" />
                    </div>
                    <div>
                      <label className={labelClass}>Number of Travelers</label>
                      <input {...register('groupSize')} className={inputClass} placeholder="e.g. 2 adults, 1 child" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass}>Package Interest</label>
                    <select {...register('packageInterest')} className={inputClass}>
                      <option value="">Select a package (optional)</option>
                      <option value="snapshot-4">Sri Lanka in a Snapshot (4 Days)</option>
                      <option value="unveiled-6">Sri Lanka Unveiled (6 Days)</option>
                      <option value="epic-8">Epic Sri Lanka (8 Days)</option>
                      <option value="grand-15">Grand Discovery (15 Days)</option>
                      <option value="custom">Fully Custom Itinerary</option>
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass}>Special Interests</label>
                    <input {...register('interests')} className={inputClass} placeholder="Wildlife, culture, beaches, ayurveda, photography..." />
                  </div>

                  <div className="mb-6">
                    <label className={labelClass}>Your Message *</label>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your dream Sri Lanka experience — any must-sees, travel style preferences, dietary needs..."
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
                    {isSubmitting ? 'Sending...' : 'Send My Inquiry'}
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
