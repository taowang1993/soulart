<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Wellness | XinYi Class',
  description: 'Explore XinYi Class wellness programs with yoga, meditation, sound healing, retreats, and Silver Club community gatherings.',
  ogTitle: 'Wellness | XinYi Class',
  ogDescription: 'Move. Breathe. Create. Wellness programs for calm, connection, and community.',
})

const navItems = [
  { label: 'Home', to: '/', icon: 'i-lucide-home' },
  { label: 'Art Programs', to: '/art-programs', icon: 'i-lucide-palette' },
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '#schedule', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/#studio', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '#contact', icon: 'i-lucide-mail' },
]

const yogaCards = [
  {
    title: 'Yin Yoga',
    image: '/wellness/yin-yoga.jpg',
    description: 'A slow, grounding practice to open the body and calm the nervous system.',
    points: ['Deep Stretch', 'Stillness', 'Rest'],
  },
  {
    title: 'Flow Yoga',
    image: '/wellness/flow-yoga.jpg',
    description: 'Breath-led movement that builds strength, balance, and steady energy.',
    points: ['Movement', 'Balance', 'Vitality'],
  },
  {
    title: 'Chair Yoga',
    image: '/wellness/chair-yoga.jpg',
    description: 'Accessible movement for mobility, posture, and everyday comfort.',
    points: ['Gentle', 'Adaptive', 'Supportive'],
  },
  {
    title: 'Inside Flow',
    image: '/wellness/inside-flow.jpg',
    description: 'Music, rhythm, and mindful movement become one expressive practice.',
    points: ['Music', 'Rhythm', 'Expression'],
  },
]

const soundBenefits = [
  'Sound Bath Sessions',
  'Guided Meditation',
  'Mindful Breathing',
]

const retreatCards = [
  { title: 'Outdoor Practice', text: 'Move gently, breathe deeply, and reconnect with nature.' },
  { title: 'Mindful Art', text: 'Use color, journaling, and simple making as restorative tools.' },
  { title: 'Community Time', text: 'Share tea, conversation, and quiet moments with like-minded friends.' },
]

const silverItems = [
  { title: 'Gentle Yoga', icon: 'i-lucide-leaf' },
  { title: 'Creative Wellness', icon: 'i-lucide-palette' },
  { title: 'Tea & Conversation', icon: 'i-lucide-cup-soda' },
  { title: 'Seasonal Outings', icon: 'i-lucide-sun' },
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
  { label: 'Wellness', to: '/wellness' },
  { label: 'Resources', to: '/docs/manual/en/getting-started/installation' },
  { label: 'Contact', to: '#contact' },
]

