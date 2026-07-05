import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const aboutPagePath = resolve(repoRoot, 'docs/app/pages/about.vue')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const artPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const wellnessPagePath = resolve(repoRoot, 'docs/app/pages/wellness.vue')
const aboutAssetPath = resolve(repoRoot, 'docs/public/about')

const expectedAssets = [
  'hero.png',
  'xinyi-toronto.png',
  'art-awakening.jpg',
  'watercolor-cover.jpg',
  'meditation.png',
  'lake-meditation.jpg',
  'lake-portrait.jpg',
  'student-photo.png',
  'outdoor-activities.png',
  'ai-creativity.png',
]

const referenceCopy = [
  'About XinYi',
  'Artist • Educator • Wellness Facilitator',
  'Creativity changed my life. Now I help others discover theirs.',
  'My Journey',
  'From Lecturer to Lifelong Learner',
  'life invited me to slow down and listen',
  'A Turning Point',
  'Success alone does not create fulfillment.',
  'People need creativity.',
  'People need well-being.',
  'People need connection.',
  'Art Taught Me to See. Yoga Taught Me to Listen.',
  'I did not find art. Art found me.',
  'I did not choose yoga. Yoga arrived when I needed it most.',
  'Over time, both became teachers.',
  'Art opens our eyes to beauty and possibility.',
  'Yoga brings us home to presence and peace.',
  'Together, they create a path of balance, healing and authentic living.',
  'XinYi Class Was Born',
  'The Heart of My Teaching',
  'I hope each student discovers joy, presence, and the courage to keep learning for life itself.',
  'In the Age of AI, Human Creativity Matters More Than Ever.',
  'Artificial intelligence can generate images, write stories, and answer questions in seconds.',
  'Knowledge is becoming easier to access. But creativity is becoming more valuable.',
  'It belongs to those who can create.',
]

function pngSize(path: string) {
  const buffer = readFileSync(path)
  assert.equal(buffer.toString('ascii', 1, 4), 'PNG')
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  }
}

function readAboutPage() {
  assert.ok(existsSync(aboutPagePath), 'docs app must provide /about at docs/app/pages/about.vue')
  return readFileSync(aboutPagePath, 'utf8')
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

test('about assets are copied into public about directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(aboutAssetPath, asset)), `missing public about asset: ${asset}`)
  }
})

test('about page uses copied public assets instead of local absolute paths', () => {
  const source = readAboutPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/about/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('about page owns its marketing chrome and preserves assistant', () => {
  const source = readAboutPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})

test('about page keeps the visible reference copy', () => {
  const source = readAboutPage()

  for (const copy of referenceCopy) {
    assert.match(source, new RegExp(escapeRegExp(copy), 'i'), `missing reference text: ${copy}`)
  }
})

test('marketing pages link to the about route', () => {
  const home = readFileSync(homePagePath, 'utf8')
  const art = readFileSync(artPagePath, 'utf8')
  const wellness = readFileSync(wellnessPagePath, 'utf8')

  assert.match(home, /\{ label: 'About', to: '\/about'/)
  assert.match(art, /\{ label: 'About', to: '\/about'/)
  assert.match(wellness, /\{ label: 'About', to: '\/about'/)
})

test('about page keeps the reference image treatments', () => {
  const source = readAboutPage()
  const outdoor = pngSize(resolve(aboutAssetPath, 'outdoor-activities.png'))
  const toronto = pngSize(resolve(aboutAssetPath, 'xinyi-toronto.png'))

  assert.match(source, /class="[^"]*about-hero-portrait/)
  assert.match(source, /class="[^"]*about-image-card/)
  assert.match(source, /class="[^"]*about-quote-card/)
  assert.match(source, /src="\/about\/meditation\.png"[\s\S]*object-contain/)
  assert.match(source, /src="\/about\/lake-portrait\.jpg"[\s\S]*object-contain/)
  assert.ok(outdoor.width < outdoor.height, 'outdoor activity image must be cropped to remove the blank right half')
  assert.ok(toronto.height < toronto.width, 'Toronto image must be trimmed to remove the blank bottom band')
  assert.doesNotMatch(source, /Ready to Begin Your Journey\?/, 'the reference page goes from the AI section to the footer')
})
