<template>
  <!-- Main Content -->
  <main class="flex flex-col w-full items-center justify-center gap-32">
    <!-- Hero Section -->
    <section class="flex flex-col items-center">
      <!-- Hero Content -->
      <div class="flex flex-col h-screen gap-30 justify-center items-center">
        <div
          class="grid grid-cols-2 text-start justify-center items-center lg:gap-20"
        >
          <!-- Left Content -->
          <div class="gap-10 flex flex-col">
            <h1 class="text-6xl font-normal">
              {{ t("index.title") }}
              <span class="text-teal-400 textAdov font-semibold"
                >Adov<span
                  class="animate-pulse cursor-default ease-in-out duration-300 transition-all"
                  >Dev</span
                ></span
              >
            </h1>
            <p class="text-xl text-start text-gray-300">
              {{ t("index.description") }}
            </p>
          </div>
          <!--Right content 2.5d svg-->
          <div class="flex container items-center justify-center">
            <AnimationSvg />
          </div>
        </div>
      </div>
    </section>

    <!-- Work old Section -->

    <section
      class="grid grid-cols-3 w-full items-center justify-between mb-64 text-gray-300 lg:gap-30"
    >
      <div class="flex flex-col justify-between items-center">
        <h2 class="text-[200px] text-semibold text-start text-white">4</h2>
        <h3 class="text-2xl text-semibold text-start text-white-300">
          {{ t("index.years") }}
        </h3>
      </div>
      <div class="flex flex-col justify-between items-center">
        <h2 class="text-[200px] text-semibold text-start text-white">150</h2>
        <h3 class="text-2xl text-semibold text-start text-white-300">
          {{ t("index.projects") }}
        </h3>
      </div>
      <div class="flex flex-col justify-between items-center">
        <h2 class="text-[200px] text-semibold text-start text-white">6</h2>
        <h3 class="text-2xl text-semibold text-start text-white-300">
          {{ t("index.clients") }}
        </h3>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />
  </main>
</template>

<script setup>
// Nuxt 4 setup
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'

const { t, locale } = useI18n();

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'index', // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adovdev.com' },
    { lang: 'ru', href: 'https://adovdev.com/ru' }
  ]
})


definePageMeta({
  title: "AdovDev - Студия веб-разработки",
});
</script>
