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
    children: [{ label: 'Student Gallery', to: '/art-programs/student-gallery' }],
  },
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '/schedules', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

type GalleryWork = {
  title: string
  meta: string
  image: string
  contain?: boolean
}

type GallerySection = {
  id: string
  tone: string
  kicker: string
  title: string
  description: string
  tabs: string[]
  quote: string
  works: GalleryWork[]
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
    tabs: ['Age 4–6', 'Age 7–10', 'Age 11–13'],
    quote: 'Little hands. Big imagination. Every creation is a beautiful story.',
    works: [
      { title: 'My City', meta: 'Age 6', image: '/student-gallery/children-4-6-four-seasons.jpg', contain: false },
      { title: 'Lion Dance', meta: 'Age 9', image: '/student-gallery/children-7-9-lion-dance.jpg', contain: false },
      { title: 'Dream Garden', meta: 'Age 12', image: '/student-gallery/children-10-12-dream.jpg', contain: false },
    ],
  },
  {
    id: 'teens',
    tone: 'teens',
    kicker: 'Growing Voices',
    title: 'Teen\'s Art Works',
    description: 'Showcasing growth, expression and creative journeys.',
    tabs: ['Age 13–15', 'Age 15–18', 'Portfolios'],
    quote: 'Every artwork tells a story. Thank you for being part of our creative journey.',
    works: [
      { title: 'Ancient Girl', meta: 'Age 13 · Watercolor', image: '/student-gallery/teen-13-15-ancient-girl.jpg', contain: false },
      { title: 'Fantasy Girl', meta: 'Age 14 · Digital Art', image: '/student-gallery/teen-15-18-girl.jpg', contain: false },
      { title: 'Portfolio Portrait', meta: 'Portfolio', image: '/student-gallery/portfolio-helen.jpg', contain: false },
    ],
  },
  {
    id: 'adults',
    tone: 'adults',
    kicker: 'Creative Practice',
    title: 'Adult Art Works',
    description: 'Art created with passion, experience and personal expression.',
    tabs: ['All Works', 'Paintings', 'Watercolor'],
    quote: 'Art is not about perfection. It is about expression. Every piece is a reflection of a unique journey.',
    works: [
      { title: 'Mountain Lake', meta: 'Oil Painting', image: '/student-gallery/adult-town.jpg', contain: false },
      { title: 'Eva', meta: 'Acrylic', image: '/student-gallery/adult-eva.jpg', contain: false },
      { title: 'Soft Garden', meta: 'Watercolor', image: '/student-gallery/adult-watercolor-sophia.jpg', contain: false },
    ],
  },
  {
    id: 'crafts',
    tone: 'crafts',
    kicker: 'Handmade Joy',
    title: 'Craft Creations',
    description: 'Handmade with love, creativity and care!',
    tabs: ['Paper Crafts', 'Clay & Pottery', 'Textile & Yarn', 'Mixed Media'],
    quote: 'Little hands. Big imagination. Every creation is a beautiful story.',
    works: [
      { title: 'Paper Flower', meta: 'Paper Crafts', image: '/student-gallery/craft-paper-flower.jpg', contain: true },
      { title: 'Clay Lotus Pond', meta: 'Clay & Pottery', image: '/student-gallery/craft-clay-lotus.jpg', contain: true },
      { title: 'Crochet Friends', meta: 'Textile & Yarn', image: '/student-gallery/craft-crochet.jpg', contain: true },
      { title: 'Mixed Media Frame', meta: 'Mixed Media', image: '/student-gallery/craft-mixed-media.jpg', contain: true },
    ],
  },
]

const chineseWork = {
  title: 'Mountain Landscape',
  meta: 'Ink on Fan',
  image: '/student-gallery/chinese-landscape.jpg',
}

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
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation' },
  { label: 'Contact', to: '/contact' },
]

const isAssistantOpen = ref(false)
const activeGalleryIndexes = reactive(
  Object.fromEntries(gallerySections.map(section => [section.id, 0])) as Record<string, number>,
)

function activeWorkIndex(sectionId: string) {
  return activeGalleryIndexes[sectionId] ?? 0
}

function setActiveWork(sectionId: string, index: number) {
  activeGalleryIndexes[sectionId] = index
}

