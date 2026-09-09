/**
 * Content extraction — reads schlemmer_scraped/ and writes to src/data/
 * Run: npm run extract
 */

import * as path from 'path';
import * as fs from 'fs';
import { load as cheerioLoad } from 'cheerio';

const SCRAPED = path.resolve('schlemmer_scraped');
const DATA_DIR = path.resolve('src/data');
const HTML_DIR = path.resolve('src/data/html');

fs.mkdirSync(DATA_DIR, { recursive: true });
fs.mkdirSync(HTML_DIR, { recursive: true });

// ─── CDN URL → local filename map ─────────────────────────────────────────────
function buildImageMap(): Map<string, string> {
  const map = new Map<string, string>();
  const tsv = fs.readFileSync(path.join(SCRAPED, 'images.tsv'), 'utf-8');
  for (const line of tsv.split('\n').slice(1).filter(Boolean)) {
    const parts = line.split('\t');
    const cdnUrl = (parts[0] ?? '').trim();
    const localPath = (parts[3] ?? '').trim();
    if (cdnUrl && localPath) map.set(cdnUrl, path.basename(localPath));
  }
  return map;
}

const imageMap = buildImageMap();

function rewriteUrl(url: string): string {
  if (!url || url.startsWith('/') || url.startsWith('http') === false) return url;
  if (!url.includes('website-files.com')) return url; // keep external links
  const decoded = decodeURIComponent(url);
  if (imageMap.has(url)) return `/images/${imageMap.get(url)}`;
  if (imageMap.has(decoded)) return `/images/${imageMap.get(decoded)}`;
  // partial match on filename
  const filename = url.split('/').pop() ?? '';
  for (const [cu, local] of imageMap) {
    if (cu.endsWith(filename)) return `/images/${local}`;
  }
  return url;
}

function rewriteSrcset(srcset: string): string {
  return srcset.split(',').map((part) => {
    const t = part.trim();
    const sp = t.lastIndexOf(' ');
    if (sp === -1) return rewriteUrl(t);
    return `${rewriteUrl(t.slice(0, sp))}${t.slice(sp)}`;
  }).join(', ');
}

function rewriteAllImages($: ReturnType<typeof cheerioLoad>): void {
  $('img').each((_, el) => {
    const src = $(el).attr('src') ?? '';
    $(el).attr('src', rewriteUrl(src));
    const ss = $(el).attr('srcset');
    if (ss) $(el).attr('srcset', rewriteSrcset(ss));
  });
  $('a[href*="website-files.com"]').each((_, el) => {
    $(el).attr('href', rewriteUrl($(el).attr('href') ?? ''));
  });
}

function readHtml(filename: string) {
  const p = path.join(SCRAPED, filename);
  if (!fs.existsSync(p) || fs.statSync(p).size === 0) return null;
  return cheerioLoad(fs.readFileSync(p, 'utf-8'));
}

// ─── Static page HTML ─────────────────────────────────────────────────────────
function extractPageHtml(filename: string): string | null {
  const $ = readHtml(filename);
  if (!$) return null;
  rewriteAllImages($);
  $('script, link[href*="webflow"], link[href*="googleapis"], link[href*="gstatic"]').remove();
  return $('.main-section').first().html() ?? null;
}

// ─── Homepage slides ──────────────────────────────────────────────────────────
function extractHomeSlides() {
  const $ = readHtml('index.html');
  if (!$) return [];
  rewriteAllImages($);
  return $('.w-slide').map((_, el) => {
    const $el = $(el);
    const imgs = $el.find('img').map((_, img) => {
      const $img = $(img);
      return {
        src: $img.attr('src') ?? '',
        srcset: $img.attr('srcset'),
        alt: $img.attr('alt') ?? '',
        width: $img.attr('width'),
        sizes: $img.attr('sizes'),
        className: $img.attr('class'),
        caption: $img.next('.ute-schlemmer-caption').text().trim() || undefined,
      };
    }).toArray();
    return {
      className: $el.attr('class'),
      headingHtml: $el.find('h1').first().html()?.trim(),
      bodyHtml: $el.find('.text-block-3, .text-schlemmer').first().html()?.trim(),
      images: imgs,
    };
  }).toArray();
}

// ─── Feed entries — split on p.schlemmer-text.news ────────────────────────────
// This approach splits the raw HTML by news-header paragraphs and parses each chunk.
// Works regardless of how deep entries are nested in w-row/w-col wrappers.

interface FeedImage {
  src: string;
  srcset?: string;
  sizes?: string;
  alt: string;
  caption?: string;
  href?: string;
  width?: string;
}

interface FeedEntry {
  titleHtml: string;
  images: FeedImage[];
  bodyHtml: string;
  audioEmbed?: string;
  detailLinks: Array<{ href: string; label: string }>;
}

