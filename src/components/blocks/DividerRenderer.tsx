// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DividerRenderer({ block }: { block: any }) {
  const spacingClass =
    block.spacing === 'small' ? 'py-4' : block.spacing === 'large' ? 'py-16' : 'py-8'

  return (
    <div className={`px-6 md:px-12 ${spacingClass}`}>
      {block.showRule !== false && <div className="rule" />}
    </div>
  )
}
