import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

type Props = { params: Promise<{ locale: string; slug: string }> }

export const revalidate = 60

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'features',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'de',
    limit: 1,
    draft: process.env.NODE_ENV === 'development',
  })
  const doc = docs[0]
  if (!doc) return {}
  const title = typeof doc.title === 'string' ? doc.title : (doc.title as unknown as Record<string, string>)?.[locale] ?? ''
  return { title }
}

export default async function FeatureDetailPage({ params }: Props) {
  const { locale, slug } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'features',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'de',
    limit: 1,
    draft: process.env.NODE_ENV === 'development',
  })

  const doc = docs[0]
  if (!doc) notFound()

  const title = typeof doc.title === 'string' ? doc.title : (doc.title as unknown as Record<string, string>)?.[locale] ?? ''
  const subtitle = typeof doc.subtitle === 'string' ? doc.subtitle : (doc.subtitle as unknown as Record<string, string>)?.[locale] ?? ''
  const date = doc.date ? new Date(doc.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

  return (
    <article>
      <header className="max-w-3xl mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="text-xs tracking-widest uppercase text-[var(--color-muted)] mb-4">
          {[date, doc.author].filter(Boolean).join(' · ')}
        </div>
        <h1 className="text-2xl md:text-3xl font-normal leading-tight mb-3">{title}</h1>
        {subtitle && (
          <p className="text-base text-[var(--color-muted)] leading-relaxed">{subtitle}</p>
        )}
        <div className="rule mt-8" aria-hidden="true" />
      </header>

      <BlockRenderer blocks={doc.content ?? []} />
    </article>
  )
}
