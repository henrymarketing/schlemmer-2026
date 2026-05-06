import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Features',
  description: 'Essays and reviews from the Oskar Schlemmer Theatre Archives.',
}

export const revalidate = 60

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'features',
    sort: '-date',
    locale: locale as 'en' | 'de',
    limit: 50,
    draft: process.env.NODE_ENV === 'development',
  })

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-sm tracking-[0.2em] uppercase mb-16">Features</h1>

      {docs.length === 0 && (
        <p className="text-[var(--color-muted)] text-sm">No features yet.</p>
      )}

      <ol className="list-none p-0 m-0">
        {docs.map((entry, idx) => {
          const title = typeof entry.title === 'string' ? entry.title : (entry.title as unknown as Record<string, string>)?.[locale] ?? ''
          const date = entry.date ? new Date(entry.date).getFullYear() : ''
          const summary = typeof entry.summary === 'string' ? entry.summary : (entry.summary as unknown as Record<string, string>)?.[locale] ?? ''

          return (
            <li key={entry.id} className={`py-8 ${idx > 0 ? 'border-t border-white/10' : ''}`}>
              <div className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-2">
                {[date, entry.author].filter(Boolean).join(' · ')}
              </div>
              <Link href={`/features/${entry.slug}`} className="group block">
                <h2 className="text-base font-normal leading-snug mb-2 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </Link>
              {summary && (
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{summary}</p>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
