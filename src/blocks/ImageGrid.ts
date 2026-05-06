import type { Block } from 'payload'

export const ImageGridBlock: Block = {
  slug: 'image-grid',
  labels: { singular: 'Image Grid', plural: 'Image Grids' },
  fields: [
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 12,
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
        },
      ],
    },
    {
      name: 'columns',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '2 columns', value: '2' },
        { label: '3 columns', value: '3' },
        { label: '4 columns', value: '4' },
      ],
    },
    {
      name: 'lightbox',
      type: 'checkbox',
      defaultValue: true,
      label: 'Enable lightbox on click',
    },
  ],
}