const socialLinks = [
  { label: 'Instagram', icon: 'i-lucide-instagram' },
  { label: 'Facebook', icon: 'i-lucide-facebook' },
  { label: 'YouTube', icon: 'i-lucide-youtube' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main class="xinyi-wellness min-h-screen overflow-hidden bg-[#f6efe4] text-[#3f3d55]">
    <section class="relative isolate overflow-hidden bg-[#f8efe2] px-4 pb-14 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_18%,rgba(201,220,185,0.62),transparent_30%),radial-gradient(circle_at_85%_22%,rgba(232,207,174,0.62),transparent_28%),linear-gradient(120deg,#fbf4e9_0%,#edf5e9_100%)]"
        aria-hidden="true"
      />

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
      >
        <NuxtLink
          to="/"
          aria-label="XinYi Class Home"
          class="flex items-center gap-2 text-[#4e3c71] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
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
            class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#413a4f] transition hover:bg-[#e8f2e7] hover:text-[#597c58] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7aa984]"
            :class="item.label === 'Wellness' ? 'bg-[#e5f2e5] text-[#527858]' : ''"
          >
            <UIcon
              v-if="item.label === 'Wellness'"
              :name="item.icon"
              class="size-4"
            />
            {{ item.label }}
          </NuxtLink>
        </div>

        <NuxtLink
          to="#schedule"
          class="rounded-full bg-[#7aa984] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#7aa984]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
        >
          View Schedule
        </NuxtLink>
      </nav>

      <div class="mx-auto grid max-w-6xl items-center gap-12 pt-14 lg:grid-cols-[0.82fr_1.18fr] lg:pt-20">
        <div class="text-center lg:text-left">
          <p class="text-sm font-bold uppercase tracking-[0.35em] text-[#7aa984]">
            XinYi Wellness
          </p>
          <h1 class="mt-5 font-serif text-5xl font-semibold leading-tight text-[#4d455f] sm:text-6xl lg:text-7xl">
            Wellness
          </h1>
          <p class="mt-5 font-serif text-3xl italic text-[#7f9467]">
            Move. Breathe. Create.
          </p>
          <p class="mt-6 text-xl leading-9 text-[#6b6071]">
            A calm path through yoga, meditation, sound healing, seasonal retreats, and community care.
          </p>
          <div class="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <NuxtLink
              to="#practice"
              class="inline-flex items-center justify-center rounded-full bg-[#7aa984] px-8 py-3 font-bold text-white shadow-lg shadow-[#7aa984]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
            >
              Explore Classes
            </NuxtLink>
            <NuxtLink
              to="#contact"
              class="inline-flex items-center justify-center rounded-full border border-[#b9c9b6] bg-white/70 px-8 py-3 font-bold text-[#527858] shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
            >
              Book a Trial
            </NuxtLink>
          </div>
        </div>

        <div class="wellness-hero-card">
          <img
            src="/wellness/hero-wellness.jpg"
            alt="Woman practicing yoga in a peaceful studio"
            class="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section
      id="practice"
      class="bg-[#f9f1e7] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8aa06f]">
            Practice With Us
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-[#4f4a64] sm:text-5xl">
            Yoga Journey
          </h2>
          <div class="wellness-divider mx-auto mt-5" />
          <p class="mt-6 text-lg leading-8 text-[#6b6071]">
            Choose the practice that meets your body today.
          </p>
        </div>

        <div class="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="card in yogaCards"
            :key="card.title"
            class="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_55px_rgba(73,79,62,0.14)] ring-1 ring-[#e2dccd]"
          >
            <img
              :src="card.image"
              :alt="`${card.title} at XinYi Class`"
              class="wellness-card-photo h-48 w-full object-cover"
              loading="lazy"
              decoding="async"
            >
            <div class="p-6">
              <h3 class="font-serif text-2xl font-semibold text-[#596d4f]">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-sm leading-6 text-[#6b6071]">
                {{ card.description }}
              </p>
              <ul class="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-[#6a7e5e]">
                <li
                  v-for="point in card.points"
                  :key="point"
                  class="rounded-full bg-[#edf4e8] px-3 py-1"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-[#eef5ec] px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="absolute right-[-6rem] top-[-6rem] h-72 w-72 rounded-full bg-[#d8cbea]/40 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div class="sound-photo-frame">
          <img
            src="/wellness/sound-healing-session.jpg"
            alt="Sound healing session with singing bowls"
            class="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8a7aae]">
            Restore the Nervous System
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-[#4f4a64] sm:text-5xl">
            Meditation & Sound Healing
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#655f70]">
            Sink into soft sound, guided breath, and steady attention. These sessions offer a quiet space to release stress and reconnect with yourself.
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div
              v-for="benefit in soundBenefits"
              :key="benefit"
              class="rounded-2xl bg-white/75 p-4 text-center font-semibold text-[#5d6f56] shadow-sm ring-1 ring-white/80"
            >
              {{ benefit }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#fbf4ea] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8aa06f]">
              Gather & Renew
            </p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-[#4f4a64] sm:text-5xl">
              Workshops & Retreats
            </h2>
            <div class="wellness-divider mt-5" />
          </div>
          <p class="text-lg leading-8 text-[#6b6071]">
            Outdoor experiences to help you slow down, reconnect with nature, and nourish your body and soul.
          </p>
        </div>

        <div class="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(73,79,62,0.18)] ring-1 ring-white/80">
          <img
            src="/wellness/outdoor-yoga.jpg"
            alt="Outdoor yoga group practice by the water"
            class="aspect-[16/7] w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          >
          <div class="grid gap-px bg-[#e4dacb] md:grid-cols-3">
            <article
              v-for="card in retreatCards"
              :key="card.title"
              class="bg-[#fffaf2] p-7"
            >
              <h3 class="font-serif text-2xl font-semibold text-[#7a684b]">
                {{ card.title }}
              </h3>
              <p class="mt-4 leading-7 text-[#6b6071]">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[linear-gradient(180deg,#f8f3ed_0%,#eef5ec_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8aa06f]">
            Community Care
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-[#4f4a64] sm:text-5xl">
            Silver Club 50+
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#6b6071]">
            A gentle community for wisdom, movement, creativity, and friendship. Everyone is welcome, and every practice can be adapted.
          </p>
          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in silverItems"
              :key="item.title"
              class="flex items-center gap-3 rounded-2xl bg-white/75 p-4 font-semibold text-[#5d6f56] shadow-sm ring-1 ring-white/80"
            >
              <UIcon
                :name="item.icon"
                class="size-6 text-[#7aa984]"
              />
              {{ item.title }}
            </div>
          </div>
        </div>

        <div class="silver-photo-frame">
          <img
            src="/wellness/silver-club.jpg"
            alt="Silver Club wellness activities"
            class="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section
      id="schedule"
      class="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-4xl rounded-[2rem] bg-[#4f6750] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(72,90,68,0.24)] sm:px-12">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#dcebd7]">
          New Students Welcome
        </p>
        <h2 class="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Begin Your Wellness Journey
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#edf7ea]">
          Choose the practice that feels right, or contact us and we will help you find a gentle first step.
        </p>
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="#contact"
            class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-[#4f6750] shadow-lg transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Schedule a Trial
          </NuxtLink>
          <NuxtLink
            to="/art-programs"
            class="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore Art Programs
          </NuxtLink>
        </div>
      </div>
    </section>

    <footer
      id="contact"
      class="relative overflow-hidden bg-[#e7e1d7] px-4 py-12 text-[#5a554f] sm:px-6 lg:px-8"
    >
      <div
        class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c9dbc7]/50 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-6xl gap-10 border-b border-[#d5cdc0] pb-10 md:grid-cols-[1.1fr_0.8fr_1fr_0.8fr]">
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
              <h2 class="font-serif text-2xl font-semibold text-[#4f4a64]">
                XinYi Class
              </h2>
              <p class="mt-1 text-sm leading-6 text-[#6b6071]">
                Art, wellness, and community for every season of life
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#4f4a64]">
            Explore
          </h3>
          <ul class="mt-5 space-y-2 text-sm">
            <li
              v-for="link in footerLinks"
              :key="link.label"
              class="border-b border-[#d5cdc0] pb-2 last:border-b-0"
            >
              <NuxtLink
                :to="link.to"
                class="transition hover:text-[#527858] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#4f4a64]">
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
                class="size-4 shrink-0 text-[#7aa984]"
              />
              <span>{{ item.label }}</span>
            </li>
          </ul>
          <img
            src="/home/qr-code.jpg"
            alt="XinYi Class WeChat QR code"
            class="mt-5 h-24 w-24 rounded-md bg-white p-1 shadow-sm ring-1 ring-[#d5cdc0]"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-[#4f4a64]">
            Follow Us
          </h3>
          <div class="mt-5 flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              href="#contact"
              :aria-label="social.label"
              class="flex size-9 items-center justify-center rounded-full bg-white/70 text-[#7aa984] ring-1 ring-[#d5cdc0] transition hover:-translate-y-0.5 hover:text-[#527858] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
            >
              <UIcon
                :name="social.icon"
                class="size-5"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-7 text-sm text-[#6b6071] md:flex-row">
        <p>© 2026 XinYi Class.</p>
        <p>Move <span class="mx-3 text-[#7aa984]">♥</span> Breathe <span class="mx-3 text-[#7aa984]">♥</span> Create</p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.xinyi-wellness {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.xinyi-wellness :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.wellness-hero-card {
  position: relative;
  min-height: 34rem;
  overflow: hidden;
  border: 0.75rem solid rgba(255, 255, 255, 0.72);
  border-radius: 2.5rem 2.5rem 7rem 2.5rem;
  box-shadow: 0 2rem 5rem rgba(83, 98, 74, 0.18);
}

.wellness-divider {
  position: relative;
  width: min(18rem, 70vw);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(122, 169, 132, 0.52), transparent);
}

.wellness-divider::after {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 1.15rem;
  height: 1.15rem;
  content: "";
  background: radial-gradient(circle at 50% 50%, #7aa984 0 30%, transparent 31%), radial-gradient(circle at 20% 30%, #c6a679 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, #c6a679 0 18%, transparent 19%);
  transform: translate(-50%, -50%);
}

.wellness-card-photo,
.sound-photo-frame,
.silver-photo-frame {
  position: relative;
  overflow: hidden;
}

.sound-photo-frame,
.silver-photo-frame {
  background: white;
  box-shadow: 0 1.5rem 4rem rgba(73, 79, 62, 0.16);
}

.sound-photo-frame {
  aspect-ratio: 4 / 3;
  padding: 0.55rem;
  background: linear-gradient(135deg, #9caf88, #d6c09b);
  border-radius: 2.2rem;
  transform: rotate(-1.2deg);
}

.sound-photo-frame img,
.silver-photo-frame img {
  border-radius: 1.65rem;
}

.silver-photo-frame {
  aspect-ratio: 16 / 9;
  padding: 0.55rem;
  background: linear-gradient(135deg, #d6c09b, #9caf88);
  border-radius: 2.2rem;
  transform: rotate(1deg);
}
</style>
