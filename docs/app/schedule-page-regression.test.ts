import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const schedulePagePath = resolve(repoRoot, 'docs/app/pages/schedules.vue')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const artPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const wellnessPagePath = resolve(repoRoot, 'docs/app/pages/wellness.vue')
const aboutPagePath = resolve(repoRoot, 'docs/app/pages/about.vue')
const scheduleAssetPath = resolve(repoRoot, 'docs/public/schedule')

const expectedAssets = [
  'art-supplies.png',
  'plant-jar.png',
  'wellness-illustration.png',
]

const referenceCopy = [
  'Class Schedule',
  'Find the right class for every age and every stage.',
  'Creativity grows here.',
  'Traditional Art Classes',
  'Kids Art Fundamental Level 2',
  'Build strong art basics through fun and engaging projects.',
  'Painting & CG Digital',
  'Explore digital art and creative painting techniques.',
  'Creative Sketch & Color',
  'Develop observation and expression with sketch and color.',
  'Kids Art Fundamental Level 1',
  'Art exploration for young beginners.',
  'Sketch & Painting',
  'Learn sketching skills and painting techniques.',
  'Acrylic & Watercolor Painting',
  'Express your creativity with acrylic and watercolor.',
  'Intermediate Sketch & Watercolor',
  'Enhance your sketching and watercolor techniques.',
  'Individual Tutor & Craft',
  'Personalized guidance for art or craft projects.',
  'Portfolio Preparation',
  'High-School Portfolio',
  'University Portfolio',
  'Adult Art',
  'Mixed Media Art (Adults)',
  'Private Art Sessions',
  'Private Art Session',
  'Customized lessons tailored to your goals and interests.',
  'Can\'t find a suitable time?',
  'Contact us. We may be able to arrange another class or private session for you.',
  'Interested in Wellness Programs?',
  'Discover yoga, meditation, seasonal retreats, and our Wednesday Silver Club.',
  'Explore Wellness',
]

function readSchedulePage() {
  assert.ok(existsSync(schedulePagePath), 'docs app must provide /schedules at docs/app/pages/schedules.vue')
  return readFileSync(schedulePagePath, 'utf8')
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

test('schedule assets are copied into public schedule directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(scheduleAssetPath, asset)), `missing public schedule asset: ${asset}`)
  }
})

test('schedule page uses copied public assets instead of local absolute paths', () => {
  const source = readSchedulePage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/schedule/${escapeRegExp(asset)}`))
  }
})

test('schedule page owns its marketing chrome and preserves assistant', () => {
  const source = readSchedulePage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /useSeoMeta\(/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})

test('schedule page keeps the visible reference copy', () => {
  const source = readSchedulePage()

  for (const copy of referenceCopy) {
    assert.match(source, new RegExp(escapeRegExp(copy), 'i'), `missing reference text: ${copy}`)
  }
})

test('schedule page keeps the reference table structure', () => {
  const source = readSchedulePage()

  assert.match(source, /const scheduleGroups = \[/)
  assert.match(source, /headers: \['Day', 'Time', 'Class', 'Age'\]/)
  assert.match(source, /Saturday[\s\S]*9:30 - 10:30[\s\S]*7 - 9/)
  assert.match(source, /By Appointment[\s\S]*Flexible[\s\S]*Children • Teens • Adults/)
  assert.match(source, /class="[^"]*schedule-table-card/)
  assert.match(source, /class="[^"]*schedule-table/)
})

test('marketing pages link to the schedule route', () => {
  for (const path of [homePagePath, artPagePath, wellnessPagePath, aboutPagePath]) {
    const source = readFileSync(path, 'utf8')
    assert.match(source, /\{ label: 'Schedules', to: '\/schedules'/, `${path} must link to /schedules`)
  }
})
