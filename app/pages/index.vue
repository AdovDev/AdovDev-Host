<template>
  <main
    class="flex flex-col px-0 w-full items-center justify-center gap-32 mt-0 max-[26.5rem]:mt-10"
  >
    <!-- Hero Section -->
    <section class="flex flex-col items-center w-full">
      <div
        class="flex flex-col h-screen gap-30 justify-center items-center w-full max-[10rem]:mt-30 max-[20rem]:mt-30 max-[30rem]:mt-20 max-[50rem]:mt-20 mt-0"
      >
        <div
          class="grid grid-cols-1 min-[60rem]:grid-cols-2 text-start justify-center items-center lg:gap-20 w-full"
        >
          <!-- Left Content -->
          <div class="gap-10 flex fade-up flex-col max-[60rem]:my-20">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-normal">
              {{ t("index.title") }}
              <span class="text-teal-400 textAdov font-semibold">
                Adov<span
                  class="animate-pulse cursor-default ease-in-out duration-300 transition-all"
                  >Dev</span
                >
              </span>
            </h1>
            <p class="text-lg sm:text-xl text-start text-gray-300">
              {{ t("index.description") }}
            </p>
          </div>

          <!-- Right Content -->
          <div
            class="flex items-center fade-up justify-center max-[60rem]:my-15 md:mt-0"
          >
            <AnimationSvg />
          </div>
        </div>
      </div>
    </section>

    <!-- Work Section -->
    <section
      class="grid grid-cols-1 min-[60rem]:grid-cols-3 w-full items-center justify-between mb-64 max-[50rem]:mb-20 text-gray-300 lg:gap-30 max-[50rem]:mt-20"
    >
      <div class="flex flex-col justify-between items-center mb-10 sm:mb-0">
        <h2
          class="text-[200px] fade-up max-[75rem]:text-[180px] font-semibold text-white"
        >
          {{ years }}+
        </h2>
        <h3
          class="text-2xl fade-up max-[75rem]:text-xl font-semibold text-white/70"
        >
          {{ t("index.years") }}
        </h3>
      </div>
      <div class="flex flex-col justify-between items-center mb-10 sm:mb-0">
        <h2
          class="text-[200px] fade-up max-[75rem]:text-[180px] font-semibold text-white"
        >
          {{ projects }}+
        </h2>
        <h3
          class="text-2xl fade-up max-[75rem]:text-xl font-semibold text-white/70"
        >
          {{ t("index.projects") }}
        </h3>
      </div>
      <div class="flex flex-col justify-between items-center">
        <h2
          class="text-[200px] fade-up max-[75rem]:text-[180px] font-semibold text-white"
        >
          {{ clients }}+
        </h2>
        <h3
          class="text-2xl fade-up max-[75rem]:text-xl font-semibold text-nowrap text-white/70"
        >
          {{ t("index.clients") }}
        </h3>
      </div>
    </section>

    <!-- Services Section -->
    <ServicesSection />

    <!-- Contact section -->
    <ContactSection />
  </main>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { setSeo } from "~/utils/seo";
import { useScrollReveal } from "~/composables/useScrollReveal";
import { useCounter } from "~/composables/useCounter";

const { t, locale } = useI18n();
const currentLocale = locale.value || "en";

setSeo({
  page: "index",
  url: `https://adovdev.com${currentLocale === "ru" ? "/ru" : ""}`,
  hreflangs: [
    { lang: "en", href: "https://adov.dev" },
    { lang: "ru", href: "https://adov.dev/ru" },
  ],
});

definePageMeta({
  title: "AdovDev - Студия веб-разработки",
  description:
    "Мы — команда профессиональных разработчиков и дизайнеров, которые создают современные сайты... AdovDev - Студия веб-разработки",
});

const years = useCounter(4, 2000);
const projects = useCounter(150, 3000);
const clients = useCounter(6, 2500);

useScrollReveal();
</script>
