/**
 * Migration script — imports ./schlemmer_scraped into Payload CMS
 *
 * Sections:
 *  1. Media  — from images.tsv + images/
 *  2. Pages  — static HTML pages as block-based content
 *  3. Communiqués — parsed from communique.html
 *  4. We Remember — parsed from remember.html
 *  5. Features — parsed from features.html + article pages
 *  6. Friends — parsed from friends.html
 *  7. People — parsed from person pages
 *
 * Run:  npm run migrate
 * Safe: idempotent — deduplicates by legacyUrl / legacySlug on re-run
 */

import * as path from 'path'
import * as fs from 'fs'
import * as readline from 'readline'
import { load as cheerioLoad } from 'cheerio'
import { getPayload } from 'payload'
import config from '../src/payload.config'

const SCRAPED = path.resolve('schlemmer_scraped')

const log = {
  info: (msg: string) => console.log(`  ℹ  ${msg}`),
  ok: (msg: string) => console.log(`  ✓  ${msg}`),
  warn: (msg: string) => console.log(`  ⚠  ${msg}`),
  err: (msg: string) => console.error(`  ✗  ${msg}`),
}

function readTsv(file: string): Record<string, string>[] {
  const content = fs.readFileSync(file, 'utf-8')
  const lines = content.split('\n').filter(Boolean)
  const headers = lines[0].split('\t')
  return lines.slice(1).map((line) => {
    const values = line.split('\t')
    return Object.fromEntries(headers.map((h, i) => [h.trim(), (values[i] ?? '').trim()]))
  })
}

function readHtml(filename: string) {
  const filePath = path.join(SCRAPED, filename)
  if (!fs.existsSync(filePath)) return null
  return cheerioLoad(fs.readFileSync(filePath, 'utf-8'))
}

type LexicalFormat = '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
type LexicalText = { type: 'text'; text: string; version: 1 }
type LexicalParagraph = { type: 'paragraph'; version: 1; children: LexicalText[]; direction: 'ltr' | null; format: LexicalFormat; indent: number }

function textToParagraphs(text: string): LexicalParagraph[] {
  return text
    .split(/\n{2,}/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => ({
      type: 'paragraph' as const,
      version: 1 as const,
      children: [{ type: 'text' as const, text: t, version: 1 as const }],
      direction: 'ltr' as const,
      format: '',
      indent: 0,
    }))
}

function elementToText(html: string): string {
  return html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim()
}

function htmlToParagraphs($: ReturnType<typeof cheerioLoad>): LexicalParagraph[] {
  const paragraphs: LexicalParagraph[] = []

  const root = $('.main-section').first()
  if (!root.length) {
    // Fallback: extract text from body .schlemmer-text and .body-2 and p in main content
    $('nav, header, footer, .navbar, .w-nav, .footer-section').remove()
    $('.schlemmer-text, .body-2').each((_, el) => {
      const inner = $(el).html() ?? ''
      inner.split(/<br\s*\/?>[^<]*<br\s*\/?>/gi).forEach((chunk) => {
        const text = elementToText(chunk)
        if (text) paragraphs.push(makeParagraph(text))
      })
    })
    return paragraphs
  }

  root.find('script, style, nav, .navbar').remove()

  root.find('.schlemmer-text, .body-2, p').each((_, el) => {
    const inner = $(el).html() ?? ''
    // Split on double <br> — the HTML uses <br/>‍<br/> (zero-width joiner between) as paragraph separator
    inner.split(/<br\s*\/?>[^<]*<br\s*\/?>/gi).forEach((chunk) => {
      const text = elementToText(chunk)
      if (text) paragraphs.push(makeParagraph(text))
    })
  })

  return paragraphs
}

function makeParagraph(text: string): LexicalParagraph {
  return {
    type: 'paragraph',
    version: 1,
    children: [{ type: 'text', text, version: 1 }],
    direction: 'ltr',
    format: '' as LexicalFormat,
    indent: 0,
  }
}

function makeLexicalDoc(paragraphs: LexicalParagraph[]) {
  const empty: LexicalParagraph = { type: 'paragraph', version: 1, children: [{ type: 'text', text: '', version: 1 }], direction: null, format: '' as LexicalFormat, indent: 0 }
  return {
    root: {
      type: 'root',
      children: paragraphs.length > 0 ? paragraphs : [empty],
      direction: 'ltr' as const,
      format: '' as LexicalFormat,
      indent: 0,
      version: 1,
    },
  }
}

