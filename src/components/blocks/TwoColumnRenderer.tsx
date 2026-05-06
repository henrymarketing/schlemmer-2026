import { RichText } from '@payloadcms/richtext-lexical/react'
import { LightboxImage } from '@/components/LightboxImage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TwoColumnRenderer({ block }: { block: any }) {
  const isImageRight = block.layout === 'text-image'
  const isImageLeft = block.layout === 'image-text'
  const isTextText = block.layout === 'text-text'

  const imageUrl = !isTextText
    ? typeof block.image === 'string'
      ? block.image
      : block.image?.url
    : null
  const imageAlt = !isTextText
    ? typeof block.image !== 'string'
      ? (block.image?.alt ?? '')
      : ''
    : ''

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text / left column */}
        <div className={isImageLeft ? 'order-2 md:order-2' : 'order-1'}>
          {isTextText ? (
            <div className="prose prose-schlemmer">
              <RichText data={block.leftContent} />
            </div>
          ) : (
            <div className="prose prose-schlemmer">
              <RichText data={block.text} />
            </div>
          )}
        </div>

        {/* Image / right column */}
        <div className={isImageLeft ? 'order-1 md:order-1' : 'order-2'}>
          {isTextText ? (
            <div className="prose prose-schlemmer">
              <RichText data={block.rightContent} />
            </div>
          ) : imageUrl ? (
            <figure>
              <LightboxImage
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={750}
                caption={block.imageCaption}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {block.imageCaption && (
                <figcaption className="caption mt-2">{block.imageCaption}</figcaption>
              )}
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  )
}
