<script setup lang="ts">
definePageMeta({
  header: false,
  footer: false,
})

useSeoMeta({
  title: 'Contact | Xinyi Class',
  description: 'Contact Xinyi Class in North York for art classes, wellness programs, private sessions, and studio questions.',
  ogTitle: 'Contact | Xinyi Class',
  ogDescription: 'Let’s create something beautiful together at Xinyi Class.',
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

const contactItems = [
  { label: 'Unit 704', detail: '105 Gordon Baker Rd\nNorth York, ON M2H 3P8', icon: 'i-lucide-map-pin' },
  { label: '416-567-6538', detail: 'Call or text us', icon: 'i-lucide-phone' },
  { label: 'WeChat: Xinyiarttoronto', detail: 'Message us on WeChat', icon: 'i-lucide-message-circle' },
  { label: 'xinyiartschool@gmail.com', detail: 'Email us anytime', icon: 'i-lucide-mail' },
  { label: '@XinyiArt-Yoga-Healing', detail: 'Follow us on YouTube', icon: 'i-lucide-youtube' },
]

const interestOptions = [
  'Art Classes',
  'Wellness Programs',
  'Private Sessions',
  'Portfolio Preparation',
  'Workshops or Retreats',
]

const studioFeatures = [
  { label: 'North York, Ontario', icon: 'i-lucide-map-pin' },
  { label: 'Parking available', icon: 'i-lucide-car-front' },
  { label: 'Near HW404 & Finch', icon: 'i-lucide-route' },
  { label: 'Wheelchair accessible', icon: 'i-lucide-accessibility' },
]

const isAssistantOpen = ref(false)
</script>

<template>
  <main
    id="top"
    class="contact-page min-h-screen overflow-hidden bg-[#fff8fb] text-[#15166f]"
  >
    <section class="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fff9fb_0%,#f8f2ff_100%)] px-4 pb-10 pt-5 sm:px-6 lg:px-8">
      <div
        class="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div class="contact-wash left-[-10rem] top-[-8rem] bg-[#f4bfd5]/45" />
        <div class="contact-wash right-[-9rem] top-16 bg-[#d8cff5]/55" />
        <div class="contact-wash bottom-[-10rem] left-1/3 bg-[#f7ddb9]/45" />
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
            class="flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold text-[#15166f] transition hover:bg-[#eadcff] hover:text-[#5b3d91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f82d1]"
            :class="item.label === 'Contact' ? 'bg-[#eadcff] text-[#4c3284]' : ''"
          >
            <UIcon
              v-if="item.label === 'Contact'"
              :name="item.icon"
              class="size-4"
            />
            {{ item.label }}
          </NuxtLink>
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

      <div class="relative mx-auto max-w-6xl pb-2 pt-10 text-center sm:pt-12 lg:min-h-[27rem]">
        <img
          src="/contact/hero-leaves.png"
          alt="Watercolor leaves"
          class="pointer-events-none absolute -left-24 top-10 z-0 hidden w-[22rem] opacity-85 md:block lg:-left-36 lg:w-[27rem]"
          loading="eager"
          decoding="async"
        >
        <img
          src="/contact/hero-art.png"
          alt="Watercolor brushes and flowers"
          class="pointer-events-none absolute -right-28 top-8 z-0 hidden w-[23rem] opacity-80 md:block lg:-right-52 lg:w-[30rem]"
          loading="eager"
          decoding="async"
        >

        <p class="relative z-10 text-sm font-bold uppercase tracking-[0.38em] text-[#9f82bd]">
          Contact Us
        </p>
        <h1 class="relative z-10 mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-[#15166f] sm:text-6xl lg:text-7xl">
          Let’s Create Something
          <span class="block text-[#6f5aa8]">Beautiful Together</span>
        </h1>
        <p class="relative z-10 mx-auto mt-6 max-w-2xl text-xl leading-8 text-[#454485]">
          Whether you’re looking for an art class, yoga practice, or simply have a question, I’d love to hear from you.
        </p>
        <div class="contact-divider relative z-10 mx-auto mt-7" />
      </div>
    </section>

    <section class="relative px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <article class="rounded-[2rem] bg-white p-5 shadow-[0_22px_70px_rgba(80,62,120,0.13)] ring-1 ring-[#eaddec] sm:p-6">
          <div class="flex items-center gap-4">
            <div class="flex size-14 items-center justify-center rounded-full bg-[#f1e5ff] text-[#8b6fb5]">
              <UIcon
                name="i-lucide-mail"
                class="size-7"
              />
            </div>
            <div>
              <p class="text-sm font-bold uppercase tracking-[0.25em] text-[#c78393]">
                Get in Touch
              </p>
              <h2 class="font-serif text-3xl font-semibold text-[#15166f]">
                Xinyi Class
              </h2>
            </div>
          </div>
          <p class="mt-5 text-base leading-7 text-[#4a4a85]">
            Xinyi Class is a creative space for art, yoga and personal growth.
          </p>

          <ul class="mt-5 space-y-3">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="flex gap-3 rounded-2xl bg-[#fbf8ff] p-3 ring-1 ring-[#eee4f4]"
            >
              <div class="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#9b7ec2] shadow-sm ring-1 ring-[#eaddec]">
                <UIcon
                  :name="item.icon"
                  class="size-5"
                />
              </div>
              <div>
                <p class="font-bold leading-6 text-[#15166f]">
                  {{ item.label }}
                </p>
                <p class="whitespace-pre-line text-sm leading-6 text-[#68679b]">
                  {{ item.detail }}
                </p>
              </div>
            </li>
          </ul>

          <NuxtLink
            to="#message"
            class="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#e7a0ab] px-7 py-3 text-base font-bold text-white shadow-lg shadow-[#e7a0ab]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          >
            Book a Trial Class
            <span aria-hidden="true">→</span>
          </NuxtLink>
          <p class="mt-4 text-center font-serif text-lg italic text-[#9f82bd]">
            Art • Wellness • Community
          </p>
        </article>

        <article
          id="message"
          class="rounded-[2rem] bg-white p-5 shadow-[0_22px_70px_rgba(80,62,120,0.13)] ring-1 ring-[#eaddec] sm:p-6"
        >
          <h2 class="font-serif text-4xl font-semibold text-[#15166f]">
            Send Us a Message
          </h2>
          <form
            class="mt-5 space-y-4"
            @submit.prevent
          >
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="contact-field">
                <span>Your Name *</span>
                <input
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                >
              </label>
              <label class="contact-field">
                <span>Email Address *</span>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                >
              </label>
            </div>

            <div class="grid gap-5 sm:grid-cols-2">
              <label class="contact-field">
                <span>Phone Number (optional)</span>
                <input
                  name="phone"
                  type="tel"
                  autocomplete="tel"
                >
              </label>
              <label class="contact-field">
                <span>I’m interested in</span>
                <select
                  name="interest"
                  required
                >
                  <option value="">
                    Please select
                  </option>
                  <option
                    v-for="option in interestOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </label>
            </div>

            <label class="contact-field">
              <span>Message *</span>
              <textarea
                name="message"
                rows="4"
                required
              />
            </label>

            <label class="flex items-start gap-3 rounded-2xl bg-[#fbf8ff] p-3 text-sm leading-6 text-[#4a4a85] ring-1 ring-[#eee4f4]">
              <input
                type="checkbox"
                name="updates"
                class="mt-1 size-4 rounded border-[#cdb9e7] text-[#9f82bd] focus:ring-[#9f82bd]"
              >
              <span>Keep me updated about workshops, retreats, new classes and seasonal events.</span>
            </label>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-[#8f76c0] px-8 py-3 text-base font-bold text-white shadow-lg shadow-[#8f76c0]/25 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f76c0]"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </article>
      </div>
    </section>

    <section class="px-4 py-6 sm:px-6 lg:px-8">
      <div class="mx-auto grid max-w-6xl items-center gap-5 rounded-[2rem] bg-[#f0ebfb] p-5 shadow-[0_18px_60px_rgba(80,62,120,0.1)] ring-1 ring-[#ded3f0] md:grid-cols-[0.7fr_1fr_auto] md:p-6">
        <img
          src="/contact/ai-assistant.png"
          alt="Xinyi AI assistant illustration"
          class="mx-auto w-full max-w-[14rem] object-contain"
          loading="lazy"
          decoding="async"
        >
        <div class="text-center md:text-left">
          <p class="text-sm font-bold uppercase tracking-[0.28em] text-[#9f82bd]">
            Not sure where to begin?
          </p>
          <h2 class="mt-3 font-serif text-3xl font-semibold text-[#15166f] sm:text-4xl">
            Talk with Xinyi AI Assistant
          </h2>
          <p class="mt-3 max-w-xl text-base leading-7 text-[#4a4a85]">
            Our AI can help you choose the right class before you contact us.
          </p>
        </div>
        <button
          type="button"
          class="mx-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-base font-bold text-[#6d55a3] shadow-sm ring-1 ring-[#d8cbea] transition hover:-translate-y-0.5 hover:bg-[#fff8ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f76c0] md:mx-0"
          @click="isAssistantOpen = true"
        >
          Talk with AI Assistant
          <UIcon
            name="i-lucide-bot"
            class="size-5"
          />
        </button>
      </div>
    </section>

    <section class="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div class="mx-auto max-w-6xl">
        <div class="text-center">
          <h2 class="font-serif text-4xl font-semibold text-[#15166f] sm:text-5xl">
            Visit Our Studio
          </h2>
          <div class="contact-divider mx-auto mt-5" />
        </div>

        <div class="mt-8 grid gap-6 lg:grid-cols-[0.48fr_1.52fr] lg:items-stretch">
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              v-for="feature in studioFeatures"
              :key="feature.label"
              class="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#eaddec]"
            >
              <div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#f1e5ff] text-[#8b6fb5]">
                <UIcon
                  :name="feature.icon"
                  class="size-6"
                />
              </div>
              <p class="font-bold text-[#15166f]">
                {{ feature.label }}
              </p>
            </div>
          </div>

          <div class="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_22px_70px_rgba(80,62,120,0.13)] ring-1 ring-[#eaddec]">
            <img
              src="/contact/studio-map.png"
              alt="Map to Xinyi Class at Unit 704, 105 Gordon Baker Road in North York"
              class="h-full min-h-[17rem] w-full object-cover object-left"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </div>
    </section>

    <footer class="relative overflow-hidden bg-[#f1eaf8] px-4 py-10 text-center text-[#5b4b76] sm:px-6 lg:px-8">
      <div
        class="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_50%_0%,rgba(226,188,216,0.55),transparent_45%)]"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-3xl">
        <h2 class="font-serif text-4xl font-semibold text-[#15166f] sm:text-5xl">
          Thank you for visiting!
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-xl leading-8 text-[#4a4a85]">
          I look forward to creating, growing and learning with you.
        </p>
        <p class="mt-8 font-serif text-2xl italic text-[#9f82bd]">
          Art • Wellness • Community
        </p>
        <p class="mt-10 text-sm text-[#776a8e]">
          © 2026 Xinyi Class
        </p>
      </div>
    </footer>

    <HomeAssistantChat v-model:open="isAssistantOpen" />
  </main>
</template>

<style scoped>
.contact-page {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.contact-page :where(.font-serif) {
  font-family: Georgia, "Times New Roman", serif;
}

.contact-wash {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 9999px;
  filter: blur(32px);
}

.contact-divider {
  position: relative;
  width: min(18rem, 70vw);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(151, 124, 177, 0.45), transparent);
}

.contact-divider::after {
  position: absolute;
  inset: 50% auto auto 50%;
  width: 1.25rem;
  height: 1.25rem;
  content: "";
  background: radial-gradient(circle at 50% 50%, #c8a9d8 0 28%, transparent 29%), radial-gradient(circle at 20% 30%, #e59aa5 0 18%, transparent 19%), radial-gradient(circle at 80% 30%, #e59aa5 0 18%, transparent 19%);
  transform: translate(-50%, -50%);
}

.contact-field {
  display: grid;
  gap: 0.55rem;
  color: #343579;
  font-size: 0.95rem;
  font-weight: 700;
}

.contact-field input,
.contact-field select,
.contact-field textarea {
  width: 100%;
  border: 1px solid #ded3f0;
  border-radius: 1rem;
  background: #fbf8ff;
  color: #15166f;
  font-weight: 500;
  outline: none;
  padding: 0.72rem 0.9rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.contact-field textarea {
  resize: vertical;
}

.contact-field input:focus,
.contact-field select:focus,
.contact-field textarea:focus {
  background: #fff;
  border-color: #9f82bd;
  box-shadow: 0 0 0 3px rgba(159, 130, 189, 0.18);
}
</style>
