import Link from 'next/link'
import Image from 'next/image'
import { BRAND } from '@/lib/constants'

const footerLinks = {
  Explore: [
    { label: 'Tour Packages', href: '/packages' },
    { label: 'Top Attractions', href: '/attractions' },
    { label: 'Tailor-Made Tours', href: '/tailor-made' },
    { label: 'Accommodations', href: '/accommodations' },
  ],
  'Travel Info': [
    { label: 'Visa Support', href: '/visa-support' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'ETA Application', href: 'https://www.eta.gov.lk', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-forest-deep">
      <div className="max-w-container mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Image
              src="/images/logo.png"
              alt="Lankan Essence"
              width={180}
              height={56}
              className="h-12 w-auto object-contain mb-6 brightness-0 invert opacity-90"
            />
            <p className="font-body text-cream/60 text-base leading-relaxed max-w-sm mb-6">
              Crafting bespoke journeys through the soul of Sri Lanka — where ancient culture, tropical nature, and warm hospitality converge.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${BRAND.contact.phoneSL.replace(/-/g, '')}`}
                className="font-body text-label-caps text-gold hover:text-cream transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {BRAND.contact.phoneSL}
              </a>
              <a
                href={`tel:${BRAND.contact.phoneIndia.replace(/-/g, '')}`}
                className="font-body text-label-caps text-gold hover:text-cream transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                {BRAND.contact.phoneIndia}
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="font-body text-label-caps text-gold hover:text-cream transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                {BRAND.contact.email}
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-body text-label-caps text-gold uppercase tracking-wider mb-6">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-cream/60 hover:text-cream transition-colors text-sm"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="font-body text-cream/60 hover:text-cream transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-cream/40 text-sm">
            © {new Date().getFullYear()} Lankan Essence. All rights reserved.
          </p>
          <p className="font-body text-cream/30 text-xs">
            {BRAND.contact.address}
          </p>
        </div>
      </div>

      {/* Gold bottom strip */}
      <div className="h-1.5 w-full bg-gold" />
    </footer>
  )
}
