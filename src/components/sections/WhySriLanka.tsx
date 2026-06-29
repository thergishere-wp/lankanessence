'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STRIP_PHOTOS = [
  {
    src: 'https://static.wixstatic.com/media/nsplsh_82ae4befca5a4cf692f44de60d3b89cb~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    label: 'Ancient Kingdoms',
    sublabel: 'Sigiriya',
  },
  {
    src: 'https://static.wixstatic.com/media/6271b2_1f0c62dd16924ef984094b3af93d5094~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    label: 'Misty Highlands',
    sublabel: 'Nuwara Eliya',
  },
  {
    src: 'https://static.wixstatic.com/media/6271b2_09911f624d6748309231114269d331d6~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    label: 'Iconic Architecture',
    sublabel: 'Nine Arch Bridge',
  },
  {
    src: 'https://static.wixstatic.com/media/6271b2_66d27d09e2754194ae7d886c04df89aa~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    label: 'Golden Coastlines',
    sublabel: 'Mirissa',
  },
  {
    src: 'https://static.wixstatic.com/media/6271b2_1aa038cd0bb5492ba8ac2e240f8624d2~mv2.jpg/v1/fill/w_700,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/img.jpg',
    label: 'Colonial Heritage',
    sublabel: 'Galle Fort',
  },
]

export default function WhySriLanka() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="bg-cream py-10 pb-0">
      {/* Heading */}
      <div className="max-w-container mx-auto px-5 md:px-8 text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-body text-label-caps text-gold uppercase tracking-widest mb-3"
        >
          The Island That Has It All
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-display-sm md:text-display-md text-forest"
        >
          Why Sri Lanka?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-forest/60 text-sm mt-3 max-w-lg mx-auto"
        >
          Ancient rock fortresses, mist-wrapped tea hills, wildlife safaris, and turquoise shores — one island, endless discovery.
        </motion.p>
      </div>

      {/* Edge-to-edge photo strip */}
      <div className="flex overflow-x-auto scrollbar-hide">
        {STRIP_PHOTOS.map((photo, i) => (
          <motion.div
            key={photo.sublabel}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
            className="group relative flex-none w-[60vw] sm:w-[40vw] md:w-[20%] h-64 md:h-72 overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.label}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-forest-deep/75 via-forest-deep/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-body text-gold text-xs uppercase tracking-widest mb-0.5">{photo.sublabel}</p>
              <h3 className="font-display text-[16px] text-cream leading-tight">{photo.label}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
