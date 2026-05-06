import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: { singular: 'Call to Action', plural: 'Calls to Action' },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'href',
      type: 'text',
      required: true,
      admin: { description: 'Internal path (e.g. /authentication) or full URL' },
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'outline',
      options: [
        { label: 'Outline (default)', value: 'outline' },
        { label: 'Filled', value: 'filled' },
        { label: 'Text link', value: 'text' },
      ],
    },
    {
      name: 'align',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Centre', value: 'center' },
      ],
    },
  ],
}
