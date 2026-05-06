import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { LightboxImage } from '@/components/LightboxImage'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Communiqué',
  description: 'News and announcements from the Oskar Schlemmer Theatre Archives.',
}

export const revalidate = 60

export default async function CommuniquePage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'communiques',
    sort: '-date',
    locale: locale as 'en' | 'de',
    limit: 100,
    depth: 2,
    draft: process.env.NODE_ENV === 'development',
  })

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-sm tracking-[0.2em] uppercase mb-16">Communiqué</h1>

      {docs.length === 0 && (
        <p className="text-[var(--color-muted)] text-sm">No communiqués yet.</p>
      )}

      <ol className="list-none p-0 m-0 space-y-0">
        {docs.map((entry, idx) => {
          const title = typeof entry.title === 'string' ? entry.title : (entry.title as unknown as Record<string, string>)?.[locale] ?? ''
          const date = entry.date ? new Date(entry.date).getFullYear() : ''
          const category = entry.category ?? ''
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const images = (entry.images ?? []) as any[]
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const blocks = (entry.content ?? []) as any[]
          const richTextBlock = blocks.find((b: { blockType: string }) => b.blockType === 'rich-text')

          return (
            <li key={entry.id} className={`py-8 ${idx > 0 ? 'border-t border-white/10' : ''}`}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <span className="text-xs tracking-widest uppercase text-[var(--color-muted)]">
                  {date}{category && category !== 'other' ? ` · ${category}` : ''}
                </span>
              </div>
              <h2 className="text-base font-normal leading-snug mb-3">{title}</h2>
              {richTextBlock?.content && (
                <div className="prose-schlemmer text-sm">
                  <RichText data={richTextBlock.content as Parameters<typeof RichText>[0]['data']} />
                </div>
              )}
              {images.length > 0 && (
                <div className={`mt-5 grid gap-2 ${images.length === 1 ? 'grid-cols-1 max-w-xs' : 'grid-cols-2 md:grid-cols-3'}`}>
                  {images.map((item: { image?: { url?: string; alt?: string; width?: number; height?: number }; caption?: string }, i: number) => {
                    const img = item.image && typeof item.image === 'object' ? item.image : null
                    if (!img?.url) return null
                    return (
                      <figure key={i} className="m-0">
                        <LightboxImage
                          src={img.url}
                          alt={img.alt ?? item.caption ?? ''}
                          width={img.width ?? 400}
                          height={img.height ?? 300}
                          caption={item.caption}
                          className="w-full h-auto"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        {item.caption && (
                          <figcaption className="caption mt-1">{item.caption}</figcaption>
                        )}
                      </figure>
                    )
                  })}
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
