import { LightboxImage } from '@/components/LightboxImage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ImageBlockRenderer({ block }: { block: any }) {
  const imageUrl = typeof block.image === 'string' ? block.image : block.image?.url
  const imageAlt = typeof block.image === 'string' ? '' : (block.image?.alt ?? '')
  const imageWidth = typeof block.image !== 'string' ? block.image?.width : undefined
  const imageHeight = typeof block.image !== 'string' ? block.image?.height : undefined

  if (!imageUrl) return null

  const containerClass =
    block.size === 'full-bleed'
      ? 'w-full'
      : block.size === 'large'
        ? 'max-w-4xl mx-auto px-6 md:px-12'
        : block.size === 'small'
          ? 'max-w-sm mx-auto px-6'
          : 'max-w-2xl mx-auto px-6 md:px-12'

  return (
    <figure className={`${containerClass} py-8`}>
      <div className="relative overflow-hidden">
        <LightboxImage
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth ?? 1200}
          height={imageHeight ?? 800}
          caption={block.caption}
          className="w-full h-auto"
          sizes={block.size === 'full-bleed' ? '100vw' : '(max-width: 768px) 100vw, 800px'}
        />
      </div>
      {block.caption && (
        <figcaption className="caption mt-3 text-center">{block.caption}</figcaption>
      )}
    </figure>
  )
}
