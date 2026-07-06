import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = resolve(fileURLToPath(import.meta.url), '../../..')

const sharedFooterPagePaths = [
  'docs/app/pages/index.vue',
  'docs/app/pages/about.vue',
  'docs/app/pages/art-programs.vue',
  'docs/app/pages/wellness.vue',
  'docs/app/pages/schedules.vue',
  'docs/app/pages/resources.vue',
  'docs/app/pages/art-programs/student-gallery.vue',
]

const yogaWellnessBrandFooterPaths = [
  'docs/app/pages/index.vue',
  'docs/app/pages/about.vue',
  'docs/app/pages/art-programs.vue',
  'docs/app/pages/schedules.vue',
  'docs/app/pages/art-programs/student-gallery.vue',
]

test('shared marketing footers use the updated art and yoga wellness copy', () => {
  for (const path of sharedFooterPagePaths) {
    const source = readFileSync(resolve(repoRoot, path), 'utf8')

    assert.match(source, /XinYi Art School/, `${path} should mention XinYi Art School`)
    assert.match(source, /Children&apos;s Art Classes in Toronto/, `${path} should mention children&apos;s art classes in Toronto`)
    assert.match(source, /XinYi Yoga/, `${path} should mention XinYi Yoga`)
    assert.match(source, /Gentle Yoga &amp; Meditation in Toronto/, `${path} should mention gentle yoga and meditation in Toronto`)
    assert.match(source, /\{ label: 'Yoga Wellness', to: '\/wellness' \}/, `${path} footer should say Yoga Wellness`)
    assert.doesNotMatch(source, /Inspiring creativity, connection,? and well-being since 2016/i, `${path} should not keep the old footer tagline`)
    assert.doesNotMatch(source, /\{ label: 'Wellness', to: '\/wellness' \}/, `${path} footer should not keep the old Wellness label`)
  }
})

test('brand footers say Yoga Wellness instead of Wellness', () => {
  for (const path of yogaWellnessBrandFooterPaths) {
    const source = readFileSync(resolve(repoRoot, path), 'utf8')

    assert.match(source, /Art[\s\S]*Yoga Wellness[\s\S]*Community/, `${path} footer should say Yoga Wellness`)
    assert.doesNotMatch(source, /Art <span[^>]*>♥<\/span> Wellness/, `${path} should not keep Wellness in the footer brand line`)
  }
})
