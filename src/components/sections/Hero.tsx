'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section ref={heroRef} className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-forest-deep/80 via-forest-deep/50 to-forest-deep/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-8 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-label-caps text-gold uppercase tracking-widest mb-6 text-shadow-sm"
        >
          Experience Sri Lanka
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-display-md md:text-display-lg xl:text-display-xl text-cream mb-6 text-shadow-hero"
        >
          Where Nature Whispers,
          <br />
          <span className="italic text-cream/90">and Culture Dances.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto text-shadow-sm"
        >
          Expertly curated journeys through Sri Lanka's most iconic landscapes, ancient temples, and golden coastlines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/packages"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors duration-200"
          >
            View Our Packages
          </Link>
          <Link
            href="/tailor-made"
            className="inline-flex items-center justify-center px-8 py-4 border border-cream/60 text-cream font-body text-label-caps uppercase tracking-wider hover:bg-cream/10 transition-colors duration-200"
          >
            Plan a Custom Tour
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-label-caps text-cream/50 uppercase tracking-widest text-xs">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-linear-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
