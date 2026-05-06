import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  admin: {
    group: 'Site Config',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      type: 'text',
      defaultValue: 'Oskar Schlemmer',
      localized: true,
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'copyrightLine',
      type: 'text',
      defaultValue: '© 2025 C. Raman Schlemmer. All rights reserved. ®',
      localized: true,
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      admin: { description: 'Default OpenGraph image for social sharing' },
    },
    {
      name: 'estateCredit',
      type: 'text',
      defaultValue: '© The Oskar Schlemmer Theatre Archives',
      admin: { description: 'Standard credit line for works by Oskar Schlemmer' },
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
    {
      name: 'rightClickProtection',
      type: 'checkbox',
      defaultValue: false,
      label: 'Enable right-click image protection',
      admin: { description: 'Disables right-click context menu on images site-wide' },
    },
  ],
}
