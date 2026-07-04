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

function readJpegSize(asset: string) {
  const buffer = readFileSync(resolve(publicHomePath, asset))
  assert.equal(buffer.readUInt16BE(0), 0xFFD8)

  for (let offset = 2; offset < buffer.length;) {
    assert.equal(buffer[offset], 0xFF)
    const marker = buffer[offset + 1]
    const length = buffer.readUInt16BE(offset + 2)

    if (marker >= 0xC0 && marker <= 0xCF && ![0xC4, 0xC8, 0xCC].includes(marker)) {
      return {
        width: buffer.readUInt16BE(offset + 7),
        height: buffer.readUInt16BE(offset + 5),
      }
    }

    offset += 2 + length
  }

  throw new Error(`missing JPEG size: ${asset}`)
}

test('home page assets are copied into public home directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(publicHomePath, asset)), `missing public home asset: ${asset}`)
  }
})

test('home page uses copied public assets instead of local absolute paths', () => {
  const source = readHomePage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/home/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('program images keep the design crop ratio without zooming the photos', () => {
  const source = readHomePage()
  const artSize = readPngSize('art-program.png')
  const yogaSize = readJpegSize('yoga-program.jpg')

  assert.deepEqual(artSize, { width: 1600, height: 1000 })
  assert.deepEqual(yogaSize, { width: 1600, height: 1000 })
  assert.match(source, /aspect-\[16\/10\][^\n]+w-full[^\n]+object-cover/)
  assert.doesNotMatch(source, /group-hover:scale/)
  assert.doesNotMatch(source, /class="h-72 w-full object-cover/)
})

test('home page opens a floating bottom-right site-wide assistant chat', () => {
  const source = readHomePage()
  const assistant = readHomeAssistant()

  assert.match(source, /const isAssistantOpen = ref\(false\)/)
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
  assert.match(source, /class="hero-title[^"]*"[\s\S]*Art[\s\S]*Wellness[\s\S]*Community/)
  assert.match(source, /\.hero-title\s*\{[\s\S]*white-space:\s*nowrap/)
  assert.match(source, /Explore Our Programs/)
  assert.match(source, /<div class="text-center">[\s\S]*Welcome to\s*<[^>]+>\s*Our Studio[\s\S]*A warm, inspiring space designed for creativity, mindfulness, and meaningful connection\./)
  assert.match(source, /Why Families Choose\s*<[^>]+>\s*XinYi/)
  assert.match(source, /Handwritten Memories/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})
