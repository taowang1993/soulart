<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Resources | XinYi Class',
  description: 'Stories, videos, reading recommendations, and reflections from XinYi Class for creative families and wellness learners.',
  ogTitle: 'Resources | XinYi Class',
  ogDescription: 'Explore student stories, YouTube playlists, reading lists, and reflections from XinYi Class.',
})

const resourceAnchors = [
  { label: 'Student Stories', to: '/resources#student-stories' },
  { label: 'YouTube Playlists', to: '/resources#youtube' },
  { label: 'Reading List', to: '/resources#reading' },
  { label: 'Articles', to: '/resources#articles' },
]

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
  { label: 'Resources', to: '/resources', icon: 'i-lucide-book-open', children: resourceAnchors },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

const storyPhotos = [
  { label: '2019', image: '/resources/julia-2019.jpg', alt: 'Young Julia smiling with her teacher in 2019' },
  { label: '2025', image: '/resources/julia-2025.jpg', alt: 'Julia smiling with her teacher in 2025' },
]

const studentStories = [
  {
    name: 'Julia & Bernice',
    title: 'Growing Together',
    image: '/resources/bernice.jpg',
    alt: 'Bernice artwork and creative growth at XinYi Class',
    copy: 'Nine years of creativity, friendship and growth. From the first day they picked up a brush to today and beyond.',
  },
  {
    name: 'Doris',
    title: 'Learning Never Stops',
    image: '/resources/doris-artwork.jpg',
    alt: 'Doris artwork from XinYi Class',
    copy: 'From asking questions to finding her own artistic voice. Years later, she developed her own artistic voice.',
  },
]

const parentVoices = [
  {
    name: 'Julia’s Mom',
    quote: 'Julia has grown not only as an artist but also as a confident and resilient young person. Art will always remain part of who she is.',
  },
  {
    name: 'Bernice’s Father',
    quote: 'Thank you for protecting every child’s creativity over the years. Watching Bernice grow through art has been a true blessing.',
  },
  {
    name: 'Doris’s Mom',
    quote: 'Doris began drawing as a little girl. Today, she continues creating with curiosity and confidence. We are so grateful for your patience and guidance.',
  },
]

const playlists = [
  {
    title: 'Weekly Art Healing',
    icon: 'i-lucide-palette',
    image: '/resources/playlist-art-healing.jpg',
    alt: 'Pexels photo of an art class painting together',
    source: 'Pexels',
    copy: 'Draw, craft and heal with weekly art therapy practices.',
  },
  {
    title: 'Gentle Yoga',
    icon: 'i-lucide-leaf',
    image: '/resources/playlist-gentle-yoga.jpg',
    alt: 'Pexels photo of a gentle yoga practice',
    source: 'Pexels',
    copy: 'Short and accessible yoga practices for body, mind and energy.',
  },
  {
    title: 'Meditation & Yoga Nidra',
    icon: 'i-lucide-moon',
    image: '/resources/playlist-meditation.jpg',
    alt: 'Pexels photo of seated meditation practice',
    source: 'Pexels',
    copy: 'Guided meditations and deep relaxation for rest, calm and inner peace.',
  },
  {
    title: 'Art Tutorials',
    icon: 'i-lucide-brush',
    image: '/resources/playlist-art-tutorial.jpg',
    alt: 'Pexels photo of watercolor supplies and brushes',
    source: 'Pexels',
    copy: 'Step-by-step art lessons in watercolor, oil painting, Chinese painting and more.',
  },
  {
    title: 'Creative Conversations',
    icon: 'i-lucide-messages-square',
    image: '/resources/playlist-conversations.jpg',
    alt: 'Pexels photo of a small group in conversation',
    source: 'Pexels',
    copy: 'Inspiring talks on art, education, parenting, AI and meaningful living.',
  },
  {
    title: 'YouTube Shorts',
    icon: 'i-lucide-play',
    image: '/resources/playlist-shorts.jpg',
    alt: 'Pexels photo of a phone recording a short video',
    source: 'Pexels',
    copy: 'Quick little mini inspiration and creative moments in one minute.',
  },
]

