import Hero from '@/components/sections/Hero'
import PackageCard from '@/components/ui/PackageCard'
import StatsBar from '@/components/sections/StatsBar'
import CulturalSpotlight from '@/components/sections/CulturalSpotlight'
import VideoReel from '@/components/sections/VideoReel'
import Testimonials from '@/components/sections/Testimonials'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import WaveDivider from '@/components/layout/WaveDivider'
import SectionLabel from '@/components/ui/SectionLabel'
import { PACKAGES, DAY_EXCURSIONS, HOTELS } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import GoldPin from '@/components/ui/GoldPin'

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Packages Section */}
      <section className="bg-cream py-section" id="packages">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Curated Journeys</SectionLabel>
            <h2 className="font-display text-display-sm md:text-display-md text-forest">
              Sri Lanka Tour Packages
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-forest text-forest font-body text-label-caps uppercase tracking-wider hover:bg-forest hover:text-cream transition-colors duration-200 font-bold"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F5F0E8" toColor="#0D2818" />
      <StatsBar />
      <WaveDivider fromColor="#0D2818" toColor="#F5F0E8" />

      {/* Day Excursions */}
      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <SectionLabel>Add-On Experiences</SectionLabel>
            <h2 className="font-display text-display-sm md:text-display-md text-forest">
              Day Excursions
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DAY_EXCURSIONS.map((exc) => (
              <article key={exc.id} className="group bg-white border-l-4 border-l-gold">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={exc.image}
                    alt={exc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="font-body text-label-caps text-gold text-xs uppercase tracking-wider">{exc.duration}</span>
                  <h3 className="font-display text-display-xs text-forest mt-2 mb-3">{exc.name}</h3>
                  <p className="font-body text-forest/60 text-sm leading-relaxed mb-4">{exc.description}</p>
                  <Link href="/tailor-made" className="font-body text-label-caps text-forest border-b border-gold pb-0.5 uppercase tracking-wider text-xs hover:text-gold transition-colors">
                    Request This Experience
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CulturalSpotlight />

      <VideoReel />

      {/* Accommodations Preview */}
      <section className="bg-forest py-section overflow-hidden">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">Where You&apos;ll Stay</p>
            <h2 className="font-display text-display-sm md:text-display-md text-cream">
              Partner Hotels
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {HOTELS.map((hotel) => (
              <article key={hotel.name} className="flex-shrink-0 w-72 group cursor-pointer">
                <div className="relative h-48 overflow-hidden mb-4">
                  <Image src={hotel.image} alt={hotel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-linear-to-t from-forest-deep/60 to-transparent" />
                </div>
                <div className="flex items-start gap-2 mb-1">
                  <GoldPin />
                  <span className="font-body text-label-caps text-gold text-xs uppercase tracking-wider">{hotel.location}</span>
                </div>
                <h3 className="font-display text-display-xs text-cream mb-2">{hotel.name}</h3>
                <p className="font-body text-cream/60 text-sm leading-relaxed">{hotel.description}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/accommodations" className="inline-flex items-center gap-2 font-body text-label-caps text-gold border-b border-gold/50 pb-0.5 uppercase tracking-wider hover:border-gold transition-colors">
              View All Accommodations
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <WhyChooseUs />

      {/* CTA Banner — video background */}
      <section className="relative py-28 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://static.wixstatic.com/media/6271b2_6277832756034311941b873be7b37f13~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,enc_avif,quality_auto/train.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="https://video.wixstatic.com/video/11062b_0f8758e51a5341cd8b26833e9484ff97/720p/mp4/file.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest-deep/80" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Ready to Discover Sri Lanka?</p>
          <h2 className="font-display text-display-sm md:text-display-md text-cream mb-6">
            Let Us Plan Your Perfect Journey
          </h2>
          <p className="font-body text-cream/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Share your travel dates, interests, and dream experiences — we&apos;ll craft a bespoke itinerary just for you.
          </p>
          <Link
            href="/tailor-made"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors duration-200"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </main>
  )
}
