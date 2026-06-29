import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmsans',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Lankan Essence | Discover the Soul of Sri Lanka',
  description: "Premium guided tours through Sri Lanka's iconic landscapes, ancient temples, and golden coastlines. Expertly crafted journeys for international travelers.",
  keywords: 'Sri Lanka tours, Sri Lanka travel, guided tours Sri Lanka, luxury travel Sri Lanka, Sigiriya, Kandy, Galle, Ella',
  openGraph: {
    title: 'Lankan Essence | Discover the Soul of Sri Lanka',
    description: "Premium guided tours through Sri Lanka's most iconic destinations.",
    siteName: 'Lankan Essence',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-body">
        <SmoothScrollProvider>
          <Navbar />
          <div className="pt-16 md:pt-20">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
