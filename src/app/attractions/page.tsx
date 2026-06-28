import Image from 'next/image'
import Link from 'next/link'
import { ATTRACTIONS } from '@/lib/constants'
import GoldPin from '@/components/ui/GoldPin'

export const metadata = {
  title: "Top Attractions | Lankan Essence",
  description: "Discover Sri Lanka's most iconic destinations — from UNESCO World Heritage sites to pristine beaches and ancient temples.",
}

export default function AttractionsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-64 md:h-80 flex items-end pb-12"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-forest-deep/70" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-2">Discover the Island</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Top Attractions</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16">
        <div className="max-w-container mx-auto px-5 md:px-8 max-w-3xl">
          <p className="font-body text-forest/70 text-lg leading-relaxed text-center">
            Sri Lanka packs extraordinary diversity into a small island — ancient civilisations, mist-wrapped highlands, tropical wildlife, and some of the Indian Ocean's finest beaches. Here are the experiences that define a Lankan journey.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="bg-cream pb-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ATTRACTIONS.map((attr, i) => (
              <article
                key={attr.id}
                className={`group relative overflow-hidden border-l-4 border-l-gold bg-white ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'h-80 md:h-96' : 'h-56'}`}>
                  <Image
                    src={attr.image}
                    alt={attr.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-deep/80 via-forest-deep/20 to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block font-body text-label-caps text-gold bg-forest-deep/80 px-3 py-1 text-xs uppercase tracking-wider mb-2">
                      {attr.badge}
                    </span>
                    <h2 className="font-display text-display-xs text-cream mb-1">{attr.name}</h2>
                    <div className="flex items-center gap-1">
                      <GoldPin className="w-3 h-3" />
                      <span className="font-body text-cream/70 text-xs uppercase tracking-wide">{attr.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="font-body text-forest/70 text-sm leading-relaxed mb-4">
                    {attr.description}
                  </p>
                  <Link
                    href="/tailor-made"
                    className="inline-flex items-center gap-2 font-body text-label-caps text-forest border-b border-gold pb-0.5 uppercase tracking-wider text-xs hover:text-gold transition-colors"
                  >
                    Include in My Tour
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-20">
        <div className="max-w-container mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Your Wishlist, Our Map</p>
          <h2 className="font-display text-display-sm md:text-display-md text-cream mb-6">
            Tell Us Which Sites Call to You
          </h2>
          <Link
            href="/tailor-made"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors duration-200"
          >
            Build My Itinerary
          </Link>
        </div>
      </section>
    </main>
  )
}
