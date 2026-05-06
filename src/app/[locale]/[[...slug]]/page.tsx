import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { BlockRenderer } from '@/components/blocks/BlockRenderer'

type Props = {
  params: Promise<{ locale: string; slug?: string[] }>
}

async function getPage(slug: string, locale: string) {
  const payload = await getPayload({ config })
  const isDev = process.env.NODE_ENV === 'development'
  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'de',
    limit: 1,
    draft: isDev,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const slugStr = slug ? `/${slug.join('/')}` : '/'
  const page = await getPage(slugStr, locale)

  if (!page) return {}

  return {
    title: typeof page.title === 'string' ? page.title : page.title?.[locale as 'en'] ?? '',
  }
}

export default async function DynamicPage({ params }: Props) {
  const { locale, slug } = await params
  const slugStr = slug ? `/${slug.join('/')}` : '/'

  const page = await getPage(slugStr, locale)
  if (!page) notFound()

  return <BlockRenderer blocks={page.content ?? []} />
}

export const revalidate = 60
