import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const pagePath = resolve(repoRoot, 'docs/app/pages/art-programs/student-gallery.vue')
const artProgramsPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const artAssetPath = resolve(repoRoot, 'docs/public/art-program')
const galleryAssetPath = resolve(repoRoot, 'docs/public/student-gallery')

const expectedArtAssets = [
  'gallery-wall.png',
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
  'summer-camp-fruit-platter.jpg',
] as const

const expectedGalleryAssets = [
  'fantasy-girl.jpg',
  'bernice-portrait.jpg',
  'jane-watercolor.jpg',
  'julia-artwork.jpg',
] as const

const referenceCopy = [
  'Students\' Gallery',
  'Celebrating creativity, imagination and growth at every age.',
  'Children\'s Art Works',
  'Age 4–6',
  'Age 7–10',
  'Age 11–13',
  'Teen\'s Art Works',
  'Fantasy Girl',
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

test('student gallery assets are available from public paths', () => {
  for (const asset of expectedArtAssets) {
    assert.ok(existsSync(resolve(artAssetPath, asset)), `missing public art program asset: ${asset}`)
  }
  for (const asset of expectedGalleryAssets) {
    assert.ok(existsSync(resolve(galleryAssetPath, asset)), `missing public student gallery asset: ${asset}`)
  }
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

test('student gallery page uses copied public assets only', () => {
  const source = readPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedArtAssets) {
    assert.match(source, new RegExp(`/art-program/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
  for (const asset of expectedGalleryAssets) {
    assert.match(source, new RegExp(`/student-gallery/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('art programs page links visitors to the student gallery route', () => {
  const source = readFileSync(artProgramsPagePath, 'utf8')

  assert.match(source, /\/art-programs\/student-gallery/)
})