function extractFeedEntries(filename: string): FeedEntry[] {
  const $ = readHtml(filename);
  if (!$) return [];
  rewriteAllImages($);

  // Get the full inner HTML of the main section (strip heading div)
  const mainSection = $('.main-section').first();
  mainSection.find('.text-block-2.white.triadic-ballet').first().remove();
  const rawHtml = mainSection.html() ?? '';

  // Split on news paragraph openings
  const SPLIT = '<p class="schlemmer-text news">';
  const chunks = rawHtml.split(SPLIT);
  const entries: FeedEntry[] = [];

  for (let i = 1; i < chunks.length; i++) {
    const chunkHtml = SPLIT + chunks[i];
    const $chunk = cheerioLoad(`<div id="chunk">${chunkHtml}</div>`);
    const $c = $chunk('#chunk');

    // Title = the first p.schlemmer-text.news
    const titleEl = $c.find('p.schlemmer-text.news').first();
    const titleHtml = $chunk.html(titleEl) ?? '';

    // Collect detail links from title paragraph
    const detailLinks: Array<{ href: string; label: string }> = [];
    titleEl.find('a.schlemmer-button').each((_, a) => {
      detailLinks.push({ href: $chunk(a).attr('href') ?? '', label: $chunk(a).text().trim() });
    });

    // Images — all img tags in the chunk (not in the title para)
    titleEl.remove();
    const images: FeedImage[] = [];
    $c.find('img').each((_, img) => {
      const $img = $chunk(img);
      const parentA = $img.closest('a');
      const captionEl = $img.next('.ute-schlemmer-caption');
      images.push({
        src: $img.attr('src') ?? '',
        srcset: $img.attr('srcset'),
        sizes: $img.attr('sizes'),
        alt: $img.attr('alt') ?? '',
        caption: captionEl.length ? captionEl.text().trim() : undefined,
        href: parentA.length && parentA.attr('class')?.includes('w-inline-block') ? parentA.attr('href') : undefined,
        width: $img.attr('width'),
      });
    });

    // Detail links from buttons after title
    $c.find('a.schlemmer-button').each((_, a) => {
      detailLinks.push({ href: $chunk(a).attr('href') ?? '', label: $chunk(a).text().trim() });
    });

    // Audio embeds
    const audioEl = $c.find('iframe[src*="soundcloud"], audio').first();
    const audioEmbed = audioEl.length ? $chunk.html(audioEl) ?? undefined : undefined;

    // Body HTML — paragraphs and video embeds (not images, not detail links)
    $c.find('img, .ute-schlemmer-caption, a.schlemmer-button, a.w-inline-block').remove();
    const bodyHtml = $c.find('p, .w-video, .w-embed, .film-1, div[style*="padding-top"]').map((_, el) => $chunk.html($chunk(el))).toArray().join('\n');

    entries.push({ titleHtml, images, bodyHtml, audioEmbed, detailLinks });
  }

  return entries;
}

// ─── Features index (different container structure) ────────────────────────────
function extractFeaturesIndex() {
  const $ = readHtml('features.html');
  if (!$) return [];
  rewriteAllImages($);

  const entries: FeedEntry[] = [];
  // Features uses .features.w-container > div, each div is one card
  const container = $('.features.w-container, .w-layout-blockcontainer.features').first();

  container.children('div').each((_, el) => {
    const $el = $(el);
    const titleEl = $el.find('p.schlemmer-text.news').first();
    if (!titleEl.length) return;
    const titleHtml = $.html(titleEl) ?? '';
    const detailLinks: Array<{ href: string; label: string }> = [];
    $el.find('a.schlemmer-button').each((_, a) => {
      detailLinks.push({ href: $(a).attr('href') ?? '', label: $(a).text().trim() });
    });
    const images: FeedImage[] = [];
    $el.find('img').each((_, img) => {
      images.push({
        src: $(img).attr('src') ?? '',
        srcset: $(img).attr('srcset'),
        sizes: $(img).attr('sizes'),
        alt: $(img).attr('alt') ?? '',
        width: $(img).attr('width'),
      });
    });
    const captionEls = $el.find('.ute-schlemmer-caption, .rene-burri');
    entries.push({ titleHtml, images, bodyHtml: captionEls.first().text().trim(), audioEmbed: undefined, detailLinks });
  });

  return entries;
}

// ─── Run ──────────────────────────────────────────────────────────────────────
console.log('Extracting from schlemmer_scraped/ ...\n');

const slides = extractHomeSlides();
fs.writeFileSync(`${DATA_DIR}/home-slides.json`, JSON.stringify(slides, null, 2));
console.log(`✓  home-slides.json     (${slides.length} slides)`);

const communique = extractFeedEntries('communique.html');
fs.writeFileSync(`${DATA_DIR}/communique.json`, JSON.stringify(communique, null, 2));
console.log(`✓  communique.json      (${communique.length} entries)`);

const friends = extractFeedEntries('friends.html');
fs.writeFileSync(`${DATA_DIR}/friends.json`, JSON.stringify(friends, null, 2));
console.log(`✓  friends.json         (${friends.length} entries)`);

const remember = extractFeedEntries('remember.html');
fs.writeFileSync(`${DATA_DIR}/remember.json`, JSON.stringify(remember, null, 2));
console.log(`✓  remember.json        (${remember.length} entries)`);

const features = extractFeaturesIndex();
fs.writeFileSync(`${DATA_DIR}/features.json`, JSON.stringify(features, null, 2));
console.log(`✓  features.json        (${features.length} entries)`);

const staticPages = [
  'oskar-schlemmer.html',
  'triadic-ballet.html',
  'catalogue-raisonne.html',
  'ute-jaina-schlemmer.html',
  'c-raman-schlemmer.html',
  'imprint.html',
  'authentication.html',
  'mizmorim-kammermusik-festival.html',
];

for (const file of staticPages) {
  const html = extractPageHtml(file);
  if (html) {
    fs.writeFileSync(`${HTML_DIR}/${file}`, html);
    console.log(`✓  html/${file}`);
  } else {
    console.log(`⚠  html/${file}  (missing or empty)`);
  }
}

console.log('\nDone.');
