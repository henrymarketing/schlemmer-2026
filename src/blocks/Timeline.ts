import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timeline',
  labels: { singular: 'Timeline', plural: 'Timelines' },
  fields: [
    {
      name: 'entries',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
          admin: { description: 'e.g. "1922" or "1916–1922"' },
        },
        {
          name: 'event',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'detail',
          type: 'richText',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}
