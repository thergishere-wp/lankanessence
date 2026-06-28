import Image from 'next/image'
import Link from 'next/link'
import GoldPin from './GoldPin'
import DurationBadge from './DurationBadge'

interface PackageCardProps {
  name: string
  duration: string
  tagline: string
  description: string
  destinations: string[]
  image: string
  slug: string
}

export default function PackageCard({ name, duration, tagline, description, destinations, image, slug }: PackageCardProps) {
  return (
    <article className="group bg-white border-l-4 border-l-gold border border-cream-dark hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-deep/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <DurationBadge duration={duration} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-display-xs text-forest mb-1">
          {name}
        </h3>
        <p className="font-body text-gold text-sm font-medium mb-3 italic">
          {tagline}
        </p>
        <p className="font-body text-forest/70 text-sm leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Destinations */}
        <div className="flex flex-wrap gap-2 mb-5">
          {destinations.map((dest) => (
            <span key={dest} className="flex items-center gap-1 text-xs font-body text-forest/60 uppercase tracking-wide">
              <GoldPin className="w-3 h-3" />
              {dest}
            </span>
          ))}
        </div>

        <Link
          href={`/packages#${slug}`}
          className="inline-flex items-center gap-2 font-body text-label-caps text-forest border-b border-gold pb-0.5 w-max hover:text-gold transition-colors uppercase tracking-wider"
        >
          View Itinerary
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
