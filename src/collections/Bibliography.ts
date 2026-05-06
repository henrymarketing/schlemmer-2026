import type { CollectionConfig } from 'payload'

export const Bibliography: CollectionConfig = {
  slug: 'bibliography',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'authors', 'year', 'type'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'authors',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'year',
          type: 'number',
          admin: { width: '50%' },
        },
        {
          name: 'type',
          type: 'select',
          admin: { width: '50%' },
          options: [
            { label: 'Book', value: 'book' },
            { label: 'Essay', value: 'essay' },
            { label: 'Review', value: 'review' },
            { label: 'Exhibition Catalogue', value: 'catalogue' },
            { label: 'Article', value: 'article' },
          ],
        },
      ],
    },
    {
      name: 'publisher',
      type: 'text',
    },
    {
      name: 'isbn',
      type: 'text',
      label: 'ISBN',
    },
    {
      name: 'citation',
      type: 'richText',
      localized: true,
      admin: { description: 'Full citation text' },
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
    },
  ],
}
