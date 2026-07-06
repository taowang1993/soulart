<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Summer Camps | XinYi Class',
  description: 'Join XinYi Class summer art camp for creative projects, outdoor sketching, museum exploration, lunch, snacks, and joyful friendship.',
  ogTitle: 'Summer Camps | XinYi Class',
  ogDescription: 'Create, explore, and grow together at XinYi Class summer art camp.',
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

const dayCards = [
  {
    number: '1',
    title: 'Morning',
    image: '/summer-camps/morning-studio.jpg',
    alt: 'Students starting a summer camp day in the studio',
    text: 'We start each day with smiles, fun games and warm-up activities to wake up our bodies and minds.',
  },
  {
    number: '2',
    title: 'Outdoor Sketching',
    image: '/summer-camps/outdoor-farm.jpg',
    alt: 'Summer camp students visiting a farm outdoors',
    text: 'We go outside to observe nature, sketch what we see, and learn to appreciate the beauty around us.',
  },
  {
    number: '3',
    title: 'Craft & Create',
    image: '/summer-camps/craft-studio.jpg',
    alt: 'Handmade craft project from XinYi summer camp',
    text: 'From painting and clay to mixed media and handmade projects, every child creates in their own unique way.',
  },
  {
    number: '4',
    title: 'Play',
    image: '/summer-camps/hero.jpg',
    alt: 'Children playing together during summer camp',
    text: 'We play, we laugh, we explore! Games, water fun and teamwork make our summer unforgettable.',
  },
  {
    number: '5',
    title: 'Lunch & Snacks',
    image: '/summer-camps/fruit-platter.jpg',
    alt: 'Fresh fruit platter from summer camp',
    text: 'Eat together. Recharge together. Healthy meals, happy conversations, and a little time to rest before the afternoon adventure.',
  },
  {
    number: '6',
    title: 'Museum Explore',
    image: '/summer-camps/outdoor-farm.jpg',
    alt: 'Children exploring beyond the classroom',
    text: 'Learning beyond the classroom. Museums, galleries, nature walks and creative discoveries inspire new ideas.',
  },
  {
    number: '7',
    title: 'Showcase',
    image: '/summer-camps/showcase.jpg',
    alt: 'XinYi summer camp showcase with children and artwork',
    text: 'Every child shines. We celebrate every step of the creative journey through exhibitions and sharing.',
  },
]

const campInfo = [
  { label: 'Dates', value: '2-Week Program', detail: 'July 20–24 & 27–31', icon: 'i-lucide-calendar-days' },
  { label: 'Time', value: '9:30 AM – 4:30 PM', detail: 'Full creative days', icon: 'i-lucide-clock' },
  { label: 'Ages', value: 'Ages 6–13', detail: 'Young artists and makers', icon: 'i-lucide-users' },
  { label: 'Location', value: 'XinYi Art Studio', detail: '105 Gordon Baker Rd., #704, North York, ON', icon: 'i-lucide-map-pin' },
  { label: 'Fees', value: '$120/day', detail: '$100/day (weekly rate)', icon: 'i-lucide-wallet' },
]

const includedItems = [
  'All art materials',
  'Museum admission',
  'Lunch & fresh fruits',
  'Studio supplies',
  'Experienced instructors',
]

const activityItems = [
  '2–3 days outdoor painting (park & beach)',
  '2 days indoor clay & creative studio work',
  '1 day museum visit',
  'Picnic & BBQ (weather permitting)',
  'Lunch & fresh fruits included',
  'Gentle nature walks',
]

const creativeValues = [
  { label: 'Create', icon: 'i-lucide-palette' },
  { label: 'Explore', icon: 'i-lucide-binoculars' },
  { label: 'Grow', icon: 'i-lucide-sprout' },
  { label: 'Together', icon: 'i-lucide-users-round' },
]

const bringItems = [
  'Hat & sunscreen',
  'Water bottle',
  'Comfortable clothes',
  'Extra snack (optional)',
]

const noteItems = [
  'Please let us know about any allergies or medical conditions.',
  'Pickup is at 4:30 PM. Late pickup charges may apply.',
  'Refunds are available up to 7 days before camp starts.',
]

