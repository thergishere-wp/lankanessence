'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-cream py-section">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">Traveler Stories</p>
          <h2 className="font-display text-display-sm md:text-display-md text-forest">
            Journeys That Stay With You
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border-l-4 border-l-gold p-8 md:p-12 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-display-xs text-forest/80 italic leading-relaxed mb-8">
                "{TESTIMONIALS[current].quote}"
              </blockquote>

              <div>
                <p className="font-body font-bold text-forest">{TESTIMONIALS[current].name}</p>
                <p className="font-body text-label-caps text-gold uppercase tracking-wider text-xs mt-1">
                  {TESTIMONIALS[current].origin}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  i === current ? 'bg-gold w-6' : 'bg-forest/20 w-2'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
