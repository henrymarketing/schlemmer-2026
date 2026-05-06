import type { CollectionConfig } from 'payload'

export const Artworks: CollectionConfig = {
  slug: 'artworks',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'year', 'category', 'catalogueNumber'],
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
      name: 'titleItalic',
      type: 'checkbox',
      defaultValue: true,
      label: 'Display title in italic',
    },
    {
      name: 'alternateTitle',
      type: 'text',
      localized: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'year',
          type: 'number',
          admin: { width: '33%' },
        },
        {
          name: 'yearEnd',
          type: 'number',
          label: 'Year end (for ranges)',
          admin: { width: '33%', description: 'Fill if work spans multiple years' },
        },
        {
          name: 'catalogueNumber',
          type: 'text',
          label: 'CR Number',
          admin: { width: '33%' },
        },
      ],
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Painting', value: 'painting' },
        { label: 'Watercolour', value: 'watercolour' },
        { label: 'Pastel', value: 'pastel' },
        { label: 'Drawing', value: 'drawing' },
        { label: 'Sculpture', value: 'sculpture' },
        { label: 'Stage Design', value: 'stage-design' },
        { label: 'Wall Design', value: 'wall-design' },
        { label: 'Mural', value: 'mural' },
        { label: 'Print', value: 'print' },
        { label: 'Photograph', value: 'photograph' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'medium',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Oil on canvas"' },
    },
    {
      name: 'dimensions',
      type: 'text',
      admin: { description: 'e.g. "97 × 62 cm" or "97 × 62 × 18 cm"' },
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
          name: 'isPrimary',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'credit',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'provenance',
      type: 'richText',
      localized: true,
    },
    {
      name: 'currentLocation',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Museum of Modern Art, New York"' },
    },
    {
      name: 'creditLine',
      type: 'text',
      admin: { description: 'Credit / copyright line for this work' },
    },
    {
      name: 'exhibitions',
      type: 'relationship',
      relationTo: 'exhibitions',
      hasMany: true,
    },
    {
      name: 'bibliography',
      type: 'relationship',
      relationTo: 'bibliography',
      hasMany: true,
    },
    {
      name: 'relatedWorks',
      type: 'relationship',
      relationTo: 'artworks',
      hasMany: true,
    },
    {
      name: 'slug',
      type: 'text',
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
