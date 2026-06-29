'use client'

import { useEffect, useRef, useState } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

interface CountUpOptions {
  target: number
  duration?: number
  decimals?: number
}

export function useCountUp(
  inView: boolean,
  { target, duration = 2000, decimals = 0 }: CountUpOptions
): number {
  const [value, setValue] = useState(0)
  const startTimeRef = useRef<number | null>(null)
  const rafRef = useRef<number | null>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!inView || hasRun.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(target)
      hasRun.current = true
      return
    }

    hasRun.current = true

    function tick(timestamp: number) {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutExpo(progress)
      const current = parseFloat((eased * target).toFixed(decimals))
      setValue(current)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [inView, target, duration, decimals])

  return value
}
