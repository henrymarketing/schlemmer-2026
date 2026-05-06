import { HeroCarousel } from '../HeroCarousel'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HeroCarouselRenderer({ block }: { block: any }) {
  return (
    <HeroCarousel
      slides={block.slides ?? []}
      autoplay={block.autoplay ?? true}
      intervalMs={block.intervalMs ?? 5000}
    />
  )
}
