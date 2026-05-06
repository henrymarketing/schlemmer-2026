import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CTARenderer({ block }: { block: any }) {
  const alignClass = block.align === 'center' ? 'justify-center' : 'justify-start'

  const buttonClass =
    block.style === 'filled'
      ? 'bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 text-xs tracking-[0.15em] uppercase inline-block hover:opacity-80 transition-opacity'
      : block.style === 'text'
        ? 'text-xs tracking-[0.15em] uppercase underline underline-offset-4 inline-block hover:text-[var(--color-muted)] transition-colors'
        : 'border border-[var(--color-foreground)] text-[var(--color-foreground)] px-6 py-3 text-xs tracking-[0.15em] uppercase inline-block hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors'

  const isExternal = block.href?.startsWith('http')

  return (
    <div className={`px-6 md:px-12 py-6 flex ${alignClass}`}>
      {isExternal ? (
        <a href={block.href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
          {block.text}
        </a>
      ) : (
        <Link href={block.href ?? '#'} className={buttonClass}>
          {block.text}
        </Link>
      )}
    </div>
  )
}
