'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCountUp } from '@/hooks/useCountUp'

/* Each stat encoded as { numeric, prefix, suffix, label } */
const STATS_DATA = [
  { numeric: 98,   prefix: '',  suffix: '%',    label: 'Visitor Satisfaction Rate' },
  { numeric: 10,   prefix: '',  suffix: 'K+',   label: 'Happy Travelers Guided' },
  { numeric: 120,  prefix: '',  suffix: '+',    label: 'Unique Destinations Covered' },
  { numeric: 365,  prefix: '',  suffix: '',     label: 'Year-Round Cultural Wonders' },
]

function StatItem({
  numeric, prefix, suffix, label, delay, inView,
}: {
  numeric: number
  prefix: string
  suffix: string
  label: string
  delay: number
  inView: boolean
}) {
  const count = useCountUp(inView, { target: numeric, duration: 2200 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <p className="font-display text-display-lg text-forest mb-2">
        {prefix}{count}{suffix}
      </p>
      <p className="font-body text-label-caps text-forest/40 uppercase tracking-wider text-xs">
        {label}
      </p>
    </motion.div>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-cream-dark py-12 md:py-16 border-y border-gold/20">
      <div ref={ref} className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS_DATA.map((stat, i) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={i * 0.1}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
