import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
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

const expectedImageHashes: Record<string, string> = {
  'hero-wellness.jpg': '59a37bb991ac050557434adc5ed3ad1a3651c78f758e28559cb121d6a59ab38d',
  'yin-yoga.jpg': 'c24a61dc085485a22714fee546eecc528b091b3c1ed5abdc98d0c255a6a84e53',
  'flow-yoga.jpg': 'cd2110c9453cebc17a0f99603598023386680c532c877aca82926cc47f4ef857',
  'chair-yoga.jpg': '549aac6b06aa6985136f7c6eaccb82b89bc98ee6a0d174a559ca966663d32bcf',
  'inside-flow.jpg': 'eda025931aab2071f435b6ffa9ecff2eb579f2907074b63af8c5d7638d2c08e2',
}

const referenceCopy = [
  'XinYi Wellness',
  'Wellness',
  'Move. Breathe. Create.',
  'Nurturing body, mind and spirit through yoga, meditation and mindful living.',
  'Yoga Journey',
  'Gentle, Yin, Flow for every body and every stage.',
  'Meditation',
  'Calm the mind, return to the present moment.',
  'Workshops & Retreats',
  'Deepen your practice and reconnect with yourself.',
  'Silver Club',
  'A warm community for 45+ women to grow together.',
  'Practice With Us',
  'Find the practice that nourishes your body, calms your mind and awakens your inner light.',
  'We offer a variety of yoga practices designed for all levels and all stages of life.',
  'Come as you are. Grow at your own pace.',
  'Yin Yoga',
  'Slow down. Release tension. Restore balance.',
  'Deep stretch & fascia release',
  'Calms the nervous system',
  'Flow Yoga',
  'Build strength, flexibility and mindful movement.',
  'Vinyasa flow',
  'Energy & endurance',
  'Chair Yoga',
  'Gentle movement for every body and every age.',
  'Joint-friendly',
  'Improve mobility & balance',
  'Inside Flow',
  'Yoga meets dance. Move, express, and flow from within.',
  'Creative & expressive',
  'Synchronize breath & movement',
  'Pause. Breathe. Come Home to Yourself.',
  'You don’t need to silence the mind. You just need to listen with kindness.',
  'Meditation helps us slow down, breathe deeply, and reconnect with the present moment.',
  'Sound healing uses vibration from singing bowls, gentle instruments, and soothing tones to relax the body and calm the nervous system.',
  'Together, meditation and sound invite you into deep rest, inner clarity, and emotional balance.',
  'Every breath is a return. Every moment is enough.',
  'Yoga Nidra',
  'Deep guided relaxation to restore body and mind while staying awake.',
  'Sound Bath',
  'Healing vibrations that balance your energy and calm the nervous system.',
  'Simple practices to help you cultivate awareness, presence and peace.',
  '90 Minutes',
  'Time to unwind, reset and restore.',
  'All Levels Welcome',
  'Beginners and experienced practitioners alike.',
  'Safe & Supportive Space',
  'A gentle environment to be yourself.',
  'What to Bring',
  'Comfortable clothing, yoga mat, blanket and an open heart.',
  'Retreat & Events',
  'Outdoor experiences to help you slow down, connect with nature, and nourish your body and soul.',
  'Day Retreat',
  'Recharge in Nature. Come Home to Yourself.',
  'Join us for a full day of rest, movement and connection in the beautiful Richmond Green Park.',
  'Surrounded by trees, fresh air and open space, we’ll practice yoga, breathe deeply, enjoy nourishing food, and take time to simply be.',
  'This retreat is an invitation to slow down, release tension, reconnect with yourself, and enjoy outdoor group activities while meeting more like-minded friends.',
  'All levels welcome.',
  'Date',
  'Wednesday',
  'August 26, 2026',
  'Time',
  '9:00am – 5:00pm',
  'Location',
  'Richmond Green Park',
  '(By Richmond Green Secondary School)',
  'Richmond Hill, ON',
  'Group Size',
  'Small Group',
  'Includes',
  'Yoga & Meditation',
  'Restorative Yoga',
  'Outdoor Group Activities',
  'Healthy Lunch & Snacks',
  'Herbal Tea & Warm Drinks',
  'Investment',
  '$150',
  'All-inclusive',
  'Breathe in nature. Move with ease. Connect with yourself and others.',
  'Art, Yoga, Meditation & Connection',
  'For 45+ Women',
  'A nurturing space for women 45 and above to relax, express, move, and grow.',
  'Together, we explore creativity, cultivate inner peace, and support one another on our beautiful journey of life.',
  'Every Wednesday Evening',
  '6:00 – 8:30 pm',
  'Xinyi Art School',
  '105 Gordon Baker Rd, Unit 704 (HW404 & Finch), North York, ON',
  'Come as you are. Leave feeling lighter, brighter, and more connected.',
  'Gentle Yoga',
  'Move with ease. Improve flexibility, balance and well-being.',
  'Art & Craft',
  'Express freely. Explore creativity and enjoy the joy of making.',
  'Reading Circle',
  'Join our book circle. Share ideas, inspiration, and meaningful conversations.',
  'Support. Friendship. Growth. We’re better together.',
  'Ready to Begin?',
  'Take the first step toward creativity, well-being and connection.',
  'Book a Trial Class',
  'Call or Text 416-567-6538',
]

function readWellnessPage() {
  assert.ok(existsSync(wellnessPagePath), 'docs app must provide /wellness at docs/app/pages/wellness.vue')
  return readFileSync(wellnessPagePath, 'utf8')
}

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function readAssetHash(asset: string) {
  return createHash('sha256').update(readFileSync(resolve(wellnessAssetPath, asset))).digest('hex')
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
  assert.match(source, /Pause\. Breathe\. Come Home to Yourself\./)
  assert.match(source, /Day Retreat/)
  assert.match(source, /Silver Club[\s\S]*45\+/)
  assert.match(source, /Ready to Begin\?/)
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

  assert.match(source, /wellness-hero-banner/)
  assert.match(source, /md:w-\[64%\]/)
  assert.doesNotMatch(source, /wellness-hero-card/)
  assert.match(source, /class="wellness-card-photo aspect-\[585\/400\] w-full object-cover"/)
  assert.match(source, /class="sound-photo-frame"/)
  assert.match(source, /class="silver-photo-frame"/)
  assert.match(source, /rounded-\[2rem\]/)
  assert.match(source, /object-cover/)
})

test('wellness page uses the reference section headings', () => {
  const source = readWellnessPage()

  assert.match(source, /<h2 class="[^"]*">\s*Practice With Us\s*<\/h2>/)
  assert.match(source, /Pause\. Breathe\. Come Home to Yourself\./)
  assert.doesNotMatch(source, /<h2 class="[^"]*">\s*Yoga Journey\s*<\/h2>/)
})

test('wellness card images are exact crops from the reference design', () => {
  for (const [asset, hash] of Object.entries(expectedImageHashes)) {
    assert.equal(readAssetHash(asset), hash, `${asset} must keep the reference crop`)
  }

  assert.deepEqual(readJpegSize('hero-wellness.jpg'), { width: 1300, height: 1040 })
  assert.deepEqual(readJpegSize('yin-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('flow-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('chair-yoga.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('inside-flow.jpg'), { width: 585, height: 400 })
  assert.deepEqual(readJpegSize('sound-healing-session.jpg'), { width: 1430, height: 1240 })
  assert.deepEqual(readJpegSize('silver-club.jpg'), { width: 1820, height: 1050 })
})
