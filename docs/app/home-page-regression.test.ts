import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const publicHomePath = resolve(repoRoot, 'docs/public/home')

const expectedAssets = [
  'art-program.png',
  'card-from-doris.jpg',
  'card-from-jasmine.jpg',
  'musical-hero.jpg',
  'new-classroom.jpg',
  'qr-code.jpg',
  'yoga-program.jpg',
]

function readHomePage() {
  assert.ok(existsSync(homePagePath), 'docs app must provide a custom / page at docs/app/pages/index.vue')
  return readFileSync(homePagePath, 'utf8')
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

test('home page owns its marketing chrome without changing docs routes', () => {
  const source = readHomePage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /Art[\s\S]*Wellness[\s\S]*Community/)
  assert.match(source, /Explore Our Programs/)
  assert.match(source, /Welcome to\s*<[^>]+>\s*Our Studio/)
  assert.match(source, /Why Families Choose\s*<[^>]+>\s*XinYi/)
  assert.match(source, /Handwritten Memories/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})
