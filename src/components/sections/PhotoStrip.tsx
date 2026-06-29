'use client'

import Image from 'next/image'

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&q=80',
    alt: 'Sigiriya Rock Fortress',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka elephants',
  },
  {
    src: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka tea hills',
  },
  {
    src: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka temple',
  },
  {
    src: 'https://images.unsplash.com/photo-1586999768265-24af89630739?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka beach',
  },
  {
    src: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka waterfall',
  },
  {
    src: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka wildlife leopard',
  },
  {
    src: 'https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?w=600&h=400&fit=crop&q=80',
    alt: 'Sri Lanka coastal sunrise',
  },
]

/* Duplicate the strip for seamless infinite loop */
const ALL_PHOTOS = [...PHOTOS, ...PHOTOS]

export default function PhotoStrip() {
  return (
    <section className="overflow-hidden py-0" aria-label="Sri Lanka destinations photo gallery">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .le-strip-track {
            animation: le-strip-scroll 40s linear infinite;
          }
          .le-strip-track:hover {
            animation-play-state: paused;
          }
        }
        @keyframes le-strip-scroll {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
      `}</style>
      <div className="flex le-strip-track" style={{ width: 'max-content' }}>
        {ALL_PHOTOS.map((photo, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-72 h-48 md:w-96 md:h-60 overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="384px"
              unoptimized
            />
            <div className="absolute inset-0 bg-forest-deep/10 hover:bg-transparent transition-colors duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}
