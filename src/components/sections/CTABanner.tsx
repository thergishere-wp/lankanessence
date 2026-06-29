'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://static.wixstatic.com/media/6271b2_6277832756034311941b873be7b37f13~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/train.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="https://video.wixstatic.com/video/11062b_0f8758e51a5341cd8b26833e9484ff97/720p/mp4/file.mp4" type="video/mp4" />
      </video>
      <div ref={overlayRef} className="absolute inset-0 bg-forest-deep/80" />
      <div className="relative z-10 max-w-container mx-auto px-5 md:px-8 text-center">
        <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Ready to Discover Sri Lanka?</p>
        <h2 className="font-display text-display-sm md:text-display-md text-cream mb-6">
          Let Us Plan Your Perfect Journey
        </h2>
        <p className="font-body text-cream/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Share your travel dates, interests, and dream experiences — we&apos;ll craft a bespoke itinerary just for you.
        </p>
        <Link
          href="/tailor-made"
          className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors duration-200"
        >
          Start Planning
        </Link>
      </div>
    </section>
  )
}
