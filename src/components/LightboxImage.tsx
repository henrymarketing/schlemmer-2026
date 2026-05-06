'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  className?: string
  sizes?: string
}

export function LightboxImage({ src, alt, width, height, caption, className, sizes }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-zoom-in block w-full border-0 bg-transparent p-0 text-left"
        aria-label={`Expand image${alt ? ': ' + alt : ''}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className={className} sizes={sizes} />
      </button>

      {open && (
        <div
          className="lightbox open"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt || 'Image lightbox'}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
            className="absolute top-5 right-6 text-white text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Close"
          >
            ✕ Close
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-[90vw] h-[90vh]">
              <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
            </div>
            {caption && (
              <figcaption className="caption mt-3 text-center">{caption}</figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  )
}
