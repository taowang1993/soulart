<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Wellness | XinYi Class',
  description: 'Nurturing body, mind and spirit through yoga, meditation, mindful living, day retreats, and Silver Club 45+ community gatherings.',
  ogTitle: 'Wellness | XinYi Class',
  ogDescription: 'Move. Breathe. Create. Nurturing body, mind and spirit through yoga, meditation and mindful living.',
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

const programCards = [
  {
    title: 'Yoga Journey',
    text: 'Gentle, Yin, Flow for every body and every stage.',
    icon: 'i-lucide-flower-2',
  },
  {
    title: 'Meditation',
    text: 'Calm the mind, return to the present moment.',
    icon: 'i-lucide-sparkles',
  },
  {
    title: 'Workshops & Retreats',
    text: 'Deepen your practice and reconnect with yourself.',
    icon: 'i-lucide-trees',
  },
  {
    title: 'Silver Club',
    text: 'A warm community for 45+ women to grow together.',
    icon: 'i-lucide-users-round',
  },
]

const yogaCards = [
  {
    title: 'Yin Yoga',
    image: '/wellness/yin-yoga.jpg',
    lead: 'Slow down. Release tension. Restore balance.',
    points: ['Deep stretch & fascia release', 'Calms the nervous system', 'All levels welcome'],
  },
  {
    title: 'Flow Yoga',
    image: '/wellness/flow-yoga.jpg',
    lead: 'Build strength, flexibility and mindful movement.',
    points: ['Vinyasa flow', 'Energy & endurance', 'All levels welcome'],
  },
  {
    title: 'Chair Yoga',
    image: '/wellness/chair-yoga.jpg',
    lead: 'Gentle movement for every body and every age.',
    points: ['Joint-friendly', 'Improve mobility & balance', '50+ and beginners welcome'],
  },
  {
    title: 'Inside Flow',
    image: '/wellness/inside-flow.jpg',
    lead: 'Yoga meets dance. Move, express, and flow from within.',
    points: ['Creative & expressive', 'Synchronize breath & movement', 'All levels welcome'],
  },
]

const soundCards = [
  {
    title: 'Yoga Nidra',
    text: 'Deep guided relaxation to restore body and mind while staying awake.',
    icon: 'i-lucide-sparkles',
  },
  {
    title: 'Sound Bath',
    text: 'Healing vibrations that balance your energy and calm the nervous system.',
    icon: 'i-lucide-music-2',
  },
  {
    title: 'Meditation',
    text: 'Simple practices to help you cultivate awareness, presence and peace.',
    icon: 'i-lucide-leaf',
  },
]

const soundBenefits = [
  { title: '90 Minutes', text: 'Time to unwind, reset and restore.' },
  { title: 'All Levels Welcome', text: 'Beginners and experienced practitioners alike.' },
  { title: 'Safe & Supportive Space', text: 'A gentle environment to be yourself.' },
  { title: 'What to Bring', text: 'Comfortable clothing, yoga mat, blanket and an open heart.' },
]

const retreatSchedule = [
  { label: 'Date', lines: ['Wednesday', 'August 26, 2026'] },
  { label: 'Time', lines: ['9:00am – 5:00pm'] },
  { label: 'Location', lines: ['Richmond Green Park', '(By Richmond Green Secondary School)', 'Richmond Hill, ON'] },
  { label: 'Group Size', lines: ['Small Group', 'All Levels Welcome'] },
  {
    label: 'Includes',
    lines: ['Yoga & Meditation', 'Restorative Yoga', 'Outdoor Group Activities', 'Healthy Lunch & Snacks', 'Herbal Tea & Warm Drinks'],
  },
  { label: 'Investment', lines: ['$150', 'All-inclusive'] },
]

