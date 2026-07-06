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
  'children-4-6-study-cat.jpg',
  'children-4-6-winter-fun.jpg',
  'children-7-9-lion-dance.jpg',
  'children-7-9-milk-maid.jpg',
  'children-7-9-spring.jpg',
  'children-10-12-dream.jpg',
  'children-10-12-rapunzel.jpg',
  'children-10-12-unicorn.jpg',
  'teen-13-15-ancient-girl.jpg',
  'teen-13-15-christmas.jpg',
  'teen-13-15-violin.jpg',
  'teen-15-18-autumn.jpg',
  'teen-15-18-girl.jpg',
  'teen-15-18-sunset.jpg',
  'portfolio-helen.jpg',
  'portfolio-serena.jpg',
  'portfolio-sunny.jpg',
  'adult-eva.jpg',
  'adult-painting-family.jpg',
  'adult-town.jpg',
  'adult-watercolor-amanda.jpg',
  'adult-watercolor-sophia.jpg',
  'adult-watercolor-zinyin.jpg',
  'craft-clay-bowl.jpg',
  'craft-clay-lotus.jpg',
  'craft-clay-minecraft.jpg',
  'craft-crochet.jpg',
  'craft-crochet-bear.jpg',
  'craft-crochet-bunnies.jpg',
  'craft-mixed-media.jpg',
  'craft-mixed-media-collage.jpg',
  'craft-mixed-media-owl.jpg',
  'craft-paper-flower.jpg',
  'craft-paper-flowers.jpg',
  'craft-paper-garden.jpg',
  'chinese-bird-moon.jpg',
  'chinese-calligraphy-scroll.jpg',
  'chinese-crane.jpg',
  'chinese-landscape.jpg',
  'chinese-lotus-calligraphy.jpg',
  'chinese-lotus.jpg',
  'chinese-meditation.jpg',
  'chinese-orchid.jpg',
  'chinese-serenity.jpg',
  'chinese-tea-window.jpg',
] as const