async function migrateMedia(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating media...')
  const rows = readTsv(path.join(SCRAPED, 'images.tsv'))
  let created = 0
  let skipped = 0
  let failed = 0

  for (const row of rows) {
    const { url, alt, local_path } = row
    if (!local_path) continue

    const existing = await payload.find({
      collection: 'media',
      where: { legacyUrl: { equals: url } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      skipped++
      continue
    }

    const absPath = path.join(SCRAPED, 'images', path.basename(local_path))
    if (!fs.existsSync(absPath)) {
      log.warn(`Missing file: ${absPath}`)
      failed++
      continue
    }

    try {
      const data = fs.readFileSync(absPath)
      const filename = path.basename(absPath)
      const ext = filename.split('.').pop()?.toLowerCase() ?? 'jpg'
      const mimetype =
        ext === 'png' ? 'image/png' : ext === 'gif' ? 'image/gif' : 'image/jpeg'

      await payload.create({
        collection: 'media',
        data: {
          alt: alt || filename.replace(/[-_]/g, ' ').replace(/\.[^.]+$/, ''),
          credit: '© Archiv C. Raman Schlemmer',
          rights: 'estate-owned' as const,
          legacyUrl: url,
        },
        file: { data, name: filename, size: data.length, mimetype },
      })
      created++
    } catch (e) {
      log.err(`Failed to create media for ${local_path}: ${(e as Error).message}`)
      failed++
    }
  }

  log.ok(`Media: created=${created} skipped=${skipped} failed=${failed}`)
}

async function migrateCommuniques(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating communiqués...')
  const $ = readHtml('communique.html')
  if (!$) { log.warn('communique.html not found'); return }

  let created = 0
  let updated = 0

  const rows = $('.communique .w-row').toArray()
  for (const el of rows) {
    const cols = $(el).find('.w-col').toArray()
    const textCol = $(cols[0])
    const imgCol = $(cols[1])

    // Title from .highlight span, strip zero-width joiners
    const rawTitle = textCol.find('.highlight').first().text()
      .replace(/‍/g, '').trim().split('\n')[0].trim()
    if (!rawTitle) continue

    const title = rawTitle.replace(/<[^>]+>/g, '').trim()

    // Extract paragraphs from the schlemmer-text paragraph
    const pHtml = textCol.find('.schlemmer-text').first().html() ?? ''
    // Remove the highlight span (title already captured)
    const bodyHtml = pHtml.replace(/<span class="highlight"[^>]*>[\s\S]*?<\/span>/i, '')
    const paragraphs: LexicalParagraph[] = []
    bodyHtml.split(/<br\s*\/?>[^<]*<br\s*\/?>/gi).forEach((chunk) => {
      const text = elementToText(chunk)
      if (text) paragraphs.push(makeParagraph(text))
    })

    // Date: find first 4-digit year in body text
    const bodyText = textCol.find('.schlemmer-text').first().text().replace(/‍/g, '')
    const yearMatch = bodyText.match(/\b(20\d{2})\b/)
    const year = yearMatch?.[1] ?? '2024'

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 80)

    // Images from second column — look up by CDN hash
    const imageData: Array<{ image: string; caption?: string }> = []
    const seenHashes = new Set<string>()
    const imgEls = imgCol.find('img').toArray()
    for (const imgEl of imgEls) {
      const src = $(imgEl).attr('src') ?? ''
      if (!src.includes('website-files.com')) continue
      const hashMatch = src.split('/').pop()?.match(/^([a-f0-9]+)_/)
      const hash = hashMatch?.[1]
      if (!hash || seenHashes.has(hash)) continue
      seenHashes.add(hash)
      const result = await payload.find({
        collection: 'media',
        where: { legacyUrl: { contains: hash } },
        limit: 1,
      })
      if (result.docs.length > 0) {
        const alt = $(imgEl).attr('alt') ?? ''
        imageData.push({ image: result.docs[0].id as unknown as string, caption: alt || undefined })
      } else {
        log.warn(`Communiqué image not in media: ${hash}`)
      }
    }

    const data = {
      title,
      slug,
      legacySlug: `/communique#${slug}`,
      date: `${year}-01-01T00:00:00.000Z`,
      category: 'other' as const,
      summary: paragraphs[0]?.children[0]?.text?.slice(0, 300) ?? '',
      content: [
        {
          blockType: 'rich-text' as const,
          content: makeLexicalDoc(paragraphs),
        },
      ],
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      images: imageData as any,
    }

    const existing = await payload.find({
      collection: 'communiques',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    try {
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'communiques', id: existing.docs[0].id, data })
        updated++
      } else {
        await payload.create({ collection: 'communiques', data })
        created++
      }
    } catch (e) {
      log.err(`Communiqué "${title}": ${(e as Error).message}`)
    }
  }

  log.ok(`Communiqués: created=${created} updated=${updated}`)
}

