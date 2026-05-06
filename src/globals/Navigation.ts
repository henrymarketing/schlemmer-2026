import type { GlobalConfig } from 'payload'

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  admin: {
    group: 'Site Config',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          admin: { description: 'Internal path, e.g. /oskar-schlemmer' },
        },
        {
          name: 'external',
          type: 'checkbox',
          defaultValue: false,
          label: 'Opens in new tab',
        },
      ],
    },
  ],
}