const referenceCopy = [
  'Students\' Gallery',
  'Celebrating creativity, imagination and growth at every age.',
  'Children\'s Art Works',
  'Age 4–6',
  'Age 7–9',
  'Age 10–12',
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

function categoryBlock(source: string, label: string) {
  const start = source.indexOf(`label: '${label}'`)
  assert.notEqual(start, -1, `missing gallery category ${label}`)

  const next = source.indexOf('label: \'', start + label.length + 9)
  return source.slice(start, next === -1 ? undefined : next)
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

test('student gallery category tabs only show artwork from their matching source folder', () => {
  const source = readPage()
  const categories = [
    ['Age 4–6', 'children-4-6-', /children-(?:7-9|10-12)-|teen-|portfolio-|adult-|craft-/],
    ['Age 7–9', 'children-7-9-', /children-(?:4-6|10-12)-|teen-|portfolio-|adult-|craft-/],
    ['Age 10–12', 'children-10-12-', /children-(?:4-6|7-9)-|teen-|portfolio-|adult-|craft-/],
    ['Age 13–15', 'teen-13-15-', /children-|teen-15-18-|portfolio-|adult-|craft-/],
    ['Age 15–18', 'teen-15-18-', /children-|teen-13-15-|portfolio-|adult-|craft-/],
    ['Portfolios', 'portfolio-', /children-|teen-|adult-|craft-/],
    ['Paintings', 'adult-', /children-|teen-|portfolio-|adult-watercolor-|craft-/],
    ['Watercolor', 'adult-watercolor-', /children-|teen-|portfolio-|adult-(?:eva|painting|town)|craft-/],
    ['Paper Crafts', 'craft-paper-', /children-|teen-|portfolio-|adult-|craft-(?:clay|crochet|mixed)-/],
    ['Clay & Pottery', 'craft-clay-', /children-|teen-|portfolio-|adult-|craft-(?:paper|crochet|mixed)-/],
    ['Textile & Yarn', 'craft-crochet', /children-|teen-|portfolio-|adult-|craft-(?:paper|clay|mixed)-/],
    ['Mixed Media', 'craft-mixed-media-', /children-|teen-|portfolio-|adult-|craft-(?:paper|clay|crochet)/],
  ] as const

  for (const [label, expectedPrefix, wrongPrefix] of categories) {
    const block = categoryBlock(source, label)

    assert.match(block, new RegExp(`/student-gallery/${expectedPrefix}`), `${label} must include its own source-folder assets`)
    assert.doesNotMatch(block, wrongPrefix, `${label} must not include assets from another category`)
  }
})

test('student gallery carousel controls are real Vue controls without breaking the reference card layout', () => {
  const source = readPage()

  assert.match(source, /const activeCategoryIndexes = reactive/)
  assert.match(source, /const activeGalleryIndexes = reactive/)
  assert.match(source, /activeWorks\(section\)/)
  assert.match(source, /visibleWorks\(section\)/)
  assert.match(source, /@click="setActiveCategory\(section\.id, index\)"/)
  assert.match(source, /@click="stepWork\(section\.id, activeWorks\(section\)\.length, -1\)"/)
  assert.match(source, /@click="stepWork\(section\.id, activeWorks\(section\)\.length, 1\)"/)
  assert.match(source, /grid-template-columns: repeat\(3, minmax\(0, 1fr\)\)/)
  assert.doesNotMatch(source, /flex:\s*0 0 100%/)
  assert.doesNotMatch(source, /Ready to Begin\?/) // reference jumps from Chinese art to footer
})

test('student gallery opens the requested section, category, and slide from art program links', () => {
  const source = readPage()

  assert.match(source, /const route = useRoute\(\)/)
  assert.match(source, /function applyGalleryRoute\(\)/)
  assert.match(source, /route\.query\.section/)
  assert.match(source, /route\.query\.category/)
  assert.match(source, /route\.query\.slide/)
  assert.match(source, /activeCategoryIndexes\[section\.id\] = categoryIndex/)
  assert.match(source, /activeGalleryIndexes\[section\.id\] = normalizeSlideIndex\(slideIndex, activeWorks\(section\)\.length\)/)
  assert.match(source, /watch\(\(\) => route\.fullPath, applyGalleryRoute\)/)
})

test('Chinese Painting & Calligraphy section is a real carousel with copied Chinese gallery assets', () => {
  const source = readPage()
  const chineseAssets = expectedGalleryAssets.filter(asset => asset.startsWith('chinese-'))

  assert.ok(chineseAssets.length >= 6, 'Chinese carousel needs multiple artworks')
  for (const asset of chineseAssets) {
    assert.match(source, new RegExp(`/student-gallery/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }

  assert.match(source, /const chineseWorks: GalleryWork\[\]/)
  assert.match(source, /const activeChineseIndex = shallowRef\(0\)/)
  assert.match(source, /const activeChineseWork = computed<GalleryWork>/)
  assert.match(source, /:src="activeChineseWork\.image"/)
  assert.match(source, /aria-label="Previous Chinese artwork"/)
  assert.match(source, /aria-label="Next Chinese artwork"/)
  assert.match(source, /@click="stepChineseWork\(-1\)"/)
  assert.match(source, /@click="stepChineseWork\(1\)"/)
  assert.match(source, /@click="setActiveChineseWork\(index\)"/)
  assert.doesNotMatch(source, /const chineseWork = \{/)
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
    assert.match(source, /children: \[[\s\S]*label: 'Student Gallery', to: '\/art-programs\/student-gallery'/, `${path} must add the Student Gallery dropdown item`)
    assert.match(source, /i-lucide-chevron-down/, `${path} must show a dropdown affordance`)
    assert.doesNotMatch(source, /top-full z-30 mt-2 min-w-52/, `${path} dropdown must not leave an unhoverable margin gap`)
  }
})