const silverOfferings = [
  {
    title: 'Gentle Yoga',
    text: 'Move with ease. Improve flexibility, balance and well-being.',
    icon: 'i-lucide-leaf',
  },
  {
    title: 'Art & Craft',
    text: 'Express freely. Explore creativity and enjoy the joy of making.',
    icon: 'i-lucide-palette',
  },
  {
    title: 'Reading Circle',
    text: 'Join our book circle. Share ideas, inspiration, and meaningful conversations.',
    icon: 'i-lucide-book-open',
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
          <div
            v-for="item in navItems"
            :key="item.label"
            class="group relative"
          >
            <NuxtLink
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
              <UIcon
                v-if="item.children"
                name="i-lucide-chevron-down"
                class="size-4 transition group-hover:rotate-180"
              />
            </NuxtLink>
            <div
              v-if="item.children"
              class="pointer-events-none absolute left-0 top-full z-30 min-w-52 rounded-2xl bg-white/95 p-2 opacity-0 shadow-xl ring-1 ring-[#d8e8d3] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#527858] hover:bg-[#edf6ed] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7aa984]"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <NuxtLink
          to="#schedule"
          class="rounded-full bg-[#7aa984] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#7aa984]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
        >
          View Schedule
        </NuxtLink>
      </nav>

      <div class="wellness-hero-banner -mx-4 mt-6 sm:-mx-6 lg:-mx-8">
        <img
          src="/wellness/hero-wellness.jpg"
          alt="Woman meditating in a peaceful studio"
          class="absolute inset-0 h-full w-full object-cover object-center md:left-auto md:w-[64%]"
          loading="eager"
          decoding="async"
        >
        <div
          class="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,239,226,0.92)_0%,rgba(248,239,226,0.78)_34%,rgba(248,239,226,0.18)_62%,rgba(248,239,226,0)_100%)]"
          aria-hidden="true"
        />
        <div class="relative z-10 max-w-xl px-6 py-20 text-center sm:px-12 sm:py-28 lg:px-20 lg:py-36 lg:text-left">
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
            Nurturing body, mind and spirit through yoga, meditation and mindful living.
          </p>
          <div class="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <NuxtLink
              to="#practice"
              class="inline-flex items-center justify-center rounded-full bg-[#7aa984] px-8 py-3 font-bold text-white shadow-lg shadow-[#7aa984]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
            >
              Explore Classes
            </NuxtLink>
            <NuxtLink
              to="/contact?interest=Trial%20Class#message"
              class="inline-flex items-center justify-center rounded-full border border-[#b9c9b6] bg-white/70 px-8 py-3 font-bold text-[#527858] shadow-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7aa984]"
            >
              Book a Trial
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="mx-auto mt-12 grid max-w-[84rem] gap-5 md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="program in programCards"
          :key="program.title"
          class="rounded-[2rem] bg-white/82 p-6 text-center shadow-[0_18px_50px_rgba(85,93,68,0.12)] ring-1 ring-white/80 backdrop-blur"
        >
          <div class="mx-auto flex size-14 items-center justify-center rounded-full bg-[#edf6ea] text-[#6b946b]">
            <UIcon
              :name="program.icon"
              class="size-7"
            />
          </div>
          <h2 class="mt-4 font-serif text-2xl font-semibold text-[#4e5f47]">
            {{ program.title }}
          </h2>
          <p class="mt-2 text-sm leading-6 text-[#6b6071]">
            {{ program.text }}
          </p>
        </article>
      </div>
    </section>

    <section
      id="practice"
      class="bg-[#f9f1e7] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-[84rem]">
        <div class="mx-auto max-w-4xl text-center">
          <UIcon
            name="i-lucide-sprout"
            class="mx-auto size-10 text-[#8aa06f]"
          />
          <h2 class="mt-3 font-serif text-4xl font-semibold text-[#4f4a64] sm:text-5xl">
            Practice With Us
          </h2>
          <div class="wellness-divider mx-auto mt-5" />
          <p class="mt-6 text-lg leading-8 text-[#6b6071]">
            Find the practice that nourishes your body, calms your mind and awakens your inner light.
          </p>
          <p class="mt-3 text-lg leading-8 text-[#6b6071]">
            We offer a variety of yoga practices designed for all levels and all stages of life.
          </p>
          <p class="mt-3 font-serif text-2xl italic text-[#7f9467]">
            Come as you are. Grow at your own pace.
          </p>
        </div>

        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="card in yogaCards"
            :key="card.title"
            class="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_55px_rgba(73,79,62,0.14)] ring-1 ring-[#e2dccd]"
          >
            <img
              :src="card.image"
              :alt="`${card.title} at XinYi Class`"
              class="wellness-card-photo aspect-[585/400] w-full object-cover"
              loading="lazy"
              decoding="async"
            >
            <div class="p-6">
              <h3 class="font-serif text-2xl font-semibold text-[#596d4f]">
                {{ card.title }}
              </h3>
              <p class="mt-3 font-semibold leading-7 text-[#7a684b]">
                {{ card.lead }}
              </p>
              <ul class="mt-5 space-y-2 text-sm leading-6 text-[#6b6071]">
                <li
                  v-for="point in card.points"
                  :key="point"
                  class="flex gap-2"
                >
                  <span class="mt-2 size-1.5 shrink-0 rounded-full bg-[#8aa06f]" />
                  <span>{{ point }}</span>
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
      <div class="relative mx-auto grid max-w-[84rem] items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
        <div class="rounded-[2rem] bg-white/72 p-8 shadow-[0_18px_50px_rgba(85,93,68,0.12)] ring-1 ring-white/80 lg:p-10">
          <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8a7aae]">
            Meditation
          </p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-[#4f4a64] sm:text-5xl">
            Pause. Breathe. Come Home to Yourself.
          </h2>
          <p class="mt-5 font-serif text-2xl italic text-[#7f9467]">
            You don’t need to silence the mind. You just need to listen with kindness.
          </p>
          <p class="mt-6 text-lg leading-8 text-[#655f70]">
            Meditation helps us slow down, breathe deeply, and reconnect with the present moment.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#655f70]">
            Sound healing uses vibration from singing bowls, gentle instruments, and soothing tones to relax the body and calm the nervous system.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#655f70]">
            Together, meditation and sound invite you into deep rest, inner clarity, and emotional balance.
          </p>
          <p class="mt-6 font-serif text-2xl italic text-[#8a7aae]">
            Every breath is a return. Every moment is enough.
          </p>
        </div>

        <div class="sound-photo-frame">
          <img
            src="/wellness/sound-healing-session.jpg"
            alt="Sound healing session with singing bowls"
            class="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>

      <div class="relative mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        <article
          v-for="card in soundCards"
          :key="card.title"
          class="rounded-[2rem] bg-white/78 p-6 text-center shadow-[0_18px_50px_rgba(85,93,68,0.12)] ring-1 ring-white/80"
        >
          <UIcon
            :name="card.icon"
            class="mx-auto size-8 text-[#7aa984]"
          />
          <h3 class="mt-4 font-serif text-2xl font-semibold text-[#4f4a64]">
            {{ card.title }}
          </h3>
          <p class="mt-3 leading-7 text-[#6b6071]">
            {{ card.text }}
          </p>
        </article>
      </div>

      <div class="relative mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-4">
        <div
          v-for="benefit in soundBenefits"
          :key="benefit.title"
          class="rounded-2xl bg-white/75 p-5 text-center shadow-sm ring-1 ring-white/80"
        >
          <h3 class="font-serif text-xl font-semibold text-[#5d6f56]">
            {{ benefit.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-[#6b6071]">
            {{ benefit.text }}
          </p>
        </div>
      </div>
    </section>

    <section
      id="retreat"
      class="bg-[#fbf4ea] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#8aa06f]">
              Retreat & Events
            </p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-[#4f4a64] sm:text-5xl">
              Day Retreat
            </h2>
            <div class="wellness-divider mt-5" />
          </div>
          <p class="text-lg leading-8 text-[#6b6071]">
            Outdoor experiences to help you slow down, connect with nature, and nourish your body and soul.
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
          <div class="grid gap-8 bg-[#fffaf2] p-7 lg:grid-cols-[1fr_0.9fr] lg:p-10">
            <div>
              <h3 class="font-serif text-3xl font-semibold text-[#7a684b]">
                Recharge in Nature. Come Home to Yourself.
              </h3>
              <p class="mt-5 leading-8 text-[#6b6071]">
                Join us for a full day of rest, movement and connection in the beautiful Richmond Green Park.
              </p>
              <p class="mt-4 leading-8 text-[#6b6071]">
                Surrounded by trees, fresh air and open space, we’ll practice yoga, breathe deeply, enjoy nourishing food, and take time to simply be.
              </p>
              <p class="mt-4 leading-8 text-[#6b6071]">
                This retreat is an invitation to slow down, release tension, reconnect with yourself, and enjoy outdoor group activities while meeting more like-minded friends.
              </p>
              <p class="mt-5 font-serif text-2xl italic text-[#7f9467]">
                All levels welcome. Come as you are.
              </p>
            </div>

            <div class="rounded-[1.75rem] bg-[#f4eadb] p-5 shadow-inner">
              <dl class="space-y-4">
                <div
                  v-for="item in retreatSchedule"
                  :key="item.label"
                  class="grid gap-2 border-b border-[#dfd2bd] pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_1fr]"
                >
                  <dt class="font-bold uppercase tracking-[0.18em] text-[#8aa06f]">
                    {{ item.label }}
                  </dt>
                  <dd class="space-y-1 font-semibold text-[#5f584f]">
                    <span
                      v-for="line in item.lines"
                      :key="line"
                      class="block"
                    >{{ line }}</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <p class="bg-[#7aa984] px-7 py-5 text-center font-serif text-2xl italic text-white">
            Breathe in nature. Move with ease. Connect with yourself and others.
          </p>
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
            Silver Club
          </h2>
          <p class="mt-3 font-serif text-2xl italic text-[#7f9467]">
            Art, Yoga, Meditation & Connection
          </p>
          <p class="mt-2 inline-flex rounded-full bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-[#7aa984] ring-1 ring-white/80">
            For 45+ Women
          </p>
          <p class="mt-6 text-lg leading-8 text-[#6b6071]">
            A nurturing space for women 45 and above to relax, express, move, and grow.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#6b6071]">
            Together, we explore creativity, cultivate inner peace, and support one another on our beautiful journey of life.
          </p>
          <div class="mt-6 rounded-[1.75rem] bg-white/78 p-5 leading-8 text-[#5f584f] shadow-sm ring-1 ring-white/80">
            <p class="font-bold text-[#5d6f56]">
              Every Wednesday Evening
            </p>
            <p>6:00 – 8:30 pm</p>
            <p class="mt-3 font-bold text-[#5d6f56]">
              Xinyi Art School
            </p>
            <p>105 Gordon Baker Rd, Unit 704 (HW404 & Finch), North York, ON</p>
          </div>
          <p class="mt-6 font-serif text-2xl italic text-[#8a7aae]">
            Come as you are. Leave feeling lighter, brighter, and more connected.
          </p>
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

      <div class="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
        <article
          v-for="offering in silverOfferings"
          :key="offering.title"
          class="rounded-[2rem] bg-white/78 p-6 shadow-sm ring-1 ring-white/80"
        >
          <UIcon
            :name="offering.icon"
            class="size-8 text-[#7aa984]"
          />
          <h3 class="mt-4 font-serif text-2xl font-semibold text-[#4f4a64]">
            {{ offering.title }}
          </h3>
          <p class="mt-3 leading-7 text-[#6b6071]">
            {{ offering.text }}
          </p>
        </article>
      </div>
      <p class="mx-auto mt-8 max-w-3xl text-center font-serif text-2xl italic text-[#7f9467]">
        Support. Friendship. Growth. We’re better together.
      </p>
    </section>

    <section
      id="schedule"
      class="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-4xl rounded-[2rem] bg-[#4f6750] px-8 py-12 text-center text-white shadow-[0_24px_80px_rgba(72,90,68,0.24)] sm:px-12">
        <p class="text-sm font-bold uppercase tracking-[0.3em] text-[#dcebd7]">
          Ready to Begin?
        </p>
        <h2 class="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
          Take the first step toward creativity, well-being and connection.
        </h2>
        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <NuxtLink
            to="/contact?interest=Trial%20Class#message"
            class="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-[#4f6750] shadow-lg transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Book a Trial Class
          </NuxtLink>
          <a
            href="tel:4165676538"
            class="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Call or Text 416-567-6538
          </a>
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
                Inspiring creativity, connection and well-being since 2016.
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
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
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

.wellness-hero-banner {
  position: relative;
  min-height: clamp(30rem, 39vw, 38rem);
  overflow: hidden;
  background: #e9dfd0;
  box-shadow: 0 2rem 5rem rgba(83, 98, 74, 0.16);
}

@media (max-width: 767px) {
  .wellness-hero-banner {
    min-height: 42rem;
  }
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
