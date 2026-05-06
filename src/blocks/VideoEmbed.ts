import type { Block } from 'payload'

export const VideoEmbedBlock: Block = {
  slug: 'video-embed',
  labels: { singular: 'Video Embed', plural: 'Video Embeds' },
  fields: [
    {
      name: 'platform',
      type: 'select',
      required: true,
      defaultValue: 'youtube',
      options: [
        { label: 'YouTube', value: 'youtube' },
        { label: 'Vimeo', value: 'vimeo' },
      ],
    },
    {
      name: 'videoId',
      type: 'text',
      required: true,
      admin: {
        description: 'YouTube: the part after ?v= | Vimeo: the numeric ID',
      },
    },
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: { description: 'Accessible title for the embed iframe' },
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
  ],
}
