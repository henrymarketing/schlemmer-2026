'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

type Slide = {
  image: {
    url?: string
    alt?: string
    width?: number
    height?: number
  }
  caption?: string
}

type Props = {
  slides: Slide[]
  autoplay?: boolean
  intervalMs?: number
}

export function HeroCarousel({ slides, autoplay = true, intervalMs = 5000 }: Props) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    if (!autoplay || prefersReducedMotion || slides.length <= 1) return
    timerRef.current = setInterval(next, intervalMs)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [autoplay, intervalMs, next, prefersReducedMotion, slides.length])

  if (!slides.length) return null

  const slide = slides[current]
  const imageUrl = typeof slide?.image === 'string' ? slide.image : slide?.image?.url

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black" aria-label="Featured works slideshow">
      {slides.map((s, idx) => {
        const url = typeof s.image === 'string' ? s.image : s.image?.url
        const imgObj = typeof s.image !== 'string' ? s.image : null
        if (!url) return null
        return (
          <div
            key={idx}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-1000"
            style={{ opacity: idx === current ? 1 : 0 }}
            aria-hidden={idx !== current}
          >
            <Image
              src={url}
              alt={imgObj?.alt || s.caption || ''}
              width={imgObj?.width ?? 800}
              height={imgObj?.height ?? 800}
              className="max-w-[500px] max-h-[500px] w-auto h-auto object-contain"
              priority={idx === 0}
              sizes="500px"
            />
          </div>
        )
      })}

      {/* Caption */}
      {slide?.caption && (
        <div className="absolute bottom-16 left-0 right-0 text-center px-6">
          <p className="text-white/70 text-xs tracking-widest uppercase">{slide.caption}</p>
        </div>
      )}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="carousel-dots absolute bottom-6 left-0 right-0">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-dot${idx === current ? ' active' : ''}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === current}
            />
          ))}
        </div>
      )}
    </section>
  )
}
