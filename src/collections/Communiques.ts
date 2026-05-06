import type { CollectionConfig } from 'payload'
import { RichTextBlock, ImageBlock, VideoEmbedBlock, DividerBlock } from '../blocks/index'

export const Communiques: CollectionConfig = {
  slug: 'communiques',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'category', '_status'],
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
      name: 'date',
      type: 'date',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      admin: { position: 'sidebar' },
      options: [
        { label: 'Exhibition', value: 'exhibition' },
        { label: 'Auction', value: 'auction' },
        { label: 'Publication', value: 'publication' },
        { label: 'Event', value: 'event' },
        { label: 'Legal / Statement', value: 'legal' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      localized: true,
      admin: { description: 'Short summary shown in list view' },
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [RichTextBlock, ImageBlock, VideoEmbedBlock, DividerBlock],
    },
    {
      name: 'images',
      type: 'array',
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
      name: 'externalLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'attachments',
      type: 'array',
      fields: [
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          localized: true,
        },
      ],
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
