import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <Link href={`/packages#${slug}`} className="group relative block overflow-hidden cursor-pointer">
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