const contactItems = [
  { label: 'WeChat ID: xinyiarttoronto', icon: 'i-lucide-message-circle' },
  { label: 'xinyiartschool@gmail.com', icon: 'i-lucide-mail' },
  { label: '416-567-6538', icon: 'i-lucide-phone' },
]

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Art Programs', to: '/art-programs' },
  { label: 'Student Gallery', to: '/art-programs/student-gallery' },
  { label: 'Summer Camps', to: '/art-programs/summer-camps' },
  { label: 'Schedules', to: '/schedules' },
  { label: 'Contact', to: '/contact' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main class="xinyi-summer-camps min-h-screen overflow-hidden bg-[#fff8ed] text-[#31445b]">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff7e8_0%,#f8edcf_48%,#e5f4e8_100%)] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
      >
        <div class="wash wash-blue left-[-7rem] top-[10rem]" />
        <div class="wash wash-pink right-[-8rem] top-[-8rem]" />
        <div class="wash wash-yellow bottom-[-10rem] left-1/3" />
      </div>

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
      >
        <NuxtLink
          to="/"
          aria-label="XinYi Class Home"
          class="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
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
              class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#38516a] transition hover:bg-[#e9f4ee] hover:text-[#587c52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              :class="item.label === 'Art Programs' ? 'bg-[#e9f4ee] text-[#587c52]' : ''"
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
              class="pointer-events-none absolute left-0 top-full z-30 min-w-56 rounded-2xl bg-white/95 p-2 opacity-0 shadow-xl ring-1 ring-[#e8d7bd] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#5d7b55] hover:bg-[#f3f7ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink
          to="/contact?interest=Summer%20Camp#message"
          class="rounded-full bg-[#e8876f] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#e8876f]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          Book Camp
        </NuxtLink>
      </nav>

      <div class="mx-auto grid max-w-6xl items-center gap-10 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:pt-20">
        <div class="text-center lg:text-left">
          <p class="text-sm font-black uppercase tracking-[0.32em] text-[#d9785e]">
            XinYi Class Summer Program
          </p>
          <h1 class="mt-5 font-serif text-6xl font-semibold leading-[0.95] text-[#2f79a9] sm:text-7xl lg:text-8xl">
            Summer Art Camp
          </h1>
          <p class="mt-5 font-serif text-3xl italic text-[#5c8a50] sm:text-4xl">
            Create · Explore · Grow Together
          </p>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#59696c] lg:mx-0">
            A summer filled with creativity, friendship and unforgettable memories.
          </p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <NuxtLink
              to="#camp-info"
              class="rounded-full bg-[#e8876f] px-8 py-3 text-base font-black text-white shadow-lg shadow-[#e8876f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              View 2026 Camp Info
            </NuxtLink>
            <NuxtLink
              to="/contact?interest=Summer%20Camp#message"
              class="rounded-full bg-white/80 px-8 py-3 text-base font-black text-[#3b6584] shadow-sm ring-1 ring-[#e8d7bd] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              Reserve a Spot
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="absolute -inset-5 -z-10 rounded-[3rem] bg-white/45 blur-2xl" />
          <div class="paper-photo rotate-1 p-4">
            <img
              src="/summer-camps/hero.jpg"
              alt="Children enjoying XinYi summer art camp outdoors"
              class="h-[27rem] w-full rounded-[1.7rem] object-cover object-center"
              loading="eager"
              decoding="async"
            >
            <p class="mt-4 text-center font-serif text-2xl font-semibold text-[#d9785e]">
              Joyful Summer Memories
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <p class="text-xs font-black uppercase tracking-[0.28em] text-[#d9785e]">
            A Day at Camp
          </p>
          <h2 class="mt-4 font-serif text-5xl font-semibold text-[#315b7c] sm:text-6xl">
            Art, Nature, Food and Friendship
          </h2>
        </div>

        <div class="mt-14 grid gap-7 md:grid-cols-2">
          <article
            v-for="card in dayCards"
            :key="card.title"
            class="paper-card grid gap-5 rounded-[2rem] bg-white/82 p-5 shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-1 ring-[#ebdec6] lg:grid-cols-[0.84fr_1fr]"
          >
            <img
              :src="card.image"
              :alt="card.alt"
              class="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-sm ring-1 ring-white/80"
              loading="lazy"
              decoding="async"
            >
            <div class="flex flex-col justify-center">
              <p class="font-serif text-4xl font-semibold text-[#d9785e]">
                {{ card.number }}.
              </p>
              <h3 class="mt-2 font-serif text-3xl font-semibold text-[#315b7c]">
                {{ card.title }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-[#5d6768]">
                {{ card.text }}
              </p>
            </div>
          </article>
        </div>

        <blockquote class="mx-auto mt-14 max-w-3xl rounded-[2rem] bg-[#dff0f5]/75 px-8 py-9 text-center font-serif text-4xl italic leading-tight text-[#2f79a9] shadow-inner ring-1 ring-[#c8e0e6]">
          Every masterpiece begins with one joyful step.
        </blockquote>
      </div>
    </section>

    <section
      id="camp-info"
      class="bg-[#f7edd9] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <p class="text-xs font-black uppercase tracking-[0.28em] text-[#d9785e]">
            2026 Registration
          </p>
          <h2 class="mt-4 font-serif text-5xl font-semibold text-[#315b7c] sm:text-6xl">
            Camp Information
          </h2>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <article
            v-for="item in campInfo"
            :key="item.label"
            class="rounded-[1.5rem] bg-white/82 p-5 shadow-sm ring-1 ring-[#e4d2b4]"
          >
            <UIcon
              :name="item.icon"
              class="size-8 text-[#5c8a50]"
            />
            <p class="mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#d9785e]">
              {{ item.label }}
            </p>
            <h3 class="mt-2 font-serif text-2xl font-semibold text-[#315b7c]">
              {{ item.value }}
            </h3>
            <p class="mt-2 text-sm leading-6 text-[#5d6768]">
              {{ item.detail }}
            </p>
          </article>
        </div>

        <div class="mt-10 grid gap-7 lg:grid-cols-[1fr_1fr_0.85fr]">
          <article class="paper-card rounded-[2rem] bg-white/82 p-7 shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-1 ring-[#e4d2b4]">
            <h3 class="font-serif text-3xl font-semibold text-[#315b7c]">
              What’s Included
            </h3>
            <p class="mt-3 text-sm leading-7 text-[#5d6768]">
              Materials, activities, and all field trip admissions included.
            </p>
            <ul class="mt-5 space-y-3 text-sm font-semibold text-[#40535c]">
              <li
                v-for="item in includedItems"
                :key="item"
                class="flex items-center gap-3"
              >
                <UIcon
                  name="i-lucide-check-circle"
                  class="size-5 shrink-0 text-[#5c8a50]"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <article class="paper-card rounded-[2rem] bg-[#f7d9de]/82 p-7 shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-1 ring-[#e7c1c7]">
            <h3 class="font-serif text-3xl font-semibold text-[#315b7c]">
              Our Activities
            </h3>
            <ul class="mt-5 space-y-3 text-sm font-semibold text-[#40535c]">
              <li
                v-for="item in activityItems"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-[#d9785e]" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <img
            src="/summer-camps/showcase.jpg"
            alt="XinYi summer art camp showcase"
            class="h-full min-h-80 rounded-[2rem] object-cover shadow-[0_18px_50px_rgba(88,68,42,0.14)] ring-4 ring-white/80"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section class="px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="rounded-[2.4rem] bg-white/80 p-6 shadow-[0_18px_60px_rgba(88,68,42,0.12)] ring-1 ring-[#ebdec6] sm:p-8">
          <h2 class="text-center font-serif text-4xl font-semibold text-[#2f79a9]">
            A Summer Full of Creativity!
          </h2>
          <div class="mt-8 grid gap-5 md:grid-cols-4">
            <div
              v-for="item in creativeValues"
              :key="item.label"
              class="rounded-[1.5rem] bg-[#fff8ed] p-6 text-center ring-1 ring-[#ebdec6]"
            >
              <UIcon
                :name="item.icon"
                class="mx-auto size-12 text-[#d9785e]"
              />
              <p class="mt-4 text-sm font-black uppercase tracking-[0.18em] text-[#5c8a50]">
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-10 grid gap-7 lg:grid-cols-[0.9fr_1fr_0.9fr]">
          <article class="paper-card rounded-[2rem] bg-white/82 p-7 shadow-sm ring-1 ring-[#ebdec6]">
            <h3 class="font-serif text-3xl font-semibold text-[#7657a1]">
              What to Bring
            </h3>
            <ul class="mt-5 space-y-3 text-sm font-semibold text-[#40535c]">
              <li
                v-for="item in bringItems"
                :key="item"
                class="flex items-center gap-3"
              >
                <UIcon
                  name="i-lucide-sun"
                  class="size-5 shrink-0 text-[#d9785e]"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <article class="paper-card rounded-[2rem] bg-white/82 p-7 shadow-sm ring-1 ring-[#ebdec6]">
            <h3 class="font-serif text-3xl font-semibold text-[#d9785e]">
              Notes
            </h3>
            <ul class="mt-5 space-y-3 text-sm font-semibold text-[#40535c]">
              <li
                v-for="item in noteItems"
                :key="item"
                class="flex items-start gap-3"
              >
                <span class="mt-2 size-2 shrink-0 rounded-full bg-[#2f79a9]" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <img
            src="/summer-camps/craft-studio.jpg"
            alt="XinYi summer camp craft project"
            class="h-full min-h-72 rounded-[2rem] object-cover shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-4 ring-white/80"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section
      id="contact"
      class="relative isolate overflow-hidden bg-[#dceef7] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.9fr_0.8fr]">
        <div>
          <h2 class="font-serif text-5xl font-semibold text-[#2f79a9]">
            Contact Us
          </h2>
          <ul class="mt-7 space-y-4 text-base font-semibold text-[#31445b]">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="flex items-center gap-3"
            >
              <UIcon
                :name="item.icon"
                class="size-5 shrink-0 text-[#5c8a50]"
              />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>

        <div class="paper-card rounded-[2rem] bg-[#ffe59c] p-7 text-center shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-1 ring-[#e8cc76]">
          <h2 class="font-serif text-4xl font-semibold text-[#d9785e]">
            Ready to Join Us?
          </h2>
          <p class="mt-4 text-lg font-bold text-[#31445b]">
            Spots are limited! Book your creative summer adventure today!
          </p>
          <NuxtLink
            to="/contact?interest=Summer%20Camp#message"
            class="mt-7 inline-flex rounded-full bg-[#e8876f] px-8 py-3 text-sm font-black text-white shadow-lg shadow-[#e8876f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            Book Summer Camp
          </NuxtLink>
        </div>

        <div class="rounded-[2rem] bg-white/80 p-6 text-center shadow-[0_18px_50px_rgba(88,68,42,0.12)] ring-1 ring-[#c8e0e6]">
          <h3 class="font-serif text-3xl font-semibold text-[#2f79a9]">
            Scan to Learn More
          </h3>
          <img
            src="/summer-camps/qr-code.jpg"
            alt="XinYi Class WeChat QR code"
            class="mx-auto mt-5 aspect-square w-44 rounded-xl bg-white object-contain p-2 shadow-sm ring-1 ring-[#d7e3df]"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <footer class="bg-[#315b7c] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
        <div class="flex items-center gap-3">
          <img
            src="/home/logo.png"
            alt="XinYi Class"
            class="h-16 w-auto rounded-2xl bg-white/90 object-contain p-1"
            loading="lazy"
            decoding="async"
          >
          <div>
            <h2 class="font-serif text-2xl font-semibold">
              XinYi Class
            </h2>
            <p class="text-sm text-white/75">
              Summer Art Camp · Create, Explore, Grow Together
            </p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3 text-sm font-semibold text-white/80">
          <NuxtLink
            v-for="link in footerLinks"
            :key="link.label"
            :to="link.to"
            class="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.xinyi-summer-camps {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.xinyi-summer-camps :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.wash {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(30px);
}

.wash-blue {
  background: rgba(176, 219, 236, 0.65);
}

.wash-pink {
  background: rgba(250, 197, 208, 0.58);
}

.wash-yellow {
  background: rgba(248, 223, 153, 0.62);
}

.paper-photo,
.paper-card {
  position: relative;
}

.paper-photo {
  border-radius: 2.25rem;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 1.5rem 4rem rgba(72, 58, 37, 0.16);
}

.paper-photo::before,
.paper-card::before {
  position: absolute;
  inset: 0.8rem auto auto 50%;
  width: 5rem;
  height: 1.2rem;
  content: "";
  background: rgba(241, 174, 117, 0.42);
  border-radius: 9999px;
  transform: translateX(-50%) rotate(-2deg);
}
</style>
