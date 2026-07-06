<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'About XinYi | XinYi Class',
  description: 'Meet XinYi, artist, educator, wellness facilitator, and founder of XinYi Class in Toronto.',
  ogTitle: 'About XinYi | XinYi Class',
  ogDescription: 'A journey of art, wellness, AI, and lifelong learning.',
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

const socialLinks = [
  { label: 'YouTube', icon: 'i-lucide-youtube', href: 'https://www.youtube.com/@XinyiArt-Yoga-Healing' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main
    id="top"
    class="about-page min-h-screen overflow-hidden bg-[#fff8ef] text-[#4a3d63]"
  >
    <section class="relative isolate overflow-hidden bg-[linear-gradient(135deg,#fff7f3_0%,#f7efff_46%,#eef6ff_100%)] px-4 pb-14 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div class="about-wash bg-[#f3b6cf]/55 left-[-10rem] top-[-8rem]" />
        <div class="about-wash bg-[#f8d49b]/45 right-[-8rem] top-[-5rem]" />
        <div class="about-wash bg-[#bcd6f5]/50 bottom-[-10rem] left-1/3" />
      </div>

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
              :class="item.label === 'About' ? 'bg-[#f1e4ff] text-[#6d4d95]' : ''"
            >
              <UIcon
                v-if="item.label === 'About'"
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

        <NuxtLink
          to="/contact"
          class="rounded-full bg-[#d98792] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#d98792]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
        >
          Contact
        </NuxtLink>
      </nav>

      <div class="mx-auto grid max-w-6xl items-center gap-8 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
        <div class="text-center lg:text-left">
          <h1 class="font-serif text-5xl font-semibold leading-tight text-[#514166] sm:text-6xl lg:text-7xl">
            About XinYi
          </h1>
          <p class="mt-5 text-sm font-bold uppercase tracking-[0.32em] text-[#514166]">
            Artist • Educator • Wellness Facilitator
          </p>
          <div class="about-divider mx-auto mt-5 lg:mx-0" />
          <p class="mt-7 max-w-xl text-xl leading-9 text-[#5f526c] lg:max-w-md">
            Helping children and adults grow through creativity, well-being, and meaningful human connection.
          </p>
        </div>

        <div class="relative mx-auto w-full max-w-[38rem]">
          <div class="absolute -left-12 top-6 size-52 rounded-full bg-[#f9c9d5]/50 blur-2xl" />
          <div class="absolute -right-8 bottom-8 size-60 rounded-full bg-[#bfd9f3]/50 blur-2xl" />
          <img
            src="/about/hero.png"
            alt="XinYi painting beside an easel"
            class="about-hero-portrait relative w-full object-contain mix-blend-multiply drop-shadow-[0_28px_55px_rgba(84,63,105,0.16)]"
            loading="eager"
            decoding="async"
          >
        </div>
      </div>

      <div class="about-quote-card mx-auto max-w-4xl rounded-[2rem] bg-white/78 px-8 py-7 text-center shadow-[0_24px_70px_rgba(84,63,105,0.14)] ring-1 ring-white/80 backdrop-blur">
        <p class="font-serif text-3xl italic leading-snug text-[#8b6aa3]">
          “Creativity changed my life. Now I help others discover theirs.”
        </p>
      </div>
    </section>

    <section
      id="journey"
      class="bg-[#fff8ef] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div class="mx-auto max-w-6xl">
        <div class="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.15)] ring-1 ring-[#efe1db]">
            <img
              src="/about/xinyi-toronto.png"
              alt="XinYi in Toronto"
              class="aspect-[4/3] w-full rounded-[1.5rem] object-cover object-center"
              loading="lazy"
              decoding="async"
            >
          </div>

          <div>
            <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#d98792]">
              My Journey
            </p>
            <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-[#514166] sm:text-5xl">
              From Lecturer to Lifelong Learner
            </h2>
            <div class="about-divider mt-6" />
            <p class="mt-7 text-lg leading-8 text-[#6f6279]">
              For many years, I worked in higher education and followed a traditional professional path. On the surface, everything looked successful and stable.
            </p>
            <p class="mt-4 text-lg leading-8 text-[#6f6279]">
              However, life invited me to slow down and listen — not to what the world expected of me, but to what my heart was quietly asking for.
            </p>
          </div>
        </div>

        <div class="mt-14 grid items-center gap-8 lg:grid-cols-[0.9fr_1fr_0.85fr]">
          <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.14)] ring-1 ring-[#efe1db]">
            <img
              src="/about/art-awakening.jpg"
              alt="XinYi painting in her studio"
              class="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              loading="lazy"
              decoding="async"
            >
          </div>

          <div class="rounded-[2rem] bg-[#f4eafb] p-8 shadow-[0_18px_55px_rgba(84,63,105,0.12)] ring-1 ring-white/80 lg:p-10">
            <p class="text-sm font-bold uppercase tracking-[0.32em] text-[#8b6aa3]">
              A Turning Point
            </p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-[#514166]">
              Life changed.
            </h3>
            <p class="mt-6 text-lg leading-8 text-[#6f6279]">
              And with those changes came a realization: <strong>Success alone does not create fulfillment.</strong>
            </p>
            <div class="mt-7 grid gap-3 text-base font-semibold text-[#604a76]">
              <p class="rounded-2xl bg-white/70 p-4">
                People need creativity.
              </p>
              <p class="rounded-2xl bg-white/70 p-4">
                People need well-being.
              </p>
              <p class="rounded-2xl bg-white/70 p-4">
                People need connection.
              </p>
            </div>
          </div>

          <div class="grid gap-5">
            <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_18px_50px_rgba(84,63,105,0.12)] ring-1 ring-[#efe1db]">
              <img
                src="/about/lake-meditation.jpg"
                alt="XinYi meditating by the water"
                class="aspect-[4/3] w-full rounded-[1.5rem] object-cover object-center"
                loading="lazy"
                decoding="async"
              >
            </div>
            <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_18px_50px_rgba(84,63,105,0.12)] ring-1 ring-[#efe1db]">
              <img
                src="/about/lake-portrait.jpg"
                alt="XinYi seated by the water"
                class="aspect-[4/5] w-full rounded-[1.5rem] bg-[#f8f4ef] object-contain object-center"
                loading="lazy"
                decoding="async"
              >
            </div>
          </div>
        </div>

        <div class="mt-14 grid items-center gap-10 lg:grid-cols-[0.88fr_1.05fr_0.82fr]">
          <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.15)] ring-1 ring-[#efe1db]">
            <img
              src="/about/watercolor-cover.jpg"
              alt="Watercolor artwork from XinYi Class"
              class="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
              loading="lazy"
              decoding="async"
            >
          </div>

          <div>
            <h2 class="font-serif text-4xl font-semibold leading-tight text-[#514166] sm:text-5xl">
              Art Taught Me to See. Yoga Taught Me to Listen.
            </h2>
            <div class="about-divider mt-6" />
            <p class="mt-7 text-lg leading-8 text-[#6f6279]">
              I did not find art. Art found me.
            </p>
            <p class="mt-4 text-lg leading-8 text-[#6f6279]">
              I did not choose yoga. Yoga arrived when I needed it most.
            </p>
            <p class="mt-4 text-lg leading-8 text-[#6f6279]">
              Over time, both became teachers. They taught me that growth is not about becoming someone else. It is about returning to who we truly are.
            </p>
          </div>

          <div class="rounded-[2rem] bg-white/80 p-6 shadow-[0_20px_60px_rgba(84,63,105,0.12)] ring-1 ring-white/80">
            <img
              src="/about/meditation.png"
              alt="Meditation and mindfulness illustration"
              class="mx-auto aspect-square w-full max-w-[18rem] rounded-[1.5rem] object-contain object-center"
              loading="lazy"
              decoding="async"
            >
            <p class="mt-5 font-serif text-2xl italic leading-snug text-[#8b6aa3]">
              Art opens our eyes to beauty and possibility. Yoga brings us home to presence and peace. Together, they create a path of balance, healing and authentic living.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[linear-gradient(180deg,#fff8ef_0%,#f5effb_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.82fr_1fr_0.82fr]">
        <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.15)] ring-1 ring-white/80">
          <img
            src="/about/student-photo.png"
            alt="XinYi with a student"
            class="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div>
          <h2 class="font-serif text-4xl font-semibold leading-tight text-[#514166] sm:text-5xl">
            XinYi Class Was Born
          </h2>
          <div class="about-divider mt-6" />
          <p class="mt-7 text-lg leading-8 text-[#6f6279]">
            In 2016, I founded XinYi Class in Toronto. It began as an art school. Over time, it became something more.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#6f6279]">
            A place where children discover creativity, adults reconnect with themselves, and people grow through art, learning, and well-being.
          </p>

          <div class="mt-8 rounded-[2rem] bg-white/82 p-7 shadow-[0_18px_50px_rgba(84,63,105,0.1)] ring-1 ring-white/80">
            <h3 class="font-serif text-3xl font-semibold text-[#8b6aa3]">
              The Heart of My Teaching
            </h3>
            <p class="mt-4 leading-8 text-[#6f6279]">
              Art teaches us to observe. Yoga teaches us to listen. Both teach us how to live.
            </p>
            <p class="mt-3 leading-8 text-[#6f6279]">
              In my classroom, I help children develop creativity, curiosity, confidence, and compassion. I hope each student discovers joy, presence, and the courage to keep learning for life itself.
            </p>
          </div>
        </div>

        <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.15)] ring-1 ring-white/80">
          <img
            src="/about/outdoor-activities.png"
            alt="Outdoor group activity at XinYi Class"
            class="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-[#f4eafb] px-4 py-16 sm:px-6 lg:px-8">
      <div
        class="absolute right-[-7rem] top-[-7rem] size-72 rounded-full bg-[#f7c4d2]/45 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div class="about-image-card overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_24px_70px_rgba(84,63,105,0.15)] ring-1 ring-white/80">
          <img
            src="/about/ai-creativity.png"
            alt="Student drawing with AI as a creative learning tool"
            class="aspect-[39/28] w-full rounded-[1.5rem] object-cover object-center"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div>
          <h2 class="font-serif text-4xl font-semibold leading-tight text-[#514166] sm:text-5xl">
            In the Age of AI, Human Creativity Matters More Than Ever.
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#6f6279]">
            Artificial intelligence can generate images, write stories, and answer questions in seconds.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#6f6279]">
            Knowledge is becoming easier to access. But creativity is becoming more valuable.
          </p>
          <p class="mt-4 text-lg leading-8 text-[#6f6279]">
            Creativity is not only about making art. It is the ability to observe deeply, to ask meaningful questions, to imagine new possibilities, to explore without knowing the answer, and to create something that has never existed before.
          </p>
          <p class="mt-6 rounded-[2rem] bg-white/72 p-6 font-serif text-2xl italic leading-snug text-[#8b6aa3] shadow-sm ring-1 ring-white/80">
            It belongs to those who can create.
          </p>
        </div>
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
                XinYi Art School · Children&apos;s Art Classes in Toronto · XinYi Yoga · Gentle Yoga &amp; Meditation in Toronto
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
        <p>
          © 2026 XinYi Class.
        </p>
        <p>
          Art <span class="mx-3 text-[#df838d]">♥</span> Yoga Wellness <span class="mx-3 text-[#df838d]">♥</span> Community
        </p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.about-page {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.about-page :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.about-wash {
  position: absolute;
  width: 23rem;
  height: 23rem;
  border-radius: 9999px;
  filter: blur(30px);
}

.about-hero-portrait {
  max-height: 42rem;
}

.about-quote-card {
  transform: translateY(2.5rem);
}

.about-divider {
  position: relative;
  width: min(18rem, 70vw);
  height: 1px;
  background: linear-gradient(90deg, rgba(217, 135, 146, 0.5), rgba(139, 106, 163, 0.2), transparent);
}

.about-divider::after {
  position: absolute;
  inset: 50% auto auto 0;
  width: 1.1rem;
  height: 1.1rem;
  content: "";
  background: radial-gradient(circle at 50% 50%, #d98792 0 30%, transparent 31%), radial-gradient(circle at 22% 35%, #8b6aa3 0 18%, transparent 19%), radial-gradient(circle at 78% 35%, #8b6aa3 0 18%, transparent 19%);
  transform: translateY(-50%);
}
</style>
