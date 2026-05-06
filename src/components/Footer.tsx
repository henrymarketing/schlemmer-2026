import Link from 'next/link'

type Props = {
  settings: { copyrightLine?: string | null } | null
}

export function Footer({ settings }: Props) {
  const copyright = settings?.copyrightLine ?? '© 2025 C. Raman Schlemmer. All rights reserved. ®'

  return (
    <footer className="border-t border-white/10 mt-20 py-8 px-6 flex items-center justify-between text-xs tracking-wide text-[var(--color-muted)]">
      <span>{copyright}</span>
      <Link href="/imprint" className="hover:text-[var(--color-foreground)] transition-colors">
        Imprint
      </Link>
    </footer>
  )
}
