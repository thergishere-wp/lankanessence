'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, MouseEvent } from 'react'

interface PackageCardProps {
  name: string
  duration: string
  tagline: string
  description: string
  destinations: string[]
  image: string
  slug: string
}

export default function PackageCard({ name, duration, tagline, description, image, slug }: PackageCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width  - 0.5   /* -0.5 to +0.5 */
    const y = (e.clientY - rect.top)  / rect.height - 0.5
    card.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 8}deg) scale(1.02)`
  }

  function handleMouseLeave() {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    card.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)'
    setTimeout(() => {
      if (card) card.style.transition = ''
    }, 500)
  }

  function handleMouseEnter() {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.1s ease-out'
  }

  return (
    <Link
      ref={cardRef}
      href={`/packages#${slug}`}
      className="group relative block overflow-hidden cursor-pointer"
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Full-bleed image */}
      <div className="relative h-72 md:h-80 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />

        {/* Text overlay — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-body text-gold text-xs uppercase tracking-widest mb-1">{duration}</p>
          <h3 className="font-display text-[22px] leading-tight text-cream mb-1">{name}</h3>
          <p className="font-body text-cream/70 text-xs leading-relaxed line-clamp-2">{tagline}</p>
        </div>

        {/* Hover: reveal description */}
        <div className="absolute inset-0 bg-forest-deep/75 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="font-body text-gold text-xs uppercase tracking-widest mb-1">{duration}</p>
          <h3 className="font-display text-[22px] leading-tight text-cream mb-2">{name}</h3>
          <p className="font-body text-cream/80 text-xs leading-relaxed mb-4 line-clamp-3">{description}</p>
          <span className="inline-flex items-center gap-1 font-body text-label-caps text-gold uppercase tracking-wider text-xs border-b border-gold/60 pb-0.5 w-max">
            View Itinerary
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
