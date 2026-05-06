import { RichText } from '@payloadcms/richtext-lexical/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RichTextRenderer({ block }: { block: any }) {
  const maxWidthClass =
    block.maxWidth === 'wide'
      ? 'max-w-4xl'
      : block.maxWidth === 'full'
        ? 'max-w-none'
        : 'max-w-2xl'

  return (
    <div className={`px-6 md:px-12 py-8 mx-auto ${maxWidthClass}`}>
      <div className="prose-schlemmer">
        <RichText data={block.content} />
      </div>
    </div>
  )
}