async function migrateWeRemember(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating We Remember entries...')
  const $ = readHtml('remember.html')
  if (!$) { log.warn('remember.html not found'); return }

  let created = 0
  let updated = 0

  const remembranceEls = $('.remembrance').toArray()
  for (let idx = 0; idx < remembranceEls.length; idx++) {
    const el = remembranceEls[idx]

    // Name is in <span class="highlight">, strip zero-width joiners and trailing newlines
    const name = $(el).find('.highlight').first().text()
      .replace(/‍/g, '').trim().split('\n')[0].trim()
    if (!name) continue

    // Dates: look for the first <br>-delimited chunk that contains a 4-digit year.
    // This handles: (a) date directly after </span>, (b) leading <br> before date,
    // and (c) entries where Japanese text precedes the date in the first chunk.
    const pHtml = $(el).find('p.schlemmer-text').first().html() ?? ''
    const afterSpan = pHtml.replace(/^[\s\S]*?<\/span>/i, '')
    const brChunks = afterSpan.split(/<br\s*\/?>/i)
    const dateLineRaw = brChunks.find(c => /\b\d{4}\b/.test(c.replace(/<[^>]+>/g, '').replace(/‍/g, ''))) ?? ''
    const dateText = dateLineRaw.replace(/<[^>]+>/g, '').replace(/‍/g, '').replace(/&nbsp;/g, ' ').trim()
    const yearNums = (dateText.match(/\b(\d{4})\b/g) ?? []).map(Number)
    const birthYear = yearNums[0] ?? undefined
    const deathYear = yearNums[1] ?? undefined

    // Tribute: content after the <br>‍<strong>‍</strong><br> separator (when present)
    // or after the double-<br> paragraph separator
    const tributeHtml = pHtml.replace(/^[\s\S]*?<br\s*\/?>[^<]*<strong[^>]*>[^<]*<\/strong>[^<]*<br\s*\/?>/i, '')
    const paragraphs: LexicalParagraph[] = []
    tributeHtml.split(/<br\s*\/?>[^<]*<br\s*\/?>/gi).forEach((chunk) => {
      const text = elementToText(chunk)
      if (text) paragraphs.push(makeParagraph(text))
    })

    // Images: find <img> tags in the second column.
    // The TSV only has resized variants (-p-NNN), so match by the CDN hash prefix
    // which is unique per image regardless of size suffix.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const imageData: { image: any; caption?: string }[] = []
    const seenHashes = new Set<string>()
    const imgEls = $(el).find('.w-col').last().find('img').toArray()
    for (const imgEl of imgEls) {
      const src = $(imgEl).attr('src') ?? ''
      if (!src || src.includes('menu')) continue
      const alt = $(imgEl).attr('alt') ?? ''
      // Extract the Webflow CDN hash (hex string before the underscore in the filename)
      const hashMatch = src.split('/').pop()?.match(/^([a-f0-9]+)_/)
      const hash = hashMatch?.[1]
      if (!hash || seenHashes.has(hash)) continue
      seenHashes.add(hash)
      const result = await payload.find({
        collection: 'media',
        where: { legacyUrl: { contains: hash } },
        limit: 1,
      })
      if (result.docs.length > 0) {
        imageData.push({ image: result.docs[0].id, caption: alt || undefined })
      } else {
        log.warn(`  img not in media: ${src.split('_').pop()}`)
      }
    }

    const entryData = {
      name,
      dateString: dateText || undefined,
      birthYear,
      deathYear,
      tribute: makeLexicalDoc(paragraphs),
      images: imageData,
      sortOrder: idx,
    }

    const existing = await payload.find({
      collection: 'we-remember',
      where: { name: { equals: name } },
      limit: 1,
    })

    try {
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'we-remember', id: existing.docs[0].id, data: entryData })
        updated++
      } else {
        await payload.create({ collection: 'we-remember', data: entryData })
        created++
      }
    } catch (e) {
      log.err(`We Remember "${name}": ${(e as Error).message}`)
    }
  }

  // Delete any stale entries whose names are NOT in the current set (leftover from bad previous migration)
  const correctNames = new Set(
    $('.remembrance').toArray().map((el) =>
      $(el).find('.highlight').first().text().replace(/‍/g, '').trim().split('\n')[0].trim()
    ).filter(Boolean)
  )
  const { docs: allEntries } = await payload.find({ collection: 'we-remember', limit: 200 })
  let deleted = 0
  for (const entry of allEntries) {
    if (!correctNames.has(entry.name)) {
      await payload.delete({ collection: 'we-remember', id: entry.id })
      deleted++
    }
  }
  if (deleted > 0) log.ok(`We Remember: deleted ${deleted} stale entries`)

  log.ok(`We Remember: created=${created} updated=${updated}`)
}

