import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const homeAssistantPath = resolve(repoRoot, 'docs/app/components/HomeAssistantChat.vue')
const publicHomePath = resolve(repoRoot, 'docs/public/home')

const expectedAssets = [
  'art-program.png',
  'card-from-doris.jpg',
  'card-from-jasmine.jpg',
  'logo.png',
  'musical-hero.jpg',
  'new-classroom.jpg',
  'qr-code.jpg',
  'yoga-program.jpg',
]

const expectedElementAssets = [
  'hero-connect.webp',
  'hero-create.webp',
  'hero-thrive.webp',
  'leaf-row.webp',
  'leaf-single.webp',
  'program-art.webp',
  'program-yoga.webp',
  'reason-community.webp',
  'reason-confidence.webp',
  'reason-creativity.webp',
  'reason-focus.webp',
  'reason-joy.webp',
  'reason-wellbeing.webp',
  'shortcut-assistant.webp',
  'shortcut-summer.webp',
  'shortcut-yoga.webp',
  'studio-calm.webp',
  'studio-creative.webp',
  'studio-groups.webp',
  'studio-light.webp',
]

function readHomePage() {
  assert.ok(existsSync(homePagePath), 'docs app must provide a custom / page at docs/app/pages/index.vue')
  return readFileSync(homePagePath, 'utf8')
}

function readHomeAssistant() {
  assert.ok(existsSync(homeAssistantPath), 'home page must provide a bottom-right assistant component')
  return readFileSync(homeAssistantPath, 'utf8')
}

function readPngSize(asset: string) {
  const buffer = readFileSync(resolve(publicHomePath, asset))
  assert.equal(buffer.subarray(1, 4).toString('ascii'), 'PNG')

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  }
}

test('home page assets are copied into public home directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(publicHomePath, asset)), `missing public home asset: ${asset}`)
  }

  for (const asset of expectedElementAssets) {
    assert.ok(existsSync(resolve(publicHomePath, 'elements', asset)), `missing supplied home element: ${asset}`)
  }
})

test('home page uses copied public assets instead of local absolute paths', () => {
  const source = readHomePage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/home/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
  for (const asset of expectedElementAssets) {
    assert.match(source, new RegExp(`/home/elements/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('program images keep the design crop ratio', () => {
  const source = readHomePage()
  const artSize = readPngSize('art-program.png')

  assert.ok(artSize.width > artSize.height, 'art program asset must be cropped as a landscape card image')
  assert.ok(Math.abs((artSize.width / artSize.height) - 1.6) < 0.02, 'art program crop should match the 16:10 design card ratio')
  assert.match(source, /<div class="mx-auto max-w-5xl">[\s\S]*Explore Our Programs/)
  assert.match(source, /aspect-\[16\/10\][^\n]+w-full[^\n]+object-cover/)
  assert.doesNotMatch(source, /class="h-72 w-full object-cover/)
})

test('home page opens a floating bottom-right site-wide assistant chat', () => {
  const source = readHomePage()
  const assistant = readHomeAssistant()

  assert.match(source, /const isAssistantOpen = shallowRef\(false\)/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /Talk with AI Assistant/)
  assert.match(assistant, /new Chat\(/)
  assert.match(assistant, /DefaultChatTransport/)
  assert.match(assistant, /config\.public\.assistant\.apiPath/)
  assert.match(assistant, /'X-TockDocs-Scope': 'site'/)
  assert.match(assistant, /aria-label="Talk with AI Assistant"/)
  assert.match(assistant, /src="\/home\/logo\.png"/)
  assert.match(assistant, /fixed bottom-4 right-4/)
  assert.doesNotMatch(assistant, /Searches all knowledge bases/)
  assert.doesNotMatch(assistant, /border-t border-\[#eaddec\]/)
})

test('home page owns its marketing chrome without changing docs routes', () => {
  const source = readHomePage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /\{ label: 'Yoga Wellness', to: '\/wellness'/)
  assert.match(source, /class="hero-title[^"]*"[\s\S]*Art[\s\S]*Yoga Wellness[\s\S]*Community/)
  assert.match(source, /\.hero-title\s*\{[\s\S]*white-space:\s*nowrap/)
  assert.match(source, /Explore Our Programs/)
  assert.match(source, /\{ text: 'Summer Outdoor Yoga Retreat Registration', action: 'Open Here', to: '\/wellness#retreat', image: '\/home\/elements\/shortcut-yoga\.webp', assistant: false \}/)
  assert.match(source, /\{ text: 'Upcoming Workshops', action: 'Open Here', to: '\/art-programs#events', image: '\/home\/elements\/shortcut-summer\.webp', assistant: false \}/)
  assert.match(source, /\{ text: 'Meet XinYi AI Assistant', action: 'Open Here', to: '', image: '\/home\/elements\/shortcut-assistant\.webp', assistant: true \}/)
  assert.match(source, /:src="item\.image"/)
  assert.match(source, /@click="item\.assistant && \(isAssistantOpen = true\)"/)
  assert.doesNotMatch(source, /Read More Stories/)
  assert.match(source, /<div class="text-center">[\s\S]*Welcome to\s*<[^>]+>\s*Our Studio[\s\S]*XinYi Art School &amp; XinYi Yoga — a creative community in North Toronto, where art, mindfulness, and lifelong learning come together\./)
  assert.match(source, /Children&apos;s Art Classes • Adult Art Lessons • Summer Camps • Portfolio Preparation • Gentle Yoga • Meditation • Mindfulness/)
  assert.match(source, /Why Families Choose\s*<[^>]+>\s*XinYi/)
  assert.match(source, /Handwritten Memories/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})
