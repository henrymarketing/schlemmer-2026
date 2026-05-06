import type { CollectionConfig } from 'payload'
import {
  HeroBlock,
  HeroCarouselBlock,
  AnniversaryBannerBlock,
  RichTextBlock,
  ImageBlock,
  TwoColumnBlock,
  TimelineBlock,
  VideoEmbedBlock,
  IframeEmbedBlock,
  ImageGridBlock,
  QuoteBlock,
  CTABlock,
  DividerBlock,
} from '../blocks/index'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
        description: 'URL path segment, e.g. "oskar-schlemmer". Use "/" for the home page.',
      },
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [
        HeroCarouselBlock,
        AnniversaryBannerBlock,
        HeroBlock,
        RichTextBlock,
        ImageBlock,
        TwoColumnBlock,
        TimelineBlock,
        VideoEmbedBlock,
        IframeEmbedBlock,
        ImageGridBlock,
        QuoteBlock,
        CTABlock,
        DividerBlock,
      ],
    },
    {
      name: 'legacySlug',
      type: 'text',
      admin: {
        position: 'sidebar',
        description: 'Original URL path from schlemmer.org for redirect mapping',
        readOnly: true,
      },
    },
  ],
}
