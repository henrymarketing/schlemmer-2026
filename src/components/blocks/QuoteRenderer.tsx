// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function QuoteRenderer({ block }: { block: any }) {
  const isLarge = block.size !== 'normal'

  return (
    <blockquote
      className={`max-w-3xl mx-auto text-center px-8 md:px-20 ${isLarge ? 'py-16 md:py-24' : 'py-10'}`}
    >
      <p
        className={`font-normal leading-relaxed text-[var(--color-foreground)] ${
          isLarge ? 'text-xl md:text-2xl tracking-wide' : 'text-base'
        }`}
      >
        &ldquo;{block.text}&rdquo;
      </p>
      {block.attribution && (
        <footer className="mt-5">
          <cite className="text-xs tracking-[0.15em] uppercase text-[var(--color-muted)] not-italic">
            — {block.attribution}
          </cite>
        </footer>
      )}
    </blockquote>
  )
}
