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
  { label: 'Art Programs', to: '/art-programs', icon: 'i-lucide-palette' },
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '/schedules', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

const sectionLinks = [
  { label: 'Children', to: '#children' },
  { label: 'Teens', to: '#teens' },
  { label: 'Adults', to: '#adults' },
  { label: 'Crafts', to: '#crafts' },
  { label: 'Chinese Art', to: '#chinese-art' },
]

const childrenTabs = ['Age 4–6', 'Age 7–10', 'Age 11–13']
const teenTabs = ['Age 13–15', 'Age 15–18', 'Portfolios']
const adultTabs = ['All Works', 'Paintings', 'Watercolor']
const craftTabs = ['All Crafts', 'Paper Crafts', 'Clay & Pottery', 'Textile & Yarn', 'Mixed Media']

const childrenWorks = [
  { title: 'My City - Toronto', meta: 'Age 5', image: '/art-program/age-4-6.png', color: '#f3cbd7' },
  { title: 'Lion Dance', meta: 'Age 6', image: '/art-program/age-7-9.jpg', color: '#f7d7a8' },
  { title: 'Sunny Day', meta: 'Age 6', image: '/art-program/age-10-12.png', color: '#cfe7c4' },
]

const teenWorks = [
  { title: 'Fantasy Girl', meta: 'Age 14 · Digital Art', image: '/student-gallery/fantasy-girl.jpg' },
  { title: 'Cat Study', meta: 'Age 13 · Watercolor', image: '/art-program/age-13-15.png' },
  { title: 'Portfolio Practice', meta: 'Age 16 · Acrylic', image: '/art-program/age-16-plus.jpg' },
  { title: 'Quiet Portrait', meta: 'Age 15 · Drawing', image: '/art-program/age-15-18.jpg' },
]

const adultWorks = [
  { title: 'Mountain Lake', meta: 'Oil Painting', image: '/student-gallery/julia-artwork.jpg' },
  { title: 'Floral Figure', meta: 'Watercolor', image: '/art-program/adult-1.jpg' },
  { title: 'Garden Portrait', meta: 'Acrylic', image: '/student-gallery/bernice-portrait.jpg' },
  { title: 'Soft Bloom', meta: 'Mixed Media', image: '/art-program/adult-2.jpg' },
]

const craftWorks = [
  { title: 'Tiny Garden', meta: 'Paper Crafts', image: '/art-program/craft-2.jpg' },
  { title: 'Fruit Platter', meta: 'Mixed Media', image: '/art-program/summer-camp-fruit-platter.jpg' },
  { title: 'Yarn Friends', meta: 'Textile & Yarn', image: '/art-program/craft-1.png' },
  { title: 'Little Keeper', meta: 'Clay & Pottery', image: '/art-program/craft-3.jpg' },
]

