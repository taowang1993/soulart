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
    active: true,
    children: [
      { label: 'Student Gallery', to: '/art-programs/student-gallery' },
      { label: 'Summer Camps', to: '/art-programs/summer-camps', current: true },
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
    side: 'left',
    tone: 'rose',
    tilt: 'summer-tilt-left',
    title: 'Morning',
    image: '/summer-camps/showcase.webp',
    alt: 'XinYi summer camp students and teachers',
    text: 'We start each day with smiles, fun games and warm-up activities to wake up our bodies and minds.',
  },
  {
    number: '2',
    side: 'right',
    tone: 'blue',
    tilt: 'summer-tilt-right',
    title: 'Outdoor Sketching',
    image: '/summer-camps/outdoor-farm.webp',
    alt: 'XinYi summer camp group visiting a farm',
    text: 'We go outside to observe nature, sketch what we see, and learn to appreciate the beauty around us.',
  },
  {
    number: '3',
    side: 'left',
    tone: 'gold',
    tilt: 'summer-tilt-right',
    title: 'Craft & Create',
    image: '/summer-camps/showcase.webp',
    alt: 'XinYi summer camp students and teachers',
    text: 'From painting and clay to mixed media and handmade projects, every child creates in their own unique way.',
  },
  {
    number: '4',
    side: 'right',
    tone: 'green',
    tilt: 'summer-tilt-left',
    title: 'Play',
    image: '/summer-camps/outdoor-farm.webp',
    alt: 'XinYi summer camp group visiting a farm',
    text: 'We play, we laugh, we explore! Games, water fun and teamwork make our summer unforgettable.',
  },
  {
    number: '5',
    side: 'left',
    tone: 'blue',
    tilt: 'summer-tilt-left',
    title: 'Lunch & Snacks',
    image: '/summer-camps/fruit-platter.webp',
    alt: 'Creative snack plate collage from summer camp',
    text: 'Eat together. Recharge together. Healthy meals, happy conversations, and a little time to rest before the afternoon adventure.',
  },
  {
    number: '6',
    side: 'right',
    tone: 'rose',
    tilt: 'summer-tilt-right',
    title: 'Museum Explore',
    image: '/summer-camps/outdoor-farm.webp',
    alt: 'XinYi summer camp group visiting a farm',
    text: 'Learning beyond the classroom. Museums, galleries, nature walks and creative discoveries inspire new ideas.',
  },
  {
    number: '7',
    side: 'left',
    tone: 'green',
    tilt: 'summer-tilt-right',
    title: 'Showcase',
    image: '/summer-camps/showcase.webp',
    alt: 'XinYi summer camp students and teachers',
    text: 'Every child shines. We celebrate every step of the creative journey through exhibitions and sharing.',
  },
]