function stepWork(sectionId: string, total: number, direction: -1 | 1) {
  activeGalleryIndexes[sectionId] = (activeWorkIndex(sectionId) + direction + total) % total
}

function visibleWorks(section: GallerySection) {
  const active = activeWorkIndex(section.id)
  return [...section.works.slice(active), ...section.works.slice(0, active)].slice(0, 3)
}
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
              v-for="(tab, index) in section.tabs"
              :key="tab"
              type="button"
              class="gallery-pill rounded-full px-5 py-2 text-sm font-bold shadow-sm transition"
              :class="activeWorkIndex(section.id) === index ? 'bg-white text-[#e65f6e] ring-2 ring-[#e65f6e]/30' : ''"
              :aria-pressed="activeWorkIndex(section.id) === index"
              @click="setActiveWork(section.id, index)"
            >
              {{ tab }}
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
            @click="stepWork(section.id, section.works.length, -1)"
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
            @click="stepWork(section.id, section.works.length, 1)"
          >
            <UIcon
              name="i-lucide-chevron-right"
              class="size-7"
            />
          </button>
        </div>

        <div class="mt-7 flex justify-center gap-3">
          <button
            v-for="(work, index) in section.works"
            :key="`${section.id}-${work.title}-dot`"
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
        <p class="mx-auto flex size-12 items-center justify-center rounded-sm bg-[#b6342c] font-serif text-lg font-bold text-white shadow-md">
          心
        </p>
        <h2 class="script-title mt-5 text-5xl font-semibold leading-tight sm:text-6xl">
          Chinese Painting & Calligraphy
        </h2>
        <p class="mt-4 text-lg font-semibold tracking-[0.18em] text-[#7d6c5b]">
          Tradition · Simplicity · Inner Peace
        </p>

        <div class="scroll-stage mx-auto mt-10 max-w-3xl">
          <img
            :src="chineseWork.image"
            :alt="`${chineseWork.title} Chinese artwork`"
            class="mx-auto max-h-[32rem] w-full max-w-3xl object-contain"
            loading="eager"
            decoding="async"
          >
          <h3 class="mt-5 font-serif text-3xl text-[#3a352c]">
            {{ chineseWork.title }}
          </h3>
          <p class="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-[#9b4237]">
            {{ chineseWork.meta }}
          </p>
        </div>

        <div class="mx-auto mt-10 max-w-3xl rounded-[2rem] bg-white/75 p-8 text-left shadow-sm ring-1 ring-[#decdb2]">
          <h3 class="font-serif text-3xl font-semibold text-[#2f352c]">
            About Chinese Art
          </h3>
          <p class="mt-5 text-lg leading-8 text-[#665846]">
            Chinese painting and calligraphy are more than art forms—they are a way of life.
          </p>
          <p class="mt-5 text-lg leading-8 text-[#665846]">
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
  background:
    linear-gradient(90deg, rgba(143, 104, 55, 0.16), transparent 8%, transparent 92%, rgba(143, 104, 55, 0.16)),
    linear-gradient(180deg, #f4ead8 0%, #ead9bd 100%);
}

.scroll-stage {
  padding-inline: clamp(2rem, 6vw, 5rem);
  background:
    linear-gradient(90deg, rgba(108, 74, 37, 0.13), transparent 9%, transparent 91%, rgba(108, 74, 37, 0.13)),
    radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.82), transparent 34rem),
    #efe1c6;
  border-color: #d8c19f;
  border-radius: 1.4rem;
}

.scroll-stage::before,
.scroll-stage::after {
  position: absolute;
  top: 0.9rem;
  bottom: 0.9rem;
  width: 2rem;
  content: "";
  background: linear-gradient(90deg, #c49a63, #efd5a3 45%, #b9854c);
  border-radius: 999px;
  box-shadow: inset 0 0 0 1px rgba(96, 59, 24, 0.16);
}

.scroll-stage::before {
  left: 1rem;
}

.scroll-stage::after {
  right: 1rem;
}

@media (max-width: 768px) {
  .hero-gallery-frame {
    min-height: 0;
    transform: none;
  }

  .gallery-track {
    grid-template-columns: 1fr;
  }

  .stage-arrow {
    display: none;
  }
}
</style>
