import type { Metadata } from 'next'
import { PersonPage } from '@/components/PersonPage'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'Oskar Schlemmer',
  description: 'Oskar Schlemmer (1888–1943) — painter, sculptor, choreographer, and Bauhaus master.',
}

export const revalidate = 60

export default async function OskarSchlemmlerPage({ params }: Props) {
  const { locale } = await params
  return <PersonPage slug="oskar-schlemmer" locale={locale} />
}
