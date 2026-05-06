import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Artworks } from './collections/Artworks'
import { Exhibitions } from './collections/Exhibitions'
import { Bibliography } from './collections/Bibliography'
import { Features } from './collections/Features'
import { Communiques } from './collections/Communiques'
import { People } from './collections/People'
import { WeRemember } from './collections/WeRemember'
import { Friends } from './collections/Friends'
import { AuthenticationRequests } from './collections/AuthenticationRequests'

import { Navigation } from './globals/Navigation'
import { Settings } from './globals/Settings'

const projectRoot = process.cwd()

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET ?? 'dev-secret-change-me',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? 'postgresql://postgres:postgres@localhost:5432/schlemmer_org',
    },
  }),
  editor: lexicalEditor(),
  collections: [
    Users,
    Media,
    Pages,
    Artworks,
    Exhibitions,
    Bibliography,
    Features,
    Communiques,
    People,
    WeRemember,
    Friends,
    AuthenticationRequests,
  ],
  globals: [Navigation, Settings],
  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'Deutsch' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [
    vercelBlobStorage({
      enabled: !!process.env.BLOB_READ_WRITE_TOKEN,
      token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
      collections: { media: true },
    }),
    seoPlugin({
      collections: ['pages', 'artworks', 'features', 'communiques', 'people'],
      globals: ['settings'],
      uploadsCollection: 'media',
      tabbedUI: true,
    }),
    redirectsPlugin({
      collections: ['pages'],
      redirectTypes: ['301', '302'],
    }),
  ],
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Schlemmer Admin',
      icons: [{ url: '/favicon.ico' }],
    },
    importMap: {
      baseDir: path.resolve(projectRoot, 'src'),
    },
  },
  typescript: {
    outputFile: path.resolve(projectRoot, 'src/payload-types.ts'),
  },
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000',
  sharp,
})
