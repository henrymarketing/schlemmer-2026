// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function IframeEmbedRenderer({ block }: { block: any }) {
  return (
    <div className="px-6 md:px-12 py-10">
      <iframe
        src={block.src}
        title={block.title ?? 'Embedded timeline'}
        width="100%"
        height={block.height ?? 650}
        allowFullScreen
        loading="lazy"
        className="border-0 w-full block"
      />
    </div>
  )
}
