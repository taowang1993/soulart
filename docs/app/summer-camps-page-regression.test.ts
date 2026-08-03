import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import assert from 'node:assert/strict'

const root = process.cwd()
const pagePath = join(root, 'docs/app/pages/art-programs/summer-camps.vue')
const artProgramsPath = join(root, 'docs/app/pages/art-programs.vue')
const contactPagePath = join(root, 'docs/app/pages/contact.vue')
const publicDir = join(root, 'docs/public/summer-camps')

const expectedSummerCampAssets = [
  'hero-watercolor.webp',
  'outdoor-farm.webp',
  'fruit-platter.webp',
  'showcase.webp',
  'qr-code.jpg',
] as const

const marketingPages = [
  'docs/app/pages/index.vue',
  'docs/app/pages/art-programs.vue',
  'docs/app/pages/art-programs/student-gallery.vue',
  'docs/app/pages/art-programs/summer-camps.vue',
  'docs/app/pages/wellness.vue',
  'docs/app/pages/schedules.vue',
  'docs/app/pages/resources.vue',
  'docs/app/pages/about.vue',
  'docs/app/pages/contact.vue',
]

function readPage() {
  return readFileSync(pagePath, 'utf8')
}

test('summer camp assets are copied into the public summer-camps directory', () => {
  for (const asset of expectedSummerCampAssets) {
    assert.ok(existsSync(join(publicDir, asset)), `${asset} should exist`)
  }
  assert.deepEqual(readdirSync(publicDir).sort(), [...expectedSummerCampAssets].sort())
})

test('summer camps page owns marketing chrome and preserves assistant', () => {
  const source = readPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header: false,[\s\S]*footer: false,[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(\{[\s\S]*title: 'Summer Camps \| XinYi Class'/)
  assert.match(source, /<HomeAssistantChat v-model:open="isAssistantOpen" \/>/)
})

test('summer camps page follows the reference content', () => {
  const source = readPage()
  const requiredCopy = [
    'Summer Art Camp',
    'Create · Explore · Grow Together',
    'Morning',
    'Outdoor Sketching',
    'Craft & Create',
    'Play',
    'Lunch & Snacks',
    'Museum Explore',
    'Showcase',
    'Every masterpiece begins with one joyful step.',
    'Camp Information',
    '2-Week Program',
    'July 20–24 & 27–31',
    '9:30 AM – 4:30 PM',
    'Ages 6–13',
    '105 Gordon Baker Rd., #704',
    '$120/day',
    '$100/day',
    'What’s Included',
    'A Summer Full of Creativity!',
    'What to Bring',
    'Notes',
    'Contact Us',
    'Ready to Join Us?',
    'Scan to Learn More',
  ]

  for (const copy of requiredCopy) {
    assert.match(source, new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('summer camps page uses copied public assets only', () => {
  const source = readPage()
  const allowed = new Set(expectedSummerCampAssets.map(asset => `/summer-camps/${asset}`))
  const localPathPattern = /\/Users\/max\/projects\/resources\//
  const remoteImagePattern = /https?:\/\/[^'"\s]+\.(?:png|jpe?g|webp|gif)/i

  assert.doesNotMatch(source, localPathPattern)
  assert.doesNotMatch(source, remoteImagePattern)

  const referencedAssets = [...source.matchAll(/['"](\/summer-camps\/[^'"]+)['"]/g)]
  assert.ok(referencedAssets.length > 0)
  for (const match of referencedAssets) {
    assert.ok(allowed.has(match[1]!), `${match[1]} should be part of the copied summer camp assets`)
  }
})

test('summer camps navigation marks the current section and keeps the booking action', () => {
  const source = readPage()

  assert.match(source, /label: 'Art Programs',[\s\S]*active: true/)
  assert.doesNotMatch(source, /:aria-current="item\.active/)
  assert.match(source, /label: 'Summer Camps', to: '\/art-programs\/summer-camps',[\s\S]*current: true/)
  assert.match(source, /to="\/contact\?interest=Summer%20Camp#message"[\s\S]*>\s*Book Camp\s*</)
  assert.doesNotMatch(source, /to="\/docs\/manual\/(?:en|zh)\/getting-started\/installation"/)
})

test('marketing art program navigation exposes Summer Camps', () => {
  for (const page of marketingPages) {
    const source = readFileSync(join(root, page), 'utf8')
    assert.match(source, /label: 'Summer Camps', to: '\/art-programs\/summer-camps'/, `${page} should expose Summer Camps`)
  }
})

test('art programs page routes the summer camps card to the summer camps page', () => {
  const source = readFileSync(artProgramsPath, 'utf8')

  assert.match(source, /title: 'Summer Camps',[\s\S]*to: '\/art-programs\/summer-camps'/)
  assert.match(source, /:to="program\.to"/)
})

test('contact form accepts Summer Camp booking links', () => {
  const source = readFileSync(contactPagePath, 'utf8')

  assert.match(source, /'Summer Camp'/)
})
