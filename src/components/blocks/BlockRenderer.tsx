import { HeroCarouselRenderer } from './HeroCarouselRenderer'
import { AnniversaryBannerRenderer } from './AnniversaryBannerRenderer'
import { HeroRenderer } from './HeroRenderer'
import { RichTextRenderer } from './RichTextRenderer'
import { ImageBlockRenderer } from './ImageBlockRenderer'
import { TwoColumnRenderer } from './TwoColumnRenderer'
import { TimelineRenderer } from './TimelineRenderer'
import { VideoEmbedRenderer } from './VideoEmbedRenderer'
import { IframeEmbedRenderer } from './IframeEmbedRenderer'
import { ImageGridRenderer } from './ImageGridRenderer'
import { QuoteRenderer } from './QuoteRenderer'
import { CTARenderer } from './CTARenderer'
import { DividerRenderer } from './DividerRenderer'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Block = { blockType: string; [key: string]: any }

const RENDERERS: Record<string, React.ComponentType<{ block: Block }>> = {
  'hero-carousel': HeroCarouselRenderer,
  'anniversary-banner': AnniversaryBannerRenderer,
  hero: HeroRenderer,
  'rich-text': RichTextRenderer,
  'image-block': ImageBlockRenderer,
  'two-column': TwoColumnRenderer,
  timeline: TimelineRenderer,
  'video-embed': VideoEmbedRenderer,
  'iframe-embed': IframeEmbedRenderer,
  'image-grid': ImageGridRenderer,
  quote: QuoteRenderer,
  cta: CTARenderer,
  divider: DividerRenderer,
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null

  return (
    <>
      {blocks.map((block, idx) => {
        const Renderer = RENDERERS[block.blockType]
        if (!Renderer) {
          if (process.env.NODE_ENV === 'development') {
            return (
              <div key={idx} style={{ background: '#fee', padding: '1rem', margin: '1rem 0' }}>
                Unknown block type: <code>{block.blockType}</code>
              </div>
            )
          }
          return null
        }
        return <Renderer key={idx} block={block} />
      })}
    </>
  )
}
