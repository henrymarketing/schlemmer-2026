import type { CollectionConfig } from 'payload'

export const Friends: CollectionConfig = {
  slug: 'friends',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'startDate', 'endDate', 'active'],
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
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Exhibition', value: 'exhibition' },
        { label: 'Event', value: 'event' },
        { label: 'Artist', value: 'artist' },
        { label: 'Institution', value: 'institution' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'url',
      type: 'text',
      label: 'External URL',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