async function migrateFeatures(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating features...')
  const articles = [
    { file: 'mizmorim-kammermusik-festival.html', slug: 'mizmorim-kammermusik-festival', legacySlug: '/mizmorim-kammermusik-festival' },
    { file: 'die-soldaten.html', slug: 'die-soldaten', legacySlug: '/die-soldaten' },
  ]

  let created = 0

  for (const article of articles) {
    const existing = await payload.find({
      collection: 'features',
      where: { slug: { equals: article.slug } },
      limit: 1,
    })

    const $ = readHtml(article.file)
    if (!$) continue

    const title = $('title').text().replace(/\s*\|.*$/, '').trim() || article.slug
    const paragraphs = htmlToParagraphs($)

    const featureData = {
      title,
      slug: article.slug,
      legacySlug: article.legacySlug,
      author: 'C. Raman Schlemmer',
      date: '2024-01-01T00:00:00.000Z',
      content: paragraphs.length > 0
        ? [{ blockType: 'rich-text' as const, content: makeLexicalDoc(paragraphs) }]
        : [],
    }

    try {
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'features', id: existing.docs[0].id, data: featureData })
      } else {
        await payload.create({ collection: 'features', data: featureData })
        created++
      }
    } catch (e) {
      log.err(`Feature "${article.slug}": ${(e as Error).message}`)
    }
  }

  log.ok(`Features: created=${created}`)
}

// Canonical CDN URLs for home page carousel images, in slide order
const CAROUSEL_IMAGE_URLS = [
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/69dd29cd351232c7e1582b53_oskar-schlemmer-ascona.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/67f4d2c3e2e0d78604a7b63e_oskar-schlemmer-sculpture-rundplastik-1923.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/653e7a11ff1ed3134d7e2d3c_oskar-schlemmer-painting-moma-bauhaus-staircase.jpeg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee01d2cbf168cd6dd0054_Das-Triadische-Ballet-Centenary-f.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee32b3b5a6f0ac084ccc4_bauhaus-triadisches-ballett-skizze%20watermark.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee3a1598518e0062f6172_oskar-schlemmer-gelbe-figur%20watermark.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee5083b5a6f0ac086f91c_Triadic-Taucher-2-watermark.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ed71ebfbb269a91852f47_DTB_3_Figurinen_Tu%CC%88rk-Watermark.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee57e53078d3db0620be0_DTB%20Spirale_black-background-watermark.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee5081978b1a2ac5410e8_DTB%20Spirale%20Draht%20Photo%20watermark.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee32c12b0ab3c834cab6b_DTB%20Scheibentaenzer%2004-Watermark.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee508bc878f473944c81a_DTB%20Scheibentaenzer%2004-2-watermark.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee53d37aec5bfbe4b23b4_DTB%20Drahtfigur%20watermark.jpg',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee508ff93694ad1aa7a99_DTB%20Goldkugel-watermark.png',
  'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/652ee32b8958d9fadbf0e8d5_schlemmer-triadisch-ballet-baton-guy%20watermark.jpg',
]

