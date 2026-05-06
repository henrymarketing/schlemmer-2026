import type { CollectionConfig } from 'payload'
import {
  RichTextBlock,
  ImageBlock,
  TwoColumnBlock,
  TimelineBlock,
  VideoEmbedBlock,
  QuoteBlock,
  DividerBlock,
  IframeEmbedBlock,
} from '../blocks/index'

export const People: CollectionConfig = {
  slug: 'people',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Painter, Sculptor, Choreographer"' },
    },
    {
      name: 'portrait',
      type: 'upload',
      relationTo: 'media',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'birthDate',
          type: 'text',
          admin: { width: '50%', description: 'e.g. "1888" or "26 September 1888"' },
        },
        {
          name: 'deathDate',
          type: 'text',
          admin: { width: '50%', description: 'e.g. "1943" or "13 April 1943"' },
        },
      ],
    },
    {
      name: 'bio',
      type: 'blocks',
      blocks: [
        RichTextBlock,
        ImageBlock,
        TwoColumnBlock,
        TimelineBlock,
        VideoEmbedBlock,
        IframeEmbedBlock,
        QuoteBlock,
        DividerBlock,
      ],
    },
    {
      name: 'legacySlug',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
