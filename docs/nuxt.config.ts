import { inferSiteURL } from '../layer/utils/meta'

const siteUrl = inferSiteURL()

export default defineNuxtConfig({
  extends: ['tockdocs'],
  modules: ['@nuxtjs/i18n', 'nuxt-skill-hub', 'nuxt-studio'],
  site: {
    name: 'Xinyi Class',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  mdc: {
    highlight: {
      shikiEngine: 'javascript',
    },
  },
  compatibilityDate: '2025-07-18',
  vite: {
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1200,
    },
    optimizeDeps: {
      include: [
        '@vercel/analytics',
        '@vercel/speed-insights',
      ],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
    }, {
      code: 'zh',
      name: '简中',
    }],
  },
  llms: {
    ...(siteUrl ? { domain: siteUrl } : {}),
    title: 'Xinyi Class',
    description: 'Xinyi Class — AI-powered knowledge management.',
    full: {
      title: 'Xinyi Class',
      description: 'Xinyi Class — AI-powered knowledge management.',
    },
  },
  mcp: {
    name: 'Xinyi Class documentation',
    browserRedirect: '/docs/manual/en/ai/mcp',
  },
  skillHub: {
    skillName: 'nuxt',
    generationMode: 'prepare',
    targets: ['codex'],
  },
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'taowang1993',
      repo: 'soulart',
      rootDir: 'docs',
    },
  },
})
