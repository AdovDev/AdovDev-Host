<template>
  <div class="min-[60rem]:space-y-30 space-y-20 mb-0 ">
    <!-- Секция 1: О студии -->
    <section class="flex flex-col items-center w-full">
      <div
        class="flex flex-col h-screen gap-30 justify-center items-center w-full max-[20rem]:mt-0 max-[30rem]:mt-0 max-[50rem]:mt-0 mt-0"
      >
        <div
          class="grid grid-cols-1 min-[60rem]:grid-cols-2 text-start justify-center items-center lg:gap-20 w-full"
        >
          <!-- Left Content -->
          <div class="gap-10 flex flex-col max-[60rem]:mb-20">
            <h1 class="text-4xl sm:text-5xl max-[60rem]:text-center lg:text-6xl font-normal">
              {{ t("about.title") }}
              <span class="text-teal-400  textAdov font-semibold">
                Adov<span
                  class="animate-pulse cursor-default ease-in-out duration-300 transition-all"
                  >Dev</span
                >
              </span>
            </h1>
            <p class="text-lg sm:text-xl max-[60rem]:text-center text-start text-gray-300">
              {{ t("about.description") }}
            </p>
          </div>

          <!-- Right Content -->
          <div
            class="flex items-center justify-center max-[60rem]:my-15 md:mt-0"
          >
            <AnimationSvg />
          </div>
        </div>
      </div>
    </section>

    <!-- Секция 2: Достижения -->
    <section class="h-1/3">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          class="bg-white/15 border-2 border-white/25 p-8 lg:mb-40 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB] textAdov text-1xl min-[60rem]:text-2xl">
            {{ t("about.projects") }}
          </h3>
          <p class="text-[#FFFFFF] mt-2">
            {{ t("about.fullDev") }}
          </p>
        </div>
        <div
          class="bg-white/10 border-2 border-white/20 lg:mt-20 lg:mb-20 p-8 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB]/90 textAdov text-1xl min-[60rem]:text-2xl">
            WorldSkills
          </h3>
          <p class="text-[#FFFFFF]/90 mt-2">
            {{ t("about.tournament") }}
          </p>
        </div>
        <div
          class="bg-white/5 border-2 border-white/15 p-8 lg:mt-40 rounded-4xl text-center"
        >
          <h3 class="font-bold text-[#47D7DB]/80 textAdov text-1xl min-[60rem]:text-2xl">
            {{ t("about.cooperation") }}
          </h3>
          <p class="text-[#FFFFFF]/80 mt-2">
            {{ t("about.cooperationDescription") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Секция 3: Команда -->
    <section class="flex flex-col flex-1 min-[60rem]:flex-row items-center h-2/3 min-[75rem]:gap-12 gap-8 ">
      <!-- Левый блок: описание команды -->
      <div class="max-[60rem]:w-full flex min-[60rem]:flex-1 flex-col min-[60rem]:text-start text-center justify-center items-center space-y-6">
        <h2 class="min-[75rem]:text-5xl text-4xl text-start max-[40rem]:text-center min-[60rem]:w-full font-bold min-[40rem]:text-nowrap text-[#47D7DB]">
          {{ t("about.command") }}
        </h2>
        <p class="text-xl text-[#FFFFFF]">
          {{ t("about.commandDescription") }}
        </p>
      </div>

      <!-- Правый блок: карточки участников -->
      <div class="grid grid-cols-1 max-[60rem]:w-full md:grid-cols-2 gap-8 items-end">
        <!-- Ильяс -->
        <div
          class="relative group border-2 border-white/20 rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/images/ilyas.png"
            alt="Ilyas"
            class="w-full h-full object-cover"
          >
          <div
            class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300"
          >
            <h3 class="text-xl font-bold text-teal-400 textAdov mb-2">
              {{ t("about.ilyas") }}
            </h3>
            <p class="text-[#FFFFFF] mb-4 text-sm">
              {{ t("about.ilyasDescription") }}
            </p>
          </div>
          <NuxtLink
            :to="langRoute('/ilyas')"
            class="absolute top-0 right-0 px-4 py-4 max-sm:px-3 max-sm:py-3 max-md:px-6 max-md:py-6  bg-teal-600 font-semibold text-white cursor-pointer rounded-bl-4xl hover:opacity-90 transition text-sm"
          >
            {{ t("about.button") }}
          </NuxtLink>
        </div>

        <!-- Егор -->
        <div
          class="relative group border-2 border-white/20 rounded-4xl overflow-hidden hover:scale-105 transition-transform duration-500"
        >
          <img
            src="/images/Egor.png"
            alt="Egor"
            class="w-full h-full object-cover"
          >
          <div
            class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300"
          >
            <h3 class="text-xl font-bold text-teal-400 textAdov mb-2">
              {{ t("about.egor") }}
            </h3>
            <p class="text-[#FFFFFF] mb-4 text-sm">
              {{ t("about.egorDescription") }}
            </p>
          </div>
          <NuxtLink
            :to="langRoute('/egor')"
            class="absolute top-0 right-0 px-4 py-4 max-sm:px-3 max-sm:py-3 max-md:px-6 max-md:py-6  bg-teal-600 font-semibold text-white cursor-pointer rounded-bl-4xl hover:opacity-90 transition text-sm2"
          >
            {{ t("about.button") }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { setSeo } from "~/utils/seo";
const { t, locale } = useI18n();

const currentLocale = locale.value || "en"; // fallback на случай SSR

const langRoute = (path: string) => {
  if (locale.value === "ru") {
    return path === "/" ? "/ru" : "/ru" + path;
  }
  return path;
};

setSeo({
  page: "about", // 'services', 'contact'
  url: `https://adovdev.com${currentLocale === "ru" ? "/ru" : ""}`,
  hreflangs: [
    { lang: "en", href: "https://adovdev.com" },
    { lang: "ru", href: "https://adovdev.com/ru" },
  ],
});
</script>
