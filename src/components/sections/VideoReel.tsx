'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const VIDEO_SRC_720 = 'https://video.wixstatic.com/video/11062b_0f8758e51a5341cd8b26833e9484ff97/720p/mp4/file.mp4'
const VIDEO_SRC_1080 = 'https://video.wixstatic.com/video/11062b_0f8758e51a5341cd8b26833e9484ff97/1080p/mp4/file.mp4'

export default function VideoReel() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="relative min-h-[55vh] md:min-h-[65vh] overflow-hidden flex items-center justify-center">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://static.wixstatic.com/media/6271b2_6277832756034311941b873be7b37f13~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,enc_avif,quality_auto/train.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={VIDEO_SRC_1080} type="video/mp4" media="(min-width: 1024px)" />
        <source src={VIDEO_SRC_720} type="video/mp4" />
      </video>

      {/* Layered gradient overlay — forest at edges, more transparent centre */}
      <div className="absolute inset-0 bg-linear-to-b from-forest-deep/75 via-forest-deep/45 to-forest-deep/75" />
      <div className="absolute inset-0 bg-linear-to-r from-forest-deep/40 via-transparent to-forest-deep/40" />

      {/* Decorative top & bottom rules */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/30" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-16 h-px bg-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body text-label-caps text-gold uppercase tracking-widest mb-5"
        >
          The Island in Motion
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-display text-display-md md:text-display-lg text-cream mb-4 leading-tight"
        >
          Sri Lanka is not just seen.
          <br />
          <span className="italic text-cream/80">It is felt.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="font-body text-cream/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
        >
          Ancient kingdoms, misty highlands, golden coastlines, and wildlife that takes your breath away — all waiting for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/packages"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors duration-200"
          >
            Explore Packages
          </Link>
          <Link
            href="/tailor-made"
            className="inline-flex items-center justify-center px-10 py-4 border border-cream/50 text-cream font-body text-label-caps uppercase tracking-wider hover:bg-cream/10 transition-colors duration-200"
          >
            Plan a Custom Tour
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-16 h-px bg-gold mx-auto mt-12"
        />
      </div>
    </section>
  )
}
