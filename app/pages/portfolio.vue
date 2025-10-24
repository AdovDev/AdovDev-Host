<template>
  <div class="w-full my-30 flex flex-col gap-10">
    <ProjectsSection />
  </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'
import { useScrollReveal } from '~/composables/useScrollReveal';

const { locale } = useI18n();

if (import.meta.client) {
  const currentLocale = locale.value || "en";

  setSeo({
    page: "portfolio",
    seoData: {
      title: "Portfolio",
      description: "Portfolio Adov.dev",
    },
    url: `https://adov.dev${currentLocale === "ru" ? "/ru" : ""}`,
    hreflangs: [
      { lang: "en", href: "https://adov.dev" },
      { lang: "ru", href: "https://adov.dev/ru" },
    ],
  });
}

useScrollReveal();
</script>
