'use client'

import Link from 'next/link'

type NavItem = {
  label: string
  href: string
  external?: boolean | null
}

type Props = {
  id: string
  open: boolean
  items: NavItem[]
  onClose: () => void
}

export function NavOverlay({ id, open, items, onClose }: Props) {
  return (
    <nav
      id={id}
      className={`nav-overlay${open ? ' open' : ''}`}
      aria-hidden={!open}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Close button inside overlay */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
      >
        ✕ Close
      </button>

      <ul className="list-none p-0 m-0 max-w-4xl w-full">
        {items.map((item, idx) => (
          <li key={idx}>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-overlay__item"
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </a>
            ) : (
              <Link
                href={item.href}
                className="nav-overlay__item"
                tabIndex={open ? 0 : -1}
                onClick={onClose}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