const campInfo = [
  { label: 'Dates', value: '2-Week Program', detail: 'July 20–24 & 27–31', icon: 'i-lucide-calendar-days', tone: 'rose' },
  { label: 'Time', value: '9:30 AM – 4:30 PM', detail: 'Full creative days', icon: 'i-lucide-clock', tone: 'gold' },
  { label: 'Ages', value: 'Ages 6–13', detail: 'Young artists and makers', icon: 'i-lucide-users', tone: 'green' },
  { label: 'Location', value: 'XinYi Art Studio', detail: '105 Gordon Baker Rd., #704, North York, ON', icon: 'i-lucide-map-pin', tone: 'blue' },
  { label: 'Fees', value: '$120/day', detail: '$100/day (weekly rate)', icon: 'i-lucide-wallet', tone: 'violet' },
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
  { label: 'Create', icon: 'i-lucide-palette', tone: 'rose' },
  { label: 'Explore', icon: 'i-lucide-binoculars', tone: 'blue' },
  { label: 'Grow', icon: 'i-lucide-sprout', tone: 'green' },
  { label: 'Together', icon: 'i-lucide-users-round', tone: 'gold' },
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

const isAssistantOpen = shallowRef(false)
</script>

<template>
  <main
    id="top"
    class="xinyi-summer-camps min-h-screen overflow-hidden bg-[#fff8ed] text-[#31445b]"
  >
    <section class="summer-hero relative isolate overflow-hidden px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div
        class="summer-hero-wash summer-hero-wash--rose"
        aria-hidden="true"
      />
      <div
        class="summer-hero-wash summer-hero-wash--gold"
        aria-hidden="true"
      />
      <div
        class="summer-hero-wash summer-hero-wash--blue"
        aria-hidden="true"
      />

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between rounded-none bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
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
              :class="item.active ? 'bg-[#f1e4ff] text-[#6d4d95]' : ''"
            >
              <UIcon
                v-if="item.active"
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
                :aria-current="child.current ? 'page' : undefined"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#6d4d95] hover:bg-[#f7eefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98792]"
                :class="child.current ? 'bg-[#f7eefb]' : ''"
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

      <div class="summer-hero-scene mx-auto mt-10 max-w-6xl">
        <img
          src="/summer-camps/hero-watercolor.webp"
          alt="Children running through a watercolor summer park"
          width="1200"
          height="840"
          class="summer-hero-art"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        >
        <div class="summer-hero-copy">
          <p class="summer-eyebrow">
            XinYi Class Summer Program
          </p>
          <h1 class="summer-hero-title">
            Summer Art Camp
          </h1>
          <p class="summer-hero-subtitle">
            Create · Explore · Grow Together
          </p>
          <p class="summer-hero-text">
            A summer filled with creativity, friendship and unforgettable memories.
          </p>
          <div class="summer-hero-actions">
            <NuxtLink
              to="#camp-info"
              class="summer-button summer-button--primary"
            >
              View 2026 Camp Info
            </NuxtLink>
            <NuxtLink
              to="/contact?interest=Summer%20Camp#message"
              class="summer-button summer-button--light"
            >
              Reserve a Spot
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="summer-section summer-day-section px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="summer-section-heading text-center">
          <p class="summer-eyebrow">
            A Day at Camp
          </p>
          <h2 class="summer-section-title">
            Art, Nature, Food and Friendship
          </h2>
        </div>

        <div class="summer-timeline mt-16">
          <article
            v-for="card in dayCards"
            :key="card.title"
            class="summer-timeline-row"
            :class="[
              `summer-timeline-row--${card.side}`,
              `summer-timeline-row--${card.tone}`,
            ]"
          >
            <div class="summer-timeline-number">
              {{ card.number }}
            </div>
            <div
              class="summer-timeline-card"
              :class="card.tilt"
            >
              <img
                :src="card.image"
                :alt="card.alt"
                width="1200"
                height="900"
                class="summer-timeline-image"
                loading="lazy"
                decoding="async"
              >
              <div class="summer-timeline-body">
                <h3 class="summer-card-title">
                  {{ card.title }}
                </h3>
                <p class="summer-card-text">
                  {{ card.text }}
                </p>
              </div>
            </div>
          </article>
        </div>

        <blockquote class="summer-quote">
          Every masterpiece begins with one joyful step.
        </blockquote>
      </div>
    </section>

    <section
      id="camp-info"
      class="summer-section summer-info-section px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="summer-section-heading text-center">
          <p class="summer-eyebrow">
            2026 Registration
          </p>
          <h2 class="summer-section-title">
            Camp Information
          </h2>
        </div>

        <div class="summer-info-grid mt-12">
          <article
            v-for="item in campInfo"
            :key="item.label"
            class="summer-info-card"
            :class="`summer-info-card--${item.tone}`"
          >
            <UIcon
              :name="item.icon"
              class="summer-info-icon"
            />
            <p class="summer-info-label">
              {{ item.label }}
            </p>
            <h3 class="summer-info-value">
              {{ item.value }}
            </h3>
            <p class="summer-info-detail">
              {{ item.detail }}
            </p>
          </article>
        </div>

        <div class="summer-details-grid mt-10">
          <article class="summer-paper summer-paper--included">
            <h3 class="summer-paper-title">
              What’s Included
            </h3>
            <p class="summer-paper-copy">
              Materials, activities, and all field trip admissions included.
            </p>
            <ul class="summer-list">
              <li
                v-for="item in includedItems"
                :key="item"
                class="summer-list-item"
              >
                <UIcon
                  name="i-lucide-check-circle"
                  class="summer-list-icon summer-list-icon--green"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <article class="summer-paper summer-paper--activities">
            <h3 class="summer-paper-title">
              Our Activities
            </h3>
            <ul class="summer-list summer-list--bullets">
              <li
                v-for="item in activityItems"
                :key="item"
                class="summer-list-item"
              >
                <span class="summer-dot" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <img
            src="/summer-camps/showcase.webp"
            alt="XinYi summer camp students and teachers"
            width="1600"
            height="1200"
            class="summer-details-image"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section class="summer-section summer-creativity-section px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="summer-creativity-banner">
          <h2 class="summer-creativity-title">
            A Summer Full of Creativity!
          </h2>
          <div class="summer-values-grid">
            <div
              v-for="item in creativeValues"
              :key="item.label"
              class="summer-value-card"
              :class="`summer-value-card--${item.tone}`"
            >
              <UIcon
                :name="item.icon"
                class="summer-value-icon"
              />
              <p class="summer-value-label">
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>

        <div class="summer-notes-grid mt-10">
          <article class="summer-paper summer-paper--bring">
            <h3 class="summer-paper-title summer-paper-title--violet">
              What to Bring
            </h3>
            <ul class="summer-list">
              <li
                v-for="item in bringItems"
                :key="item"
                class="summer-list-item"
              >
                <UIcon
                  name="i-lucide-sun"
                  class="summer-list-icon summer-list-icon--orange"
                />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <article class="summer-paper summer-paper--notes">
            <h3 class="summer-paper-title summer-paper-title--orange">
              Notes
            </h3>
            <ul class="summer-list summer-list--bullets">
              <li
                v-for="item in noteItems"
                :key="item"
                class="summer-list-item"
              >
                <span class="summer-dot summer-dot--blue" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>

          <img
            src="/summer-camps/fruit-platter.webp"
            alt="Creative snack plate collage from summer camp"
            width="823"
            height="695"
            class="summer-notes-image"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section class="summer-contact-section px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_0.9fr_0.8fr]">
        <div class="summer-contact-copy">
          <h2 class="summer-contact-title">
            Contact Us
          </h2>
          <ul class="summer-contact-list">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="summer-contact-item"
            >
              <UIcon
                :name="item.icon"
                class="summer-contact-icon"
              />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>

        <div class="summer-ready-card">
          <h2 class="summer-ready-title">
            Ready to Join Us?
          </h2>
          <p class="summer-ready-copy">
            Spots are limited! Book your creative summer adventure today!
          </p>
          <NuxtLink
            to="/contact?interest=Summer%20Camp#message"
            class="summer-button summer-button--primary summer-ready-button"
          >
            Book Summer Camp
          </NuxtLink>
        </div>

        <div class="summer-qr-card">
          <h3 class="summer-qr-title">
            Scan to Learn More
          </h3>
          <img
            src="/summer-camps/qr-code.jpg"
            alt="XinYi Class WeChat QR code"
            width="638"
            height="640"
            class="summer-qr-image"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <footer class="summer-footer px-4 py-10 text-white sm:px-6 lg:px-8">
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

