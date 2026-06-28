import Image from 'next/image'
import Link from 'next/link'
import { HOTELS } from '@/lib/constants'
import GoldPin from '@/components/ui/GoldPin'

export const metadata = {
  title: 'Accommodations | Lankan Essence',
  description: "Stay in Sri Lanka's finest hotels and boutique retreats — hand-picked for comfort, location, and character.",
}

export default function AccommodationsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-64 md:h-80 flex items-end pb-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-2">Where You&apos;ll Stay</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Partner Hotels</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-12">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-forest/70 text-lg leading-relaxed">
            We partner exclusively with hotels that offer genuine character, excellent service, and locations that put you at the heart of each destination. Every property below is personally vetted by our team.
          </p>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="bg-cream pb-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {HOTELS.map((hotel) => (
              <article key={hotel.name} className="group bg-white border-l-4 border-l-gold border border-cream-dark hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-deep/50 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <GoldPin />
                    <span className="font-body text-label-caps text-gold text-xs uppercase tracking-wider">{hotel.location}</span>
                  </div>
                  <h2 className="font-display text-display-xs text-forest mb-3">{hotel.name}</h2>
                  <p className="font-body text-forest/60 text-sm leading-relaxed flex-1 mb-6">
                    {hotel.description}
                  </p>
                  <Link
                    href="/tailor-made"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-forest hover:text-cream transition-colors duration-200 w-full"
                  >
                    Request to Book
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-forest-deep p-8 md:p-12 text-center">
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">Need Something Different?</p>
            <h2 className="font-display text-display-sm text-cream mb-4">
              We Source Hotels for Every Taste
            </h2>
            <p className="font-body text-cream/60 text-base max-w-xl mx-auto mb-8">
              From boutique jungle lodges to colonial heritage hotels — if you have a preferred style or budget, tell us and we&apos;ll find the perfect match.
            </p>
            <Link
              href="/tailor-made"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors"
            >
              Discuss Accommodation Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
