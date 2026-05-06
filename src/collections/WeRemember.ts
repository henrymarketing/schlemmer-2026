import type { CollectionConfig } from 'payload'

export const WeRemember: CollectionConfig = {
  slug: 'we-remember',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'birthYear', 'deathYear', 'role', 'sortOrder'],
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
      name: 'dateString',
      type: 'text',
      admin: { description: 'Full date line as displayed, e.g. "15 January 1942 – 23 March 2023"' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'birthYear',
          type: 'number',
          admin: { width: '50%' },
        },
        {
          name: 'deathYear',
          type: 'number',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Architect", "Musician", "Patron"' },
    },
    {
      name: 'relationship',
      type: 'text',
      localized: true,
      admin: { description: 'Relationship to the Theatre Archives / Schlemmer family' },
    },
    {
      name: 'tribute',
      type: 'richText',
      required: true,
      localized: true,
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
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first (0 = top)',
      },
    },
  ],
}
