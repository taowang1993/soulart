<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Class Schedule | XinYi Class',
  description: 'Find the right XinYi Class art, portfolio, adult, private, and wellness program time.',
  ogTitle: 'Class Schedule | XinYi Class',
  ogDescription: 'Find the right class for every age and every stage.',
})

const navItems = [
  { label: 'Home', to: '/', icon: 'i-lucide-home' },
  {
    label: 'Art Programs',
    to: '/art-programs',
    icon: 'i-lucide-palette',
    children: [{ label: 'Student Gallery', to: '/art-programs/student-gallery' }],
  },
  { label: 'Wellness', to: '/wellness', icon: 'i-lucide-leaf' },
  { label: 'Schedules', to: '/schedules', icon: 'i-lucide-calendar-days' },
  { label: 'Resources', to: '/resources', icon: 'i-lucide-book-open' },
  { label: 'About', to: '/about', icon: 'i-lucide-heart' },
  { label: 'Contact', to: '/contact', icon: 'i-lucide-mail' },
]

const scheduleGroups = [
  {
    title: 'Traditional Art Classes',
    icon: 'i-lucide-palette',
    headers: ['Day', 'Time', 'Class', 'Age'],
    rows: [
      {
        day: 'Saturday',
        time: '9:30 - 10:30',
        name: 'Kids Art Fundamental Level 2',
        description: 'Build strong art basics through fun and engaging projects.',
        age: '7 - 9',
      },
      {
        day: 'Saturday',
        time: '13:00 - 14:30',
        name: 'Painting & CG Digital',
        description: 'Explore digital art and creative painting techniques.',
        age: '13 - 16',
      },
      {
        day: 'Saturday',
        time: '15:00 - 16:30',
        name: 'Creative Sketch & Color',
        description: 'Develop observation and expression with sketch and color.',
        age: '9 - 12',
      },
      {
        day: 'Sunday',
        time: '9:45 - 10:45',
        name: 'Kids Art Fundamental Level 1',
        description: 'Art exploration for young beginners.',
        age: '4 - 7',
      },
      {
        day: 'Sunday',
        time: '11:00 - 12:30',
        name: 'Creative Sketch & Color',
        description: 'Develop observation and expression with sketch and color.',
        age: '9 - 12',
      },
      {
        day: 'Sunday',
        time: '13:00 - 14:30',
        name: 'Sketch & Painting',
        description: 'Learn sketching skills and painting techniques.',
        age: '13 - 16',
      },
      {
        day: 'Sunday',
        time: '15:10 - 16:40',
        name: 'Acrylic & Watercolor Painting',
        description: 'Express your creativity with acrylic and watercolor.',
        age: '12 - 15',
      },
      {
        day: 'Tuesday',
        time: '18:40 - 20:10',
        name: 'Intermediate Sketch & Watercolor',
        description: 'Enhance your sketching and watercolor techniques.',
        age: '12 - 15',
      },
      {
        day: 'Friday',
        time: '16:00 - 19:30',
        name: 'Individual Tutor & Craft',
        description: 'Personalized guidance for art or craft projects.',
        age: 'All Ages',
      },
    ],
  },
  {
    title: 'Portfolio Preparation',
    icon: 'i-lucide-brush',
    headers: ['Day', 'Time', 'Class', 'Age'],
    rows: [
      {
        day: 'Saturday',
        time: '16:30 - 18:30',
        name: 'High-School Portfolio',
        description: 'Build a strong portfolio for art high school applications.',
        age: '13 - 15',
      },
      {
        day: 'Saturday',
        time: '18:30 - 20:30',
        name: 'University Portfolio',
        description: 'Portfolio development for university applications.',
        age: '15 - 18',
      },
    ],
  },
  {
    title: 'Adult Art',
    icon: 'i-lucide-flower-2',
    headers: ['Day', 'Time', 'Class', 'Age'],
    rows: [
      {
        day: 'Wednesday',
        time: '18:00 - 19:00',
        name: 'Mixed Media Art (Adults)',
        description: 'Explore watercolor, acrylic, collage, sketching and creative journaling.',
        age: 'Adults',
      },
    ],
  },
  {
    title: 'Private Art Sessions',
    icon: 'i-lucide-sparkles',
    headers: ['Day', 'Time', 'Class', 'Age'],
    rows: [
      {
        day: 'By Appointment',
        time: 'Flexible',
        name: 'Private Art Session',
        description: 'Customized lessons tailored to your goals and interests.',
        age: 'Children • Teens • Adults',
      },
    ],
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
  { label: 'Instagram', icon: 'i-lucide-instagram' },
  { label: 'Facebook', icon: 'i-lucide-facebook' },
  { label: 'YouTube', icon: 'i-lucide-youtube' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main
    id="top"
    class="schedule-page min-h-screen overflow-hidden bg-[#fffdf8] text-[#15166f]"
  >
    <section class="relative isolate overflow-hidden bg-[#fffdf8] px-4 pb-12 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div class="schedule-wash bg-[#f4c0d1]/45 left-[-9rem] top-[-8rem]" />
        <div class="schedule-wash bg-[#cddff7]/45 right-[-10rem] top-24" />
        <div class="schedule-wash bg-[#f5dfb7]/45 bottom-[-8rem] left-1/3" />
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
          <div
            v-for="item in navItems"
            :key="item.label"
            class="group relative"
          >
            <NuxtLink
              :to="item.to"
              class="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-[#15166f] transition hover:bg-[#eadcff] hover:text-[#5b3d91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f82d1]"
              :class="item.label === 'Schedules' ? 'bg-[#eadcff] text-[#4c3284]' : ''"
            >
              <UIcon
                v-if="item.label === 'Schedules'"
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
                class="flex rounded-xl px-4 py-3 text-sm font-bold text-[#4c3284] hover:bg-[#f7eefb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f82d1]"
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

      <div class="relative mx-auto max-w-6xl pb-6 pt-12 text-center sm:pt-14">
        <img
          src="/schedule/art-supplies.png"
          alt="Watercolor art supplies"
          class="pointer-events-none absolute -left-14 bottom-0 hidden w-72 mix-blend-multiply opacity-90 md:block lg:w-[23rem]"
          loading="eager"
          decoding="async"
        >
        <img
          src="/schedule/plant-jar.png"
          alt="Watercolor plant in a glass jar"
          class="pointer-events-none absolute -right-8 bottom-0 hidden w-56 mix-blend-multiply opacity-85 md:block lg:w-72"
          loading="eager"
          decoding="async"
        >

        <UIcon
          name="i-lucide-calendar-days"
          class="mx-auto mb-3 size-12 text-[#9f82d1]"
        />
        <h1 class="font-serif text-5xl font-semibold leading-tight text-[#15166f] sm:text-6xl">
          Class Schedule
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-xl leading-8 text-[#272878]">
          Find the right class for every age and every stage.
        </p>
        <p class="mt-1.5 text-xl font-semibold text-[#4f4c9d]">
          Creativity grows here.
        </p>
        <div class="schedule-divider mx-auto mt-6" />
      </div>
    </section>

    <section class="relative px-4 pb-4 pt-2 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl space-y-5">
        <article
          v-for="group in scheduleGroups"
          :key="group.title"
          class="schedule-table-card"
        >
          <div class="mb-3 flex items-center gap-4">
            <div class="flex size-12 items-center justify-center rounded-full bg-[#ece4ff] text-[#15166f]">
              <UIcon
                :name="group.icon"
                class="size-6"
              />
            </div>
            <h2 class="font-serif text-3xl font-semibold text-[#15166f]">
              {{ group.title }}
            </h2>
          </div>

          <div class="overflow-hidden rounded-xl ring-1 ring-[#d9d4ea]">
            <div class="overflow-x-auto">
              <table class="schedule-table w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr class="bg-[#a386d8] text-base font-bold text-white">
                    <th
                      v-for="header in group.headers"
                      :key="header"
                      scope="col"
                      class="border-r border-white/35 px-5 py-2 text-center last:border-r-0 first:w-[8.5rem] second:w-[11rem] last:w-[10rem] sm:px-7"
                    >
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#e7e1ef] text-[#15166f]">
                  <tr
                    v-for="row in group.rows"
                    :key="`${group.title}-${row.day}-${row.time}-${row.name}`"
                    class="bg-white transition hover:bg-[#faf8ff]"
                  >
                    <td class="border-r border-[#e7e1ef] px-5 py-2 text-center text-sm font-bold text-[#15166f] sm:px-7">
                      {{ row.day }}
                    </td>
                    <td class="border-r border-[#e7e1ef] px-5 py-2 text-center text-sm font-bold text-[#15166f] sm:px-7">
                      {{ row.time }}
                    </td>
                    <td class="border-r border-[#e7e1ef] px-5 py-2 sm:px-7">
                      <p class="text-base font-bold text-[#15166f]">
                        {{ row.name }}
                      </p>
                      <p class="text-sm leading-5 text-[#30326f]">
                        {{ row.description }}
                      </p>
                    </td>
                    <td class="px-5 py-2 text-center text-sm font-bold text-[#15166f] sm:px-7">
                      {{ row.age }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div class="text-center">
          <p class="text-base font-bold text-[#15166f]">
            <UIcon
              name="i-lucide-sprout"
              class="mb-1 mr-2 inline size-5 text-[#7a9c5d]"
            />
            Can't find a suitable time?
          </p>
          <p class="mt-1 text-base leading-7 text-[#30326f]">
            Contact us. We may be able to arrange another class or private session for you.
          </p>
        </div>
      </div>
    </section>

    <section class="px-4 py-3 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl items-center gap-5 overflow-hidden rounded-xl bg-[#f0f5ec] p-3 ring-1 ring-[#dce8d7] md:grid-cols-[0.95fr_1.05fr] md:p-4">
        <div class="text-center md:text-left">
          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-[#e1ecd8] text-[#56823f] shadow-sm ring-1 ring-[#d8e4d2] md:mx-0">
            <UIcon
              name="i-lucide-leaf"
              class="size-6"
            />
          </div>
          <h2 class="mt-2 font-serif text-2xl font-semibold text-[#4e713c] md:whitespace-nowrap">
            Interested in Wellness Programs?
          </h2>
          <p class="mt-2 max-w-xl text-base leading-6 text-[#242347]">
            Discover yoga, meditation, seasonal retreats, and our Wednesday Silver Club.
          </p>
          <NuxtLink
            to="/wellness"
            class="mt-3 inline-flex items-center gap-3 rounded-lg bg-[#6b9b55] px-7 py-2 text-base font-bold text-white shadow-lg shadow-[#6b9b55]/20 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b9b55]"
          >
            Explore Wellness
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <img
          src="/schedule/wellness-illustration.png"
          alt="Watercolor wellness plants and stones"
          class="mx-auto max-h-32 w-full object-contain mix-blend-multiply"
          loading="lazy"
          decoding="async"
        >
      </div>
    </section>

    <footer
      id="contact"
      class="relative overflow-hidden bg-[#efe7f6] px-4 py-8 text-[#5a4a72] sm:px-6 lg:px-8"
    >
      <div
        class="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#cdb8e6]/40 blur-3xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto grid max-w-6xl gap-8 border-b border-[#dacbe6] pb-8 md:grid-cols-[1.05fr_0.75fr_1.05fr_0.75fr]">
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
          <button
            type="button"
            class="mt-5 rounded-2xl bg-white/72 p-3 text-left text-sm text-[#6d5d7d] shadow-sm ring-1 ring-[#dacbe6] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
            @click="isAssistantOpen = true"
          >
            <span class="font-semibold text-[#594178]">Talk with AI Assistant</span>
            <span class="mt-2 block leading-6">
              Ask about classes, schedules, age groups, and upcoming events.
            </span>
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
            class="mt-4 h-20 w-20 rounded-md bg-white p-1 shadow-sm ring-1 ring-[#d6c5e2]"
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
              href="#contact"
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

      <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 pt-5 text-sm text-[#7a6b8b] md:flex-row">
        <p>
          © 2026 XinYi Class.
        </p>
        <p>
          Art <span class="mx-3 text-[#df838d]">♥</span> Wellness <span class="mx-3 text-[#df838d]">♥</span> Community
        </p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.schedule-page {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.schedule-page :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.schedule-wash {
  position: absolute;
  width: 23rem;
  height: 23rem;
  border-radius: 9999px;
  filter: blur(30px);
}

.schedule-divider {
  position: relative;
  width: min(18rem, 70vw);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(151, 124, 177, 0.45), transparent);
}

.schedule-divider::after {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 1.25rem;
  height: 1.25rem;
  content: "";
  background: radial-gradient(circle at 50% 50%, #c8a9d8 0 28%, transparent 29%), radial-gradient(circle at 20% 30%, #e59aa5 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, #e59aa5 0 18%, transparent 19%);
  transform: translate(-50%, -50%);
}
</style>
