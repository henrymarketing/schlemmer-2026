import type { Metadata } from 'next'
import { PersonPage } from '@/components/PersonPage'

type Props = { params: Promise<{ locale: string }> }

export const metadata: Metadata = {
  title: 'C. Raman Schlemmer',
  description: 'C. Raman Schlemmer — Curator, Keeper of the Oskar Schlemmer Theatre Archives.',
}

export const revalidate = 60

export default async function CRamanSchlemmlerPage({ params }: Props) {
  const { locale } = await params
  return <PersonPage slug="c-raman-schlemmer" locale={locale} />
}
