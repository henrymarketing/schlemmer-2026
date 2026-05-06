// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function VideoEmbedRenderer({ block }: { block: any }) {
  const { platform, videoId, title, caption } = block

  const src =
    platform === 'youtube'
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : `https://player.vimeo.com/video/${videoId}`

  return (
    <figure className="max-w-4xl mx-auto px-6 md:px-12 py-10">
      <div className="relative aspect-video bg-black overflow-hidden">
        <iframe
          src={src}
          title={title ?? 'Embedded video'}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      {caption && <figcaption className="caption mt-3 text-center">{caption}</figcaption>}
    </figure>
  )
}
