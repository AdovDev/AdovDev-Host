<template>
  <section class="flex fade-up flex-col items-center mt-10 w-full">
    <!-- Contact Form Section -->
    <ContactSection />
  </section>
</template>

<script setup lang="ts">
import { setSeo } from '~/utils/seo'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '~/composables/useScrollReveal';

const { locale } = useI18n()

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'contact', // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adovdev.com' },
    { lang: 'ru', href: 'https://adovdev.com/ru' }
  ]
})

definePageMeta({
  title: "AdovDev - Контакты",
  description: "Свяжитесь с AdovDev для обсуждения вашего проекта... AdovDev - Контакты",
});

useScrollReveal();
</script>
