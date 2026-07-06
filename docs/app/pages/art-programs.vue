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
    subtitle: 'Discover',
    image: '/art-program/age-4-6.png',
    points: ['Color & Shape', 'Playful Lines', 'Storytelling', 'Confidence Building'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 4–6', slide: '0' } },
  },
  {
    title: 'Ages 7–9',
    subtitle: 'Explore',
    image: '/art-program/age-7-9.jpg',
    points: ['Drawing Foundations', 'Watercolor & Acrylic', 'Observation Skills', 'Creative Projects'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 7–9', slide: '0' } },
  },
  {
    title: 'Ages 10–12',
    subtitle: 'Grow',
    image: '/art-program/age-10-12.png',
    points: ['Composition', 'Personal Style', 'Mixed Media', 'Art Appreciation'],
    galleryTo: { path: '/art-programs/student-gallery', hash: '#children', query: { section: 'children', category: 'Age 10–12', slide: '0' } },
  },
]

const teenPrograms = [
  {
    title: 'Ages 13–15',
    image: '/art-program/age-13-15.png',
    description: 'Build stronger technique, creative confidence, and visual storytelling skills.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Age 13–15', slide: '0' } },
  },
  {
    title: 'Ages 15–18',
    image: '/art-program/age-15-18.jpg',
    description: 'Develop independent projects while refining drawing, painting, and critique habits.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Age 15–18', slide: '0' } },
  },
  {
    title: '16+ Portfolio',
    image: '/art-program/age-16-plus.jpg',
    description: 'Prepare portfolio pieces with focused mentorship and art school guidance.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#teens', query: { section: 'teens', category: 'Portfolios', slide: '0' } },
  },
]

const adultPrograms = [
  {
    title: 'Creative Well-Being',
    image: '/art-program/adult-1.jpg',
    description: 'Relax, reconnect, and enjoy mindful creativity in a warm studio setting.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#adults', query: { section: 'adults', category: 'All Works', slide: '0' } },
  },
  {
    title: 'Painting Practice',
    image: '/art-program/adult-2.jpg',
    description: 'Explore expressive color, brushwork, and personal themes at your own pace.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#adults', query: { section: 'adults', category: 'Paintings', slide: '0' } },
  },
  {
    title: 'Ink & Calligraphy',
    image: '/art-program/adult-3.png',
    description: 'Practice graceful lines, cultural tradition, and calm concentration.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#chinese-art', query: { section: 'chinese-art', slide: '0' } },
  },
]

const makingPrograms = [
  {
    title: 'Crochet & Fiber Arts',
    image: '/art-program/craft-1.png',
    note: 'Soft textures, patient hands, playful details.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Textile & Yarn', slide: '0' } },
  },
  {
    title: 'Clay & Sculpture',
    image: '/art-program/craft-2.jpg',
    note: 'Tiny worlds shaped with color, care, and imagination.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Clay & Pottery', slide: '0' } },
  },
  {
    title: 'Paper & Mixed Media',
    image: '/art-program/craft-3.jpg',
    note: 'Layered materials become bright keepsake creations.',
    galleryTo: { path: '/art-programs/student-gallery', hash: '#crafts', query: { section: 'crafts', category: 'Mixed Media', slide: '0' } },
  },
]

const campPrograms = [
  {
    title: 'Summer Camps',
    image: '/art-program/creative-camp-summer.png',
    note: 'Bright weeks of art, play, and friendship.',
    action: 'View Camps',
    to: '/art-programs/summer-camps',
  },
  {
    title: 'Holiday Workshops',
    image: '/art-program/creative-camp-workshops.jpg',
    note: 'Seasonal projects and handmade gifts.',
    status: 'Coming Soon',
  },
  {
    title: 'Community Events',
    image: '/art-program/creative-camp-events.jpg',
    note: 'Shared making moments for families and friends.',
    status: 'Coming Soon',
  },
]

