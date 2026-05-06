import type { Block } from 'payload'

export const HeroCarouselBlock: Block = {
  slug: 'hero-carousel',
  labels: { singular: 'Hero Carousel', plural: 'Hero Carousels' },
  fields: [
    {
      name: 'slides',
      type: 'array',
      required: true,
      minRows: 1,
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
      name: 'autoplay',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'intervalMs',
      type: 'number',
      defaultValue: 5000,
      label: 'Autoplay interval (ms)',
    },
  ],
}