const CATALOGUE_RAISONNE_PARAGRAPHS = [
  'Will Grohmann | Tut Schlemmer',
  '„Oskar Schlemmer: Zeichnungen und Graphik", Oeuvrekatalog\nEinführung von Will Grohmann, Werkverzeichnis von Tut Schlemmer\nHatje Verlag, Stuttgart, 1965\nIntroduction by Will Grohmann. Catalogue Raisonné by Tut Schlemmer\n(The art historian Will Grohmann was a friend of Oskar Schlemmer)',
  'Karin von Maur',
  '„Oskar Schlemmer"\nBand I: Monographie\nBand II: Oeuvrekatalog der Gemälde, Aquarelle, Pastelle und Plastiken\nPrestel Verlag, München | Munich, 1979\nVol. I: Monograph.\nVol. II Catalogue Raisonné of paintings, watercolours, pastels and sculptures',
  '„Oskar Schlemmer TANZ THEATER BÜHNE"\nKunstsammlung Nordrhein-Westfalen, Düsseldorf, Kunsthalle Wien,\nSprengel Museum, Hannover, 1994 I 1995, Hatje Verlag, 1994\nFocusing on theatre, stage, and dance works, this publication marks the first time this segment of the oeuvre has been published with reproductions and lists. It includes unpublished designs and expertise, researched by U. Jaïna Schlemmer. Illustrated monograph.\nThis exhibition catalogue is not a catalogue raisonné.',
  'Statement',
  'Catalogues Raisonnés of artworks by Oskar Schlemmer were published in 1952, 1965, and 1979.',
  'The majority of artworks catalogued in the 1952 Catalogue Raisonné by Schlemmer\'s friend, art historian Hans Hildebrand, were revised and supplemented in the subsequent Catalogues Raisonnés published in 1965 and 1979. The publications are in German, they are out of print.',
  'Typically, a Catalogue Raisonné becomes outdated upon publication. In the case of the œuvre of Oskar Schlemmer, updates were irregularly documented and not consistently published.',
  'Subsequent to the publications 1965 and the most recent Catalogue Raisonné in 1979, Tut Schlemmer (1890 – 1987) had partitioned, transferred, sold, or gifted artworks by her husband. Additionally, various individual owners, private collectors, art galleries, and auction houses sold artworks by Schlemmer after 1965 and after 1979. Due to changes in ownership, transfers, and the passage of time, original information may no longer be valid. Some entries in the Catalogues Raisonnés may be incorrect, outdated or even false.',
  'Since the Second World War, several lost works of art have re-emerged, some with falsified provenance. The locations of other Oskar Schlemmer works of art remain undisclosed. After thorough scrutiny, it has been determined that several works initially published in 1979 have been omitted from the internal catalogue raisonné. Additionally, artworks not featured in the 1965 and 1979 publications, or those previously unknown, were published in subsequent publications and exhibition catalogues in Catalan, English, French, German, Japanese, Spanish et al.',
  'To ensure accuracy, the details regarding artworks are consistently updated within an internal catalogue raisonné.',
  'In 1981, U. Jaïna Schlemmer assumed legal trusteeship of her father\'s artistic estate. Since 1982, The Oskar Schlemmer Theatre Estate has been partitioned as a distinct collection, complemented by artworks from its sole owner, U. Jaïna Schlemmer, as well as of her son, C. Raman Schlemmer. These dance, performance, theatre artworks and documents are part of Bühnen Archiv Oskar Schlemmer | The Oskar Schlemmer Theater Archives.',
  'Further reading www.schlemmer.org | "Jaïna Schlemmer"',
  'For specific inquiries please submit the Authentication form via the button below:',
]

