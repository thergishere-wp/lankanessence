'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CulturalSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-forest">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Text panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center px-8 md:px-12 py-16 md:py-20"
          >
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">
              Cultural Highlight
            </p>
            <h2 className="font-display text-display-sm md:text-display-md text-cream mb-6">
              The Festival of the Tooth
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-6" />
            <p className="font-body text-cream/70 text-base leading-relaxed mb-4">
              The Kandy Esala Perahera is one of the oldest and most spectacular pageants in Asia. Held annually in July or August, this ten-day festival honours the Sacred Tooth Relic of the Buddha — Sri Lanka's most venerated religious treasure.
            </p>
            <p className="font-body text-cream/70 text-base leading-relaxed mb-8">
              Magnificently adorned elephants, traditional Kandyan dancers, whip crackers, and fire performers parade through the ancient streets of Kandy in a display of devotion that has continued for over five centuries.
            </p>
            <a
              href="/attractions"
              className="inline-flex items-center gap-2 font-body text-label-caps text-gold border-b border-gold/50 pb-0.5 w-max hover:border-gold transition-colors uppercase tracking-wider"
            >
              Explore Sri Lanka's Culture
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-[400px] lg:min-h-0"
            style={{
              backgroundImage: `url('https://static.wixstatic.com/media/6271b2_966660957d96479ba9cd1b3ddd6523cd~mv2.jpg/v1/fill/w_900,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Perehara.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-forest/30" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
