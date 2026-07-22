<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Art Programs | XinYi Class',
  description: 'Explore XinYi Class art programs for children, teens, adults, workshops, camps, and creative gatherings.',
  ogTitle: 'Art Programs | XinYi Class',
  ogDescription: 'Creativity grows through practice at XinYi Class.',
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
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf', chevron: true },
  { label: 'Schedules', to: '/schedules', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/resources', icon: 'i-lucide-book-open', chevron: true },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

const childPrograms = [
  {
    title: 'Ages 4–6',
    subtitle: 'Explore',
    image: '/art-program/age-4-6.png',
    frame: '/art-program/elements/child-1.webp',
    points: ['Creative Play', 'Mixed Media', 'Fine Motor Skills', 'Imagination'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 4–6', slide: '0' } },
  },
  {
    title: 'Ages 7–9',
    subtitle: 'Learn',
    image: '/art-program/age-7-9.jpg',
    frame: '/art-program/elements/child-2.webp',
    points: ['Drawing Foundations', 'Watercolor & Acrylic', 'Observation Skills', 'Creative Projects'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 7–9', slide: '0' } },
  },
  {
    title: 'Ages 10–12',
    subtitle: 'Express',
    image: '/art-program/age-10-12.png',
    frame: '/art-program/elements/child-3.webp',
    points: ['Composition', 'Personal Style', 'Mixed Media', 'Art Appreciation'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 10–12', slide: '0' } },
  },
]

const teenPrograms = [
  {
    title: 'Ages 13–15',
    subtitle: 'Create',
    image: '/art-program/age-13-15.png',
    frame: '/art-program/elements/teen-1.webp',
    points: ['Skill Development', 'Sketching & Painting', 'Visual Storytelling', 'Creative Confidence'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Age 13–15', slide: '0' } },
  },
  {
    title: 'Ages 15–18',
    subtitle: 'Develop',
    image: '/art-program/age-15-18.jpg',
    frame: '/art-program/elements/teen-2.webp',
    points: ['Advanced Techniques', 'Independent Projects', 'Art Portfolio', 'Personal Expression'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Age 15–18', slide: '0' } },
  },
  {
    title: 'Age 16+',
    subtitle: 'Find Your Voice',
    image: '/art-program/age-16-plus.jpg',
    frame: '/art-program/elements/teen-3.webp',
    points: ['Portfolio Preparation', 'Art School Guidance', 'Curated Projects', 'Application Support'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Portfolios', slide: '0' } },
  },
]

const adultPrograms = [
  {
    title: 'Skill & Expression',
    image: '/art-program/adult-1.jpg',
    frame: '/art-program/elements/adult-1.webp',
    description: 'Develop techniques, explore personal style, and create meaningful work.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#adults', query: { section: 'adults', category: 'All Works', slide: '0' } },
  },
  {
    title: 'Art & Well-Being',
    image: '/art-program/adult-2.jpg',
    frame: '/art-program/elements/adult-2.webp',
    description: 'Relax, reconnect, and enjoy the healing power of creativity.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#adults', query: { section: 'adults', category: 'Paintings', slide: '0' } },
  },
  {
    title: 'Chinese Painting & Calligraphy',
    image: '/art-program/adult-3.png',
    frame: '/art-program/elements/adult-3.webp',
    description: 'Learn timeless techniques rooted in culture, balance, and mindful expression.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#chinese-art', query: { section: 'chinese-art', slide: '0' } },
  },
]

const makingPrograms = [
  {
    title: 'Crochet & Fibre Arts',
    image: '/art-program/craft-1.png',
    frame: '/art-program/elements/making-1.webp',
    note: 'One stitch at a time.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Textile & Yarn', slide: '0' } },
  },
  {
    title: 'Clay & Sculpture',
    image: '/art-program/craft-2.jpg',
    frame: '/art-program/elements/making-2.webp',
    note: 'Shape ideas with your hands.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Clay & Pottery', slide: '0' } },
  },
  {
    title: 'Paper & Mixed Media',
    image: '/art-program/craft-3.jpg',
    frame: '/art-program/elements/making-3.webp',
    note: 'Mix, layer, create.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Mixed Media', slide: '0' } },
  },
]

