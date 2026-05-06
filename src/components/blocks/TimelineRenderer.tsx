import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TimelineRenderer({ block }: { block: any }) {
  const entries: Array<{
    year: string
    event: string
    detail?: { root: unknown } | null
    image?: { url?: string; alt?: string }
  }> = block.entries ?? []

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 py-12">
      <ol className="relative border-l border-white/15 ml-4 space-y-0">
        {entries.map((entry, idx) => (
          <li key={idx} className="ml-6 pb-10">
            <span
              className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40"
              aria-hidden
            />
            <time className="text-xs tracking-[0.15em] text-[var(--color-muted)] uppercase block mb-1">
              {entry.year}
            </time>
            <p className="font-normal text-base leading-snug">{entry.event}</p>
            {entry.detail && (
              <div className="prose prose-sm prose-schlemmer mt-2">
                <RichText data={entry.detail as Parameters<typeof RichText>[0]['data']} />
              </div>
            )}
            {entry.image?.url && (
              <div className="mt-3 max-w-xs">
                <Image
                  src={entry.image.url}
                  alt={entry.image.alt ?? ''}
                  width={320}
                  height={240}
                  className="w-full h-auto"
                />
              </div>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}
