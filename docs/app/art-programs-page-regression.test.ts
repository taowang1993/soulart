import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const artPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const artAssetPath = resolve(repoRoot, 'docs/public/art-program')

const expectedAssets = [
  'cover-girl-painting.png',
  'the-painting.jpg',
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
  'summer-camp-showcase.jpg',
  'summer-camp-fruit-platter.jpg',
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

test('art programs page owns its marketing chrome and links from home', () => {
  const source = readArtPage()
  const home = readHomePage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /Art Programs[\s\S]*Creativity grows through practice/)
  assert.match(source, /Children's Art Journey/)
  assert.match(source, /Teen Art Pathway/)
  assert.match(source, /Adult Art Journey/)
  assert.match(source, /The Joys of Making/)
  assert.doesNotMatch(source, /Special Workshops & Camps/)
  assert.match(source, /Creative Camps & Events/)
  assert.match(source, /Gallery of Growth/)
  assert.match(source, /Ready to Begin\?/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.match(home, /\{ label: 'Art Programs', to: '\/art-programs'/)
  assert.match(home, /title: 'Art Programs',[\s\S]*to: '\/art-programs'/)
})

test('art programs page keeps reference card image treatments', () => {
  const source = readArtPage()

  assert.match(source, /rounded-3xl bg-white\/85 p-4/)
  assert.match(source, /class="child-photo-frame"/)
  assert.match(source, /class="teen-photo-frame"/)
  assert.match(source, /\.child-photo-frame::after/)
  assert.match(source, /\.teen-photo-frame::before/)
  assert.match(source, /clip-path: polygon/)
  assert.doesNotMatch(source, /transform: scale/)
  assert.match(source, /class="making-photo-frame"/)
  assert.match(source, /class="camp-photo-frame"/)
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
