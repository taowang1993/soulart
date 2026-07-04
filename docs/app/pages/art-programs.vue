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
  { label: 'Art Programs', to: '/art-programs', icon: 'i-lucide-palette' },
  { label: 'Wellness', to: '/#programs', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '#contact', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/#studio', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '#contact', icon: 'i-lucide-mail' },
]

const heroHighlights = [
  { label: 'Drawing', icon: 'i-lucide-pencil' },
  { label: 'Painting', icon: 'i-lucide-paintbrush' },
  { label: 'Mixed Media', icon: 'i-lucide-sparkles' },
]

const childPrograms = [
  {
    title: 'Ages 4–6',
    subtitle: 'Discover',
    image: '/art-program/age-4-6.png',
    points: ['Color & Shape', 'Playful Lines', 'Storytelling', 'Confidence Building'],
  },
  {
    title: 'Ages 7–9',
    subtitle: 'Explore',
    image: '/art-program/age-7-9.jpg',
    points: ['Drawing Foundations', 'Watercolor & Acrylic', 'Observation Skills', 'Creative Projects'],
  },
  {
    title: 'Ages 10–12',
    subtitle: 'Grow',
    image: '/art-program/age-10-12.png',
    points: ['Composition', 'Personal Style', 'Mixed Media', 'Art Appreciation'],
  },
]

const teenPrograms = [
  {
    title: 'Ages 13–15',
    image: '/art-program/age-13-15.png',
    description: 'Build stronger technique, creative confidence, and visual storytelling skills.',
  },
  {
    title: 'Ages 15–18',
    image: '/art-program/age-15-18.jpg',
    description: 'Develop independent projects while refining drawing, painting, and critique habits.',
  },
  {
    title: '16+ Portfolio',
    image: '/art-program/age-16-plus.jpg',
    description: 'Prepare portfolio pieces with focused mentorship and art school guidance.',
  },
]

const adultPrograms = [
  {
    title: 'Creative Well-Being',
    image: '/art-program/adult-1.jpg',
    description: 'Relax, reconnect, and enjoy mindful creativity in a warm studio setting.',
  },
  {
    title: 'Painting Practice',
    image: '/art-program/adult-2.jpg',
    description: 'Explore expressive color, brushwork, and personal themes at your own pace.',
  },
  {
    title: 'Ink & Calligraphy',
    image: '/art-program/adult-3.png',
    description: 'Practice graceful lines, cultural tradition, and calm concentration.',
  },
]

