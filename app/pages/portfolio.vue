<template>
  <div class="container my-30 flex flex-col gap-10">
    <ProjectsSection />
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'
import { useScrollReveal } from '~/composables/useScrollReveal';
import { onMounted } from 'vue';

const { locale } = useI18n();

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  title: 'portfolio | Adov',
  description: 'Portfolio of Adov.dev',
  page: 'portfolio',
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