const campPrograms = [
  {
    title: 'Summer Camps',
    image: '/art-program/creative-camp-summer.png',
    frame: '/art-program/elements/event-1.webp',
    note: 'Full days of art, nature, and imagination.',
    action: 'View Summer Camps',
    to: '/art-programs/summer-camps',
  },
  {
    title: 'Workshops',
    image: '/art-program/creative-camp-workshops.jpg',
    frame: '/art-program/elements/event-2.webp',
    note: 'Seasonal workshops for children and families.',
    status: 'Coming Soon',
  },
  {
    title: 'Community Events',
    image: '/art-program/creative-camp-events.jpg',
    frame: '/art-program/elements/event-3.webp',
    note: 'Creative gatherings that bring people together.',
    status: 'Coming Soon',
  },
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
  { label: 'Yoga Wellness', to: '/wellness' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const route = useRoute()
const isNestedRoute = computed(() => route.path.replace(/\/$/, '') !== '/art-programs')
const isAssistantOpen = ref(false)
</script>

<template>
  <NuxtPage v-if="isNestedRoute" />

  <main
    v-else
    class="xinyi-art-program min-h-screen overflow-hidden bg-[#fbf7ff] text-[#40335f]"
  >
    <section class="relative isolate overflow-visible bg-[linear-gradient(120deg,#fbf7ff_0%,#fff9f4_52%,#fbf1ff_100%)] px-4 pb-0 pt-6 sm:px-6">
      <nav
        aria-label="Main Navigation"
        class="relative z-50 mx-auto flex max-w-[1360px] items-center justify-between overflow-visible bg-white/90 px-5 py-3 shadow-sm ring-1 ring-white/80 backdrop-blur md:px-8"
      >
        <NuxtLink
          to="/"
          aria-label="XinYi Class Home"
          class="flex items-center gap-2 text-[#4e3c71] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          <img
            src="/home/logo.png"
            alt="XinYi Class"
            class="h-20 w-auto object-contain"
            loading="eager"
            decoding="async"
          >
        </NuxtLink>

        <div class="hidden items-center gap-3 lg:flex xl:gap-5">
          <div
            v-for="item in navItems"
            :key="item.label"
            class="group relative"
          >
            <NuxtLink
              :to="item.to"
              class="flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2 text-base font-semibold text-[#34275c] transition hover:bg-[#f3e8ff] hover:text-[#7d5ca5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              :class="item.label === 'Home' ? 'bg-[#f1e4ff] text-[#6d4d95]' : ''"
            >
              <UIcon
                v-if="item.label === 'Home'"
                :name="item.icon"
                class="size-5"
              />
              {{ item.label }}
              <UIcon
                v-if="item.children || item.chevron"
                name="i-lucide-chevron-down"
                class="size-4 transition group-hover:rotate-180"
              />
            </NuxtLink>
            <div
              v-if="item.children"
              class="pointer-events-none absolute left-0 top-full z-[70] min-w-52 rounded-2xl bg-white/95 p-2 opacity-0 shadow-xl ring-1 ring-[#eaddec] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
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

        <details class="relative ml-auto lg:hidden">
          <summary
            aria-label="Open Main Navigation"
            class="flex size-11 cursor-pointer list-none items-center justify-center rounded-full bg-[#f1e4ff] text-[#6d4d95] [&::-webkit-details-marker]:hidden"
          >
            <UIcon
              name="i-lucide-menu"
              class="size-5"
            />
          </summary>
          <div class="absolute right-0 top-14 z-[80] min-w-56 rounded-2xl bg-white/95 p-2 shadow-xl ring-1 ring-[#eaddec] backdrop-blur">
            <template
              v-for="item in navItems"
              :key="item.label"
            >
              <NuxtLink
                :to="item.to"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#6d4d95] hover:bg-[#f7eefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              >
                {{ item.label }}
              </NuxtLink>
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex rounded-xl py-2 pl-8 pr-4 text-sm font-semibold text-[#8168a0] hover:bg-[#f7eefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              >
                {{ child.label }}
              </NuxtLink>
            </template>
          </div>
        </details>

        <div class="flex items-center gap-2 whitespace-nowrap rounded-xl bg-[#f1e4ff] px-4 py-2 text-base font-semibold text-[#34275c]">
          <NuxtLink
            to="/docs/manual/en/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            EN
          </NuxtLink>
          <span class="text-[#6d4d95]">|</span>
          <NuxtLink
            to="/docs/manual/zh/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            中文
          </NuxtLink>
        </div>
      </nav>

      <div class="relative -mx-4 mt-5 overflow-hidden shadow-[0_24px_70px_rgba(39,31,57,0.2)] sm:-mx-6">
        <img
          src="/art-program/hero-reference.png"
          alt=""
          aria-hidden="true"
          class="h-[16rem] w-full object-cover object-[35%_center] sm:h-[21rem] lg:h-[24rem]"
          loading="eager"
          decoding="async"
        >
        <div class="sr-only">
          <h1>ART PROGRAMS</h1>
          <p>creativity grows through practice</p>
        </div>
      </div>
    </section>

    <section
      id="children"
      class="px-4 pb-20 pt-24 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold italic text-[#6e5b84] [text-shadow:0.08rem_0.1rem_0_rgba(95,142,139,0.72)] sm:text-5xl">
            Children's Art Journey
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="program in childPrograms"
            :key="program.title"
            class="reference-card relative isolate mx-auto flex min-h-[35rem] w-full max-w-[21rem] flex-col px-10 pb-12 pt-12 text-center last:sm:col-span-2 last:sm:justify-self-center last:lg:col-span-1"
          >
            <img
              :src="program.frame"
              alt=""
              class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-fill"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            >
            <img
              :src="program.image"
              :alt="`${program.title} artwork`"
              class="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            >
            <p class="mt-5 font-serif text-2xl font-semibold italic text-[#d1848d]">
              {{ program.subtitle }}
            </p>
            <h3 class="mt-1 font-serif text-3xl font-semibold text-[#69508a]">
              {{ program.title }}
            </h3>
            <ul class="mx-auto mt-4 space-y-1.5 text-left text-sm text-[#5a5065]">
              <li
                v-for="point in program.points"
                :key="point"
                class="flex items-center gap-2"
              >
                <span aria-hidden="true">•</span>
                <span>{{ point }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-auto inline-flex self-center rounded-full bg-[#e7b3b8] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View Gallery
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f1edf7] px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Teen Art Journey
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="program in teenPrograms"
            :key="program.title"
            class="reference-card relative isolate mx-auto flex min-h-[32rem] w-full max-w-[22rem] flex-col px-12 pb-12 pt-14 text-center last:sm:col-span-2 last:sm:justify-self-center last:lg:col-span-1"
          >
            <img
              :src="program.frame"
              alt=""
              class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-fill"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            >
            <img
              :src="program.image"
              :alt="`${program.title} student artwork`"
              class="aspect-[4/3] w-full rounded-lg object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            >
            <p class="mt-4 font-serif text-xl font-semibold italic text-[#a1758c]">
              {{ program.subtitle }}
            </p>
            <h3 class="mt-1 font-serif text-3xl font-semibold text-[#72558d]">
              {{ program.title }}
            </h3>
            <ul class="mx-auto mt-3 space-y-1 text-left text-sm text-[#5d5268]">
              <li
                v-for="point in program.points"
                :key="point"
                class="flex items-center gap-2"
              >
                <span aria-hidden="true">•</span>
                <span>{{ point }}</span>
              </li>
            </ul>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-auto inline-flex self-center rounded-full bg-[#d8c4eb] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View Gallery
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Adult Art Journey
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="program in adultPrograms"
            :key="program.title"
            class="adult-card reference-card relative isolate mx-auto flex min-h-[34rem] w-full max-w-[22rem] flex-col px-12 pb-12 pt-16 text-center last:sm:col-span-2 last:sm:justify-self-center last:lg:col-span-1"
          >
            <img
              :src="program.frame"
              alt=""
              class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-fill"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            >
            <img
              :src="program.image"
              :alt="program.title"
              class="adult-photo aspect-[5/4] w-full rounded-md object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-6 font-serif text-2xl font-semibold text-[#536d49]">
              {{ program.title }}
            </h3>
            <p class="mt-3 text-sm leading-6 text-[#625768]">
              {{ program.description }}
            </p>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-auto inline-flex self-center rounded-full bg-[#d7c7a9] px-7 py-2.5 font-bold text-[#4f4f3e] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View Gallery
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#fbf0e2] px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            The Joys of Making
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="program in makingPrograms"
            :key="program.title"
            class="making-card text-center last:sm:col-span-2 last:sm:justify-self-center last:lg:col-span-1"
          >
            <div class="making-stage relative mx-auto aspect-[740/860] w-full max-w-[21rem]">
              <img
                :src="program.frame"
                alt=""
                class="pointer-events-none absolute inset-0 h-full w-full object-fill"
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              >
              <img
                :src="program.image"
                :alt="program.title"
                class="absolute left-[14%] top-[15%] z-10 h-[50%] w-[72%] rounded-md bg-white object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              >
            </div>
            <h3 class="font-serif text-2xl font-semibold text-[#6f4b31]">
              {{ program.title }}
            </h3>
            <p class="mt-2 italic text-[#70615c]">
              {{ program.note }}
            </p>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-5 inline-flex rounded-full bg-[#e4b77e] px-7 py-2.5 font-bold text-[#5a3f27] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              See Creations
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section
      id="events"
      class="bg-[#fff8f1] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Creative Camps & Events
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="program in campPrograms"
            :key="program.title"
            class="reference-card relative isolate mx-auto flex min-h-[29rem] w-full max-w-[22rem] flex-col px-11 pb-12 pt-14 text-center last:sm:col-span-2 last:sm:justify-self-center last:lg:col-span-1"
          >
            <img
              :src="program.frame"
              alt=""
              class="pointer-events-none absolute inset-0 -z-10 h-full w-full object-fill"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            >
            <img
              :src="program.image"
              :alt="program.title"
              class="aspect-[4/3] w-full rounded-md object-cover shadow-sm"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#69508a]">
              {{ program.title }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-[#706676]">
              {{ program.note }}
            </p>
            <NuxtLink
              v-if="program.to"
              :to="program.to"
              class="mt-auto inline-flex self-center rounded-full bg-[#e6b2b6] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              {{ program.action }}
            </NuxtLink>
            <span
              v-else
              class="mt-auto inline-flex self-center rounded-full bg-[#f3e6de] px-7 py-2.5 font-bold text-[#8a6758] shadow-sm ring-1 ring-[#dec8bb]"
            >
              {{ program.status }}
            </span>
          </article>
        </div>
      </div>
    </section>

    <section
      id="gallery"
      class="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl text-center">
        <h2 class="font-serif text-4xl font-semibold italic text-[#5a4380] sm:text-5xl">
          Gallery of Growth
        </h2>
        <p class="mt-4 text-lg font-semibold text-[#6a5e78]">
          Discover years of creativity, growth, and joyful moments.
        </p>
        <img
          src="/art-program/gallery-wall.png"
          alt="Gallery wall of student artwork"
          class="mt-10 w-full rounded-[2rem] bg-white object-cover shadow-[0_18px_50px_rgba(82,61,107,0.14)] ring-1 ring-[#eaddec]"
          loading="lazy"
          decoding="async"
        >
        <NuxtLink
          to="/art-programs/student-gallery"
          class="mt-8 inline-flex rounded-full bg-[#d9848f] px-9 py-3 text-lg font-bold text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          Enter Gallery
        </NuxtLink>
      </div>
    </section>

    <section
      id="contact"
      class="relative isolate overflow-hidden bg-[#fff9fb] px-4 py-16 text-center sm:px-6 lg:px-8"
    >
      <div
        class="absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
      >
        <div class="watercolor watercolor-rose left-[-8rem] top-[-8rem]" />
        <div class="watercolor watercolor-lavender right-[-8rem] bottom-[-8rem]" />
      </div>
      <div class="mx-auto max-w-4xl">
        <h2 class="font-serif text-5xl font-semibold text-[#49653f]">
          Ready to Begin?
        </h2>
        <p class="mt-4 text-xl italic text-[#a56d41]">
          Take the first step toward creativity, well-being, and connection.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/contact?interest=Trial%20Class#message"
            class="rounded-full bg-[#d9848f] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            Book a Trial Class
          </NuxtLink>
          <a
            href="tel:4165676538"
            class="rounded-full bg-white/80 px-10 py-4 text-lg font-bold text-[#49653f] shadow-sm ring-1 ring-[#eaddec] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            Call or Text 416-567-6538
          </a>
        </div>
      </div>
    </section>

    <footer class="relative bg-[linear-gradient(180deg,#f7f1fb_0%,#efe6f4_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl gap-10 border-b border-[#d8c7e0] pb-10 md:grid-cols-[1.2fr_1fr_1.4fr]">
        <div class="text-center md:text-left">
          <img
            src="/home/logo.png"
            alt="XinYi Class"
            class="mx-auto h-20 w-auto object-contain md:mx-0"
            loading="lazy"
            decoding="async"
          >
          <p class="mt-4 max-w-xs text-sm leading-6 text-[#6c6078] md:max-w-sm">
            XinYi Art School · Children&apos;s Art Classes in Toronto · XinYi Yoga · Gentle Yoga &amp; Meditation in Toronto
          </p>
          <button
            type="button"
            class="mt-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-5 py-2.5 text-sm font-bold text-[#6d4d95] shadow-sm ring-1 ring-[#d8c7e0] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            @click="isAssistantOpen = true"
          >
            <UIcon
              name="i-lucide-sparkles"
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
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-7 text-sm text-[#7a6b8b] md:flex-row">
        <p>© 2026 XinYi Class.</p>
        <p>Art <span class="mx-3 text-[#df838d]">♥</span> Yoga Wellness <span class="mx-3 text-[#df838d]">♥</span> Community</p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.xinyi-art-program {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.xinyi-art-program :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.watercolor {
  position: absolute;
  width: 22rem;
  height: 22rem;
  border-radius: 9999px;
  filter: blur(28px);
}

.watercolor-rose {
  background: rgba(248, 190, 211, 0.55);
}

.watercolor-gold {
  background: rgba(255, 221, 180, 0.55);
}

.watercolor-lavender {
  background: rgba(212, 196, 245, 0.58);
}

.section-divider {
  position: relative;
  width: min(18rem, 70vw);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(151, 124, 177, 0.45), transparent);
}

.section-divider::after {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 1.25rem;
  height: 1.25rem;
  content: "";
  background: radial-gradient(circle at 50% 50%, #c8a9d8 0 28%, transparent 29%), radial-gradient(circle at 20% 30%, #e59aa5 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, #e59aa5 0 18%, transparent 19%);
  transform: translate(-50%, -50%);
}

.reference-card {
  filter: drop-shadow(0 1rem 1.5rem rgba(83, 68, 99, 0.12));
}

.adult-card:nth-child(3) .adult-photo {
  background: #f4ead5;
  object-fit: contain;
}

.making-card:nth-child(2) .making-stage {
  transform: rotate(1deg);
}

.making-card:nth-child(3) .making-stage {
  transform: rotate(-0.6deg);
}
</style>