async function buildHomePageContent(payload: Awaited<ReturnType<typeof getPayload>>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const slides: { image: any }[] = []
  for (const legacyUrl of CAROUSEL_IMAGE_URLS) {
    const result = await payload.find({
      collection: 'media',
      where: { legacyUrl: { equals: legacyUrl } },
      limit: 1,
    })
    if (result.docs.length > 0) {
      slides.push({ image: result.docs[0].id })
    } else {
      log.warn(`Carousel image not in media: ${legacyUrl.split('_').pop()}`)
    }
  }

  if (slides.length === 0) {
    log.warn('No carousel slides found — home page will have no hero')
    return []
  }

  log.info(`Building carousel with ${slides.length} slides`)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return [
    { blockType: 'hero-carousel', slides, autoplay: true, intervalMs: 10000 },
    {
      blockType: 'anniversary-banner',
      date: '2026-04-13T00:00:00.000Z',
      label: 'Oskar Schlemmer 1888 – 1943  ·  13 April 2026  ·  83rd Death Anniversary',
    },
    {
      blockType: 'quote',
      text: 'Zu ahnen und zu befördern: Das reinste Gefühl\nDie reinste Empfindung\nDen reinsten Gedanken\nDas reinste Herz\nEbenso: Das Ureigenste …',
      attribution: 'Oskar Schlemmer, Diary, 9 February 1943',
      size: 'large',
    },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as any[]
}

async function migrateStaticPages(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating static pages...')
  const pages = [
    { file: 'index.html', slug: '/', title: 'Oskar Schlemmer', isHome: true, timelineSrc: null },
    { file: 'catalogue-raisonne.html', slug: '/catalogue-raisonne', title: 'Catalogue Raisonné', isHome: false, timelineSrc: null },
    { file: 'authentication.html', slug: '/authentication', title: 'Authentication', isHome: false, timelineSrc: null },
    { file: 'imprint.html', slug: '/imprint', title: 'Imprint', isHome: false, timelineSrc: null },
    {
      file: 'triadic-ballet.html',
      slug: '/triadic-ballet',
      title: 'The Triadic Ballet',
      isHome: false,
      timelineSrc: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1If1qNbXIuTXJOoCg4Q9s-yMOiwcg_sB6K4lgc7-fK8A&font=OpenSans-GentiumBook&lang=en&initial_zoom=2&start_at_slide=1&height=650',
    },
    { file: 'friends.html', slug: '/friends', title: 'Friends', isHome: false, timelineSrc: null },
  ]

  let created = 0

  for (const page of pages) {
    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: page.slug } },
      limit: 1,
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let content: any[]
    if (page.isHome) {
      content = await buildHomePageContent(payload)
    } else if (page.slug === '/catalogue-raisonne') {
      const paragraphs = CATALOGUE_RAISONNE_PARAGRAPHS.map(makeParagraph)
      content = [
        { blockType: 'rich-text' as const, content: makeLexicalDoc(paragraphs) },
        { blockType: 'cta', text: 'Submit Authentication Request', href: '/authentication', style: 'outline', align: 'center' },
      ]
    } else {
      const $ = readHtml(page.file)
      const paragraphs = $ ? htmlToParagraphs($) : []
      content = paragraphs.length > 0
        ? [{ blockType: 'rich-text' as const, content: makeLexicalDoc(paragraphs) }]
        : []
      if (page.timelineSrc) {
        content.push({ blockType: 'iframe-embed', src: page.timelineSrc, height: 650, title: `${page.title} Timeline` })
      }
    }

    const pageData = {
      title: page.title,
      slug: page.slug,
      legacySlug: page.slug,
      content,
    }

    try {
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'pages', id: existing.docs[0].id, data: pageData })
      } else {
        await payload.create({ collection: 'pages', data: pageData })
        created++
      }
    } catch (e) {
      log.err(`Page "${page.slug}": ${(e as Error).message}`)
    }
  }

  log.ok(`Pages: created=${created}`)
}

