<template>
  <div class="container my-30 flex flex-col gap-10">
    <RotateGear />
    <ProjectsSection />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'

const { locale } = useI18n();

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'portfolio', // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adovdev.com' },
    { lang: 'ru', href: 'https://adovdev.com/ru' }
  ]
})
</script>
