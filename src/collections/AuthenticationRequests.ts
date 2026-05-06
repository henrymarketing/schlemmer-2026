import type { CollectionConfig } from 'payload'

export const AuthenticationRequests: CollectionConfig = {
  slug: 'authentication-requests',
  admin: {
    useAsTitle: 'lastName',
    defaultColumns: ['lastName', 'firstName', 'email', 'status', 'submittedAt'],
    group: 'Submissions',
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true
      return false
    },
    create: () => true,
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => {
      if (!req.user) return false
      return req.user.role === 'admin'
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
          admin: { width: '50%' },
        },
        {
          name: 'phone',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'institution',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'street',
          type: 'text',
          admin: { width: '50%' },
        },
        {
          name: 'city',
          type: 'text',
          admin: { width: '50%' },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'zip',
          type: 'text',
          label: 'ZIP / Postal Code',
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
      name: 'reference',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'requestType',
      type: 'textarea',
      required: true,
      label: 'Type of Request',
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Authentication Application', value: 'authentication' },
        { label: 'Reproduction / Publication', value: 'reproduction' },
        { label: 'Provenance Research', value: 'provenance' },
        { label: 'Art Market', value: 'artmarket' },
        { label: 'Academia', value: 'academia' },
        { label: 'Media', value: 'media' },
        { label: 'Trademark Request', value: 'trademark' },
      ],
    },
    {
      name: 'declarationAccepted',
      type: 'checkbox',
      required: true,
      label: 'Declaration accepted',
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      admin: { position: 'sidebar' },
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Responded', value: 'responded' },
        { label: 'Closed', value: 'closed' },
      ],
    },
    {
      name: 'notes',
      type: 'richText',
      label: 'Internal Notes',
      admin: {
        description: 'Not visible to the submitter',
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create') {
          data.submittedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
}
