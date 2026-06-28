import Image from 'next/image'
import Link from 'next/link'
import StatsBar from '@/components/sections/StatsBar'
import WaveDivider from '@/components/layout/WaveDivider'

export const metadata = {
  title: 'Our Story | Lankan Essence',
  description: 'Meet the team behind Lankan Essence — born from a love of Sri Lanka and a passion for creating transformative travel experiences.',
}

const values = [
  {
    title: 'Authenticity',
    description: "We don't manufacture experiences — we open doors to the real Sri Lanka, one that takes a lifetime to fully discover.",
  },
  {
    title: 'Craftsmanship',
    description: 'Every itinerary is built by hand, paced with care, and refined through years of on-the-ground knowledge.',
  },
  {
    title: 'Responsibility',
    description: 'We support local guides, family-run businesses, and conservation efforts — travel that gives back to the island that inspires us.',
  },
]

const team = [
  {
    name: 'Prabhath Gunarathna',
    role: 'Founder & Lead Guide',
    bio: 'Born and raised in Kandy, Prabhath has been guiding international travelers through Sri Lanka for over fifteen years. His encyclopedic knowledge of the island — from ancient Pali texts to the best kottu roti in Ella — is legendary among past guests.',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&q=80',
  },
  {
    name: 'Sarah Pereira',
    role: 'Head of Operations',
    bio: 'Sarah coordinates the logistics that make our tours seamless. With a background in hospitality management and a decade of experience with luxury travel in South Asia, nothing surprises her.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
]

export default function OurStoryPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-64 md:h-96 flex items-end pb-12"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/6271b2_391ef11e4f0f497f8d3ba6f0c9b0f454~mv2.jpg/v1/fill/w_1600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/sigiriya.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-forest-deep/65" />
        <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-2">Who We Are</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream">Our Story</h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-20">
            <div>
              <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">How It Began</p>
              <h2 className="font-display text-display-sm text-forest mb-6">
                Born from a Love of Sri Lanka
              </h2>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <p className="font-body text-forest/70 text-base leading-relaxed mb-5">
                Lankan Essence was founded on a simple conviction: that Sri Lanka deserves to be experienced — not just visited. Too many travelers pass through the island on rushed itineraries, missing the conversations with local fishermen at dawn, the quiet reverence of a hidden forest temple, the particular sweetness of a just-plucked tea leaf held up to fading light.
              </p>
              <p className="font-body text-forest/70 text-base leading-relaxed mb-5">
                We started small — just a handful of itineraries built for friends who trusted us to show them the Sri Lanka we loved. Word spread. Today we guide travelers from Australia, New Zealand, the United Kingdom, Europe, and India through journeys that are crafted to last a lifetime in memory.
              </p>
              <p className="font-body text-forest/70 text-base leading-relaxed">
                We are based in Thalawathugoda, Sri Lanka — and with contacts across Australia, India, and the United Kingdom, we understand both where our travelers come from and the island that awaits them.
              </p>
            </div>

            <div className="relative">
              <div className="relative h-80 lg:h-full min-h-[400px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                  alt="Nine Arch Bridge, Sri Lanka"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold p-5 hidden md:block">
                <p className="font-display text-display-sm text-forest">15+</p>
                <p className="font-body text-label-caps text-forest/70 text-xs uppercase tracking-wider">Years Guiding</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">What Drives Us</p>
              <h2 className="font-display text-display-sm md:text-display-md text-forest">Our Values</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val) => (
                <div key={val.title} className="bg-white border-l-4 border-l-gold p-8 text-center">
                  <h3 className="font-display text-display-xs text-forest mb-4">{val.title}</h3>
                  <p className="font-body text-forest/60 text-sm leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-12">
              <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">The People Behind Your Journey</p>
              <h2 className="font-display text-display-sm md:text-display-md text-forest">Meet the Team</h2>
              <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {team.map((member) => (
                <div key={member.name} className="bg-white border-l-4 border-l-gold p-6 flex gap-5">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-full">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display text-display-xs text-forest mb-1">{member.name}</h3>
                    <p className="font-body text-label-caps text-gold text-xs uppercase tracking-wider mb-3">{member.role}</p>
                    <p className="font-body text-forest/60 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fromColor="#F5F0E8" toColor="#0D2818" />
      <StatsBar />
      <WaveDivider fromColor="#0D2818" toColor="#F5F0E8" />

      {/* CTA */}
      <section className="bg-cream py-20">
        <div className="max-w-container mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Start Your Journey</p>
          <h2 className="font-display text-display-sm md:text-display-md text-forest mb-6">
            Ready to Experience Sri Lanka With Us?
          </h2>
          <Link
            href="/tailor-made"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-forest hover:text-cream transition-colors"
          >
            Plan My Tour
          </Link>
        </div>
      </section>
    </main>
  )
}
