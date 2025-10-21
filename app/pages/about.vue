<template>
  <div class="space-y-24">
    <!-- Секция 1: О студии -->
    <section class="flex flex-col lg:flex-row items-center h-screen gap-16">
      <!-- Левый блок: текст -->
      <div class="flex-1 flex flex-col justify-center gap-10">
        <h1 class="text-5xl lg:text-6xl flex justify-start items-center gap-4 font-bold text-teal-400">
          <span class="font-normal text-white">{{ t('about.title') }}</span>
          <span class="textAdov"
            >Adov<span
              class="animate-pulse cursor-default ease-in-out duration-300 transition-all"
              >Dev</span
            ></span
          >
        </h1>
        <p class="text-xl text-[#FFFFFF] max-w-lg">
          {{ t('about.description') }}
        </p>
      </div>

      <!-- Правый блок: медиа/анимация -->
      <div class="flex-1 flex items-center justify-center">
        <AnimationSvg />
      </div>
    </section>

    <!-- Секция 2: Достижения -->
    <section class="h-1/3">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          class="bg-white/15 border-2 border-white/25 p-8 mb-40 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB] textAdov text-2xl">
            {{ t('about.projects') }}
          </h3>
          <p class="text-[#FFFFFF] mt-2">
            {{ t('about.fullDev') }}
          </p>
        </div>
        <div
          class="bg-white/10 border-2 border-white/20 mt-20 mb-20 p-8 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB]/90 textAdov text-2xl">
            WorldSkills
          </h3>
          <p class="text-[#FFFFFF]/90 mt-2">
            {{ t('about.tournament') }}
          </p>
        </div>
        <div
          class="bg-white/5 border-2 border-white/15 p-8 mt-40 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB]/80 textAdovj text-2xl">
            {{ t('about.cooperation') }}
          </h3>
          <p class="text-[#FFFFFF]/80 mt-2">
            {{ t('about.cooperationDescription') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Секция 3: Команда -->
    <section class="flex flex-col lg:flex-row items-center h-screen gap-12">
      <!-- Левый блок: описание команды -->
      <div class="flex-1 flex flex-col justify-center space-y-6">
        <h2 class="text-5xl font-bold text-[#47D7DB]">{{ t('about.command') }}</h2>
        <p class="text-xl text-[#FFFFFF] max-w-lg">
          {{ t('about.commandDescription') }}
        </p>
      </div>

      <!-- Правый блок: карточки участников -->
      <div class="flex gap-8 items-end">
        <!-- Ильяс -->
        <div
          class="relative group border-2 border-white/20 rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/images/ilyas.png"
            alt="Ilyas"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300"
          >
            <h3 class="text-xl font-bold text-teal-400 textAdov mb-2">{{ t('about.ilyas') }}</h3>
            <p class="text-[#FFFFFF] mb-4 text-sm">
              {{ t('about.ilyasDescription') }}
            </p>
            <NuxtLink
              to="/ilyas"
              class="px-3 py-1 bg-teal-400 text-black cursor-pointer rounded-4xl hover:opacity-90 transition text-sm"
            >
              {{ t('about.button') }}
            </NuxtLink>
          </div>
        </div>
        <!-- Егор -->
        <div
          class="relative group border-2 border-white/20 rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/images/Egor.png"
            alt="Egor"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300"
          >
            <h3 class="text-xl font-bold text-teal-400 textAdov mb-2">{{ t('about.egor') }}</h3>
            <p class="text-[#FFFFFF] mb-4 text-sm">
              {{ t('about.egorDescription') }}
            </p>
            <NuxtLink
              to="/egor"
              class="px-3 py-1 bg-teal-400 text-black cursor-pointer rounded-4xl hover:opacity-90 transition text-sm"
            >
              {{ t('about.button') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { setSeo } from '~/utils/seo'

const { t, locale } = useI18n()

const currentLocale = locale.value || 'en'; // fallback на случай SSR

setSeo({
  page: 'about', // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === 'ru' ? '/ru' : ''}`,
  hreflangs: [
    { lang: 'en', href: 'https://adovdev.com' },
    { lang: 'ru', href: 'https://adovdev.com/ru' }
  ]
})
</script>