.summer-hero {
  background:
    linear-gradient(180deg, rgba(255, 248, 237, 0.92), rgba(250, 237, 211, 0.98)),
    radial-gradient(circle at 18% 20%, rgba(255, 211, 220, 0.7), transparent 28%),
    radial-gradient(circle at 78% 12%, rgba(188, 225, 240, 0.72), transparent 26%);
}

.summer-hero-wash {
  position: absolute;
  z-index: -1;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(35px);
}

.summer-hero-wash--rose {
  top: -8rem;
  left: -7rem;
  background: rgba(250, 197, 208, 0.5);
}

.summer-hero-wash--gold {
  top: -6rem;
  right: -7rem;
  background: rgba(248, 223, 153, 0.58);
}

.summer-hero-wash--blue {
  bottom: -9rem;
  left: 36%;
  background: rgba(176, 219, 236, 0.55);
}

.summer-hero-scene {
  position: relative;
  min-height: 34rem;
  overflow: hidden;
  border: 10px solid rgba(255, 255, 255, 0.72);
  border-radius: 3rem;
  background:
    radial-gradient(circle at 18% 25%, rgba(255, 255, 255, 0.9), transparent 24%),
    linear-gradient(180deg, #dff3fb 0%, #f8f1ce 64%, #cfe9b9 100%);
  box-shadow: 0 2rem 5rem rgba(111, 91, 55, 0.16);
}

.summer-hero-scene::after {
  position: absolute;
  right: -6%;
  bottom: -12%;
  left: -6%;
  height: 36%;
  content: "";
  background:
    radial-gradient(circle at 12% 62%, rgba(242, 182, 96, 0.34) 0 0.35rem, transparent 0.42rem),
    radial-gradient(circle at 26% 45%, rgba(217, 120, 94, 0.26) 0 0.32rem, transparent 0.4rem),
    radial-gradient(circle at 68% 44%, rgba(92, 138, 80, 0.25) 0 0.45rem, transparent 0.54rem),
    linear-gradient(180deg, rgba(214, 236, 166, 0), rgba(173, 218, 141, 0.75));
}

.summer-hero-art {
  position: absolute;
  right: -2%;
  bottom: 0;
  z-index: 1;
  width: 66%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  mix-blend-mode: multiply;
}

.summer-hero-copy {
  position: relative;
  z-index: 2;
  max-width: 33rem;
  padding: 4.6rem 3.6rem;
}

.summer-eyebrow {
  color: #d9785e;
  font-size: 0.78rem;
  font-weight: 900;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.summer-hero-title {
  margin-top: 1.1rem;
  color: #2f79a9;
  font-family: "Comic Sans MS", "Chalkboard SE", "Bradley Hand", cursive;
  font-size: clamp(4rem, 8vw, 6.9rem);
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: -0.06em;
  text-shadow: 0 0.22rem 0 rgba(255, 255, 255, 0.8);
}

.summer-hero-subtitle {
  margin-top: 1.4rem;
  color: #5c8a50;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.7rem, 3vw, 2.7rem);
  font-style: italic;
  font-weight: 700;
}

.summer-hero-text {
  max-width: 28rem;
  margin-top: 1.1rem;
  color: #59696c;
  font-size: 1.12rem;
  line-height: 1.8;
}

.summer-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.summer-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0.84rem 1.55rem;
  font-size: 0.95rem;
  font-weight: 900;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

.summer-button:hover {
  transform: translateY(-0.12rem);
}

.summer-button:focus-visible {
  outline: 2px solid #d98792;
  outline-offset: 4px;
}

.summer-button--primary {
  color: #fff;
  background: #e8876f;
  box-shadow: 0 0.9rem 1.8rem rgba(232, 135, 111, 0.28);
}

.summer-button--light {
  color: #3b6584;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: inset 0 0 0 1px rgba(232, 215, 189, 0.95), 0 0.5rem 1.2rem rgba(111, 91, 55, 0.1);
}

.summer-section {
  position: relative;
}

.summer-day-section,
.summer-creativity-section {
  background: #fff8ed;
}

.summer-day-section::before,
.summer-creativity-section::before {
  position: absolute;
  inset: 2rem auto auto -7rem;
  width: 18rem;
  height: 18rem;
  content: "";
  border-radius: 9999px;
  background: rgba(188, 225, 240, 0.32);
  filter: blur(28px);
}

.summer-section-title {
  max-width: 46rem;
  margin: 1rem auto 0;
  color: #315b7c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1;
}

.summer-timeline {
  position: relative;
  display: grid;
  gap: 2.1rem;
}

.summer-timeline::before {
  position: absolute;
  top: 2rem;
  bottom: 1rem;
  left: 50%;
  width: 1rem;
  content: "";
  border-radius: 9999px;
  background: repeating-linear-gradient(180deg, #f3c469 0 1.1rem, transparent 1.1rem 1.8rem);
  transform: translateX(-50%);
}

.summer-timeline-row {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 6rem minmax(0, 1fr);
  align-items: center;
  min-height: 17.5rem;
}

.summer-timeline-card {
  position: relative;
  display: grid;
  grid-template-columns: 12rem minmax(0, 1fr);
  gap: 1.1rem;
  align-items: center;
  padding: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 2.2rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 1.2rem 3rem rgba(88, 68, 42, 0.13);
}

.summer-timeline-card::before {
  position: absolute;
  top: -0.6rem;
  left: 50%;
  width: 4.8rem;
  height: 1.1rem;
  content: "";
  border-radius: 9999px;
  background: rgba(241, 174, 117, 0.52);
  transform: translateX(-50%) rotate(-2deg);
}

.summer-timeline-row--left .summer-timeline-card {
  grid-column: 1;
}

.summer-timeline-row--right .summer-timeline-card {
  grid-column: 3;
}

.summer-timeline-number {
  z-index: 2;
  grid-column: 2;
  grid-row: 1;
  display: grid;
  place-items: center;
  width: 4.6rem;
  height: 4.6rem;
  margin: auto;
  border: 0.42rem solid #ffe8ad;
  border-radius: 9999px;
  color: #31445b;
  background: #e8876f;
  box-shadow: 0 0.8rem 1.6rem rgba(202, 113, 91, 0.23);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.4rem;
  font-weight: 800;
}

.summer-timeline-row--blue .summer-timeline-number {
  background: #5aa6c5;
}

.summer-timeline-row--gold .summer-timeline-number {
  background: #edb84c;
}

.summer-timeline-row--green .summer-timeline-number {
  background: #77a96b;
}

.summer-timeline-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 1.45rem;
  object-fit: cover;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.9);
}

.summer-timeline-body {
  padding: 0.5rem 0.4rem 0.5rem 0;
}

.summer-card-title {
  color: #315b7c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.15rem;
  font-weight: 700;
  line-height: 1.04;
}

.summer-card-text {
  margin-top: 0.8rem;
  color: #5d6768;
  font-size: 0.92rem;
  line-height: 1.72;
}

.summer-tilt-left {
  transform: rotate(-1.2deg);
}

.summer-tilt-right {
  transform: rotate(1.2deg);
}

.summer-quote {
  max-width: 52rem;
  margin: 3.8rem auto 0;
  padding: 1.9rem 2.2rem;
  border: 0.28rem solid rgba(255, 255, 255, 0.75);
  border-radius: 2rem;
  color: #2f79a9;
  background: #ffe59c;
  box-shadow: 0 1rem 2.8rem rgba(88, 68, 42, 0.12);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 3.5vw, 3.1rem);
  font-style: italic;
  font-weight: 700;
  line-height: 1.12;
  text-align: center;
  transform: rotate(-0.7deg);
}

