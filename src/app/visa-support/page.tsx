import Link from 'next/link'

export const metadata = {
  title: 'Visa Support | Lankan Essence',
  description: 'Everything you need to know about the Sri Lanka Electronic Travel Authorization (ETA) — requirements, costs, and application steps.',
}

const steps = [
  {
    number: '01',
    title: 'Apply Online',
    description: 'Visit the official Sri Lanka ETA portal at eta.gov.lk. The application takes approximately 10 minutes to complete.',
  },
  {
    number: '02',
    title: 'Pay the Fee',
    description: 'Most visitors pay USD $20 for a tourist ETA. Payment is accepted by major credit and debit cards through the secure portal.',
  },
  {
    number: '03',
    title: 'Receive Approval',
    description: 'Approvals are typically received within 24–72 hours by email. Print or save the approval for presentation on arrival.',
  },
  {
    number: '04',
    title: 'Travel',
    description: "Present your ETA approval at Sri Lanka's port of entry. The standard tourist ETA permits a 30-day stay, extendable in-country.",
  },
]

const faqs = [
  {
    q: 'Which countries can apply for a Sri Lanka ETA?',
    a: 'Citizens of most countries are eligible for the ETA, including Australia, New Zealand, United Kingdom, European Union nations, and India. A small number of nationalities require a different visa — contact us and we can advise for your passport.',
  },
  {
    q: 'How long is the ETA valid?',
    a: 'The tourist ETA is valid for 30 days per entry and allows double entry. It remains valid for 6 months from the date of issue.',
  },
  {
    q: 'Can I extend my stay?',
    a: 'Yes. Tourist visas can be extended for up to 30 additional days through the Department of Immigration in Sri Lanka. We can assist with the paperwork during your tour.',
  },
  {
    q: 'What documents do I need for the ETA application?',
    a: 'You will need a valid passport (with at least 6 months validity beyond your travel date), a return ticket, proof of accommodation, and a credit card for the application fee.',
  },
  {
    q: 'Does Lankan Essence handle the ETA for us?',
    a: "We guide you through every step and check your application before submission, but the ETA must be applied for in the traveler's own name through the official government portal.",
  },
]

export default function VisaSupportPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest-deep py-20 md:py-28">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Travel Preparation</p>
          <h1 className="font-display text-display-sm md:text-display-md text-cream mb-6 max-w-2xl">
            Visa Support & Sri Lanka ETA Guide
          </h1>
          <p className="font-body text-cream/60 text-lg leading-relaxed max-w-xl">
            Getting to Sri Lanka is straightforward. Here&apos;s everything you need to know about the Electronic Travel Authorization.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-section">
        <div className="max-w-container mx-auto px-5 md:px-8">
          <div className="text-center mb-14">
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="font-display text-display-sm md:text-display-md text-forest">
              Four Simple Steps
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step) => (
              <div key={step.number} className="bg-white border-l-4 border-l-gold p-6">
                <p className="font-display text-display-lg text-gold/30 mb-4 leading-none">{step.number}</p>
                <h3 className="font-display text-display-xs text-forest mb-3">{step.title}</h3>
                <p className="font-body text-forest/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Official link */}
          <div className="bg-forest p-8 md:p-12 text-center mb-16">
            <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-3">Official Application Portal</p>
            <h3 className="font-display text-display-xs text-cream mb-4">Apply Directly at eta.gov.lk</h3>
            <p className="font-body text-cream/60 text-base max-w-lg mx-auto mb-6">
              The Sri Lanka ETA is only issued through the official government portal. Beware of third-party sites charging inflated fees.
            </p>
            <a
              href="https://www.eta.gov.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors"
            >
              Go to Official ETA Portal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-display text-display-sm text-forest">Common Questions</h2>
            </div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white border-l-4 border-l-gold p-6">
                  <h3 className="font-display text-display-xs text-forest mb-3">{faq.q}</h3>
                  <p className="font-body text-forest/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-deep py-20">
        <div className="max-w-container mx-auto px-5 md:px-8 text-center">
          <p className="font-body text-label-caps text-gold uppercase tracking-wider mb-4">Need Help?</p>
          <h2 className="font-display text-display-sm md:text-display-md text-cream mb-6">
            We&apos;re Here to Guide You Through It
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold hover:bg-cream transition-colors"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </main>
  )
}
