import { getPayload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { LightboxImage } from '@/components/LightboxImage'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'We Remember',
  description: 'Memorial tributes from the Oskar Schlemmer Theatre Archives.',
}

export const revalidate = 60

export default async function WeRememberPage({ params }: Props) {
  const { locale } = await params
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'we-remember',
    sort: 'sortOrder',
    locale: locale as 'en' | 'de',
    limit: 100,
    depth: 2,
  })

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
      <h1 className="text-sm tracking-[0.2em] uppercase mb-16">We Remember</h1>

      {docs.length === 0 && (
        <p className="text-[var(--color-muted)] text-sm">No entries yet.</p>
      )}

      <div className="space-y-0">
        {docs.map((entry, idx) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const dateString = (entry as any).dateString as string | undefined
          const tribute = typeof entry.tribute === 'object' && entry.tribute !== null
            ? entry.tribute
            : null

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const images = (entry.images ?? []) as any[]

          return (
            <div key={entry.id} className={`py-10 ${idx > 0 ? 'border-t border-white/10' : ''}`}>
              <div className="mb-4">
                <h2 className="text-base font-normal leading-tight">{entry.name}</h2>
                {dateString && (
                  <p className="text-sm text-[var(--color-muted)] mt-0.5">{dateString}</p>
                )}
                {(entry.role || entry.relationship) && (
                  <p className="text-xs tracking-wide text-[var(--color-muted)] mt-1 uppercase">
                    {[entry.role, entry.relationship].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>

              {tribute && (
                <div className="prose-schlemmer text-sm">
                  <RichText data={tribute as Parameters<typeof RichText>[0]['data']} />
                </div>
              )}

              {images.length > 0 && (
                <div className={`mt-6 grid gap-2 ${images.length === 1 ? 'grid-cols-1 max-w-xs' : 'grid-cols-2 md:grid-cols-3'}`}>
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