const books = [
  {
    number: '1',
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    note: 'Living in the present moment',
    cover: '/resources/book-power-of-now.jpg',
  },
  {
    number: '2',
    title: 'The Creative Act',
    author: 'Rick Rubin',
    note: 'Creativity as a way of being',
    cover: '/resources/book-creative-act.jpg',
  },
  {
    number: '3',
    title: 'The Artist’s Way',
    author: 'Julia Cameron',
    note: 'Rediscovering creative confidence',
    cover: '/resources/book-artists-way.jpg',
  },
  {
    number: '4',
    title: 'Deep Work',
    author: 'Cal Newport',
    note: 'Focus in a distracted world',
    cover: '/resources/book-deep-work.jpg',
  },
  {
    number: '5',
    title: 'The Untethered Soul',
    author: 'Michael A. Singer',
    note: 'Freedom through awareness',
    cover: '/resources/book-untethered-soul.jpg',
  },
  {
    number: '6',
    title: 'Yoga Sutras of Patanjali',
    author: 'Patanjali',
    note: 'Wisdom for everyday practice',
    cover: '/resources/book-yoga-sutras.jpg',
  },
]

const articles = [
  {
    title: 'Creating vs. Consuming',
    image: '/resources/julia-artwork.jpg',
    icon: 'i-lucide-leaf',
    copy: 'How creativity changes the way we experience life.',
  },
  {
    title: 'Growing Upward, Rooting Inward',
    image: '/resources/doris-artwork.jpg',
    icon: 'i-lucide-sprout',
    copy: 'Reflections on growth, family and inner peace.',
  },
  {
    title: 'Living with AI, Staying Human',
    image: '/resources/jane-art.jpg',
    icon: 'i-lucide-bot',
    copy: 'Thoughts on creativity, education and the future.',
  },
]

