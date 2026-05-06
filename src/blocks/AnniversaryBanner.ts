import type { Block } from 'payload'

export const AnniversaryBannerBlock: Block = {
  slug: 'anniversary-banner',
  labels: { singular: 'Anniversary Banner', plural: 'Anniversary Banners' },
  fields: [
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        description: 'The anniversary date. Banner is only shown on or after this date.',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
      admin: {
        description: 'e.g. "13 April 2026 — 83rd Death Anniversary"',
      },
    },
  ],
}
