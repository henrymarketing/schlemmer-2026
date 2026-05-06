import type { CollectionConfig } from 'payload'

export const Exhibitions: CollectionConfig = {
  slug: 'exhibitions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'venue', 'startDate', 'endDate', 'type'],
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
      name: 'venue',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'city',
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'country',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startDate',
          type: 'date',
          admin: { width: '50%' },
        },
        {
          name: 'endDate',
          type: 'date',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Solo', value: 'solo' },
        { label: 'Group', value: 'group' },
        { label: 'Retrospective', value: 'retrospective' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'artworks',
      type: 'relationship',
      relationTo: 'artworks',
      hasMany: true,
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
      name: 'catalogue',
      type: 'text',
      admin: { description: 'Catalogue title or ISBN if published' },
    },
  ],
}
