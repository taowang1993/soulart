<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Student Gallery | XinYi Class',
  description: 'Explore XinYi Class student artwork from children, teens, adults, craft projects, and Chinese painting and calligraphy.',
  ogTitle: 'Student Gallery | XinYi Class',
  ogDescription: 'Celebrating creativity, imagination and growth at every age.',
})

const navItems = [
  { label: 'Home', to: '/', icon: 'i-lucide-home' },
  {
    label: 'Art Programs',
    to: '/art-programs',
    icon: 'i-lucide-palette',
    children: [
      { label: 'Student Gallery', to: '/art-programs/student-gallery' },
      { label: 'Summer Camps', to: '/art-programs/summer-camps' },
    ],
  },
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '/schedules', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/resources', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

type GalleryWork = {
  title: string
  meta: string
  image: string
  contain?: boolean
}

type GalleryCategory = {
  label: string
  works: GalleryWork[]
}

type GallerySection = {
  id: string
  tone: string
  kicker: string
  title: string
  description: string
  quote: string
  categories: GalleryCategory[]
}

const heroWorks = [
  { title: 'Four Seasons', image: '/student-gallery/children-4-6-four-seasons.jpg' },
  { title: 'Lion Dance', image: '/student-gallery/children-7-9-lion-dance.jpg' },
  { title: 'Dream Garden', image: '/student-gallery/children-10-12-dream.jpg' },
  { title: 'Ancient Girl', image: '/student-gallery/teen-13-15-ancient-girl.jpg' },
  { title: 'Paper Flower', image: '/student-gallery/craft-paper-flower.jpg' },
]

const gallerySections: GallerySection[] = [
  {
    id: 'children',
    tone: 'children',
    kicker: 'Young Artists',
    title: 'Children\'s Art Works',
    description: 'Celebrating creativity, imagination and growth at every age.',
    quote: 'Little hands. Big imagination. Every creation is a beautiful story.',
    categories: [
      {
        label: 'Age 4–6',
        works: [
          { title: 'Four Seasons', meta: 'Age 5', image: '/student-gallery/children-4-6-four-seasons.jpg' },
          { title: 'Study Cat', meta: 'Age 6', image: '/student-gallery/children-4-6-study-cat.jpg' },
          { title: 'Winter Fun', meta: 'Age 5', image: '/student-gallery/children-4-6-winter-fun.jpg' },
        ],
      },
      {
        label: 'Age 7–9',
        works: [
          { title: 'Lion Dance', meta: 'Age 9', image: '/student-gallery/children-7-9-lion-dance.jpg' },
          { title: 'Spring', meta: 'Age 9', image: '/student-gallery/children-7-9-spring.jpg' },
          { title: 'The Milkmaid', meta: 'Age 8', image: '/student-gallery/children-7-9-milk-maid.jpg' },
        ],
      },
      {
        label: 'Age 10–12',
        works: [
          { title: 'Dream Garden', meta: 'Age 12', image: '/student-gallery/children-10-12-dream.jpg' },
          { title: 'Rapunzel', meta: 'Age 10', image: '/student-gallery/children-10-12-rapunzel.jpg' },
          { title: 'Unicorn', meta: 'Age 12', image: '/student-gallery/children-10-12-unicorn.jpg' },
        ],
      },
    ],
  },
  {
    id: 'teens',
    tone: 'teens',
    kicker: 'Growing Voices',
    title: 'Teen\'s Art Works',
    description: 'Showcasing growth, expression and creative journeys.',
    quote: 'Every artwork tells a story. Thank you for being part of our creative journey.',
    categories: [
      {
        label: 'Age 13–15',
        works: [
          { title: 'Ancient Girl', meta: 'Age 13 · Watercolor', image: '/student-gallery/teen-13-15-ancient-girl.jpg' },
          { title: 'Christmas', meta: 'Age 14', image: '/student-gallery/teen-13-15-christmas.jpg' },
          { title: 'Violin', meta: 'Age 15', image: '/student-gallery/teen-13-15-violin.jpg' },
        ],
      },
      {
        label: 'Age 15–18',
        works: [
          { title: 'Fantasy Girl', meta: 'Age 16', image: '/student-gallery/teen-15-18-girl.jpg' },
          { title: 'Sunset', meta: 'Age 16', image: '/student-gallery/teen-15-18-sunset.jpg' },
          { title: 'Autumn', meta: 'Age 17', image: '/student-gallery/teen-15-18-autumn.jpg' },
        ],
      },
      {
        label: 'Portfolios',
        works: [
          { title: 'Helen Portfolio', meta: 'Portfolio', image: '/student-gallery/portfolio-helen.jpg' },
          { title: 'Sunny Portfolio', meta: 'Portfolio', image: '/student-gallery/portfolio-sunny.jpg' },
          { title: 'Serena Portfolio', meta: 'Portfolio', image: '/student-gallery/portfolio-serena.jpg' },
        ],
      },
    ],
  },
  {
    id: 'adults',
    tone: 'adults',
    kicker: 'Creative Practice',
    title: 'Adult Art Works',
    description: 'Art created with passion, experience and personal expression.',
    quote: 'Art is not about perfection. It is about expression. Every piece is a reflection of a unique journey.',
    categories: [
      {
        label: 'All Works',
        works: [
          { title: 'Mountain Lake', meta: 'Oil Painting', image: '/student-gallery/adult-town.jpg' },
          { title: 'Eva', meta: 'Acrylic', image: '/student-gallery/adult-eva.jpg' },
          { title: 'Soft Garden', meta: 'Watercolor', image: '/student-gallery/adult-watercolor-sophia.jpg' },
        ],
      },
      {
        label: 'Paintings',
        works: [
          { title: 'Mountain Lake', meta: 'Oil Painting', image: '/student-gallery/adult-town.jpg' },
          { title: 'Eva', meta: 'Acrylic', image: '/student-gallery/adult-eva.jpg' },
          { title: 'Family Study', meta: 'Acrylic', image: '/student-gallery/adult-painting-family.jpg' },
        ],
      },
      {
        label: 'Watercolor',
        works: [
          { title: 'Soft Garden', meta: 'Watercolor', image: '/student-gallery/adult-watercolor-sophia.jpg' },
          { title: 'Zi Yin', meta: 'Watercolor', image: '/student-gallery/adult-watercolor-zinyin.jpg' },
          { title: 'Amanda', meta: 'Watercolor', image: '/student-gallery/adult-watercolor-amanda.jpg' },
        ],
      },
    ],
  },
  {
    id: 'crafts',
    tone: 'crafts',
    kicker: 'Handmade Joy',
    title: 'Craft Creations',
    description: 'Handmade with love, creativity and care!',
    quote: 'Little hands. Big imagination. Every creation is a beautiful story.',
    categories: [
      {
        label: 'Paper Crafts',
        works: [
          { title: 'Paper Flower', meta: 'Paper Crafts', image: '/student-gallery/craft-paper-flower.jpg', contain: true },
          { title: 'Paper Garden', meta: 'Paper Crafts', image: '/student-gallery/craft-paper-garden.jpg', contain: true },
          { title: 'Paper Flowers', meta: 'Paper Crafts', image: '/student-gallery/craft-paper-flowers.jpg', contain: true },
        ],
      },
      {
        label: 'Clay & Pottery',
        works: [
          { title: 'Clay Lotus Pond', meta: 'Clay & Pottery', image: '/student-gallery/craft-clay-lotus.jpg', contain: true },
          { title: 'Minecraft Clay', meta: 'Clay & Pottery', image: '/student-gallery/craft-clay-minecraft.jpg', contain: true },
          { title: 'Clay Bowl', meta: 'Clay & Pottery', image: '/student-gallery/craft-clay-bowl.jpg', contain: true },
        ],
      },
      {
        label: 'Textile & Yarn',
        works: [
          { title: 'Crochet Friends', meta: 'Textile & Yarn', image: '/student-gallery/craft-crochet.jpg', contain: true },
          { title: 'Crochet Bunnies', meta: 'Textile & Yarn', image: '/student-gallery/craft-crochet-bunnies.jpg', contain: true },
          { title: 'Crochet Bear', meta: 'Textile & Yarn', image: '/student-gallery/craft-crochet-bear.jpg', contain: true },
        ],
      },
      {
        label: 'Mixed Media',
        works: [
          { title: 'Mixed Media Frame', meta: 'Mixed Media', image: '/student-gallery/craft-mixed-media.jpg', contain: true },
          { title: 'Mixed Media Owl', meta: 'Mixed Media', image: '/student-gallery/craft-mixed-media-owl.jpg', contain: true },
          { title: 'Mixed Media Collage', meta: 'Mixed Media', image: '/student-gallery/craft-mixed-media-collage.jpg', contain: true },
        ],
      },
    ],
  },
]

const chineseWorks: GalleryWork[] = [
  { title: 'Mountain Landscape', meta: 'Ink on Fan', image: '/student-gallery/chinese-landscape.jpg', contain: true },
  { title: 'Bird Under Moon', meta: 'Chinese Painting', image: '/student-gallery/chinese-bird-moon.jpg', contain: true },
  { title: 'Tea by the Window', meta: 'Chinese Painting', image: '/student-gallery/chinese-tea-window.jpg', contain: true },
  { title: 'Lotus Blossom', meta: 'Chinese Painting', image: '/student-gallery/chinese-lotus.jpg', contain: true },
  { title: 'Serenity Pavilion', meta: 'Chinese Calligraphy', image: '/student-gallery/chinese-serenity.jpg', contain: true },
  { title: 'Meditation', meta: 'Ink Practice', image: '/student-gallery/chinese-meditation.jpg', contain: true },
  { title: 'Crane', meta: 'Chinese Painting', image: '/student-gallery/chinese-crane.jpg', contain: true },
  { title: 'Lotus Calligraphy', meta: 'Chinese Calligraphy', image: '/student-gallery/chinese-lotus-calligraphy.jpg', contain: true },
  { title: 'Orchid', meta: 'Chinese Painting', image: '/student-gallery/chinese-orchid.jpg', contain: true },
  { title: 'Calligraphy Scroll', meta: 'Brush Calligraphy', image: '/student-gallery/chinese-calligraphy-scroll.jpg', contain: true },
]

const contactItems = [
  { label: 'North York, Ontario, Canada', icon: 'i-lucide-map-pin' },
  { label: '416-567-6538', icon: 'i-lucide-phone' },
  { label: 'xinyiartschool@gmail.com', icon: 'i-lucide-mail' },
  { label: '@XinyiArt-Yoga-Healing', icon: 'i-lucide-youtube' },
  { label: 'WeChat', icon: 'i-lucide-message-circle' },
]

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Art Programs', to: '/art-programs' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const isAssistantOpen = ref(false)
const route = useRoute()
const activeChineseIndex = shallowRef(0)
const activeChineseWork = computed<GalleryWork>(() => chineseWorks[activeChineseIndex.value] ?? chineseWorks[0]!)
const activeCategoryIndexes = reactive(
  Object.fromEntries(gallerySections.map(section => [section.id, 0])) as Record<string, number>,
)
const activeGalleryIndexes = reactive(
  Object.fromEntries(gallerySections.map(section => [section.id, 0])) as Record<string, number>,
)

function activeCategoryIndex(sectionId: string) {
  return activeCategoryIndexes[sectionId] ?? 0
}

function activeWorkIndex(sectionId: string) {
  return activeGalleryIndexes[sectionId] ?? 0
}

function activeCategory(section: GallerySection): GalleryCategory {
  const category = section.categories[activeCategoryIndex(section.id)] ?? section.categories[0]
  if (!category) {
    throw new Error(`Gallery section ${section.id} has no categories`)
  }
  return category
}

function activeWorks(section: GallerySection) {
  return activeCategory(section).works
}

function firstQueryValue(value: unknown) {
  const first = Array.isArray(value) ? value[0] : value
  return typeof first === 'string' ? first : ''
}

function normalizeSlideIndex(index: number, total: number) {
  return total ? ((index % total) + total) % total : 0
}

function applyGalleryRoute() {
  const sectionId = firstQueryValue(route.query.section) || route.hash.replace(/^#/, '')
  const slideIndex = Number.parseInt(firstQueryValue(route.query.slide), 10)
  if (sectionId === 'chinese-art') {
    if (Number.isFinite(slideIndex)) {
      activeChineseIndex.value = normalizeSlideIndex(slideIndex, chineseWorks.length)
    }
    return
  }

  const section = gallerySections.find(section => section.id === sectionId)
  if (!section) return

  const category = firstQueryValue(route.query.category)
  const categoryIndex = section.categories.findIndex(item => item.label === category)
  if (categoryIndex >= 0) {
    activeCategoryIndexes[section.id] = categoryIndex
  }

  if (Number.isFinite(slideIndex)) {
    activeGalleryIndexes[section.id] = normalizeSlideIndex(slideIndex, activeWorks(section).length)
  }
}

function setActiveCategory(sectionId: string, index: number) {
  activeCategoryIndexes[sectionId] = index
  activeGalleryIndexes[sectionId] = 0
}

function setActiveWork(sectionId: string, index: number) {
  activeGalleryIndexes[sectionId] = index
}

function stepWork(sectionId: string, total: number, direction: -1 | 1) {
  if (!total) return

  activeGalleryIndexes[sectionId] = normalizeSlideIndex(activeWorkIndex(sectionId) + direction, total)
}

function visibleWorks(section: GallerySection) {
  const works = activeWorks(section)
  if (!works.length) return []

  const active = activeWorkIndex(section.id) % works.length
  return [...works.slice(active), ...works.slice(0, active)].slice(0, 3)
}

function setActiveChineseWork(index: number) {
  activeChineseIndex.value = index
}

function stepChineseWork(direction: -1 | 1) {
  activeChineseIndex.value = (activeChineseIndex.value + direction + chineseWorks.length) % chineseWorks.length
}

applyGalleryRoute()
watch(() => route.fullPath, applyGalleryRoute)
</script>

<template>
  <main class="student-gallery min-h-screen overflow-hidden bg-[#fff8ed] text-[#40335f]">
    <section class="hero-shell relative isolate overflow-hidden px-4 pb-12 pt-5 sm:px-6 lg:px-8">
      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between rounded-none bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/80 backdrop-blur md:rounded-[2rem] md:px-5"
      >
        <NuxtLink
          to="/"
          aria-label="XinYi Class Home"
          class="flex items-center gap-2 text-[#4e3c71] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          <img
            src="/home/logo.png"
            alt="XinYi Class"
            class="h-14 w-auto object-contain sm:h-16"
            loading="eager"
            decoding="async"
          >
        </NuxtLink>

        <div class="hidden items-center gap-1 rounded-full bg-white/50 p-1 md:flex">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="group relative"
          >
            <NuxtLink
              :to="item.to"
              class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#41335f] transition hover:bg-[#f3e8ff] hover:text-[#7d5ca5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              :class="item.label === 'Art Programs' ? 'bg-[#f1e4ff] text-[#6d4d95]' : ''"
            >
              <UIcon
                v-if="item.label === 'Art Programs'"
                :name="item.icon"
                class="size-4"
              />
              {{ item.label }}
              <UIcon
                v-if="item.children"
                name="i-lucide-chevron-down"
                class="size-4 transition group-hover:rotate-180"
              />
            </NuxtLink>

            <div
              v-if="item.children"
              class="pointer-events-none absolute left-0 top-full z-30 min-w-52 rounded-2xl bg-white/95 p-2 opacity-0 shadow-xl ring-1 ring-[#eaddec] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#6d4d95] hover:bg-[#f7eefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-xs font-semibold text-[#5b457d]">
          <NuxtLink
            to="/docs/manual/en/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            EN
          </NuxtLink>
          <span class="text-[#b19bcf]">|</span>
          <NuxtLink
            to="/docs/manual/zh/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            中文
          </NuxtLink>
        </div>
      </nav>

      <div class="mx-auto grid max-w-6xl items-center gap-12 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
        <div class="text-center lg:text-left">
          <h1 class="script-title text-6xl font-semibold leading-none text-[#566e3d] sm:text-7xl lg:whitespace-nowrap lg:text-7xl">
            Students' Gallery
          </h1>
          <p class="mx-auto mt-6 max-w-xl text-xl leading-8 text-[#6a5f78] lg:mx-0">
            Celebrating creativity, imagination and growth at every age.
          </p>
          <div class="mt-8 flex justify-center lg:justify-start">
            <NuxtLink
              to="#children"
              aria-label="Jump to children's artwork"
              class="inline-flex size-14 items-center justify-center rounded-full bg-[#e6a0ac] text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              <UIcon
                name="i-lucide-arrow-down"
                class="size-6"
              />
            </NuxtLink>
          </div>
        </div>

        <div class="hero-gallery-frame">
          <img
            v-for="work in heroWorks"
            :key="work.title"
            :src="work.image"
            :alt="`${work.title} student gallery artwork`"
            loading="eager"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section
      v-for="section in gallerySections"
      :id="section.id"
      :key="section.id"
      class="gallery-band px-4 py-16 sm:px-6 lg:px-8"
      :class="`gallery-band--${section.tone}`"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="script-title text-5xl font-semibold leading-tight sm:text-6xl">
            {{ section.title }}
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6a5f78]">
            {{ section.description }}
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <button
              v-for="(category, index) in section.categories"
              :key="category.label"
              type="button"
              class="gallery-pill rounded-full px-5 py-2 text-sm font-bold shadow-sm transition"
              :class="activeCategoryIndex(section.id) === index ? 'bg-white text-[#e65f6e] ring-2 ring-[#e65f6e]/30' : ''"
              :aria-pressed="activeCategoryIndex(section.id) === index"
              @click="setActiveCategory(section.id, index)"
            >
              {{ category.label }}
            </button>
          </div>
        </div>

        <div class="gallery-stage mt-10">
          <p
            v-if="section.id === 'children'"
            class="gallery-help hidden lg:block"
          >
            Swipe or click<br>to explore<br>more artwork
          </p>
          <button
            type="button"
            class="stage-arrow left-4"
            aria-label="Previous artwork"
            @click="stepWork(section.id, activeWorks(section).length, -1)"
          >
            <UIcon
              name="i-lucide-chevron-left"
              class="size-7"
            />
          </button>
          <div class="gallery-track">
            <article
              v-for="work in visibleWorks(section)"
              :key="work.title"
              class="stage-card"
            >
              <img
                :src="work.image"
                :alt="`${work.title} student artwork`"
                :class="work.contain ? 'object-contain bg-white' : 'object-cover object-top'"
                loading="eager"
                decoding="async"
              >
              <h3>{{ work.title }}</h3>
              <p>{{ work.meta }}</p>
            </article>
          </div>
          <button
            type="button"
            class="stage-arrow right-4"
            aria-label="Next artwork"
            @click="stepWork(section.id, activeWorks(section).length, 1)"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="size-7"
            />
          </button>
        </div>

        <div class="mt-7 flex justify-center gap-3">
          <button
            v-for="(work, index) in activeWorks(section)"
            :key="`${section.id}-${activeCategory(section).label}-${work.title}-dot`"
            type="button"
            class="size-3 rounded-full border-2 transition"
            :class="activeWorkIndex(section.id) === index ? 'border-[#e65f6e] bg-[#e65f6e]' : 'border-current/35'"
            :aria-label="`Show ${work.title}`"
            @click="setActiveWork(section.id, index)"
          />
        </div>

        <p class="mx-auto mt-8 max-w-3xl text-center font-serif text-2xl italic leading-10 text-[#6d5b84]">
          “{{ section.quote }}”
        </p>
      </div>
    </section>

    <section
      id="chinese-art"
      class="ink-section px-4 py-16 text-[#3a352c] sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl text-center">
        <div class="chinese-heading">
          <h2 class="script-title text-5xl font-semibold leading-tight text-[#27251f] sm:text-6xl">
            Chinese Painting & Calligraphy
          </h2>
          <span
            class="chinese-seal"
            aria-hidden="true"
          >心</span>
        </div>
        <p class="mt-4 text-lg font-semibold tracking-[0.18em] text-[#8f7d50]">
          Tradition · Simplicity · Inner Peace
        </p>

        <div class="scroll-stage chinese-carousel mx-auto mt-10 w-full">
          <button
            type="button"
            class="stage-arrow left-4"
            aria-label="Previous Chinese artwork"
            @click="stepChineseWork(-1)"
          >
            <UIcon
              name="i-lucide-chevron-left"
              class="size-7"
            />
          </button>
          <img
            :src="activeChineseWork.image"
            :alt="`${activeChineseWork.title} Chinese artwork`"
            class="chinese-artwork"
            loading="eager"
            decoding="async"
          >
          <button
            type="button"
            class="stage-arrow right-4"
            aria-label="Next Chinese artwork"
            @click="stepChineseWork(1)"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="size-7"
            />
          </button>
          <div class="chinese-dots">
            <button
              v-for="(work, index) in chineseWorks"
              :key="`${work.title}-chinese-dot`"
              type="button"
              class="chinese-dot"
              :class="activeChineseIndex === index ? 'chinese-dot--active' : ''"
              :aria-label="`Show ${work.title}`"
              @click="setActiveChineseWork(index)"
            />
          </div>
          <h3 class="chinese-title">
            {{ activeChineseWork.title }}
          </h3>
          <p class="chinese-meta">
            {{ activeChineseWork.meta }}
          </p>
        </div>

        <div class="chinese-about">
          <h3 class="chinese-about-title">
            About Chinese Art
          </h3>
          <p>
            Chinese painting and calligraphy are more than art forms—they are a way of life.
          </p>
          <p>
            Through the brush, we cultivate mindfulness, appreciate nature, and express the beauty within.
          </p>
        </div>
      </div>
    </section>

    <footer class="relative bg-[linear-gradient(180deg,#f7f1fb_0%,#efe6f4_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl gap-10 border-b border-[#d8c7e0] pb-8 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div class="text-center md:text-left">
          <img
            src="/home/logo.png"
            alt="XinYi Class"
            class="mx-auto h-20 w-auto object-contain md:mx-0"
            loading="lazy"
            decoding="async"
          >
          <p class="mt-4 max-w-xs text-sm leading-6 text-[#6c6078] md:max-w-sm">
            Inspiring creativity, connection and well-being since 2016.
          </p>
          <button
            type="button"
            class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#6d4d95] shadow-sm ring-1 ring-[#d8c7e0] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            @click="isAssistantOpen = true"
          >
            <UIcon
              name="i-lucide-bot"
              class="size-4"
            />
            Talk with AI Assistant
          </button>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#594178]">
            Explore
          </h3>
          <ul class="mt-5 space-y-2 text-sm">
            <li
              v-for="link in footerLinks"
              :key="link.label"
              class="border-b border-[#ded0e8] pb-2 last:border-b-0"
            >
              <NuxtLink
                :to="link.to"
                class="transition hover:text-[#8b639f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#594178]">
            Visit Us
          </h3>
          <ul class="mt-5 space-y-3 text-sm">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="flex items-center gap-3"
            >
              <UIcon
                :name="item.icon"
                class="size-4 shrink-0 text-[#9f82bd]"
              />
              <span>{{ item.label }}</span>
            </li>
          </ul>
          <img
            src="/home/qr-code.jpg"
            alt="XinYi Class WeChat QR code"
            class="mt-5 h-24 w-24 rounded-md bg-white p-1 shadow-sm ring-1 ring-[#d6c5e2]"
            loading="eager"
            decoding="async"
          >
        </div>
      </div>

      <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-7 text-sm text-[#7a6b8b] md:flex-row">
        <p>© 2026 Xinyi Class</p>
        <p>Art <span class="mx-3 text-[#df838d]">♥</span> Wellness <span class="mx-3 text-[#df838d]">♥</span> Community</p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.student-gallery {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.student-gallery :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.script-title {
  font-family: "Bradley Hand", "Segoe Print", "Comic Sans MS", cursive;
  letter-spacing: -0.04em;
}

.hero-shell {
  background:
    radial-gradient(circle at 7% 18%, rgba(243, 187, 205, 0.58), transparent 22rem),
    radial-gradient(circle at 90% 16%, rgba(235, 209, 159, 0.6), transparent 24rem),
    radial-gradient(circle at 65% 84%, rgba(204, 199, 232, 0.72), transparent 26rem),
    linear-gradient(135deg, #fff8ed 0%, #fdf1ef 46%, #f1edf8 100%);
}

.hero-gallery-frame {
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: clamp(6.8rem, 9.2vw, 8.3rem);
  gap: clamp(0.65rem, 1.2vw, 0.95rem);
  min-height: 0;
  padding: clamp(0.9rem, 1.7vw, 1.25rem);
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 2.4rem;
  box-shadow: 0 1.5rem 4rem rgba(111, 79, 121, 0.15);
}

.hero-gallery-frame::before,
.hero-gallery-frame::after {
  position: absolute;
  z-index: 2;
  width: 6rem;
  height: 1.7rem;
  content: "";
  background: rgba(245, 216, 157, 0.85);
  border-radius: 9999px;
  transform: rotate(-9deg);
}

.hero-gallery-frame::before {
  top: 1.4rem;
  left: 2.5rem;
}

.hero-gallery-frame::after {
  right: 2.5rem;
  bottom: 1.4rem;
}

.hero-gallery-frame img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  object-position: top;
  background: white;
  border: 0.45rem solid white;
  border-radius: 1.25rem;
  box-shadow: 0 0.8rem 1.7rem rgba(82, 61, 107, 0.12);
}

.hero-gallery-frame img:first-child {
  grid-column: span 3;
  grid-row: span 2;
}

.hero-gallery-frame img:nth-child(2),
.hero-gallery-frame img:nth-child(3) {
  grid-column: span 3;
}

.hero-gallery-frame img:nth-child(4),
.hero-gallery-frame img:nth-child(5) {
  grid-column: span 3;
}

.gallery-band {
  position: relative;
  overflow: hidden;
}

.gallery-band::before,
.gallery-band::after {
  position: absolute;
  width: 18rem;
  height: 18rem;
  pointer-events: none;
  content: "";
  border-radius: 9999px;
  filter: blur(36px);
  opacity: 0.55;
}

.gallery-band::before {
  top: -8rem;
  left: -8rem;
}

.gallery-band::after {
  right: -8rem;
  bottom: -8rem;
}

.gallery-band--children {
  color: #596f42;
  background: linear-gradient(180deg, #fff8ed 0%, #fdf1e6 100%);
}

.gallery-band--children::before {
  background: #f0bac7;
}

.gallery-band--children::after {
  background: #ead2a2;
}

.gallery-band--teens {
  color: #614684;
  background: linear-gradient(180deg, #f4f0fa 0%, #ebe7f5 100%);
}

.gallery-band--teens::before,
.gallery-band--teens::after {
  background: #d7c8ec;
}

.gallery-band--adults {
  color: #536a42;
  background: linear-gradient(180deg, #fbf5ec 0%, #f0eadc 100%);
}

.gallery-band--adults::before {
  background: #cad8b9;
}

.gallery-band--adults::after {
  background: #e7cdae;
}

.gallery-band--crafts {
  color: #7a5639;
  background: linear-gradient(180deg, #fff1e2 0%, #f8e5cf 100%);
}

.gallery-band--crafts::before {
  background: #f1c392;
}

.gallery-band--crafts::after {
  background: #d9c5a1;
}

.gallery-pill {
  color: currentcolor;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(110, 89, 124, 0.14);
}

.gallery-stage,
.scroll-stage {
  position: relative;
  padding: clamp(1rem, 2.4vw, 1.8rem);
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.35), transparent 8%, transparent 92%, rgba(255, 255, 255, 0.35)),
    rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.84);
  border-radius: 2.25rem;
  box-shadow: 0 1.2rem 3.3rem rgba(82, 61, 107, 0.12);
}

.scroll-stage {
  overflow: hidden;
}

.gallery-track {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(0.9rem, 1.8vw, 1.35rem);
}

.stage-card {
  padding: 0.75rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 1.8rem;
  box-shadow: 0 0.8rem 1.9rem rgba(82, 61, 107, 0.09);
}

.stage-card img {
  width: 100%;
  height: clamp(13rem, 20vw, 18rem);
  border-radius: 1.25rem;
}

.stage-card h3 {
  margin-top: 0.95rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.25rem;
  font-weight: 600;
}

.stage-card p {
  margin-top: 0.3rem;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.68;
}

.stage-arrow {
  position: absolute;
  top: 50%;
  z-index: 3;
  display: grid;
  width: 3rem;
  height: 3rem;
  place-items: center;
  color: #6d5b70;
  background: rgba(255, 255, 255, 0.86);
  border-radius: 9999px;
  box-shadow: 0 0.8rem 1.8rem rgba(89, 70, 110, 0.13);
  transform: translateY(-50%);
}

.stage-arrow.left-4 {
  left: -0.9rem;
}

.stage-arrow.right-4 {
  right: -0.9rem;
}

.gallery-help {
  position: absolute;
  top: 50%;
  right: -1rem;
  z-index: 2;
  width: 7rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.25;
  color: rgba(93, 73, 107, 0.68);
  transform: translateY(-50%);
}

.ink-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 9% 10%, rgba(85, 104, 77, 0.18), transparent 17rem),
    radial-gradient(ellipse at 88% 12%, rgba(83, 96, 84, 0.14), transparent 24rem),
    radial-gradient(ellipse at 86% 86%, rgba(113, 123, 103, 0.14), transparent 24rem),
    linear-gradient(180deg, #f7f0e4 0%, #efe3ce 42%, #f8f3ea 100%);
}

.ink-section::before,
.ink-section::after {
  position: absolute;
  pointer-events: none;
  content: "";
}

.ink-section::before {
  top: 1rem;
  left: -2rem;
  width: 17rem;
  height: 12rem;
  background:
    linear-gradient(112deg, transparent 36%, rgba(46, 66, 52, 0.36) 37% 40%, transparent 41%),
    linear-gradient(72deg, transparent 48%, rgba(46, 66, 52, 0.26) 49% 52%, transparent 53%);
  opacity: 0.58;
  transform: rotate(-8deg);
}

.ink-section::after {
  right: -5rem;
  bottom: 5rem;
  width: 31rem;
  height: 15rem;
  background: radial-gradient(ellipse at 50% 100%, rgba(86, 99, 91, 0.2), transparent 70%);
  opacity: 0.45;
}

.chinese-heading {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
}

.chinese-seal {
  display: grid;
  width: 1.35rem;
  height: 1.35rem;
  margin-top: 0.3rem;
  place-items: center;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1;
  color: #b93731;
  border: 2px solid currentcolor;
}

.scroll-stage {
  background: #efe1c6;
  border-color: #d8c19f;
}

.chinese-carousel {
  z-index: 1;
  max-width: 72rem;
  padding: clamp(3.8rem, 5vw, 5.2rem) clamp(3rem, 6vw, 5.6rem) clamp(3rem, 4.5vw, 4.4rem);
  overflow: visible;
  background:
    linear-gradient(to bottom, transparent 0 2.1rem, rgba(129, 133, 111, 0.66) 2.1rem 2.85rem, transparent 2.85rem calc(100% - 2.65rem), rgba(117, 123, 103, 0.66) calc(100% - 2.65rem) calc(100% - 1.9rem), transparent calc(100% - 1.9rem)),
    radial-gradient(circle at 50% 23%, rgba(255, 255, 255, 0.64), transparent 31rem),
    linear-gradient(90deg, rgba(132, 93, 49, 0.12), transparent 7%, transparent 93%, rgba(132, 93, 49, 0.12)),
    #f1e6d4;
  border: 0;
  border-radius: 0.55rem;
  box-shadow: 0 1.5rem 3.2rem rgba(72, 56, 42, 0.13), inset 0 0 0 1px rgba(126, 100, 67, 0.12);
}

.chinese-carousel::before,
.chinese-carousel::after {
  position: absolute;
  top: 2.35rem;
  bottom: 2.05rem;
  z-index: 1;
  width: clamp(1.8rem, 2.4vw, 2.45rem);
  content: "";
  background:
    linear-gradient(90deg, #d5c7a9, #f7ead1 48%, #b59a72),
    linear-gradient(#4d341c, #26170c);
  border-radius: 999px;
  box-shadow:
    inset 0 0 0 1px rgba(77, 54, 30, 0.2),
    0 -1.25rem 0 -0.58rem #2b1a0d,
    0 1.25rem 0 -0.58rem #2b1a0d,
    0 0.6rem 1rem rgba(55, 35, 18, 0.22);
}

.chinese-carousel::before {
  left: -0.35rem;
}

.chinese-carousel::after {
  right: -0.35rem;
}

.chinese-artwork {
  position: relative;
  z-index: 2;
  display: block;
  width: min(100%, 58rem);
  height: clamp(20rem, 38vw, 32rem);
  margin: 0 auto;
  object-fit: contain;
  filter: drop-shadow(0 1rem 1.1rem rgba(62, 52, 39, 0.12));
}

.chinese-carousel .stage-arrow {
  top: 44%;
  z-index: 4;
  color: #343632;
  background: rgba(255, 252, 246, 0.86);
}

.chinese-carousel .stage-arrow.left-4 {
  left: clamp(1rem, 2.5vw, 2.1rem);
}

.chinese-carousel .stage-arrow.right-4 {
  right: clamp(1rem, 2.5vw, 2.1rem);
}

.chinese-dots {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.45rem;
}

.chinese-dot {
  width: 0.85rem;
  height: 0.85rem;
  border: 2px solid rgba(99, 104, 96, 0.56);
  border-radius: 999px;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.chinese-dot--active {
  background: #e44b5d;
  border-color: #e44b5d;
}

.chinese-title {
  position: relative;
  z-index: 2;
  margin-top: 1.2rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 3vw, 2.9rem);
  color: #27251f;
}

.chinese-meta {
  position: relative;
  z-index: 2;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.35rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.15rem, 1.8vw, 1.45rem);
  color: #9b8150;
}

.chinese-meta::after {
  width: 3.8rem;
  height: 1px;
  content: "";
  background: linear-gradient(90deg, transparent, #a8915d 45% 55%, transparent);
}

.chinese-about {
  position: relative;
  z-index: 1;
  max-width: 47rem;
  margin: clamp(4rem, 6vw, 5.2rem) auto 0;
  text-align: center;
}

.chinese-about-title {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 3vw, 2.7rem);
  color: #596e56;
}

.chinese-about-title::before,
.chinese-about-title::after {
  font-size: 1.35rem;
  color: #566856;
  opacity: 0.8;
}

.chinese-about-title::before {
  content: "♣";
}

.chinese-about-title::after {
  content: "✦";
}

.chinese-about p {
  margin-top: 1.1rem;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  line-height: 1.75;
  color: #5f5a4f;
}

@media (max-width: 768px) {
  .hero-gallery-frame {
    min-height: 0;
    transform: none;
  }

  .gallery-track {
    grid-template-columns: 1fr;
  }

  .chinese-carousel {
    padding-inline: 1.5rem;
    overflow: hidden;
  }

  .chinese-carousel::before,
  .chinese-carousel::after {
    display: none;
  }

  .chinese-artwork {
    height: clamp(17rem, 82vw, 25rem);
  }

  .stage-arrow {
    display: none;
  }
}
</style>
