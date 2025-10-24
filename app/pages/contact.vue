<template>
  <section class="flex fade-up flex-col items-center mt-10 w-full">
    <!-- Contact Form Section -->
    <ContactSection />
  </section>
</template>

<script setup>
import { setSeo } from '~/utils/seo'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '~/composables/useScrollReveal';
import { onMounted } from 'vue';

const { locale } = useI18n()

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  title: 'contact | Adov',
  description: 'Contact Adov.dev',
  page: 'contact',
  url: `https://adov.dev${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adov.dev' },
    { lang: 'ru', href: 'https://adov.dev/ru' }
  ]
});

onMounted(() => {
  useScrollReveal();
});
</script>
