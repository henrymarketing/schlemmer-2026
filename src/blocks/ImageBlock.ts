import type { Block } from 'payload'

export const ImageBlock: Block = {
  slug: 'image-block',
  labels: { singular: 'Image', plural: 'Images' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
      admin: {
        description: 'Museum-standard: Title, Year | Medium | Credit',
      },
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Small (centre)', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
        { label: 'Full bleed', value: 'full-bleed' },
      ],
    },
  ],
}
