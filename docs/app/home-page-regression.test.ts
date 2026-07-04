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

test('program images keep the design crop ratio', () => {
  const source = readHomePage()

  assert.match(source, /aspect-\[16\/10\][^\n]+w-full[^\n]+object-cover/)
  assert.doesNotMatch(source, /class="h-72 w-full object-cover/)
})

test('home page opens a bottom-right site-wide assistant chat', () => {
  const source = readHomePage()
  const assistant = readHomeAssistant()

  assert.match(source, /const isAssistantOpen = ref\(false\)/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.match(source, /type="button"[\s\S]*@click="isAssistantOpen = true"[\s\S]*Talk with AI Assistant/)
  assert.match(assistant, /new Chat\(/)
  assert.match(assistant, /DefaultChatTransport/)
  assert.match(assistant, /config\.public\.assistant\.apiPath/)
  assert.match(assistant, /'X-TockDocs-Scope': 'site'/)
  assert.match(assistant, /fixed bottom-4 right-4/)
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