async function migratePeople(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Migrating people...')
  const people = [
    {
      file: 'oskar-schlemmer.html',
      slug: 'oskar-schlemmer',
      name: 'Oskar Schlemmer',
      birth: '1888',
      death: '1943',
      role: 'Painter, Sculptor, Choreographer',
      portraitUrl: 'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/6533f6794bcc711d56b311ef_OS%2BMask_Photo.jpg',
      timelineSrc: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1S9aidM2gIc2zrm5cQ2dGV1ABFo4q7_cNWaVeMjWVwa8&font=OpenSans-GentiumBook&lang=en&initial_zoom=2&start_at_slide=1&height=650',
      timelineTitle: 'Oskar Schlemmer — Life and Work Timeline',
    },
    {
      file: 'ute-jaina-schlemmer.html',
      slug: 'ute-jaina-schlemmer',
      name: 'Jaïna Schlemmer',
      birth: '1922',
      death: '2010',
      role: 'Stage Designer, Curator',
      portraitUrl: 'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/65319c6b3512a8c08b265524_J.Schlemmer85_3%20watermark.jpg',
      timelineSrc: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1GRnq6g_BHG08HnjM-ZAWvN07NLre9D19x0g66p7r6GI&font=OpenSans-GentiumBook&lang=en&initial_zoom=2&start_at_slide=1&height=650',
      timelineTitle: 'Jaïna Schlemmer — Timeline',
    },
    {
      file: 'c-raman-schlemmer.html',
      slug: 'c-raman-schlemmer',
      name: 'C. Raman Schlemmer',
      birth: '1950',
      death: '',
      role: 'Curator, Keeper of the Oskar Schlemmer Theatre Archives',
      portraitUrl: 'https://cdn.prod.website-files.com/64d20a78755fe3e88cabcd55/66537b6837deb0d71bde8179_Raman-Schlemmer-interview-on-one33seven-Oskar-Schlemmer.jpg',
      timelineSrc: 'https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Hd9deBWgsb65W6GDuYK5JhmH3SIufiCml_WMwyJD5Nw&font=OpenSans-GentiumBook&lang=en&initial_zoom=2&start_at_slide=1&height=650',
      timelineTitle: 'C. Raman Schlemmer — Timeline',
    },
  ]

  let created = 0

  for (const person of people) {
    const existing = await payload.find({
      collection: 'people',
      where: { slug: { equals: person.slug } },
      limit: 1,
    })
    const $ = readHtml(person.file)
    const paragraphs = $ ? htmlToParagraphs($) : []

    // Look up portrait media
    let portraitId: number | undefined
    if (person.portraitUrl) {
      const portraitResult = await payload.find({
        collection: 'media',
        where: { legacyUrl: { equals: person.portraitUrl } },
        limit: 1,
      })
      if (portraitResult.docs.length > 0) {
        portraitId = portraitResult.docs[0].id
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bio: any[] = []
    if (paragraphs.length > 0) {
      bio.push({ blockType: 'rich-text' as const, content: makeLexicalDoc(paragraphs) })
    }
    if (person.timelineSrc) {
      bio.push({ blockType: 'iframe-embed', src: person.timelineSrc, height: 650, title: person.timelineTitle })
    }

    const personData = {
      name: person.name,
      slug: person.slug,
      legacySlug: `/${person.slug}`,
      role: person.role,
      birthDate: person.birth,
      deathDate: person.death || undefined,
      portrait: portraitId,
      bio,
    }

    try {
      if (existing.docs.length > 0) {
        await payload.update({ collection: 'people', id: existing.docs[0].id, data: personData })
      } else {
        await payload.create({ collection: 'people', data: personData })
        created++
      }
    } catch (e) {
      log.err(`Person "${person.name}": ${(e as Error).message}`)
    }
  }

  log.ok(`People: created=${created}`)
}

async function migrateGlobals(payload: Awaited<ReturnType<typeof getPayload>>) {
  log.info('Seeding navigation...')

  const navItems = [
    { label: 'Oskar Schlemmer', href: '/oskar-schlemmer' },
    { label: 'Jaïna Schlemmer', href: '/ute-jaina-schlemmer' },
    { label: 'C. Raman Schlemmer', href: '/c-raman-schlemmer' },
    { label: 'The Triadic Ballet', href: '/triadic-ballet' },
    { label: 'Catalogue Raisonné', href: '/catalogue-raisonne' },
    { label: 'Communiqué', href: '/communique' },
    { label: 'Features', href: '/features' },
    { label: 'We Remember', href: '/remember' },
    { label: 'Friends', href: '/friends' },
    { label: 'Authentication', href: '/authentication' },
  ]

  try {
    await payload.updateGlobal({ slug: 'navigation', data: { items: navItems } })
    log.ok('Navigation seeded')
  } catch (e) {
    log.err(`Navigation: ${(e as Error).message}`)
  }

  log.info('Seeding settings...')
  try {
    await payload.updateGlobal({
      slug: 'settings',
      data: {
        copyrightLine: '© 2025 C. Raman Schlemmer. All rights reserved. ®',
        estateCredit: '© The Oskar Schlemmer Theatre Archives',
      },
    })
    log.ok('Settings seeded')
  } catch (e) {
    log.err(`Settings: ${(e as Error).message}`)
  }
}

async function main() {
  console.log('\n═══════════════════════════════════════')
  console.log('  schlemmer.org migration')
  console.log('═══════════════════════════════════════\n')

  const payload = await getPayload({ config })

  await migrateMedia(payload)
  await migratePeople(payload)
  await migrateCommuniques(payload)
  await migrateWeRemember(payload)
  await migrateFeatures(payload)
  await migrateStaticPages(payload)
  await migrateGlobals(payload)

  console.log('\n═══════════════════════════════════════')
  console.log('  Migration complete')
  console.log('═══════════════════════════════════════\n')

  process.exit(0)
}

main().catch((e) => {
  log.err(String(e))
  process.exit(1)
})
