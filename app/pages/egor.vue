<template>
  <div class="min-h-screen bgFonDev text-white flex flex-col items-center pt-30">
    <!-- Header block -->
    <div class="flex flex-col items-center text-center gap-4">
      <div class="p-1 rounded-full backdrop-blur-glass shadow-glass bg-white/10 border border-white/10 shadow-md">
        <img
          src="/images/Egor.png"
          alt="Egor Korkin"
          class="w-40 h-40 object-cover rounded-full"
        />
      </div>

      <h1 class="text-4xl font-semibold textAdovRed">{{ t("egor.name") }}</h1>
      <p class="text-sm opacity-80">{{ t("egor.title") }}</p>

      <p class="max-w-2xl mt-6 text-base leading-relaxed opacity-90">
        {{ t("egor.description") }}
      </p>
    </div>

    <!-- Achievements -->
    <div class="mt-16 w-full max-w-4xl grid md:grid-cols-3 sm:grid-cols-2 gap-6 px-6">
      <div
        v-for="award in awards"
        :key="award.title"
        class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 transition-all duration-300 shadowDev hover:scale-[1.03]"
      >
        <img :src="award.icon" alt="icon" class="w-10 h-10 mb-2" />
        <p class="font-medium text-lg">{{ award.title }}</p>
        <span class="text-sm opacity-75">{{ award.year }}</span>
      </div>
    </div>

    <!-- Awards Stand -->
    <div class="mt-20 mb-16 text-center">
      <h2 class="text-2xl mb-6 font-semibold textAdov">{{ t("egor.awards") }}</h2>
      <div class="flex gap-6 justify-center flex-wrap">
        <div
          v-for="award in awards"
          :key="award.title + '-stand'"
          class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 border border-white/10 rounded-3xl p-4 shadowDev hover:scale-105 transition-all duration-300"
        >
          <img :src="award.icon" alt="icon" class="w-8 h-8 text-amber-400" />
          <span class="text-xs opacity-80">{{ award.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { setSeo } from '~/utils/seo'

const { t, locale } = useI18n();

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'egor', // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adovdev.com' },
    { lang: 'ru', href: 'https://adovdev.com/ru' }
  ]
})

const awards = [
  { title: "Win Design Year", year: "2024-2025", icon: "/svg/trophy.svg" },
  { title: "Frontend Certification", year: "2025", icon: "/svg/certificate.svg" },
  { title: "Red Diploma in IT", year: "2022-2025", icon: "/svg/lesson.svg" },
];
</script>
