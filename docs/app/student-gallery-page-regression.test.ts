import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const pagePath = resolve(repoRoot, 'docs/app/pages/art-programs/student-gallery.vue')
const marketingPagePaths = [
  resolve(repoRoot, 'docs/app/pages/index.vue'),
  resolve(repoRoot, 'docs/app/pages/art-programs.vue'),
  resolve(repoRoot, 'docs/app/pages/art-programs/student-gallery.vue'),
  resolve(repoRoot, 'docs/app/pages/wellness.vue'),
  resolve(repoRoot, 'docs/app/pages/about.vue'),
  resolve(repoRoot, 'docs/app/pages/schedules.vue'),
  resolve(repoRoot, 'docs/app/pages/contact.vue'),
]
const artProgramsPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const galleryAssetPath = resolve(repoRoot, 'docs/public/student-gallery')

const expectedGalleryAssets = [
  'children-4-6-four-seasons.jpg',
  'children-7-9-lion-dance.jpg',
  'children-10-12-dream.jpg',
  'teen-13-15-ancient-girl.jpg',
  'teen-15-18-girl.jpg',
  'portfolio-helen.jpg',
  'adult-town.jpg',
  'adult-eva.jpg',
  'adult-watercolor-sophia.jpg',
  'craft-crochet.jpg',
  'craft-paper-flower.jpg',
  'craft-clay-lotus.jpg',
  'craft-mixed-media.jpg',
  'chinese-landscape.jpg',
] as const

const referenceCopy = [
  'Students\' Gallery',
  'Celebrating creativity, imagination and growth at every age.',
  'Children\'s Art Works',
  'Age 4–6',
  'Age 7–10',
  'Age 11–13',
  'Teen\'s Art Works',
  'Ancient Girl',
  'Student Gallery',
  'Adult Art Works',
  'Craft Creations',
  'Mixed Media',
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
  const source = readPage().replace(/\\'/g, String.fromCharCode(39))

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

test('student gallery carousel controls are real Vue controls without breaking the reference card layout', () => {
  const source = readPage()

  assert.match(source, /const activeGalleryIndexes = reactive/)
  assert.match(source, /visibleWorks\(section\)/)
  assert.match(source, /@click="setActiveWork\(section\.id, index\)"/)
  assert.match(source, /@click="stepWork\(section\.id, section\.works\.length, -1\)"/)
  assert.match(source, /@click="stepWork\(section\.id, section\.works\.length, 1\)"/)
  assert.match(source, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/)
  assert.doesNotMatch(source, /flex:\s*0 0 100%/)
  assert.doesNotMatch(source, /Ready to Begin\?/) // reference jumps from Chinese art to footer
  assert.doesNotMatch(source, /aria-label="Previous Chinese artwork"/)
})

test('art programs page links and renders the nested student gallery route', () => {
  const source = readFileSync(artProgramsPagePath, 'utf8')

  assert.match(source, /\/art-programs\/student-gallery/)
  assert.match(source, /const isNestedRoute = computed/)
  assert.match(source, /<NuxtPage v-if="isNestedRoute" \/>/)
})

test('marketing nav exposes Student Gallery under Art Programs', () => {
  for (const path of marketingPagePaths) {
    const source = readFileSync(path, 'utf8')

    assert.match(source, /label: 'Art Programs'/, `${path} must keep Art Programs in the nav`)
    assert.match(source, /children: \[\{ label: 'Student Gallery', to: '\/art-programs\/student-gallery' \}\]/, `${path} must add the Student Gallery dropdown item`)
    assert.match(source, /i-lucide-chevron-down/, `${path} must show a dropdown affordance`)
  }
})
