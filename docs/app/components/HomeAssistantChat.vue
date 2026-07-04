<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { Chat } from '@ai-sdk/vue'
import { DefaultChatTransport } from 'ai'
import { sanitizeAssistantText } from '../../../layer/modules/assistant/runtime/utils/sanitize'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const markdownComponents: Record<string, any> = {
  pre: defineAsyncComponent(() => import('../../../layer/modules/assistant/runtime/components/AssistantPreStream.vue')),
}

const open = defineModel<boolean>('open', { default: false })
const config = useRuntimeConfig()
const router = useRouter()
const toast = useToast()
const input = ref('')
const isEnabled = computed(() => config.public.assistant?.enabled ?? false)
const chatUser = {
  icon: undefined,
  avatar: undefined,
  variant: undefined,
  side: undefined,
  actions: undefined,
  ui: { content: 'text-sm' },
}

const chat = new Chat({
  transport: new DefaultChatTransport({
    api: (config.app?.baseURL.replace(/\/$/, '') || '') + config.public.assistant.apiPath,
    headers: () => ({
      'X-TockDocs-Scope': 'site',
    }),
  }),
  onError: (error: Error) => {
    const message = (() => {
      try {
        const parsed = JSON.parse(error.message)
        return parsed?.message || error.message
      }
      catch {
        return error.message
      }
    })()

    toast.add({
      description: message,
      icon: 'i-lucide-alert-circle',
      color: 'error',
      duration: 0,
    })
  },
})

