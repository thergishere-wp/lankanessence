'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '@/lib/constants'

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-forest-deep py-14 md:py-20">
      <div ref={ref} className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-display-lg text-gold mb-2">
                {stat.value}
              </p>
              <p className="font-body text-label-caps text-cream/50 uppercase tracking-wider text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
