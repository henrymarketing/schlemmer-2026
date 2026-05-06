import type { Metadata } from 'next'
import { PersonPage } from '@/components/PersonPage'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Jaïna Schlemmer',
  description: 'Jaïna Schlemmer (1922–2010) — stage designer and curator.',
}

export const revalidate = 60

export default async function JainaSchlemmlerPage({ params }: Props) {
  const { locale } = await params
  return <PersonPage slug="ute-jaina-schlemmer" locale={locale} />
}
