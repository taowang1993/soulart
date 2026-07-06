import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'

const repoRoot = resolve(import.meta.dirname, '../..')
const resourcesPagePath = resolve(repoRoot, 'docs/app/pages/resources.vue')
const publicResourcesDir = resolve(repoRoot, 'docs/public/resources')

const marketingPages = [
  'docs/app/pages/index.vue',
  'docs/app/pages/art-programs.vue',
  'docs/app/pages/art-programs/student-gallery.vue',
  'docs/app/pages/wellness.vue',
  'docs/app/pages/about.vue',
  'docs/app/pages/schedules.vue',
  'docs/app/pages/contact.vue',
  'docs/app/pages/resources.vue',
] as const

const expectedResourceAssets = [
  'julia-2019.jpg',
  'julia-2025.jpg',
  'julia.jpg',
  'bernice.jpg',
  'julia-artwork.jpg',
  'doris-artwork.jpg',
  'jane-art.jpg',
  'book-power-of-now.jpg',
  'book-creative-act.jpg',
  'book-artists-way.jpg',
  'book-deep-work.jpg',
  'book-untethered-soul.jpg',
  'book-yoga-sutras.jpg',
  'playlist-art-healing.jpg',
  'playlist-gentle-yoga.jpg',
  'playlist-meditation.jpg',
  'playlist-art-tutorial.jpg',
  'playlist-conversations.jpg',
  'playlist-shorts.jpg',
] as const

const staleGeneratedAssets = [
  'hero-video.jpg',
  'wellness-community.jpg',
  'article-creating.jpg',
  'article-growing.jpg',
  'article-ai.jpg',
] as const

function readPage() {
  assert.ok(existsSync(resourcesPagePath), 'resources.vue page should exist')
  return readFileSync(resourcesPagePath, 'utf8')
}

test('resources assets are copied into the public resources directory', () => {
  for (const asset of expectedResourceAssets) {
    assert.ok(existsSync(resolve(publicResourcesDir, asset)), `${asset} should be copied to docs/public/resources`)
  }
})

test('resources page owns marketing chrome and preserves the assistant', () => {
  const source = readPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(\{[\s\S]*title:\s*['"]Resources \| XinYi Class['"]/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
})

test('resources page uses the requested YouTube intro video', () => {
  const source = readPage()

  assert.match(source, /const introVideoUrl = 'https:\/\/www\.youtube\.com\/watch\?v=1t98Fw2k988'/)
  assert.match(source, /const introEmbedUrl = 'https:\/\/www\.youtube\.com\/embed\/1t98Fw2k988'/)
  assert.match(source, /<iframe[\s\S]*:src="introEmbedUrl"/)
  assert.match(source, /Watch Intro Video/)
})

test('resources hero gives the video more room and reduces the heading size', () => {
  const source = readPage()

  assert.match(source, /lg:grid-cols-\[0\.75fr_1\.25fr\]/)
  assert.match(source, /<h1 class="mt-6 font-serif text-4xl[^"]*sm:text-5xl[^"]*lg:text-6xl"/)
})

test('resources page follows the reference content sections', () => {
  const source = readPage()
  const requiredCopy = [
    'Welcome to XinYi Art Studio',
    'A Place for Creativity, Connection & Growth',
    'Watch Intro Video',
    'Stories of Growth',
    'Julia & Bernice',
    'Growing Together',
    'Doris',
    'Learning Never Stops',
    'Parents’ Voices',
    'Growing in Body, Mind and Heart',
    'Words from Our Community',
    'Art by Jane',
    'Explore Our YouTube Playlists',
    'Weekly Art Healing',
    'Gentle Yoga',
    'Meditation & Yoga Nidra',
    'Explore 300+ Free Videos on Our YouTube Channel',
    'Reading List',
    'The Power of Now',
    'The Creative Act',
    'The Artist’s Way',
    'Deep Work',
    'The Untethered Soul',
    'Yoga Sutras of Patanjali',
    'Articles & Reflections',
    'Creating vs. Consuming',
    'Growing Upward, Rooting Inward',
    'Living with AI, Staying Human',
    'Continue the Journey',
  ]

  for (const copy of requiredCopy) {
    assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `${copy} should appear on the page`)
  }
})

test('resources page uses Pexels photos in the YouTube playlist cards', () => {
  const source = readPage()
  const playlistImages = [
    'playlist-art-healing.jpg',
    'playlist-gentle-yoga.jpg',
    'playlist-meditation.jpg',
    'playlist-art-tutorial.jpg',
    'playlist-conversations.jpg',
    'playlist-shorts.jpg',
  ]

  assert.match(source, /v-for="playlist in playlists"[\s\S]*<img[\s\S]*:src="playlist\.image"/)
  assert.match(source, /\{\{ playlist\.source \}\}/)

  for (const image of playlistImages) {
    assert.match(source, new RegExp(`/resources/${image}`))
  }
})

test('resources page uses copied public assets only', () => {
  const source = readPage()
  const allowed = new Set(expectedResourceAssets.map(asset => `/resources/${asset}`))
  const referencedAssets = [...source.matchAll(/['"](\/resources\/[^'"]+)['"]/g)].map(match => match[1]!)

  for (const asset of expectedResourceAssets) {
    assert.match(source, new RegExp(`/resources/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }

  for (const asset of staleGeneratedAssets) {
    assert.doesNotMatch(source, new RegExp(`/resources/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`), `${asset} should not be used`)
  }

  for (const asset of referencedAssets) {
    assert.ok(allowed.has(asset), `${asset} should come from the source Resource folder or searched book covers`)
  }

  assert.doesNotMatch(source, /<img[\s\S]*src="https?:/)
  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
})

test('marketing navigation links Resources to the resources route', () => {
  for (const path of marketingPages) {
    const source = readFileSync(resolve(repoRoot, path), 'utf8')

    assert.match(source, /\{ label: 'Resources', to: '\/resources', icon: 'i-lucide-book-open'/, `${path} should link Resources nav to /resources`)
    assert.doesNotMatch(source, /\{ label: 'Resources', to: '\/docs\/manual\/en\/getting-started\/installation'/, `${path} should not send Resources to docs installation`)
  }
})