.summer-info-section {
  background:
    radial-gradient(circle at 10% 10%, rgba(255, 255, 255, 0.5), transparent 28%),
    linear-gradient(180deg, #f7edd9 0%, #fff4dc 100%);
}

.summer-info-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
}

.summer-info-card {
  min-height: 14.4rem;
  padding: 1.15rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 1.65rem;
  background: rgba(255, 255, 255, 0.82);
  box-shadow: 0 0.9rem 2.2rem rgba(88, 68, 42, 0.1);
}

.summer-info-card--rose {
  background: #ffe3e1;
}

.summer-info-card--gold {
  background: #ffe9ad;
}

.summer-info-card--green {
  background: #dff0cf;
}

.summer-info-card--blue {
  background: #dff0f5;
}

.summer-info-card--violet {
  background: #eadff6;
}

.summer-info-icon {
  width: 2.15rem;
  height: 2.15rem;
  color: #5c8a50;
}

.summer-info-label {
  margin-top: 0.95rem;
  color: #6b3329;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.summer-info-value {
  margin-top: 0.45rem;
  color: #315b7c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.45rem;
  font-weight: 700;
  line-height: 1.05;
}

.summer-info-detail {
  margin-top: 0.55rem;
  color: #5d6768;
  font-size: 0.82rem;
  line-height: 1.55;
}

