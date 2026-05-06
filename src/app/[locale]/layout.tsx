import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { SiteHeader } from '@/components/SiteHeader'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'
import { getPayload } from 'payload'
import config from '@payload-config'

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
})

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: {
      default: 'Oskar Schlemmer',
      template: '%s — Oskar Schlemmer',
    },
    description:
      'Oskar Schlemmer was a German painter, sculptor, designer and choreographer associated with the Bauhaus school.',
    openGraph: {
      type: 'website',
      siteName: 'Oskar Schlemmer',
    },
    alternates: {
      canonical: '/',
      languages: {
        en: '/',
        de: '/de',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  const payload = await getPayload({ config })
  const navigation = await payload.findGlobal({ slug: 'navigation', locale: locale as 'en' | 'de' }).catch(() => null)
  const settings = await payload.findGlobal({ slug: 'settings', locale: locale as 'en' | 'de' }).catch(() => null)

  return (
    <html lang={locale} className={questrial.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <SiteHeader navigation={navigation} />
          <main>{children}</main>
          <Footer settings={settings} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
