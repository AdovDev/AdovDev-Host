<template>
  <div class="bgFonDev min-h-screen relative lg:mx-30">
    <HeaderComponent :is-hidden="isHidden" />

    <NuxtPage />

    <FooterComponent />

    <p v-if="!isMounted" class="text-center mt-10 text-gray-400">Загрузка...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '#imports'
import seoData from '~/config/seo.json'

// ------------------------------
// Скролл-хидер
// ------------------------------
const isMounted = ref(false)
const isHidden = ref(false)
let lastScroll = 0
let scrollTimeout = null

const handleScroll = () => {
  const currentScroll = window.pageYOffset
  if (Math.abs(currentScroll - lastScroll) < 10) return

  if (currentScroll > lastScroll && currentScroll > 100) {
    isHidden.value = true
  } else if (currentScroll < lastScroll) {
    isHidden.value = false
  }

  lastScroll = currentScroll

  if (scrollTimeout) clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    if (currentScroll > 50) isHidden.value = false
  }, 500)
}

onMounted(() => {
  isMounted.value = true
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ------------------------------
// SEO
// ------------------------------
const { locale } = useI18n()

watch(locale, (newLocale) => {
  const seo = seoData[newLocale] || seoData.en
  useHead({
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.ogImage },
      { property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  })
}, { immediate: true })
</script>
