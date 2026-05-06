'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavOverlay } from './NavOverlay'

type NavItem = {
  label: string
  href: string
  external?: boolean | null
}

type Props = {
  navigation: { items?: NavItem[] | null } | null
}

export function SiteHeader({ navigation }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 mix-blend-difference"
        style={{ pointerEvents: 'none' }}
      >
        <Link
          href="/"
          className="text-white text-sm tracking-widest font-normal uppercase"
          style={{ pointerEvents: 'all' }}
          aria-label="Oskar Schlemmer — Home"
        >
          Oskar Schlemmer
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white text-xs tracking-widest uppercase"
          style={{ pointerEvents: 'all' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-overlay"
        >
          {open ? '✕' : '☰'}
        </button>
      </header>

      <NavOverlay
        id="nav-overlay"
        open={open}
        items={navigation?.items ?? []}
        onClose={close}
      />
    </>
  )
}
