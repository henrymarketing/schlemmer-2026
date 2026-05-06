import Image from 'next/image'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HeroRenderer({ block }: { block: any }) {
  const imageUrl =
    typeof block.image === 'string' ? block.image : block.image?.url
  const imageAlt = typeof block.image === 'string' ? '' : (block.image?.alt ?? '')

  return (
    <section className="relative w-full min-h-[70vh] flex items-end bg-black overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={`object-cover${block.overlay !== false ? ' brightness-50' : ''}`}
          sizes="100vw"
          priority
        />
      )}
      {(block.heading || block.subheading) && (
        <div className="relative z-10 px-8 pb-16 text-white max-w-3xl">
          {block.heading && (
            <h1 className="text-4xl md:text-6xl font-normal tracking-wide leading-tight mb-4">
              {block.heading}
            </h1>
          )}
          {block.subheading && (
            <p className="text-lg md:text-xl text-white/80 tracking-wide">{block.subheading}</p>
          )}
        </div>
      )}
    </section>
  )
}