.summer-details-grid,
.summer-notes-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 0.88fr;
  gap: 1.5rem;
  align-items: stretch;
}

.summer-paper {
  position: relative;
  padding: 1.8rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 2rem;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 1.2rem 3rem rgba(88, 68, 42, 0.12);
}

.summer-paper::before {
  position: absolute;
  top: -0.52rem;
  left: 50%;
  width: 4.8rem;
  height: 1rem;
  content: "";
  border-radius: 9999px;
  background: rgba(241, 174, 117, 0.5);
  transform: translateX(-50%) rotate(-2deg);
}

.summer-paper--activities {
  background: #f9dce1;
}

.summer-paper--included {
  background: rgba(255, 255, 255, 0.9);
}

.summer-paper--bring {
  background: #efe2f7;
}

.summer-paper--notes {
  background: #fff2c8;
}

.summer-paper-title {
  color: #315b7c;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.05rem;
  font-weight: 700;
}

.summer-paper-title--violet {
  color: #7657a1;
}

.summer-paper-title--orange {
  color: #d9785e;
}

.summer-paper-copy {
  margin-top: 0.8rem;
  color: #5d6768;
  font-size: 0.92rem;
  line-height: 1.7;
}

.summer-list {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.2rem;
  color: #40535c;
  font-size: 0.94rem;
  font-weight: 700;
}

