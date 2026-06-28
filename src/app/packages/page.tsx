import Image from 'next/image'
import Link from 'next/link'
import { PACKAGES } from '@/lib/constants'
import GoldPin from '@/components/ui/GoldPin'
import DurationBadge from '@/components/ui/DurationBadge'

export const metadata = {
  title: 'Tour Packages | Lankan Essence',
  description: 'Choose from our carefully curated Sri Lanka tour packages — from 4-day snapshots to 15-day grand discoveries.',
}

export default function PackagesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-64 md:h-80 flex items-end pb-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1567227416830-81b71f7e6f50?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-2">Curated Journeys</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Tour Packages</h1>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-16">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                id={pkg.slug}
                className="bg-white border-l-4 border-l-gold border border-cream-dark scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-forest-deep/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <DurationBadge duration={pkg.duration} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col">
                    <h2 className="font-display text-display-sm text-forest mb-2">
                      {pkg.name}
                    </h2>
                    <p className="font-body text-gold text-sm font-medium italic mb-4">
                      {pkg.tagline}
                    </p>
                    <p className="font-body text-forest/70 text-sm leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    {/* Destinations */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {pkg.destinations.map((dest) => (
                        <span key={dest} className="flex items-center gap-1 text-xs font-body text-forest/60 uppercase tracking-wide">
                          <GoldPin className="w-3 h-3" />
                          {dest}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-8">
                      <p className="font-body text-label-caps text-forest/50 uppercase tracking-wider text-xs mb-3">
                        Package Highlights
                      </p>
                      <ul className="flex flex-col gap-2">
                        {pkg.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 font-body text-sm text-forest/70">
                            <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/tailor-made"
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-forest hover:text-cream transition-colors duration-200 w-full md:w-auto"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Custom CTA */}
          <div className="mt-16 bg-forest p-8 md:p-12 text-center">
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">Don&apos;t See the Right Fit?</p>
            <h2 className="font-display text-display-sm text-cream mb-4">
              We&apos;ll Build It Just for You
            </h2>
            <p className="font-body text-cream/60 text-base max-w-xl mx-auto mb-8">
              Every traveler is different. Tell us your dates, interests, and budget — we&apos;ll craft a bespoke itinerary around you.
            </p>
            <Link
              href="/tailor-made"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors"
            >
              Plan a Custom Tour
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