const journeyLinks = [
  { label: 'YouTube', detail: 'English Videos and Playlists', icon: 'i-lucide-youtube', href: 'https://www.youtube.com/@XinyiArt-Yoga-Healing' },
  { label: 'Video Channel', detail: 'Chinese Video Updates', icon: 'i-lucide-play-square', href: '#youtube' },
]

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Art Programs', to: '/art-programs' },
  { label: 'Wellness', to: '/wellness' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

const contactItems = [
  { label: 'North York, Ontario, Canada', icon: 'i-lucide-map-pin' },
  { label: '416-567-6538', icon: 'i-lucide-phone' },
  { label: 'xinyiartschool@gmail.com', icon: 'i-lucide-mail' },
  { label: '@XinyiArt-Yoga-Healing', icon: 'i-lucide-youtube' },
]

const introVideoUrl = 'https://www.youtube.com/watch?v=1t98Fw2k988'
const introEmbedUrl = 'https://www.youtube.com/embed/1t98Fw2k988'
const youtubeUrl = 'https://www.youtube.com/@XinyiArt-Yoga-Healing'
const isAssistantOpen = ref(false)
</script>

<template>
  <main
    id="top"
    class="xinyi-resources min-h-screen overflow-hidden bg-[#fdf9f1] text-[#37433b]"
  >
    <section class="relative isolate overflow-hidden bg-[linear-gradient(130deg,#fff7ef_0%,#f4efe1_47%,#e6f2ea_100%)] px-4 pb-16 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10 opacity-80"
        aria-hidden="true"
      >
        <div class="wash wash-peach left-[-9rem] top-[-8rem]" />
        <div class="wash wash-sage right-[-8rem] top-[8rem]" />
        <div class="wash wash-gold bottom-[-9rem] left-1/3" />
      </div>

      <nav
        aria-label="Main Navigation"
        class="mx-auto flex max-w-6xl items-center justify-between rounded-none bg-white/75 px-3 py-3 shadow-sm ring-1 ring-white/70 backdrop-blur md:rounded-[2rem] md:px-5"
      >
        <NuxtLink
          to="/"
          aria-label="XinYi Class Home"
          class="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
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
              class="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#465143] transition hover:bg-[#edf5e9] hover:text-[#6f8b54] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd7a55]"
              :class="item.label === 'Resources' ? 'bg-[#e9f1df] text-[#5f7e49]' : ''"
            >
              <UIcon
                v-if="item.label === 'Resources'"
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
              class="pointer-events-none absolute left-0 top-full z-30 min-w-56 rounded-2xl bg-white/95 p-2 opacity-0 shadow-xl ring-1 ring-[#e4dcc5] transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.label"
                :to="child.to"
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#607a4b] hover:bg-[#f3f7ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd7a55]"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 rounded-full bg-[#eef3e6] px-3 py-2 text-xs font-semibold text-[#5b7049]">
          <NuxtLink
            to="/docs/manual/en/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
          >
            EN
          </NuxtLink>
          <span class="text-[#adbd9c]">|</span>
          <NuxtLink
            to="/docs/manual/zh/getting-started/installation"
            class="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
          >
            中文
          </NuxtLink>
        </div>
      </nav>

      <div class="mx-auto grid max-w-7xl items-center gap-10 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.34em] text-[#bd7a55]">
            Welcome to XinYi Art Studio
          </p>
          <h1 class="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-[#41513a] sm:text-5xl lg:text-6xl">
            A Place for Creativity, Connection & Growth
          </h1>
          <p class="mt-6 max-w-lg text-lg leading-8 text-[#68735e]">
            Get to know our story, our values, and how we create a warm space where art and wellness come together.
          </p>
          <a
            :href="introVideoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d7916e] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#d7916e]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
          >
            <UIcon
              name="i-lucide-play"
              class="size-5"
            />
            Watch Intro Video
          </a>
        </div>

        <div class="relative">
          <div class="absolute -inset-5 -z-10 rounded-[2.5rem] bg-white/50 blur-2xl" />
          <div class="overflow-hidden rounded-[2rem] bg-[#1f1f1f] p-2 shadow-[0_26px_80px_rgba(80,73,54,0.23)] ring-1 ring-white/80">
            <iframe
              :src="introEmbedUrl"
              title="XinYi Class Introduction Video"
              class="aspect-video w-full rounded-[1.55rem]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="student-stories"
      class="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-5xl font-semibold text-[#41513a] sm:text-6xl">
            Stories of Growth
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6c735f]">
            Over the years, we’ve witnessed hundreds of moments of creativity, confidence, and growing. Here are a few stories we’d love to share.
          </p>
        </div>

        <div class="mt-12 grid items-center gap-9 lg:grid-cols-[0.78fr_1.22fr]">
          <div class="space-y-6">
            <div
              v-for="story in studentStories"
              :key="story.name"
              class="grid gap-5 rounded-[1.75rem] bg-white/80 p-6 shadow-[0_16px_50px_rgba(80,73,54,0.12)] ring-1 ring-[#eadfc9] sm:grid-cols-[5.5rem_1fr]"
            >
              <img
                :src="story.image"
                :alt="story.alt"
                class="aspect-square w-full rounded-2xl object-cover shadow-sm ring-1 ring-[#eadfc9]"
                loading="lazy"
                decoding="async"
              >
              <div>
                <p class="text-xs font-black uppercase tracking-[0.25em] text-[#bd7a55]">
                  Student Stories
                </p>
                <h3 class="mt-3 font-serif text-3xl font-semibold text-[#41513a]">
                  {{ story.name }}
                </h3>
                <p class="mt-1 font-serif text-xl italic text-[#7f925f]">
                  {{ story.title }}
                </p>
                <p class="mt-4 text-sm leading-7 text-[#6c735f]">
                  {{ story.copy }}
                </p>
              </div>
            </div>
          </div>

          <div class="relative min-h-[470px]">
            <div class="absolute inset-x-8 top-20 h-64 rounded-full bg-[#e6d6b8]/55 blur-3xl" />
            <figure
              v-for="(photo, index) in storyPhotos"
              :key="photo.label"
              class="polaroid absolute w-[48%] max-w-sm bg-white p-4 shadow-[0_24px_70px_rgba(76,64,44,0.18)] ring-1 ring-black/5"
              :class="index === 0 ? 'left-0 top-8 -rotate-6' : 'right-0 top-0 rotate-6'"
            >
              <img
                :src="photo.image"
                :alt="photo.alt"
                class="aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              >
              <figcaption class="pt-4 text-center font-serif text-3xl font-semibold text-[#9b7151]">
                {{ photo.label }}
              </figcaption>
            </figure>
            <img
              src="/resources/julia-artwork.jpg"
              alt="Julia artwork at XinYi Class"
              class="absolute bottom-0 left-1/2 h-56 w-44 -translate-x-1/2 rounded-3xl object-cover shadow-[0_20px_55px_rgba(76,64,44,0.2)] ring-4 ring-white"
              loading="lazy"
              decoding="async"
            >
            <img
              src="/resources/julia.jpg"
              alt="Julia portrait from the XinYi Class story archive"
              class="absolute bottom-8 right-10 h-32 w-32 rounded-full object-cover shadow-[0_16px_40px_rgba(76,64,44,0.18)] ring-4 ring-white"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>

        <div class="mt-14 rounded-[2rem] bg-[#f4ead8] p-8 shadow-inner ring-1 ring-[#e8d7b8]">
          <p class="text-center text-xs font-black uppercase tracking-[0.28em] text-[#bd7a55]">
            Parents’ Voices
          </p>
          <div class="mt-8 grid gap-6 md:grid-cols-3">
            <article
              v-for="voice in parentVoices"
              :key="voice.name"
              class="rounded-[1.5rem] bg-white/80 p-6 shadow-sm ring-1 ring-white/70"
            >
              <div
                class="mb-4 flex gap-1 text-[#d99c63]"
                aria-label="Five Star Review"
              >
                <UIcon
                  v-for="star in 5"
                  :key="star"
                  name="i-lucide-star"
                  class="size-4 fill-current"
                />
              </div>
              <h3 class="font-serif text-2xl font-semibold text-[#41513a]">
                {{ voice.name }}
              </h3>
              <p class="mt-4 text-sm leading-7 text-[#6c735f]">
                “{{ voice.quote }}”
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#eef3e6] px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-5xl font-semibold text-[#41513a] sm:text-6xl">
            Growing in Body, Mind and Heart
          </h2>
          <p class="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#66745d]">
            Our wellness classes are more than movement — they are moments of connection, healing and renewal.
          </p>
        </div>

        <div class="mt-12 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <img
            src="/resources/jane-art.jpg"
            alt="Jane Liu artwork from the XinYi Class resource archive"
            class="h-full min-h-[420px] rounded-[2rem] object-cover shadow-[0_22px_70px_rgba(72,86,55,0.18)] ring-1 ring-white/80"
            loading="lazy"
            decoding="async"
          >
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <article class="rounded-[1.75rem] bg-white/78 p-7 shadow-sm ring-1 ring-[#dfe8d4]">
              <p class="text-xs font-black uppercase tracking-[0.22em] text-[#7f925f]">
                Words from Our Community
              </p>
              <p class="mt-6 font-serif text-3xl leading-tight text-[#41513a]">
                “Your classes helped me reconnect with my body and mind. I feel calmer, stronger and more alive.”
              </p>
            </article>
            <article class="rounded-[1.75rem] bg-white/78 p-7 shadow-sm ring-1 ring-[#dfe8d4]">
              <p class="text-xs font-black uppercase tracking-[0.22em] text-[#7f925f]">
                Art by Jane
              </p>
              <div class="mt-5 grid gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center lg:grid-cols-[0.9fr_1.1fr]">
                <img
                  src="/resources/jane-art.jpg"
                  alt="Jane Liu artwork with an encouraging message"
                  class="aspect-[4/5] w-full rounded-2xl object-cover shadow-sm ring-1 ring-[#dfe8d4]"
                  loading="lazy"
                  decoding="async"
                >
                <p class="text-sm leading-7 text-[#6c735f]">
                  May your journey ahead be full of confidence, courage and endless possibilities.
                </p>
              </div>
            </article>
          </div>
        </div>

        <p class="mx-auto mt-10 max-w-3xl text-center text-base leading-7 text-[#66745d]">
          Whether you’re looking for strength, peace, or simply a moment for yourself, you’re welcome here.
        </p>
      </div>
    </section>

    <section
      id="youtube"
      class="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <p class="text-xs font-black uppercase tracking-[0.28em] text-[#bd7a55]">
            Explore Our YouTube Playlists
          </p>
          <h2 class="mt-4 font-serif text-5xl font-semibold text-[#41513a] sm:text-6xl">
            Short Practices, Deep Learning
          </h2>
          <p class="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#6c735f]">
            Short practices, deep learning and mindful moments for everyday life.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="playlist in playlists"
            :key="playlist.title"
            class="overflow-hidden rounded-[1.75rem] bg-white/82 shadow-[0_16px_45px_rgba(80,73,54,0.1)] ring-1 ring-[#eadfc9]"
          >
            <img
              :src="playlist.image"
              :alt="playlist.alt"
              class="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            >
            <div class="p-7 pt-5">
              <div class="flex items-center justify-between gap-4">
                <div class="flex size-14 items-center justify-center rounded-full bg-[#f5ead8] text-[#bd7a55]">
                  <UIcon
                    :name="playlist.icon"
                    class="size-7"
                  />
                </div>
                <p class="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#9aa78c]">
                  Photo: {{ playlist.source }}
                </p>
              </div>
              <h3 class="mt-6 font-serif text-3xl font-semibold text-[#41513a]">
                {{ playlist.title }}
              </h3>
              <p class="mt-3 min-h-16 text-sm leading-7 text-[#6c735f]">
                {{ playlist.copy }}
              </p>
              <a
                :href="youtubeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#bd7a55] hover:text-[#8a603f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
              >
                Explore Playlist
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        </div>

        <div class="mt-12 grid items-center gap-6 rounded-[2rem] bg-[#e6eddc] p-8 ring-1 ring-[#d5e0ca] md:grid-cols-[1fr_auto]">
          <div>
            <h3 class="font-serif text-4xl font-semibold text-[#41513a]">
              Explore 300+ Free Videos on Our YouTube Channel
            </h3>
            <p class="mt-3 text-sm leading-6 text-[#66745d]">
              New videos are added every week. Subscribe and join our growing community of learners and creators!
            </p>
          </div>
          <a
            :href="youtubeUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-3 rounded-full bg-[#d7916e] px-7 py-3 text-sm font-black text-white shadow-lg shadow-[#d7916e]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
          >
            <UIcon
              name="i-lucide-youtube"
              class="size-5"
            />
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </section>

    <section
      id="reading"
      class="bg-[#f4ead8] px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.28em] text-[#bd7a55]">
            Reading List
          </p>
          <h2 class="mt-4 font-serif text-5xl font-semibold text-[#41513a]">
            Books That Have Inspired Our Journey
          </h2>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <article
            v-for="book in books"
            :key="book.title"
            class="rounded-[1.5rem] bg-white/82 p-4 shadow-[0_14px_38px_rgba(80,73,54,0.12)] ring-1 ring-white/70"
          >
            <img
              :src="book.cover"
              :alt="`${book.title} book cover`"
              class="aspect-[3/4] w-full rounded-xl object-cover shadow-inner"
              loading="lazy"
              decoding="async"
            >
            <p class="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#bd7a55]">
              {{ book.number }}. {{ book.title }}
            </p>
            <p class="mt-2 text-sm leading-6 text-[#6c735f]">
              {{ book.note }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="articles"
      class="px-4 py-20 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div>
          <p class="text-xs font-black uppercase tracking-[0.28em] text-[#bd7a55]">
            Articles & Reflections
          </p>
          <h2 class="mt-4 font-serif text-5xl font-semibold text-[#41513a]">
            Thoughts, Reflections and Inspirations
          </h2>
          <p class="mt-4 max-w-2xl text-base leading-7 text-[#6c735f]">
            Thoughts, reflections and inspirations on creativity, life and growth.
          </p>
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <article
            v-for="article in articles"
            :key="article.title"
            class="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_50px_rgba(80,73,54,0.12)] ring-1 ring-[#eadfc9]"
          >
            <img
              :src="article.image"
              :alt="`${article.title} article image`"
              class="aspect-[5/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            >
            <div class="p-7">
              <div class="mb-5 flex size-12 items-center justify-center rounded-full bg-[#eef3e6] text-[#7f925f]">
                <UIcon
                  :name="article.icon"
                  class="size-6"
                />
              </div>
              <h3 class="font-serif text-2xl font-semibold text-[#41513a]">
                {{ article.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-[#6c735f]">
                {{ article.copy }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-[#eef3e6] px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl text-center">
        <h2 class="font-serif text-5xl font-semibold text-[#41513a]">
          Continue the Journey
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#66745d]">
          Stay connected through our different creative spaces.
        </p>

        <div class="mx-auto mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
          <a
            v-for="link in journeyLinks"
            :key="link.label"
            :href="link.href"
            class="rounded-[1.5rem] bg-white/80 p-6 text-left shadow-sm ring-1 ring-[#dfe8d4] transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd7a55]"
          >
            <UIcon
              :name="link.icon"
              class="size-8 text-[#bd7a55]"
            />
            <h3 class="mt-4 font-serif text-2xl font-semibold text-[#41513a]">
              {{ link.label }}
            </h3>
            <p class="mt-2 text-sm text-[#66745d]">
              {{ link.detail }}
            </p>
          </a>
        </div>
      </div>
    </section>

    <footer
      id="contact"
      class="relative overflow-hidden bg-[#3f5139] px-4 py-12 text-[#edf3e6] sm:px-6 lg:px-8"
    >
      <div class="relative mx-auto grid max-w-6xl gap-10 border-b border-white/15 pb-10 md:grid-cols-[1.1fr_0.8fr_1fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img
              src="/home/logo.png"
              alt=""
              class="h-16 w-auto rounded-2xl bg-white/90 object-contain p-1"
              loading="lazy"
              decoding="async"
            >
            <div>
              <h2 class="font-serif text-2xl font-semibold text-white">
                XinYi Class
              </h2>
              <p class="mt-1 text-sm leading-6 text-[#d5dfcb]">
                Inspiring creativity, connection, and well-being since 2016
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-white">
            Explore
          </h3>
          <ul class="mt-5 space-y-2 text-sm">
            <li
              v-for="link in footerLinks"
              :key="link.label"
              class="border-b border-white/10 pb-2 last:border-b-0"
            >
              <NuxtLink
                :to="link.to"
                class="transition hover:text-[#f0c9a7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c9a7]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-white">
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
                class="size-4 shrink-0 text-[#f0c9a7]"
              />
              <span>{{ item.label }}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-serif text-xl font-semibold text-white">
            Follow Us
          </h3>
          <div class="mt-5 flex gap-3">
            <a
              v-for="link in journeyLinks.slice(0, 3)"
              :key="link.label"
              :href="link.href"
              :aria-label="link.label"
              class="flex size-9 items-center justify-center rounded-full bg-white/10 text-[#f0c9a7] ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0c9a7]"
            >
              <UIcon
                :name="link.icon"
                class="size-5"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-7 text-sm text-[#d5dfcb] md:flex-row">
        <p>© 2026 XinYi Class.</p>
        <p>Thank you for being part of our journey.</p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.xinyi-resources {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.xinyi-resources :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.wash {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(30px);
}

.wash-peach {
  background: rgba(239, 192, 151, 0.5);
}

.wash-sage {
  background: rgba(190, 213, 172, 0.58);
}

.wash-gold {
  background: rgba(235, 214, 158, 0.5);
}

.polaroid {
  border-radius: 1.2rem;
}
</style>