const galleryImages = [
  '/art-program/the-painting.jpg',
  '/art-program/craft-2.jpg',
  '/art-program/summer-camp-showcase.jpg',
  '/art-program/summer-camp-fruit-platter.jpg',
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
            class="h-24 w-auto object-contain"
            loading="eager"
            decoding="async"
          >
        </NuxtLink>

        <div class="hidden items-center gap-4 md:flex lg:gap-6">
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
          alt="ART PROGRAMS — creativity grows through practice"
          class="h-[27rem] w-full object-cover object-[35%_center]"
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
      class="px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold italic text-[#6e5b84] [text-shadow:0.08rem_0.1rem_0_rgba(95,142,139,0.72)] sm:text-5xl">
            Children's Art Journey
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Age-based classes help young artists build fundamentals through playful, confidence-building practice.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <article
            v-for="program in childPrograms"
            :key="program.title"
            class="rounded-3xl bg-white/85 p-4 shadow-[0_18px_50px_rgba(82,61,107,0.14)] ring-1 ring-[#eaddec]"
          >
            <div class="child-photo-frame">
              <img
                :src="program.image"
                :alt="`${program.title} artwork`"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="px-2 pb-2 pt-5 text-center">
              <p class="text-sm font-bold uppercase tracking-[0.24em] text-[#d1848d]">
                {{ program.subtitle }}
              </p>
              <h3 class="mt-2 font-serif text-3xl font-semibold text-[#69508a]">
                {{ program.title }}
              </h3>
              <ul class="mt-5 space-y-2 text-left text-sm text-[#5a5065]">
                <li
                  v-for="point in program.points"
                  :key="point"
                  class="flex items-center gap-2"
                >
                  <UIcon
                    name="i-lucide-heart"
                    class="size-4 shrink-0 text-[#d1848d]"
                  />
                  <span>{{ point }}</span>
                </li>
              </ul>
              <NuxtLink
                :to="program.galleryTo"
                class="mt-6 inline-flex rounded-full bg-[#e7b3b8] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
              >
                View Gallery
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#f2eef8] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Teen Art Pathway
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Structured projects help teens sharpen technique, find their voice, and prepare stronger portfolios.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="teen-grid mt-10 grid gap-7 lg:grid-cols-3">
          <article
            v-for="program in teenPrograms"
            :key="program.title"
            class="rounded-[2rem] bg-white p-4 shadow-[0_18px_50px_rgba(82,61,107,0.13)] ring-1 ring-[#e5d9ef]"
          >
            <div class="teen-photo-frame">
              <img
                :src="program.image"
                :alt="`${program.title} student artwork`"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="px-3 py-5 text-center">
              <h3 class="font-serif text-3xl font-semibold text-[#72558d]">
                {{ program.title }}
              </h3>
              <p class="mt-3 leading-7 text-[#5d5268]">
                {{ program.description }}
              </p>
              <NuxtLink
                :to="program.galleryTo"
                class="mt-5 inline-flex rounded-full bg-[#d8c4eb] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
              >
                View Gallery
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Adult Art Journey
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Gentle, expressive classes for adults who want creative practice, calm focus, and community.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <article
            v-for="program in adultPrograms"
            :key="program.title"
            class="rounded-[2rem] bg-[#fffdf7] p-5 text-center shadow-[0_14px_42px_rgba(84,69,97,0.12)] ring-1 ring-[#e8dfd0]"
          >
            <img
              :src="program.image"
              :alt="program.title"
              class="aspect-[5/4] w-full rounded-[1.4rem] object-cover"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-6 font-serif text-2xl font-semibold text-[#536d49]">
              {{ program.title }}
            </h3>
            <p class="mt-3 leading-7 text-[#625768]">
              {{ program.description }}
            </p>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-5 inline-flex rounded-full bg-[#d7c7a9] px-7 py-2.5 font-bold text-[#4f4f3e] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View Gallery
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#fbf0e2] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            The Joys of Making
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Hands-on craft projects let students explore texture, form, color, and playful construction.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-12 grid gap-8 md:grid-cols-3">
          <article
            v-for="program in makingPrograms"
            :key="program.title"
            class="making-card rounded-[2rem] bg-[#fffaf1]/80 p-5 text-center shadow-[0_16px_40px_rgba(109,77,52,0.13)] ring-1 ring-[#d9b78f]"
          >
            <div class="making-photo-frame">
              <img
                :src="program.image"
                :alt="program.title"
                class="h-full w-full bg-white object-contain"
                loading="lazy"
                decoding="async"
              >
            </div>
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#6f4b31]">
              {{ program.title }}
            </h3>
            <p class="mt-2 leading-7 text-[#70615c]">
              {{ program.note }}
            </p>
            <NuxtLink
              :to="program.galleryTo"
              class="mt-5 inline-flex rounded-full bg-[#e4b77e] px-7 py-2.5 font-bold text-[#5a3f27] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View Gallery
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#fff8f1] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Creative Camps & Events
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Seasonal creative experiences bring students together for art, play, and celebration.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <article
            v-for="program in campPrograms"
            :key="program.title"
            class="rounded-[2rem] bg-white/85 p-4 text-center shadow-sm ring-1 ring-[#d7d0c4]"
          >
            <div class="camp-photo-frame">
              <img
                :src="program.image"
                :alt="program.title"
                class="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              >
            </div>
            <h3 class="mt-4 font-serif text-2xl font-semibold text-[#69508a]">
              {{ program.title }}
            </h3>
            <p class="mt-1 text-lg text-[#706676]">
              {{ program.note }}
            </p>
            <NuxtLink
              v-if="program.to"
              :to="program.to"
              class="mt-4 inline-flex rounded-full bg-[#e6b2b6] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              {{ program.action }}
            </NuxtLink>
            <span
              v-else
              class="mt-4 inline-flex rounded-full bg-[#f3e6de] px-7 py-2.5 font-bold text-[#8a6758] shadow-sm ring-1 ring-[#dec8bb]"
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
        <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <img
            v-for="image in galleryImages"
            :key="image"
            :src="image"
            alt="XinYi Class art program moment"
            class="aspect-square w-full rounded-2xl object-cover shadow-sm ring-1 ring-[#eaddec]"
            loading="lazy"
            decoding="async"
          >
        </div>
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
            Inspiring creativity, connection, and well-being since 2016.
          </p>
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
        <p>Art <span class="mx-3 text-[#df838d]">♥</span> Wellness <span class="mx-3 text-[#df838d]">♥</span> Community</p>
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

.child-photo-frame,
.teen-photo-frame {
  position: relative;
  overflow: hidden;
}

.child-photo-frame {
  aspect-ratio: 1;
  padding: 0.55rem;
  background: #fffdfb;
  border-radius: 2rem 2rem 1.5rem 1.5rem;
  box-shadow: inset 0 0 0 1px rgba(123, 111, 137, 0.24), 0 0.6rem 1.5rem rgba(83, 68, 99, 0.12);
}

.child-photo-frame::after {
  position: absolute;
  inset: 0.35rem;
  pointer-events: none;
  content: "";
  border: 2px dashed rgba(108, 99, 119, 0.48);
  border-radius: 1.7rem 1.7rem 1.25rem 1.25rem;
}

.child-photo-frame img,
.teen-photo-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.child-photo-frame img {
  border-radius: 1.35rem;
}

.teen-photo-frame {
  aspect-ratio: 4 / 3;
  padding: 0.9rem 0.75rem 0.7rem;
  background: #fffaf7;
  border-radius: 1.1rem;
  box-shadow: 0 0.75rem 1.5rem rgba(83, 68, 99, 0.12);
}

.teen-photo-frame::before {
  position: absolute;
  inset: 0.2rem 0.65rem auto;
  height: 0.55rem;
  content: "";
  background-image: radial-gradient(circle, #b9acbf 0 0.08rem, transparent 0.09rem);
  background-size: 0.55rem 0.55rem;
}

.teen-photo-frame img {
  clip-path: polygon(0 7%, 6% 0, 12% 7%, 18% 0, 24% 7%, 30% 0, 36% 7%, 42% 0, 48% 7%, 54% 0, 60% 7%, 66% 0, 72% 7%, 78% 0, 84% 7%, 90% 0, 96% 7%, 100% 7%, 100% 94%, 94% 100%, 88% 94%, 82% 100%, 76% 94%, 70% 100%, 64% 94%, 58% 100%, 52% 94%, 46% 100%, 40% 94%, 34% 100%, 28% 94%, 22% 100%, 16% 94%, 10% 100%, 4% 94%, 0 94%);
}

.making-card:nth-child(2) .making-photo-frame {
  transform: rotate(1deg);
}

.making-card:nth-child(3) .making-photo-frame {
  transform: rotate(-0.6deg);
}

.making-photo-frame,
.camp-photo-frame {
  position: relative;
  overflow: hidden;
}

.making-photo-frame {
  aspect-ratio: 4 / 3;
  padding: 0.6rem;
  background: linear-gradient(135deg, #b77b49, #8f5a33);
  border-radius: 1.45rem;
  box-shadow: 0 0.9rem 1.8rem rgba(100, 67, 39, 0.2);
  transform: rotate(-1deg);
}

.making-photo-frame img {
  border-radius: 0.95rem;
}

.camp-photo-frame {
  aspect-ratio: 4 / 3;
  padding: 0.45rem;
  background: white;
  border-radius: 1.6rem;
  box-shadow: inset 0 0 0 1px rgba(123, 111, 137, 0.16);
}

.camp-photo-frame img {
  border-radius: 1.2rem;
}
</style>