const lastMessage = computed(() => chat.messages.at(-1))
const showThinking = computed(() =>
  chat.status === 'streaming'
  && lastMessage.value?.role === 'assistant'
  && !lastMessage.value?.parts?.some((part: { type: string }) => part.type === 'text'),
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getMessageToolCalls(message: any) {
  if (!message?.parts) return []

  return message.parts
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((part: any) => part.type === 'data-tool-calls')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .flatMap((part: any) => part.data?.tools || [])
}

function handleSubmit(event?: Event) {
  event?.preventDefault()

  if (!input.value.trim() || !isEnabled.value) {
    return
  }

  chat.sendMessage({
    text: input.value,
  })

  input.value = ''
}

function resetChat() {
  chat.stop()
  chat.messages.length = 0
}

function closeChat() {
  open.value = false
}

function handleLinkClick(event: MouseEvent) {
  const anchor = event.target instanceof Element
    ? event.target.closest('a') as HTMLAnchorElement | null
    : null

  if (
    !anchor
    || event.defaultPrevented
    || event.button !== 0
    || event.metaKey
    || event.ctrlKey
    || event.shiftKey
    || event.altKey
  ) {
    return
  }

  const rawHref = anchor.getAttribute('href')
  if (
    !rawHref
    || (anchor.target && anchor.target !== '_self')
    || anchor.hasAttribute('download')
    || anchor.getAttribute('rel')?.includes('external')
    || rawHref.startsWith('#')
    || rawHref.startsWith('mailto:')
    || rawHref.startsWith('tel:')
  ) {
    return
  }

  let linkUrl: URL

  try {
    linkUrl = new URL(rawHref, window.location.href)
  }
  catch {
    return
  }

  if (!['http:', 'https:'].includes(linkUrl.protocol)) {
    return
  }

  if (linkUrl.origin !== window.location.origin) {
    event.preventDefault()
    window.open(linkUrl.toString(), '_blank', 'noopener,noreferrer')
    return
  }

  event.preventDefault()
  void router.push(linkUrl.pathname + linkUrl.search + linkUrl.hash)
}

onBeforeUnmount(() => {
  chat.stop()
})
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-3 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-3 opacity-0"
      >
        <button
          v-if="!open"
          type="button"
          class="group fixed bottom-4 right-4 z-[70] flex size-16 items-center justify-center rounded-full border border-[#dccce8] bg-white/95 p-2 shadow-[0_16px_45px_rgba(64,51,95,0.24)] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d98792]"
          aria-label="Talk with AI Assistant"
          @click="open = true"
        >
          <img
            src="/home/logo.png"
            alt=""
            class="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          >
          <span class="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-full bg-[#594178] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 group-focus-visible:opacity-100">
            Talk with AI Assistant
          </span>
        </button>
      </Transition>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-3 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-3 opacity-0"
      >
        <section
          v-if="open"
          class="fixed bottom-4 right-4 z-[70] flex h-[min(680px,calc(100dvh-2rem))] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-[#dccce8] bg-white/95 text-[#40335f] shadow-[0_24px_80px_rgba(64,51,95,0.25)] backdrop-blur"
          role="dialog"
          aria-label="XinYi AI Assistant"
        >
          <header class="flex h-16 shrink-0 items-center justify-between border-b border-[#eaddec] px-4">
            <div class="flex items-center gap-2">
              <span class="flex size-10 items-center justify-center rounded-full bg-white p-1 shadow-sm ring-1 ring-[#eaddec]">
                <img
                  src="/home/logo.png"
                  alt=""
                  class="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                >
              </span>
              <h2 class="text-base font-semibold leading-5 text-[#594178]">
                XinYi AI Assistant
              </h2>
            </div>
            <div class="flex items-center gap-1">
              <UButton
                v-if="chat.messages.length > 0"
                icon="i-lucide-trash-2"
                color="neutral"
                variant="ghost"
                size="sm"
                aria-label="Clear Chat"
                @click="resetChat"
              />
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="ghost"
                size="sm"
                aria-label="Close Chat"
                @click="closeChat"
              />
            </div>
          </header>

          <div
            v-if="!isEnabled"
            class="flex flex-1 items-center justify-center p-6 text-center text-sm leading-6 text-[#7a6b8b]"
          >
            AI assistant is not configured yet.
          </div>

          <template v-else>
            <div
              class="min-h-0 flex-1 overflow-y-auto"
              @click="handleLinkClick"
            >
              <UChatMessages
                v-if="chat.messages.length > 0"
                :messages="chat.messages"
                compact
                :status="chat.status"
                :user="chatUser"
                :ui="{ indicator: '*:bg-accented', root: 'h-auto!' }"
                class="px-4 py-4"
              >
                <template #content="{ message }">
                  <div class="flex flex-col gap-2">
                    <AssistantLoading
                      v-if="message.role === 'assistant' && (getMessageToolCalls(message).length > 0 || (showThinking && message.id === lastMessage?.id))"
                      :tool-calls="getMessageToolCalls(message)"
                      :is-loading="showThinking && message.id === lastMessage?.id"
                    />
                    <template
                      v-for="(part, index) in message.parts"
                      :key="`${message.id}-${part.type}-${index}${'state' in part ? `-${part.state}` : ''}`"
                    >
                      <MDCCached
                        v-if="part.type === 'text' && part.text"
                        :value="sanitizeAssistantText(part.text)"
                        :cache-key="`${message.id}-${index}`"
                        :components="markdownComponents"
                        :parser-options="{ highlight: false }"
                        class="*:first:mt-0 *:last:mb-0"
                      />
                    </template>
                  </div>
                </template>
              </UChatMessages>

              <div
                v-else
                class="flex h-full flex-col items-center justify-center gap-3 px-6 text-center"
              >
                <UIcon
                  name="i-lucide-sparkles"
                  class="size-8 text-[#a783c4]"
                />
                <p class="text-sm font-medium text-[#594178]">
                  Ask about classes, schedules, age groups, or any knowledge base.
                </p>
              </div>
            </div>

            <div class="w-full shrink-0 p-3">
              <UChatPrompt
                v-model="input"
                :rows="1"
                placeholder="Ask anything across XinYi Class"
                maxlength="1000"
                :ui="{
                  root: 'shadow-none!',
                  body: '*:p-0! *:rounded-none! *:text-base!',
                }"
                @submit="handleSubmit"
              >
                <template #footer>
                  <div class="text-xs text-[#7a6b8b]">
                    Shift + Enter for a line break
                  </div>
                  <UChatPromptSubmit
                    class="ml-auto"
                    size="sm"
                    :status="chat.status"
                    @stop="chat.stop()"
                    @reload="chat.regenerate()"
                  />
                </template>
              </UChatPrompt>
            </div>
          </template>
        </section>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>
