import type { CollectionConfig } from 'payload'
import {
  RichTextBlock,
  ImageBlock,
  TwoColumnBlock,
  VideoEmbedBlock,
  ImageGridBlock,
  QuoteBlock,
  DividerBlock,
} from '../blocks/index'

export const Features: CollectionConfig = {
  slug: 'features',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'date', '_status'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'C. Raman Schlemmer',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'summary',
      type: 'textarea',
      localized: true,
      admin: { description: 'Short summary for listing pages and OG description' },
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        RichTextBlock,
        ImageBlock,
        TwoColumnBlock,
        VideoEmbedBlock,
        ImageGridBlock,
        QuoteBlock,
        DividerBlock,
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'relatedArtworks',
      type: 'relationship',
      relationTo: 'artworks',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'legacySlug',
      type: 'text',
      admin: { position: 'sidebar', readOnly: true },
    },
  ],
}
