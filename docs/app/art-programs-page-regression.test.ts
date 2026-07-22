import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const artPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const artAssetPath = resolve(repoRoot, 'docs/public/art-program')

const expectedElementAssets = [
  'child-1.webp',
  'child-2.webp',
  'child-3.webp',
  'teen-1.webp',
  'teen-2.webp',
  'teen-3.webp',
  'adult-1.webp',
  'adult-2.webp',
  'adult-3.webp',
  'making-1.webp',
  'making-2.webp',
  'making-3.webp',
  'event-1.webp',
  'event-2.webp',
  'event-3.webp',
]

const expectedAssets = [
  'hero-reference.png',
  'age-4-6.png',
  'age-7-9.jpg',
  'age-10-12.png',
  'age-13-15.png',
  'age-15-18.jpg',
  'age-16-plus.jpg',
  'adult-1.jpg',
  'adult-2.jpg',
  'adult-3.png',
  'craft-1.png',
  'craft-2.jpg',
  'craft-3.jpg',
  'creative-camp-summer.png',
  'creative-camp-workshops.jpg',
  'creative-camp-events.jpg',
  'gallery-wall.png',
]

function readArtPage() {
  assert.ok(existsSync(artPagePath), 'docs app must provide /art-programs at docs/app/pages/art-programs.vue')
  return readFileSync(artPagePath, 'utf8')
}

function readHomePage() {
  return readFileSync(homePagePath, 'utf8')
}

function readPngSize(asset: string) {
  const source = readFileSync(resolve(artAssetPath, asset))
  return { width: source.readUInt32BE(16), height: source.readUInt32BE(20) }
}

test('art program assets are copied into public art-program directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(artAssetPath, asset)), `missing public art program asset: ${asset}`)
  }
})

test('art programs page uses copied public assets instead of local absolute paths', () => {
  const source = readArtPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/art-program/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('art programs page uses the supplied scrapbook element frames', () => {
  const source = readArtPage()

  for (const asset of expectedElementAssets) {
    assert.ok(existsSync(resolve(artAssetPath, 'elements', asset)), `missing supplied art program element: ${asset}`)
    assert.match(source, new RegExp(`/art-program/elements/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
  assert.match(source, /subtitle: 'Explore'/)
  assert.match(source, /subtitle: 'Learn'/)
  assert.match(source, /subtitle: 'Express'/)
  assert.match(source, /See Creations/)
  assert.doesNotMatch(source, /const galleryImages =/)
  assert.match(source, /@click="isAssistantOpen = true"/)
})

test('art programs page owns its marketing chrome and links from home', () => {
  const source = readArtPage()
  const home = readHomePage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /ART PROGRAMS[\s\S]*creativity grows through practice/)
  assert.match(source, /src="\/art-program\/hero-reference\.png"[\s\S]*alt=""[\s\S]*aria-hidden="true"[\s\S]*class="h-\[16rem\] w-full object-cover object-\[35%_center\] sm:h-\[21rem\] lg:h-\[24rem\]"/)
  assert.match(source, /class="relative z-50[^"]*overflow-visible[^"]*"/)
  assert.match(source, /class="pointer-events-none absolute left-0 top-full z-\[70\]/)
  assert.match(source, /<details class="relative ml-auto lg:hidden">[\s\S]*v-for="child in item\.children"/)
  assert.equal(source.match(/sm:grid-cols-2 lg:grid-cols-3/g)?.length, 5)
  assert.equal(source.match(/last:sm:col-span-2/g)?.length, 5)
  assert.match(source, /item\.label === 'Home' \? 'bg-\[#f1e4ff\] text-\[#6d4d95\]' : ''/)
  assert.match(source, />\s*EN\s*<\/NuxtLink>[\s\S]*>\s*中文\s*<\/NuxtLink>/)
  assert.doesNotMatch(source, /Explore Classes/)
  assert.doesNotMatch(source, /v-for="item in heroHighlights"/)
  assert.match(source, /:to="program\.galleryTo"/)
  assert.match(source, /category: 'Age 4–6', slide: '0'/)
  assert.match(source, /category: 'Age 7–9', slide: '0'/)
  assert.match(source, /category: 'Age 10–12', slide: '0'/)
  assert.match(source, /category: 'Age 13–15', slide: '0'/)
  assert.match(source, /category: 'Age 15–18', slide: '0'/)
  assert.match(source, /category: 'Portfolios', slide: '0'/)
  assert.match(source, /category: 'All Works', slide: '0'/)
  assert.match(source, /category: 'Paintings', slide: '0'/)
  assert.match(source, /section: 'chinese-art', slide: '0'/)
  assert.match(source, /category: 'Textile & Yarn', slide: '0'/)
  assert.match(source, /category: 'Clay & Pottery', slide: '0'/)
  assert.match(source, /category: 'Mixed Media', slide: '0'/)
  assert.match(source, /Children's Art Journey/)
  assert.match(source, /Teen Art Journey/)
  assert.match(source, /Adult Art Journey/)
  assert.match(source, /The Joys of Making/)
  assert.doesNotMatch(source, /Special Workshops & Camps/)
  assert.match(source, /id="events"[\s\S]*Creative Camps & Events/)
  assert.match(source, /title: 'Workshops'[\s\S]*status: 'Coming Soon'/)
  assert.match(source, /title: 'Community Events'[\s\S]*status: 'Coming Soon'/)
  assert.match(source, /v-for="program in campPrograms"[\s\S]*class="reference-card[^"]* flex[^"]*flex-col/)
  assert.match(source, /v-if="program.to"[\s\S]*class="mt-auto inline-flex self-center/)
  assert.match(source, /v-else[\s\S]*class="mt-auto inline-flex self-center/)
  assert.match(source, /Gallery of Growth/)
  assert.match(source, /to="\/art-programs\/student-gallery"[\s\S]*>\s*Enter Gallery/)
  assert.match(source, /Ready to Begin\?/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.match(home, /\{ label: 'Art Programs', to: '\/art-programs'/)
  assert.match(home, /title: 'Art Programs',[\s\S]*to: '\/art-programs'/)
})

test('art programs page keeps reference card image treatments', () => {
  const source = readArtPage()

  assert.match(source, /class="reference-card relative isolate/)
  assert.match(source, /:src="program\.frame"/)
  assert.match(source, /class="adult-card reference-card/)
  assert.match(source, /class="making-stage relative/)
  assert.match(source, /\.reference-card \{[\s\S]*filter: drop-shadow/)
  assert.match(source, /\.adult-card:nth-child\(3\) \.adult-photo/)
  assert.doesNotMatch(source, /child-photo-frame/)
  assert.doesNotMatch(source, /teen-photo-frame/)
  assert.doesNotMatch(source, /camp-photo-frame/)
  assert.match(source, /object-contain/)
  assert.match(source, /object-cover/)
})

test('padded art program PNGs are trimmed before display', () => {
  assert.deepEqual(readPngSize('age-4-6.png'), { width: 979, height: 1074 })
  assert.deepEqual(readPngSize('age-10-12.png'), { width: 1080, height: 810 })
  assert.deepEqual(readPngSize('age-13-15.png'), { width: 810, height: 1080 })
  assert.deepEqual(readPngSize('craft-1.png'), { width: 1080, height: 654 })
  assert.deepEqual(readPngSize('creative-camp-summer.png'), { width: 1080, height: 721 })
})
