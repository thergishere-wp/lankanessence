'use client'

import { useEffect } from 'react'

function Bird() {
  return (
    <svg
      viewBox="0 0 40 20"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M20 10 C15 3, 5 0, 0 5 C5 4, 10 8, 20 10 C30 8, 35 4, 40 5 C35 0, 25 3, 20 10Z"
        fill="currentColor"
      />
    </svg>
  )
}

interface FlockConfig {
  count: number
  topPercent: number
  scale: number
  duration: number
  stagger: number
  opacity: number
}

const FLOCKS: FlockConfig[] = [
  { count: 5, topPercent: 18, scale: 0.55, duration: 28, stagger: 3.5, opacity: 0.35 },
  { count: 4, topPercent: 32, scale: 0.8,  duration: 20, stagger: 4.2, opacity: 0.55 },
  { count: 3, topPercent: 48, scale: 1.15, duration: 14, stagger: 5.0, opacity: 0.75 },
]

export default function FlyingBirds() {
  useEffect(() => {
    const id = 'le-birds-keyframes'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
      @keyframes le-bird-fly {
        from { transform: translateX(-80px) }
        to   { transform: translateX(calc(100vw + 80px)) }
      }
      .le-bird {
        animation-name: le-bird-fly;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      @media (prefers-reduced-motion: reduce) {
        .le-birds-container { display: none !important; }
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  return (
    <div
      className="le-birds-container absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {FLOCKS.map((flock, fi) =>
        Array.from({ length: flock.count }).map((_, bi) => {
          const size = 40 * flock.scale
          return (
            <div
              key={`${fi}-${bi}`}
              className="le-bird"
              style={{
                position: 'absolute',
                top: `${flock.topPercent + bi * 3.5}%`,
                left: 0,
                width: size,
                height: size * 0.5,
                color: 'white',
                opacity: flock.opacity - bi * 0.04,
                animationDuration: `${flock.duration}s`,
                animationDelay: `${bi * flock.stagger}s`,
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
              }}
            >
              <Bird />
            </div>
          )
        })
      )}
    </div>
  )
}
