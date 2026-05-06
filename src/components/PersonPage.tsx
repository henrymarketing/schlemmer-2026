import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import { BlockRenderer } from './blocks/BlockRenderer'
import Image from 'next/image'

type Props = {
  slug: string
  locale: string
}

export async function PersonPage({ slug, locale }: Props) {
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'people',
    where: { slug: { equals: slug } },
    locale: locale as 'en' | 'de',
    limit: 1,
  })

  const person = docs[0]
  if (!person) notFound()

  const role = typeof person.role === 'string' ? person.role : (person.role as unknown as Record<string, string>)?.[locale] ?? ''
  const years = [person.birthDate, person.deathDate].filter(Boolean).join('–')

  const portrait = person.portrait && typeof person.portrait === 'object'
    ? person.portrait as { url?: string; alt?: string; width?: number; height?: number }
    : null

  return (
    <article>
      <header className="max-w-3xl mx-auto px-6 md:px-12 pt-20 pb-10">
        {portrait?.url && (
          <div className="mb-8 w-32 h-32 relative overflow-hidden rounded-full">
            <Image
              src={portrait.url}
              alt={portrait.alt ?? person.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h1 className="text-2xl md:text-3xl font-normal leading-tight mb-2">{person.name}</h1>
        {(role || years) && (
          <p className="text-sm tracking-wide text-[var(--color-muted)] uppercase">
            {[role, years].filter(Boolean).join(' · ')}
          </p>
        )}
        <div className="rule mt-8" />
      </header>

      <BlockRenderer blocks={person.bio ?? []} />
    </article>
  )
}
