<template>
  <main class="flex flex-col w-full items-center justify-center gap-32">
    <!-- Hero Section -->
    <section class="flex flex-col items-center w-full max-[26.5rem]:mt-50 max-[33rem]:mt-40 max-[49.9rem]:mt-20 ">
      <div class="flex flex-col h-screen gap-30 justify-center items-center w-full max-[59.9rem]:mt-28">
        <div class="grid grid-cols-1 md:grid-cols-2 text-start justify-center items-center lg:gap-20 w-full">
          <!-- Left Content -->
          <div class="gap-10 flex flex-col max-[49.9rem]:my-20 px-4 sm:px-8 md:px-0">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-normal">
              {{ t("index.title") }}
              <span class="text-teal-400 textAdov font-semibold">
                Adov
                <span class="animate-pulse cursor-default ease-in-out duration-300 transition-all">Dev</span>
              </span>
            </h1>
            <p class="text-lg sm:text-xl text-start text-gray-300">
              {{ t("index.description") }}
            </p>
          </div>

          <!-- Right Content -->
          <div class="flex items-center justify-center my-15 md:mt-0">
            <AnimationSvg />
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section class="grid grid-cols-1 min-[60rem]:grid-cols-3 w-full items-center justify-between mb-64 max-[49.9rem]:mb-20 text-gray-300 lg:gap-30 px-4 sm:px-8 md:px-0 max-[49.9rem]:mt-20 ">
      <div class="flex flex-col justify-between items-center mb-10 sm:mb-0">
        <h2 class="text-[200px] font-semibold text-white">4</h2>
        <h3 class="text-2xl font-semibold text-white/70">{{ t("index.years") }}</h3>
      </div>
      <div class="flex flex-col justify-between items-center mb-10 sm:mb-0">
        <h2 class="text-[200px] font-semibold text-white">150</h2>
        <h3 class="text-2xl font-semibold text-white/70">{{ t("index.projects") }}</h3>
      </div>
      <div class="flex flex-col justify-between items-center">
        <h2 class="text-[200px] font-semibold text-white">6</h2>
        <h3 class="text-2xl font-semibold text-white/70">{{ t("index.clients") }}</h3>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { setSeo } from '~/utils/seo'

const { t, locale } = useI18n();
const currentLocale = locale.value || 'en';

setSeo({
  page: 'index',
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