const chineseWorks = [
  { title: 'Mountain Landscape', meta: 'Ink on Fan', image: '/art-program/adult-3.png' },
  { title: 'Quiet Brushwork', meta: 'Chinese Painting', image: '/student-gallery/jane-watercolor.jpg' },
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
  { label: 'Schedules', to: '/schedules' },
  { label: 'Contact', to: '/contact' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main class="student-gallery min-h-screen overflow-hidden bg-[#fff9f1] text-[#40335f]">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff9f1_0%,#fbedf5_50%,#f1eefb_100%)] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div class="wash left-[-8rem] top-[-8rem] bg-[#f4bdd1]/55" />
        <div class="wash right-[-8rem] top-24 bg-[#d6cef4]/60" />
        <div class="wash bottom-[-10rem] left-1/3 bg-[#f7dbad]/45" />
      </div>

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between px-3 py-3"
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

        <div class="hidden items-center gap-5 md:flex">
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            class="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-[#4f4169] transition hover:bg-white/70 hover:text-[#7d5ca5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
            :class="item.label === 'Art Programs' ? 'bg-white/80 text-[#6d4d95]' : ''"
          >
            <UIcon
              v-if="item.label === 'Art Programs'"
              :name="item.icon"
              class="size-4"
            />
            {{ item.label }}
          </NuxtLink>
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

      <div class="mx-auto grid max-w-6xl items-center gap-10 py-14 lg:grid-cols-[0.85fr_1.15fr] lg:py-20">
        <div class="text-center lg:text-left">
          <p class="text-sm font-bold uppercase tracking-[0.36em] text-[#b47b9a]">
            XinYi Class
          </p>
          <h1 class="mt-5 font-serif text-5xl font-semibold leading-tight text-[#415f3a] sm:text-6xl lg:text-7xl">
            Students' Gallery
          </h1>
          <p class="mx-auto mt-6 max-w-xl text-xl leading-8 text-[#6a5f78] lg:mx-0">
            Celebrating creativity, imagination and growth at every age.
          </p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <NuxtLink
              to="#children"
              aria-label="Jump to children's artwork"
              class="inline-flex items-center justify-center rounded-full bg-[#e7a0ab] px-6 py-4 text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              <UIcon
                name="i-lucide-arrow-down"
                class="size-6"
              />
            </NuxtLink>
            <NuxtLink
              to="/contact?interest=Trial%20Class#message"
              class="inline-flex items-center justify-center rounded-full bg-white/80 px-8 py-4 font-bold text-[#6d4d95] shadow-sm ring-1 ring-[#eaddec] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              Book a Trial Class
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -left-5 top-10 hidden rotate-[-10deg] rounded-full bg-white/80 px-4 py-2 font-serif text-xl text-[#d88993] shadow-md md:block">
            ✦ Art Wall ✦
          </div>
          <div class="gallery-hero-card">
            <img
              src="/art-program/gallery-wall.png"
              alt="Student artwork wall at XinYi Class"
              class="h-full w-full rounded-[1.75rem] object-cover"
              loading="eager"
              decoding="async"
            >
          </div>
          <img
            src="/student-gallery/fantasy-girl.jpg"
            alt="Fantasy Girl student digital artwork"
            class="absolute -bottom-8 right-8 hidden h-44 w-32 rotate-6 rounded-2xl object-cover shadow-2xl ring-4 ring-white md:block"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 rounded-full bg-white/65 p-2 shadow-sm ring-1 ring-white/80 backdrop-blur">
        <NuxtLink
          v-for="link in sectionLinks"
          :key="link.label"
          :to="link.to"
          class="rounded-full px-4 py-2 text-sm font-bold text-[#6b577c] transition hover:bg-[#f2e5ff] hover:text-[#5b3d91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </section>

    <section
      id="children"
      class="relative px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <p class="text-3xl text-[#d98d98]">
            ✦ 🎨 ✦
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-[#415f3a] sm:text-5xl">
            Children's Art Works
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6a5f78]">
            Celebrating creativity, imagination and growth at every age.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <button
              v-for="tab in childrenTabs"
              :key="tab"
              type="button"
              class="rounded-full bg-[#f3d9df] px-5 py-2 text-sm font-bold text-[#694e68] shadow-sm ring-1 ring-[#e9bcc9]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr_0.72fr]">
          <article
            v-for="work in childrenWorks"
            :key="work.title"
            class="paper-card"
          >
            <div
              class="rounded-[1.6rem] p-3"
              :style="{ backgroundColor: work.color }"
            >
              <img
                :src="work.image"
                :alt="`${work.title} student artwork`"
                class="aspect-square w-full rounded-[1.15rem] bg-white object-cover shadow-sm"
                loading="lazy"
                decoding="async"
              >
            </div>
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#4b6343]">
              {{ work.title }}
            </h3>
            <p class="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-[#c6808e]">
              {{ work.meta }}
            </p>
          </article>

          <aside class="flex min-h-64 items-center justify-center rounded-[2rem] border border-dashed border-[#d9b6c5] bg-[#fff7fb] p-6 text-center shadow-sm">
            <div>
              <UIcon
                name="i-lucide-hand"
                class="mx-auto size-10 text-[#d88993]"
              />
              <p class="mt-4 font-serif text-2xl text-[#6d4d95]">
                Swipe or click to explore more artwork
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section
      id="teens"
      class="bg-[#f3effa] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Teen's Art Works
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6a5f78]">
            Showcasing growth, expression and creative journeys.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <button
              v-for="tab in teenTabs"
              :key="tab"
              type="button"
              class="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#6d4d95] shadow-sm ring-1 ring-[#ded0ee]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="work in teenWorks"
            :key="work.title"
            class="gallery-card bg-white"
          >
            <img
              :src="work.image"
              :alt="`${work.title} student artwork`"
              class="h-72 w-full rounded-[1.35rem] object-cover object-top"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#5a4380]">
              {{ work.title }}
            </h3>
            <p class="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#a07ab5]">
              {{ work.meta }}
            </p>
          </article>
        </div>

        <p class="mx-auto mt-12 max-w-3xl text-center font-serif text-2xl italic leading-10 text-[#6d5b84]">
          “Every artwork tells a story. Thank you for being part of our creative journey.”
        </p>
      </div>
    </section>

    <section
      id="adults"
      class="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#415f3a] sm:text-5xl">
            Adult Art Works
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6a5f78]">
            Art created with passion, experience and personal expression.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <button
              v-for="tab in adultTabs"
              :key="tab"
              type="button"
              class="rounded-full bg-[#e4ead9] px-5 py-2 text-sm font-bold text-[#4f6745] shadow-sm ring-1 ring-[#cddbbf]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="work in adultWorks"
            :key="work.title"
            class="gallery-card bg-[#fffdf8]"
          >
            <img
              :src="work.image"
              :alt="`${work.title} adult artwork`"
              class="h-72 w-full rounded-[1.35rem] object-cover object-top"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#4f6745]">
              {{ work.title }}
            </h3>
            <p class="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#9b7a50]">
              {{ work.meta }}
            </p>
          </article>
        </div>

        <p class="mx-auto mt-12 max-w-3xl text-center font-serif text-2xl italic leading-10 text-[#6a5f78]">
          “Art is not about perfection. it's about expression. Every piece is a reflection of a unique journey.”
        </p>
      </div>
    </section>

    <section
      id="crafts"
      class="bg-[#fff1e4] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#6f4b31] sm:text-5xl">
            Craft Creations
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#6a5f78]">
            Handmade with love, creativity and care.
          </p>
          <div class="mt-6 flex flex-wrap justify-center gap-3">
            <button
              v-for="tab in craftTabs"
              :key="tab"
              type="button"
              class="rounded-full bg-white/85 px-5 py-2 text-sm font-bold text-[#76543a] shadow-sm ring-1 ring-[#e0c29c]"
            >
              {{ tab }}
            </button>
          </div>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="work in craftWorks"
            :key="work.title"
            class="gallery-card bg-[#fffaf1]"
          >
            <img
              :src="work.image"
              :alt="`${work.title} craft artwork`"
              class="h-64 w-full rounded-[1.35rem] bg-white object-contain"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-5 font-serif text-2xl font-semibold text-[#6f4b31]">
              {{ work.title }}
            </h3>
            <p class="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#a06d45]">
              {{ work.meta }}
            </p>
          </article>
        </div>

        <p class="mx-auto mt-12 max-w-3xl text-center font-serif text-2xl italic leading-10 text-[#76543a]">
          “Little hands. Big imagination. Every creation is a beautiful story.”
        </p>
      </div>
    </section>

    <section
      id="chinese-art"
      class="bg-[#f8f1e6] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <p class="mx-auto flex size-12 items-center justify-center rounded-sm bg-[#b6342c] font-serif text-lg font-bold text-white shadow-md">
            心
          </p>
          <h2 class="mt-5 font-serif text-4xl font-semibold text-[#2f352c] sm:text-5xl">
            Chinese Painting & Calligraphy
          </h2>
          <p class="mt-4 text-lg font-semibold tracking-[0.18em] text-[#7d6c5b]">
            Tradition · Simplicity · Inner Peace
          </p>
        </div>

        <div class="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <div class="rounded-[2rem] bg-[#d8c3a4] p-4 shadow-[0_22px_70px_rgba(62,51,39,0.16)] ring-1 ring-[#b89c75]">
            <div class="grid gap-4 md:grid-cols-2">
              <article
                v-for="work in chineseWorks"
                :key="work.title"
                class="rounded-[1.5rem] bg-[#fffaf0] p-3 shadow-inner"
              >
                <img
                  :src="work.image"
                  :alt="`${work.title} Chinese artwork`"
                  class="h-96 w-full rounded-[1.1rem] bg-white object-contain"
                  loading="lazy"
                  decoding="async"
                >
                <h3 class="mt-4 text-center font-serif text-2xl font-semibold text-[#2f352c]">
                  {{ work.title }}
                </h3>
                <p class="mt-1 text-center text-sm font-bold uppercase tracking-[0.18em] text-[#9b4237]">
                  {{ work.meta }}
                </p>
              </article>
            </div>
          </div>

          <aside class="rounded-[2rem] bg-white/80 p-8 shadow-sm ring-1 ring-[#decdb2]">
            <h3 class="font-serif text-3xl font-semibold text-[#2f352c]">
              About Chinese Art
            </h3>
            <p class="mt-5 text-lg leading-8 text-[#665846]">
              Chinese painting and calligraphy are more than art forms—they are a way of life.
            </p>
            <p class="mt-5 text-lg leading-8 text-[#665846]">
              Through the brush, we cultivate mindfulness, appreciate nature, and express the beauty within.
            </p>
            <div class="mt-8 rounded-[1.5rem] bg-[#f7eee0] p-5 text-center font-serif text-2xl italic text-[#7b483e]">
              Mountain Landscape · Ink on Fan
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="relative isolate overflow-hidden bg-[#fff9fb] px-4 py-16 text-center sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
      >
        <div class="wash left-[-8rem] top-[-8rem] bg-[#f4bdd1]/55" />
        <div class="wash right-[-8rem] bottom-[-8rem] bg-[#d6cef4]/60" />
      </div>
      <div class="mx-auto max-w-4xl">
        <h2 class="font-serif text-5xl font-semibold text-[#415f3a]">
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
          <button
            type="button"
            class="rounded-full bg-white/80 px-10 py-4 text-lg font-bold text-[#49653f] shadow-sm ring-1 ring-[#eaddec] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            @click="isAssistantOpen = true"
          >
            Talk with AI Assistant
          </button>
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
            loading="lazy"
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

.wash {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(32px);
}

.gallery-hero-card {
  position: relative;
  aspect-ratio: 16 / 10;
  padding: 0.7rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.78);
  border-radius: 2.3rem;
  box-shadow: 0 1.5rem 4.5rem rgba(89, 70, 110, 0.17);
}

.gallery-hero-card::before,
.gallery-hero-card::after {
  position: absolute;
  z-index: 1;
  width: 5.5rem;
  height: 1.7rem;
  content: "";
  background: rgba(249, 220, 166, 0.8);
  border-radius: 9999px;
  transform: rotate(-10deg);
}

.gallery-hero-card::before {
  top: 1.4rem;
  left: 2.3rem;
}

.gallery-hero-card::after {
  right: 2.3rem;
  bottom: 1.5rem;
}

.paper-card,
.gallery-card {
  padding: 1rem;
  text-align: center;
  border-radius: 2rem;
  box-shadow: 0 1rem 3rem rgba(82, 61, 107, 0.12);
}

.paper-card {
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid #efdfe8;
}

.gallery-card {
  border: 1px solid rgba(222, 208, 232, 0.9);
}
</style>
