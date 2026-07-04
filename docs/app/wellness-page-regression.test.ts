import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')
const wellnessPagePath = resolve(repoRoot, 'docs/app/pages/wellness.vue')
const homePagePath = resolve(repoRoot, 'docs/app/pages/index.vue')
const artPagePath = resolve(repoRoot, 'docs/app/pages/art-programs.vue')
const wellnessAssetPath = resolve(repoRoot, 'docs/public/wellness')

const expectedAssets = [
  'hero-wellness.jpg',
  'yin-yoga.jpg',
  'flow-yoga.jpg',
  'chair-yoga.jpg',
  'inside-flow.jpg',
  'sound-healing-session.jpg',
  'outdoor-yoga.jpg',
  'silver-club.jpg',
]

const referenceCopy = [
  'XinYi Wellness',
  'Wellness',
  'Move. Breathe. Create.',
  'A calm path through yoga, meditation, sound healing, seasonal retreats, and community care.',
  'Explore Classes',
  'Book a Trial',
  'Practice With Us',
  'Yoga Journey',
  'Choose the practice that meets your body today.',
  'Yin Yoga',
  'A slow, grounding practice to open the body and calm the nervous system.',
  'Deep Stretch',
  'Stillness',
  'Rest',
  'Flow Yoga',
  'Breath-led movement that builds strength, balance, and steady energy.',
  'Movement',
  'Balance',
  'Vitality',
  'Chair Yoga',
  'Accessible movement for mobility, posture, and everyday comfort.',
  'Gentle',
  'Adaptive',
  'Supportive',
  'Inside Flow',
  'Music, rhythm, and mindful movement become one expressive practice.',
  'Expression',
  'Restore the Nervous System',
  'Meditation & Sound Healing',
  'Sink into soft sound, guided breath, and steady attention. These sessions offer a quiet space to release stress and reconnect with yourself.',
  'Sound Bath Sessions',
  'Guided Meditation',
  'Mindful Breathing',
  'Gather & Renew',
  'Workshops & Retreats',
  'Outdoor experiences to help you slow down, reconnect with nature, and nourish your body and soul.',
  'Outdoor Practice',
  'Move gently, breathe deeply, and reconnect with nature.',
  'Mindful Art',
  'Use color, journaling, and simple making as restorative tools.',
  'Community Time',
  'Share tea, conversation, and quiet moments with like-minded friends.',
  'Community Care',
  'Silver Club 50+',
  'A gentle community for wisdom, movement, creativity, and friendship. Everyone is welcome, and every practice can be adapted.',
  'Creative Wellness',
  'Tea & Conversation',
  'Seasonal Outings',
  'New Students Welcome',
  'Begin Your Wellness Journey',
  'Choose the practice that feels right, or contact us and we will help you find a gentle first step.',
  'Schedule a Trial',
  'Explore Art Programs',
]

function readWellnessPage() {
  assert.ok(existsSync(wellnessPagePath), 'docs app must provide /wellness at docs/app/pages/wellness.vue')
  return readFileSync(wellnessPagePath, 'utf8')
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function readJpegSize(asset: string) {
  const source = readFileSync(resolve(wellnessAssetPath, asset))
  const text = source.toString('latin1')
  const match = /\xFF\xC0[\s\S]{3}([\s\S]{4})/.exec(text)

  assert.ok(match, `${asset} must be a baseline JPEG`)

  const bytes = Buffer.from(match[1]!, 'latin1')
  return { width: bytes.readUInt16BE(2), height: bytes.readUInt16BE(0) }
}

test('wellness assets are copied into public wellness directory', () => {
  for (const asset of expectedAssets) {
    assert.ok(existsSync(resolve(wellnessAssetPath, asset)), `missing public wellness asset: ${asset}`)
  }
})

test('wellness page uses copied public assets instead of local absolute paths', () => {
  const source = readWellnessPage()

  assert.doesNotMatch(source, /\/Users\/max\/projects\/resources/)
  for (const asset of expectedAssets) {
    assert.match(source, new RegExp(`/wellness/${asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  }
})

test('wellness page owns its marketing chrome and preserves assistant', () => {
  const source = readWellnessPage()

  assert.match(source, /definePageMeta\(\{[\s\S]*header:\s*false[\s\S]*footer:\s*false[\s\S]*\}\)/)
  assert.match(source, /Wellness[\s\S]*Move\. Breathe\. Create\./)
  assert.match(source, /Yoga Journey/)
  assert.match(source, /Meditation & Sound Healing/)
  assert.match(source, /Workshops & Retreats/)
  assert.match(source, /Silver Club 50\+/)
  assert.match(source, /Begin Your Wellness Journey/)
  assert.match(source, /<HomeAssistantChat\s+v-model:open="isAssistantOpen"\s+\/>/)
  assert.doesNotMatch(source, /<KnowledgeBaseDirectory/)
})

test('wellness page keeps every visible reference text block', () => {
  const source = readWellnessPage()

  for (const copy of referenceCopy) {
    assert.match(source, new RegExp(escapeRegExp(copy), 'i'), `missing reference text: ${copy}`)
  }
})

test('home and art pages link to the wellness route', () => {
  const home = readFileSync(homePagePath, 'utf8')
  const art = readFileSync(artPagePath, 'utf8')

  assert.match(home, /\{ label: 'Wellness', to: '\/wellness'/)
  assert.match(home, /title: 'Wellness Programs',[\s\S]*to: '\/wellness'/)
  assert.match(art, /\{ label: 'Wellness', to: '\/wellness'/)
  assert.match(art, /\{ label: 'Wellness', to: '\/wellness' \}/)
})

test('wellness page keeps reference image treatments', () => {
  const source = readWellnessPage()

  assert.match(source, /class="wellness-hero-card"/)
  assert.match(source, /class="wellness-card-photo h-48 w-full object-cover"/)
  assert.match(source, /class="sound-photo-frame"/)
  assert.match(source, /class="silver-photo-frame"/)
  assert.match(source, /rounded-\[2rem\]/)
  assert.match(source, /object-cover/)
})

test('wellness card images are exact crops from the reference design', () => {
  assert.deepEqual(readJpegSize('hero-wellness.jpg'), { width: 1300, height: 1040 })
  assert.deepEqual(readJpegSize('yin-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('flow-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('chair-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('inside-flow.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('sound-healing-session.jpg'), { width: 1430, height: 1240 })
  assert.deepEqual(readJpegSize('silver-club.jpg'), { width: 1820, height: 1050 })
})