.summer-list--bullets {
  margin-top: 0.2rem;
}

.summer-list-item {
  display: flex;
  gap: 0.7rem;
  align-items: flex-start;
}

.summer-list-icon {
  width: 1.18rem;
  height: 1.18rem;
  flex: none;
  margin-top: 0.12rem;
}

.summer-list-icon--green {
  color: #5c8a50;
}

.summer-list-icon--orange {
  color: #d9785e;
}

.summer-dot {
  width: 0.52rem;
  height: 0.52rem;
  flex: none;
  margin-top: 0.44rem;
  border-radius: 9999px;
  background: #d9785e;
}

.summer-dot--blue {
  background: #2f79a9;
}

.summer-details-image,
.summer-notes-image {
  width: 100%;
  height: 100%;
  min-height: 19rem;
  border: 0.45rem solid rgba(255, 255, 255, 0.82);
  border-radius: 2rem;
  object-fit: cover;
  box-shadow: 0 1.2rem 3rem rgba(88, 68, 42, 0.14);
  transform: rotate(1deg);
}

.summer-creativity-banner {
  padding: 2.2rem;
  border: 0.42rem solid rgba(255, 255, 255, 0.8);
  border-radius: 2.5rem;
  background: linear-gradient(135deg, #dff0f5, #fff1bf 58%, #fde0e5);
  box-shadow: 0 1.4rem 3.6rem rgba(88, 68, 42, 0.12);
}

.summer-creativity-title {
  color: #2f79a9;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 700;
  text-align: center;
}

.summer-values-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.2rem;
  margin-top: 2rem;
}

