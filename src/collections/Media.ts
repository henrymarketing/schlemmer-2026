import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 600,
        position: 'centre',
      },
      {
        name: 'large',
        width: 1400,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
    {
      name: 'credit',
      type: 'text',
      required: true,
      defaultValue: '© Archiv C. Raman Schlemmer',
      admin: {
        description: 'e.g. "© Archiv C. Raman Schlemmer" or "© The Oskar Schlemmer Theatre Archives"',
      },
    },
    {
      name: 'rights',
      type: 'select',
      required: true,
      defaultValue: 'estate-owned',
      options: [
        { label: 'Theatre Archives', value: 'estate-owned' },
        { label: 'Licensed', value: 'licensed' },
        { label: 'Public Domain', value: 'public-domain' },
      ],
    },
    {
      name: 'artworkReference',
      type: 'relationship',
      relationTo: 'artworks',
      hasMany: false,
    },
    {
      name: 'legacyUrl',
      type: 'text',
      admin: {
        description: 'Original CDN URL from the previous Webflow site',
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
