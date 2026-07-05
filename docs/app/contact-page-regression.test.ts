import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const contactPagePath = resolve(repoRoot, 'docs/app/pages/contact.vue')
const pagePaths = [
  resolve(repoRoot, 'docs/app/pages/index.vue'),
  resolve(repoRoot, 'docs/app/pages/art-programs.vue'),
  resolve(repoRoot, 'docs/app/pages/wellness.vue'),
  resolve(repoRoot, 'docs/app/pages/about.vue'),
  resolve(repoRoot, 'docs/app/pages/schedules.vue'),
]
const contactAssetPath = resolve(repoRoot, 'docs/public/contact')

const expectedAssets = [
  'hero-leaves.png',
  'hero-art.png',
  'ai-assistant.png',
  'studio-map.png',
] as const

const expectedAssetSizes = {
  'hero-leaves.png': { width: 720, height: 760 },
  'hero-art.png': { width: 840, height: 780 },
  'ai-assistant.png': { width: 650, height: 420 },
  'studio-map.png': { width: 1900, height: 480 },
}

const referenceCopy = [
  'Let’s Create Something',
  'Beautiful Together',
  'Whether you’re looking for an art class, yoga practice, or simply have a question, I’d love to hear from you.',
  'Get in Touch',
  'Xinyi Class is a creative space for art, yoga and personal growth.',
  'Unit 704',
  '105 Gordon Baker Rd',
  'North York, ON M2H 3P8',
  '416-567-6538',
  'WeChat: Xinyiarttoronto',
  'xinyiartschool@gmail.com',
  '@XinyiArt-Yoga-Healing',
  'Book a Trial Class',
  'Send Us a Message',
  'Your Name',
  'Email Address',
  'Phone Number',
  'I’m interested in',
  'Please select',
  'Message',
  'Keep me updated about workshops, retreats, new classes and seasonal events.',
  'Send Message',
  'Not sure where to begin?',
  'Talk with Xinyi AI Assistant',
  'Our AI can help you choose the right class before you contact us.',
  'Talk with AI Assistant',
  'Visit Our Studio',
  'North York, Ontario',
  'Parking available',
  'Near HW404 & Finch',
  'Wheelchair accessible',
  'Thank you for visiting!',
  'I look forward to creating, growing and learning with you.',
  'Art • Wellness • Community',
  '© 2026 Xinyi Class',
]

function readContactPage() {
  assert.ok(existsSync(contactPagePath), 'docs app must provide /contact at docs/app/pages/contact.vue')
  return readFileSync(contactPagePath, 'utf8')
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function readPngSize(asset: (typeof expectedAssets)[number]) {
  const source = readFileSync(resolve(contactAssetPath, asset))

  assert.equal(source.subarray(1, 4).toString('ascii'), 'PNG')
  return { width: source.readUInt32BE(16), height: source.readUInt32BE(20) }
}

test('contact assets are copied into public contact directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(contactAssetPath, asset)), `missing public contact asset: ${asset}`)
  }
})

test('contact decorative crops match the reference artwork bounds', () => {
  for (const asset of expectedAssets) {
    assert.deepEqual(readPngSize(asset), expectedAssetSizes[asset])
  }
})

test('contact page uses copied public assets instead of local absolute paths', () => {
  const source = readContactPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/contact/${escapeRegExp(asset)}`))
  }
})

test('contact page owns its marketing chrome and preserves assistant', () => {
  const source = readContactPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})

test('contact page keeps the visible reference copy', () => {
  const source = readContactPage()

  for (const copy of referenceCopy) {
    assert.match(source, new RegExp(escapeRegExp(copy), 'i'), `missing reference text: ${copy}`)
  }
})

test('contact page keeps the reference form fields', () => {
  const source = readContactPage()

  assert.match(source, /<form[\s\S]*@submit\.prevent/)
  assert.match(source, /name="name"/)
  assert.match(source, /type="email"/)
  assert.match(source, /name="phone"/)
  assert.match(source, /name="interest"/)
  assert.match(source, /<textarea[\s\S]*name="message"/)
  assert.match(source, /type="checkbox"/)
})

test('marketing pages link to the contact route', () => {
  for (const pagePath of pagePaths) {
    const source = readFileSync(pagePath, 'utf8')

    assert.match(source, /\{ label: 'Contact', to: '\/contact'/, `${pagePath} must link Contact nav to /contact`)
  }
})
