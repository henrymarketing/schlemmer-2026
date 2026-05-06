import type { Block } from 'payload'

export const IframeEmbedBlock: Block = {
  slug: 'iframe-embed',
  labels: { singular: 'Iframe Embed', plural: 'Iframe Embeds' },
  fields: [
    {
      name: 'src',
      type: 'text',
      required: true,
      admin: { description: 'Full URL of the iframe src' },
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 650,
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: { description: 'Accessible title for the iframe' },
    },
  ],
}
