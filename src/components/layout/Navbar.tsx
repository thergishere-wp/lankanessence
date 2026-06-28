'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Packages', href: '/packages' },
  { label: 'Attractions', href: '/attractions' },
  { label: 'Tailor-Made', href: '/tailor-made' },
  { label: 'Accommodations', href: '/accommodations' },
  { label: 'Visa Support', href: '/visa-support' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-forest shadow-xl' : 'bg-forest/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-container mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lankan Essence"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-label-caps text-cream/80 hover:text-gold transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/tailor-made"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gold text-forest font-body text-label-caps uppercase tracking-wider hover:bg-cream transition-colors duration-200 font-bold"
            >
              Book a Tour
            </Link>
            <button
              className="lg:hidden text-cream p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-forest-deep border-t border-gold/20"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-6 py-3 text-cream/80 hover:text-gold hover:bg-forest/50 font-body text-label-caps uppercase tracking-wider transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-6 py-4">
                <Link
                  href="/tailor-made"
                  className="block text-center py-3 bg-gold text-forest font-body text-label-caps uppercase tracking-wider font-bold"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Tour
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
