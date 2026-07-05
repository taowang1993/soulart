import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const pagePath = resolve(repoRoot, 'docs/app/pages/art-programs/student-gallery.vue')
const artProgramsPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const galleryAssetPath = resolve(repoRoot, 'docs/public/student-gallery')

const expectedGalleryAssets = [
  'children-4-6-four-seasons.jpg',
  'children-7-9-dragon-boat.jpg',
  'children-10-12-dream.jpg',
  'teen-13-15-ancient-girl.jpg',
  'teen-13-15-violin.jpg',
  'teen-15-18-sunset.jpg',
  'portfolio-helen.jpg',
  'adult-class.jpg',
  'adult-ecio.jpg',
  'adult-grace.jpg',
  'adult-study.jpg',
  'craft-crochet.jpg',
  'craft-paper-flower.jpg',
  'craft-clay-minecraft.jpg',
  'craft-mixed-media.jpg',
  'chinese-ink-1.jpg',
  'chinese-ink-8.jpg',
] as const

const referenceCopy = [
  'Students\' Gallery',
  'Celebrating creativity, imagination and growth at every age.',
  'Children\'s Art Works',
  'Age 4–6',
  'Age 7–9',
  'Age 10–12',
  'Teen\'s Art Works',
  'Ancient Girl',
  'Adult Art Works',
  'Craft Creations',
  'Chinese Painting & Calligraphy',
  'Tradition · Simplicity · Inner Peace',
  'About Chinese Art',
  'Talk with AI Assistant',
]

function readPage() {
  assert.ok(existsSync(pagePath), 'student gallery page must exist at docs/app/pages/art-programs/student-gallery.vue')
  return readFileSync(pagePath, 'utf8')
}

test('student gallery assets are copied from the gallery source into public paths', () => {
  const actualAssets = readdirSync(galleryAssetPath).filter(file => file.endsWith('.jpg')).sort()

  assert.deepEqual(actualAssets, [...expectedGalleryAssets].sort())
})

test('student gallery page keeps the reference sections and copy', () => {
  const source = readPage()

  for (const copy of referenceCopy) {
    assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('student gallery page owns marketing chrome and keeps the assistant', () => {
  const source = readPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(\{[\s\S]*title:\s*['"]Student Gallery \| XinYi Class['"]/)
  assert.match(source, /\{ label: 'Art Programs', to: '\/art-programs'/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.match(source, /© 2026 Xinyi Class/)
})

test('student gallery page uses copied public gallery assets only', () => {
  const source = readPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  assert.doesNotMatch(source, /\/art-program\//)
  for (const asset of expectedGalleryAssets) {
    assert.match(source, new RegExp(`/student-gallery/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('art programs page links and renders the nested student gallery route', () => {
  const source = readFileSync(artProgramsPagePath, 'utf8')

  assert.match(source, /\/art-programs\/student-gallery/)
  assert.match(source, /const isNestedRoute = computed/)
  assert.match(source, /<NuxtPage v-if="isNestedRoute" \/>/)
})
