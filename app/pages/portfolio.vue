<template>
  <div class="container my-30 flex flex-col gap-10">
    <RotateGear />
    <ProjectsSection />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'
import { useScrollReveal } from '~/composables/useScrollReveal';

const { locale } = useI18n();

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'portfolio', // 'services', 'contact'
  url: `https://adov.dev${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adov.dev' },
    { lang: 'ru', href: 'https://adov.dev/ru' }
  ]
})

useScrollReveal();
</script>