.summer-value-card {
  padding: 1.55rem 1rem;
  border: 2px solid rgba(255, 255, 255, 0.76);
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.72);
  text-align: center;
}

.summer-value-card--rose {
  background: #ffe3e1;
}

.summer-value-card--blue {
  background: #dff0f5;
}

.summer-value-card--green {
  background: #dff0cf;
}

.summer-value-card--gold {
  background: #ffe9ad;
}

.summer-value-icon {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  color: #d9785e;
}

.summer-value-label {
  margin-top: 0.85rem;
  color: #335b2e;
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.summer-contact-section {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 18% 15%, rgba(255, 255, 255, 0.48), transparent 24%),
    linear-gradient(135deg, #dceef7, #c9e6ef);
}

.summer-contact-title {
  color: #2f79a9;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3rem, 4vw, 4.4rem);
  font-weight: 700;
}

.summer-contact-list {
  display: grid;
  gap: 1rem;
  margin-top: 1.7rem;
  color: #31445b;
  font-size: 1rem;
  font-weight: 700;
}

.summer-contact-item {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.summer-contact-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex: none;
  color: #5c8a50;
}

.summer-ready-card,
.summer-qr-card {
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 2rem;
  box-shadow: 0 1.2rem 3rem rgba(88, 68, 42, 0.13);
  text-align: center;
}

.summer-ready-card {
  padding: 2rem;
  background: #ffe59c;
}

.summer-ready-title {
  color: #d9785e;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 1.05;
}

.summer-ready-copy {
  margin-top: 1rem;
  color: #31445b;
  font-size: 1.12rem;
  font-weight: 800;
  line-height: 1.55;
}

.summer-ready-button {
  margin-top: 1.6rem;
}

.summer-qr-card {
  padding: 1.6rem;
  background: rgba(255, 255, 255, 0.84);
}

.summer-qr-title {
  color: #2f79a9;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 2rem;
  font-weight: 700;
}

.summer-qr-image {
  width: 11rem;
  aspect-ratio: 1;
  margin: 1.2rem auto 0;
  border-radius: 1rem;
  background: #fff;
  object-fit: contain;
  padding: 0.5rem;
  box-shadow: inset 0 0 0 1px #d7e3df;
}

.summer-footer {
  background: #315b7c;
}

@media (max-width: 1024px) {
  .summer-hero-copy {
    max-width: 30rem;
    padding: 3.5rem 2.2rem;
  }

  .summer-hero-art {
    right: -15%;
    width: 72%;
    opacity: 0.72;
  }

  .summer-info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .summer-details-grid,
  .summer-notes-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 820px) {
  .summer-hero-scene {
    min-height: auto;
  }

  .summer-hero-art {
    position: relative;
    right: auto;
    display: block;
    width: 100%;
    height: 18rem;
    opacity: 1;
  }

  .summer-hero-copy {
    padding: 2.5rem 1.5rem 1.5rem;
  }

  .summer-timeline {
    gap: 1.3rem;
  }

  .summer-timeline::before {
    left: 2.3rem;
  }

  .summer-timeline-row {
    display: grid;
    grid-template-columns: 4.6rem minmax(0, 1fr);
    min-height: 0;
  }

  .summer-timeline-number {
    grid-column: 1;
    width: 3.8rem;
    height: 3.8rem;
    font-size: 2rem;
  }

  .summer-timeline-row--left .summer-timeline-card,
  .summer-timeline-row--right .summer-timeline-card {
    grid-column: 2;
  }

  .summer-timeline-card {
    grid-template-columns: 1fr;
  }

  .summer-values-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .summer-hero-scene {
    border-width: 6px;
    border-radius: 2rem;
  }

  .summer-hero-actions,
  .summer-button {
    width: 100%;
  }

  .summer-info-grid,
  .summer-values-grid {
    grid-template-columns: 1fr;
  }

  .summer-section-title {
    font-size: 2.6rem;
  }
}
</style>
