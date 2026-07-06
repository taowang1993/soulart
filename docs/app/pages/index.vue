<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'XinYi Class | Art, Wellness, Community',
  description: 'XinYi Class offers art programs, wellness classes, and a warm creative studio for children, teens, adults, and families.',
  ogTitle: 'XinYi Class | Art, Wellness, Community',
  ogDescription: 'A place to create, connect, and thrive.',
})

const navItems = [
  { label: 'Home', to: '#top', icon: 'i-lucide-home' },
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

const heroValues = [
  { label: 'Create', icon: 'i-lucide-palette' },
  { label: 'Connect', icon: 'i-lucide-sprout' },
  { label: 'Thrive', icon: 'i-lucide-heart' },
]

const announcements = [
  'Summer Outdoor Art Camp Registration Open',
  'Upcoming Workshops',
  'Meet XinYi AI Assistant',
]

const programs = [
  {
    title: 'Art Programs',
    image: '/home/art-program.png',
    icon: 'i-lucide-palette',
    tint: 'rose',
    description: 'For children, teens, and adults',
    tagline: 'Create • Explore • Grow',
    to: '/art-programs',
  },
  {
    title: 'Wellness Programs',
    image: '/home/yoga-program.jpg',
    icon: 'i-lucide-flower-2',
    tint: 'violet',
    description: 'Yoga, community, and well-being',
    tagline: 'Breathe • Connect • Flourish',
    to: '/wellness',
  },
]

const studioTraits = [
  { label: 'Natural Light', icon: 'i-lucide-sun' },
  { label: 'Small Groups', icon: 'i-lucide-users' },
  { label: 'Creative Studio', icon: 'i-lucide-palette' },
  { label: 'Calm & Inspiring', icon: 'i-lucide-leaf' },
]

const reasons = [
  {
    title: 'Creativity',
    icon: 'i-lucide-palette',
    description: 'Art encourages imagination, problem solving, and original thinking.',
  },
  {
    title: 'Confidence',
    icon: 'i-lucide-smile',
    description: 'Children gain confidence by expressing their ideas and sharing their work.',
  },
  {
    title: 'Emotional Well-Being',
    icon: 'i-lucide-heart',
    description: 'Art provides a safe space for self-expression, reflection, and emotional growth.',
  },
  {
    title: 'Observation & Focus',
    icon: 'i-lucide-eye',
    description: 'Drawing and painting strengthen observation skills and concentration.',
  },
  {
    title: 'Community',
    icon: 'i-lucide-users-round',
    description: 'Students learn, create, and grow together in a supportive environment.',
  },
  {
    title: 'Joy of Learning',
    icon: 'i-lucide-star',
    description: 'Learning should be meaningful, engaging, and enjoyable.',
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
  { label: 'Home', to: '#top' },
  { label: 'About', to: '/about' },
  { label: 'Art Programs', to: '/art-programs' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'YouTube', icon: 'i-lucide-youtube', href: 'https://www.youtube.com/@XinyiArt-Yoga-Healing' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main
    id="top"
    class="xinyi-home min-h-screen overflow-hidden bg-[#fbf6ff] text-[#40335f]"
  >
    <section class="relative isolate overflow-hidden bg-[linear-gradient(120deg,#fff8fb_0%,#f7efff_48%,#fff2ee_100%)] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
      >
        <div class="watercolor watercolor-rose left-[-8rem] top-[-7rem]" />
        <div class="watercolor watercolor-gold right-[-8rem] top-[-5rem]" />
        <div class="watercolor watercolor-lavender bottom-[-8rem] left-1/3" />
      </div>

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between rounded-none bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
      >
        <NuxtLink
          to="#top"
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
              :class="item.label === 'Home' ? 'bg-[#f1e4ff] text-[#6d4d95]' : ''"
            >
              <UIcon
                v-if="item.label === 'Home'"
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

        <div class="flex items-center gap-2 rounded-full bg-[#f3e8ff] px-3 py-2 text-xs font-semibold text-[#5b457d]">
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

      <div class="mx-auto grid max-w-6xl items-end gap-8 pt-9 lg:grid-cols-[1fr_1.35fr] lg:pt-12">
        <div class="relative mx-auto max-w-xs self-end lg:mx-0">
          <div class="absolute -inset-8 -z-10 rounded-full bg-white/45 blur-3xl" />
          <img
            src="/home/musical-hero.jpg"
            alt="XinYi Class students smiling with their teacher"
            class="aspect-[3/4] w-full rounded-[2rem] object-cover object-[42%_center] shadow-[0_20px_70px_rgba(130,91,121,0.25)] lg:rounded-b-none"
            loading="eager"
            decoding="async"
          >
        </div>

        <div class="pb-2 text-center lg:pb-6">
          <h1 class="hero-title font-serif font-semibold tracking-tight text-[#4d4166]">
            Art <span class="mx-2 text-[#735d91]">•</span> Wellness <span class="mx-2 text-[#735d91]">•</span> Community
          </h1>
          <p class="mt-5 font-serif text-2xl italic text-[#8b6aa3] sm:text-3xl">
            A Place to Create, Connect and Thrive
          </p>

          <div class="mt-7 flex flex-wrap justify-center gap-4 text-sm font-medium text-[#5c4b6d]">
            <div
              v-for="value in heroValues"
              :key="value.label"
              class="flex items-center gap-2 rounded-full bg-white/55 px-4 py-2 shadow-sm ring-1 ring-white/70"
            >
              <UIcon
                :name="value.icon"
                class="size-6 text-[#d88792]"
              />
              {{ value.label }}
            </div>
          </div>

          <div class="mt-10 rounded-3xl bg-white/75 p-4 text-left shadow-[0_18px_50px_rgba(128,91,145,0.16)] ring-1 ring-white/80 backdrop-blur sm:p-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
              <img
                src="/home/logo.png"
                alt="XinYi Class Logo"
                class="h-20 w-20 rounded-2xl bg-[#fff8f8] object-contain p-2 ring-1 ring-[#eaddec]"
              >
              <div class="min-w-0 text-sm leading-6 text-[#40335f]">
                <p class="font-semibold">
                  What&apos;s New at XinYi Class
                </p>
                <ul class="mt-1 space-y-1">
                  <li
                    v-for="(item, index) in announcements"
                    :key="item"
                  >
                    <span class="font-semibold">Card {{ index + 1 }}:</span> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="programs"
      class="px-4 py-14 sm:px-6 lg:px-8 lg:py-18"
    >
      <div class="mx-auto max-w-5xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Explore Our Programs
          </h2>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-8 grid gap-8 md:grid-cols-2">
          <article
            v-for="program in programs"
            :key="program.title"
            class="group overflow-hidden rounded-2xl bg-white/82 shadow-[0_18px_50px_rgba(82,61,107,0.14)] ring-1 ring-[#ece1ef] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(82,61,107,0.2)]"
          >
            <img
              :src="program.image"
              :alt="`${program.title} at XinYi Class`"
              class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              :class="program.title === 'Wellness Programs' ? 'object-[center_35%]' : 'object-center'"
              loading="lazy"
              decoding="async"
            >
            <div class="relative px-8 pb-8 pt-10 text-center">
              <div
                class="absolute left-1/2 top-0 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg ring-4"
                :class="program.tint === 'rose' ? 'text-[#dc8d99] ring-[#f5d8dc]' : 'text-[#9d82c2] ring-[#e7dcf4]'"
              >
                <UIcon
                  :name="program.icon"
                  class="size-10"
                />
              </div>
              <h3 class="font-serif text-3xl font-semibold text-[#72558d]">
                {{ program.title }}
              </h3>
              <p class="mt-5 text-base text-[#4f455b]">
                {{ program.description }}
              </p>
              <p class="mt-1 text-base font-medium text-[#4f455b]">
                {{ program.tagline }}
              </p>
              <NuxtLink
                :to="program.to"
                class="mt-7 inline-flex items-center gap-3 rounded-full px-10 py-3 text-lg font-bold text-white shadow-lg transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
                :class="program.tint === 'rose' ? 'bg-[#df8f9a] shadow-[#df8f9a]/25' : 'bg-[#9678bd] shadow-[#9678bd]/25'"
              >
                Learn More
                <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      id="studio"
      class="relative px-4 py-14 sm:px-6 lg:px-8"
    >
      <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div class="text-center">
          <div
            class="mb-4 hidden text-[#c9a8d6] lg:block"
            aria-hidden="true"
          >
            ✦ ✧ ✦
          </div>
          <h2 class="font-serif text-4xl font-semibold leading-tight text-[#5a4380] sm:text-5xl">
            Welcome to
            <span class="block text-[#df838d]">Our Studio</span>
          </h2>
          <div class="section-divider mx-auto mt-5" />
          <p class="mx-auto mt-6 max-w-sm text-base leading-7 text-[#4f455b]">
            A warm, inspiring space designed for creativity, mindfulness, and meaningful connection.
          </p>
          <div class="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <div
              v-for="trait in studioTraits"
              :key="trait.label"
              class="text-center text-xs font-medium text-[#67577b]"
            >
              <div class="mx-auto mb-2 flex size-11 items-center justify-center rounded-full bg-white/65 text-[#9f82bd] ring-1 ring-[#e4d4ec]">
                <UIcon
                  :name="trait.icon"
                  class="size-6"
                />
              </div>
              {{ trait.label }}
            </div>
          </div>
        </div>

        <img
          src="/home/new-classroom.jpg"
          alt="Bright XinYi Class art studio classroom"
          class="h-full min-h-[360px] w-full rounded-[1.75rem] object-cover shadow-[0_22px_70px_rgba(82,61,107,0.18)] ring-1 ring-white/80"
          loading="lazy"
          decoding="async"
        >
      </div>

      <p class="mx-auto mt-12 max-w-4xl border-y border-[#e9ddec] py-6 text-center font-serif text-xl italic text-[#a283b8]">
        More than a classroom — a place to create, connect, and belong.
      </p>
    </section>

    <section
      id="benefits"
      class="px-4 py-14 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="flex flex-col gap-5 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <div>
            <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
              Why Families Choose
              <span class="text-[#df838d]">XinYi</span>
            </h2>
            <div class="section-divider mx-auto mt-5 lg:mx-0" />
          </div>
          <NuxtLink
            to="/contact"
            class="mx-auto inline-flex items-center gap-3 rounded-xl bg-[#e49aa1] px-6 py-3 text-base font-bold text-[#3f304e] shadow-lg shadow-[#e49aa1]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792] lg:mx-0"
          >
            <UIcon
              name="i-lucide-mail"
              class="size-5"
            />
            Join Our Community
          </NuxtLink>
        </div>

        <div class="mt-10 grid gap-px overflow-hidden rounded-3xl bg-[#e7ddeb] ring-1 ring-[#e7ddeb] md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="reason in reasons"
            :key="reason.title"
            class="flex gap-5 bg-[#fbf6ff]/95 p-7"
          >
            <div class="flex size-20 shrink-0 items-center justify-center rounded-full bg-white/85 text-[#a886c6] shadow-inner ring-1 ring-[#eaddec]">
              <UIcon
                :name="reason.icon"
                class="size-10"
              />
            </div>
            <div>
              <h3 class="font-serif text-xl font-semibold text-[#604781]">
                {{ reason.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-[#4f455b]">
                {{ reason.description }}
              </p>
            </div>
          </article>
        </div>

        <p class="mx-auto mt-10 max-w-4xl border-t border-[#e9ddec] pt-6 text-center font-serif text-xl italic text-[#a283b8]">
          Supporting every child and adult to discover their unique creativity and grow with confidence.
        </p>
      </div>
    </section>

    <section
      id="memories"
      class="relative overflow-hidden bg-[linear-gradient(180deg,#fbf6ff_0%,#f3edff_100%)] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div
        class="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_20%_10%,rgba(222,189,231,0.42),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(255,218,215,0.42),transparent_34%)]"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-6xl text-center">
        <div
          class="text-3xl text-[#a883ce]"
          aria-hidden="true"
        >
          ♡
        </div>
        <h2 class="mt-2 font-serif text-4xl font-semibold text-[#303266] sm:text-5xl">
          Handwritten Memories
        </h2>
        <div class="section-divider mx-auto mt-5" />
        <p class="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#7c6d8c]">
          Some gifts cannot be bought. These handwritten notes remind me why I chose this path.
        </p>

        <div class="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
          <img
            src="/home/card-from-jasmine.jpg"
            alt="Handwritten Christmas thank-you card from Jasmine"
            class="rotate-[-3deg] rounded-lg bg-white shadow-[0_20px_50px_rgba(64,51,95,0.18)] ring-1 ring-black/5"
            loading="lazy"
            decoding="async"
          >
          <img
            src="/home/card-from-doris.jpg"
            alt="Handwritten thank-you card from Doris"
            class="rotate-[2deg] rounded-lg bg-white shadow-[0_20px_50px_rgba(64,51,95,0.18)] ring-1 ring-black/5"
            loading="lazy"
            decoding="async"
          >
        </div>

        <p class="mt-8 text-sm leading-6 text-[#7c6d8c]">
          Every drawing begins with trust.<br>
          Every year becomes a story.
        </p>
        <NuxtLink
          to="/contact"
          class="mt-5 inline-flex items-center gap-3 rounded-xl border border-[#cdb9e7] bg-white/70 px-7 py-3 text-sm font-bold text-[#72558d] shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          <UIcon
            name="i-lucide-book-open"
            class="size-4"
          />
          Read More Stories
          <span aria-hidden="true">›</span>
        </NuxtLink>
      </div>
    </section>

    <footer
      id="contact"
      class="relative overflow-hidden bg-[#efe7f6] px-4 py-12 text-[#5a4a72] sm:px-6 lg:px-8"
    >
      <div
        class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#cdb8e6]/40 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-6xl gap-10 border-b border-[#dacbe6] pb-10 md:grid-cols-[1.1fr_0.8fr_1fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img
              src="/home/logo.png"
              alt=""
              class="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            >
            <div>
              <h2 class="font-serif text-2xl font-semibold text-[#594178]">
                XinYi Class
              </h2>
              <p class="mt-1 text-sm leading-6 text-[#7a6b8b]">
                Inspiring creativity, connection, and well-being since 2016
              </p>
            </div>
          </div>
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

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#594178]">
            Follow Us
          </h3>
          <div class="mt-5 flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="flex size-9 items-center justify-center rounded-full bg-white/70 text-[#9f82bd] ring-1 ring-[#d8c8e5] transition hover:-translate-y-0.5 hover:text-[#6d4d95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              <UIcon
                :name="social.icon"
                class="size-5"
              />
            </a>
          </div>
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
.xinyi-home {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.xinyi-home :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.hero-title {
  font-size: clamp(1.45rem, 4.1vw, 3.2rem);
  line-height: 1.05;
  white-space: nowrap;
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
</style>
