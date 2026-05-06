import type { Block } from 'payload'

export const QuoteBlock: Block = {
  slug: 'quote',
  labels: { singular: 'Quote', plural: 'Quotes' },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'attribution',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Oskar Schlemmer, Diary, February 9, 1943"' },
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'large',
      options: [
        { label: 'Large (display pull quote)', value: 'large' },
        { label: 'Normal', value: 'normal' },
      ],
    },
  ],
}
