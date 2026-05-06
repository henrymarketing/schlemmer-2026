import Image from 'next/image'
import { LightboxImage } from '@/components/LightboxImage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ImageGridRenderer({ block }: { block: any }) {
  const cols = Number(block.columns ?? 3)
  const colClass = cols === 2 ? 'grid-cols-2' : cols === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'
  const lightboxEnabled = block.lightbox !== false

  return (
    <section className="px-6 md:px-12 py-10">
      <div className={`grid ${colClass} gap-2 md:gap-3`}>
        {(block.images ?? []).map(
          (item: { image: { url?: string; alt?: string; width?: number; height?: number }; caption?: string }, idx: number) => {
            const url = typeof item.image === 'string' ? item.image : item.image?.url
            const alt = typeof item.image !== 'string' ? (item.image?.alt ?? '') : ''
            if (!url) return null
            return (
              <figure key={idx} className="m-0">
                <div className="relative overflow-hidden bg-white/5">
                  {lightboxEnabled ? (
                    <LightboxImage
                      src={url}
                      alt={alt}
                      width={600}
                      height={500}
                      caption={item.caption}
                      className="w-full h-full object-cover aspect-square"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  ) : (
                    <Image
                      src={url}
                      alt={alt}
                      width={600}
                      height={500}
                      className="w-full h-full object-cover aspect-square"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  )}
                </div>
                {item.caption && <figcaption className="caption mt-1">{item.caption}</figcaption>}
              </figure>
            )
          },
        )}
      </div>
    </section>
  )
}
