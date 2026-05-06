import type { Block } from 'payload'

export const TwoColumnBlock: Block = {
  slug: 'two-column',
  labels: { singular: 'Two Column', plural: 'Two Column' },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'text-image',
      options: [
        { label: 'Text | Image', value: 'text-image' },
        { label: 'Image | Text', value: 'image-text' },
        { label: 'Text | Text', value: 'text-text' },
      ],
    },
    {
      name: 'leftContent',
      type: 'richText',
      localized: true,
      admin: { condition: (data) => data.layout === 'text-text' },
    },
    {
      name: 'rightContent',
      type: 'richText',
      localized: true,
      admin: { condition: (data) => data.layout === 'text-text' },
    },
    {
      name: 'text',
      type: 'richText',
      localized: true,
      admin: { condition: (data) => data.layout !== 'text-text' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { condition: (data) => data.layout !== 'text-text' },
    },
    {
      name: 'imageCaption',
      type: 'text',
      localized: true,
      admin: { condition: (data) => data.layout !== 'text-text' },
    },
  ],
}