const workshopPrograms = [
  {
    title: 'Summer Camp',
    image: '/art-program/summer-camp-farm-visit.jpg',
    note: 'Explore • Create • Play',
    action: 'View Camps',
  },
  {
    title: 'Seasonal Workshops',
    image: '/art-program/craft-1.png',
    note: 'Holiday crafts and creative gifts',
    action: 'Coming Soon',
  },
  {
    title: 'Creative Gatherings',
    image: '/art-program/craft-3.jpg',
    note: 'Community art and group projects',
    action: 'Coming Soon',
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
  { label: 'About', to: '/#studio' },
  { label: 'Art Programs', to: '/art-programs' },
  { label: 'Wellness', to: '/#programs' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation' },
  { label: 'Contact', to: '#contact' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main class="xinyi-art-program min-h-screen overflow-hidden bg-[#fbf7ff] text-[#40335f]">
    <section class="relative isolate overflow-hidden bg-[linear-gradient(120deg,#fff9fb_0%,#f4efff_52%,#fff3ed_100%)] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 opacity-75"
        aria-hidden="true"
      >
        <div class="watercolor watercolor-rose left-[-7rem] top-[-8rem]" />
        <div class="watercolor watercolor-gold right-[-8rem] top-[8rem]" />
        <div class="watercolor watercolor-lavender bottom-[-9rem] left-1/3" />
      </div>

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
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
          <NuxtLink
            v-for="item in navItems"
            :key="item.label"
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
          </NuxtLink>
        </div>

        <NuxtLink
          to="#contact"
          class="rounded-full bg-[#df8f9a] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#df8f9a]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          Book a Trial
        </NuxtLink>
      </nav>

      <div class="mx-auto grid max-w-6xl items-center gap-10 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:pt-20">
        <div class="relative order-2 lg:order-1">
          <div class="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full bg-[#f2cbd5]/60 blur-3xl lg:block" />
          <div class="relative rounded-[2rem] bg-white/70 p-4 shadow-[0_24px_70px_rgba(93,69,122,0.18)] ring-1 ring-white/80 backdrop-blur">
            <img
              src="/art-program/cover-girl-painting.png"
              alt="Student painting at XinYi Class"
              class="h-[34rem] w-full rounded-[1.5rem] object-cover object-[center_28%]"
              loading="eager"
              decoding="async"
            >
            <img
              src="/art-program/the-painting.jpg"
              alt="Student artwork"
              class="absolute -right-5 bottom-8 hidden h-40 w-32 rounded-2xl object-cover shadow-xl ring-4 ring-white sm:block"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>

        <div class="order-1 text-center lg:order-2 lg:text-left">
          <p class="text-lg font-semibold uppercase tracking-[0.32em] text-[#c78673]">
            XinYi Class
          </p>
          <h1 class="art-hero-title mt-4 font-serif font-semibold text-[#4d6a43]">
            Art Programs
          </h1>
          <p class="mt-4 font-serif text-3xl italic text-[#9e6f46] sm:text-4xl">
            Creativity grows through practice.
          </p>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#5d526b] lg:mx-0">
            At XinYi Class, art education is a journey of imagination, technique, confidence, and emotional growth for every age and stage.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <NuxtLink
              to="#children"
              class="rounded-full bg-[#d9848f] px-9 py-3 text-lg font-bold text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              Explore Classes
            </NuxtLink>
            <NuxtLink
              to="#contact"
              class="rounded-full bg-white/80 px-9 py-3 text-lg font-bold text-[#5c486f] shadow-sm ring-1 ring-[#e9ddec] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              Book a Trial
            </NuxtLink>
          </div>

          <div class="mt-10 grid gap-3 sm:grid-cols-3">
            <div
              v-for="item in heroHighlights"
              :key="item.label"
              class="rounded-2xl bg-white/72 px-4 py-4 text-center shadow-sm ring-1 ring-white/80"
            >
              <UIcon
                :name="item.icon"
                class="mx-auto size-7 text-[#c77c86]"
              />
              <p class="mt-2 text-sm font-bold text-[#5b486c]">
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="children"
      class="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
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
                to="#gallery"
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
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#faf7ef] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#5a4380] sm:text-5xl">
            Special Workshops & Camps
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-[#6a5e78]">
            Seasonal creative experiences bring students together for art, play, and celebration.
          </p>
          <div class="section-divider mx-auto mt-5" />
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <article
            v-for="program in workshopPrograms"
            :key="program.title"
            class="rounded-[2rem] bg-white/80 p-4 text-center shadow-sm ring-1 ring-[#d7d0c4]"
          >
            <img
              :src="program.image"
              :alt="program.title"
              class="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
              loading="lazy"
              decoding="async"
            >
            <h3 class="mt-4 font-serif text-2xl font-semibold text-[#69508a]">
              {{ program.title }}
            </h3>
            <p class="mt-1 text-lg text-[#706676]">
              {{ program.note }}
            </p>
            <NuxtLink
              to="#contact"
              class="mt-4 inline-flex rounded-full bg-[#e6b2b6] px-7 py-2.5 font-bold text-[#5a435f] shadow-md transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            >
              {{ program.action }}
            </NuxtLink>
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
          <a
            href="mailto:xinyiartschool@gmail.com"
            class="rounded-full bg-[#d9848f] px-10 py-4 text-lg font-bold text-white shadow-lg shadow-[#d9848f]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            Book a Trial Class
          </a>
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

.art-hero-title {
  font-size: clamp(3.8rem, 10vw, 8.5rem);
  line-height: 0.9;
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
  transform: scale(1.06);
}

#children article:first-child .child-photo-frame img {
  object-fit: contain;
}

.teen-grid article:first-child .teen-photo-frame {
  aspect-ratio: 1;
}

.teen-grid article:first-child .teen-photo-frame img {
  object-fit: cover;
  transform: none;
}
</style>
