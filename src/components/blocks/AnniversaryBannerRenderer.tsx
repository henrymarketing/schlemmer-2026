// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AnniversaryBannerRenderer({ block }: { block: any }) {
  const label: string = block.label ?? ''
  if (!label) return null

  const bannerDate = block.date ? new Date(block.date) : null
  if (bannerDate && bannerDate > new Date()) return null

  return (
    <div className="text-center py-4 px-6 border-b border-white/10">
      <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-muted)]">{label}</p>
    </div>
  )
}
