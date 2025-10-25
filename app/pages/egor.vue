<template>
  <div
    class="min-h-screen bgFonDev text-white flex flex-col items-center max-[19rem]:mt-40 max-[30rem]:mt-55 max-[50rem]:mt-30 mt-30"
  >
    <!-- Header block -->
    <div class="flex flex-col items-center text-center gap-4">
      <div
        class="p-1 rounded-full fade-up backdrop-blur-glass shadow-glass bg-white/10 border border-white/10 shadow-md"
      >
        <img
          src="/images/Egor.png"
          alt="Egor Korkin"
          class="w-40 h-40 object-cover rounded-full"
        />
      </div>

      <h1 class="text-4xl font-semibold fade-up textAdovRed">{{ t("egor.name") }}</h1>
      <p class="text-sm opacity-80 fade-up">{{ t("egor.title") }}</p>

      <p class="max-w-2xl mt-6 text-base fade-up leading-relaxed opacity-90">
        {{ t("egor.description") }}
      </p>
    </div>

    <!-- Achievements -->
    <div
      class="mt-16 max-[40rem]:w-full max-w-4xl grid md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <div
        v-for="award in awards"
        :key="award.title"
        class="flex flex-col items-center gap-2 fade-up backdrop-blur-glass shadow-glass bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 transition-all duration-300 shadowDev hover:scale-102"
      >
        <img :src="award.icon" alt="icon" class="w-10 h-10 mb-2" />
        <p class="font-medium text-lg text-center">{{ award.title }}</p>
        <span class="text-sm opacity-75">{{ award.year }}</span>
      </div>
    </div>

    <!-- Awards Stand -->
    <div class="mt-20 mb-16 max-[40rem]:w-full fade-up text-center">
      <h2 class="text-2xl mb-6 font-semibold textAdov">
        {{ t("egor.awards") }}
      </h2>
      <div
        class="grid grid-cols-1 min-[40rem]:grid-cols-2 min-[60rem]:grid-cols-3 gap-6"
      >
        <div
          v-for="award in awards"
          :key="award.title + '-stand'"
          class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 border hover:bg-white/10 border-white/10 rounded-3xl p-4 shadowDev hover:scale-102 transition-all duration-300"
        >
          <img :src="award.icon" alt="icon" class="w-8 h-8 text-amber-400" />
          <span class="text-xs opacity-80">{{ award.title }}</span>
        </div>
      </div>
    </div>

    <!-- socials -->
    <div class="mt-4 mb-16 max-[40rem]:w-full fade-up text-center">
      <h2 class="text-2xl mb-6 font-semibold textAdov">
        {{ t("egor.socials") }}
      </h2>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="social in socials"
          :key="social.name"
          class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 border hover:bg-white/10 border-white/10 rounded-3xl p-4 shadowDev hover:scale-102 transition-all duration-300"
        >
          <a
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col justify-center items-center gap-2"
          >
            <img :src="social.icon" alt="icon" class="w-8 h-8" />
            <span class="text-xs opacity-80">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- button popup -->
    <div
      class="text-lg sm:text-xl fade-up max-[60rem]:text-center text-start text-gray-300 relative"
    >
      <button
        class="border-b-2 border-white/20 text-white hover:scale-105 transition-all font-semibold text-lg cursor-pointer"
        @click="openEgor"
      >
        {{ t("hide.titleEgor") }}
      </button>
    </div>

    <!-- popup history -->
    <div
      v-if="EgorPopup"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeEgor"
    >
      <div
        class="bg-white/5 backdrop-blur-glass shadow-glass border border-gray-500/20 rounded-4xl max-w-2xl w-full mx-4 p-4 min-[30rem]:p-8 relative animate-fadeIn max-h-[80vh] overflow-hidden"
      >
        <button
          class="absolute backdrop-blur-glass shadow-glass top-0 right-0 bg-black/45 border-2 border-white/15 p-4 rounded-bl-4xl rounded-tr-4xl cursor-pointer text-white transition-all"
          @click="closeEgor"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:scale-130 transition-all hover:rotate-90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h1 class="text-xl min-[30rem]:text-3xl font-bold mb-4">
          {{ t("hide.title") }}
        </h1>

        <!-- Scrollable content -->
        <div
          class="overflow-y-auto max-h-[64vh] pr-2"
          style="-webkit-overflow-scrolling: touch"
        >
          <h3
            class="text-lg min-[30rem]:text-xl font-normal whitespace-pre-line"
          >
            {{ t("hide.egor") }}
          </h3>
          <!-- при необходимости добавь дополнительные параграфы -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { setSeo } from "~/utils/seo";
import { useScrollReveal } from "~/composables/useScrollReveal";

const { t, locale } = useI18n();

const EgorPopup = ref(false);

const openEgor = () => {
  EgorPopup.value = true;
};
const closeEgor = () => {
  EgorPopup.value = false;
};

const awards = [
  { title: "Win Design Year", year: "2024-2025", icon: "/svg/trophy.svg" },
  {
    title: "Frontend Certification",
    year: "2025",
    icon: "/svg/certificate.svg",
  },
  { title: "Red Diploma in IT", year: "2022-2025", icon: "/svg/lesson.svg" },
];

const socials = [
  { name: "GitHub", icon: "/svg/github.svg", link: "https://github.com/MrL1s" },
  { name: "Telegram", icon: "/svg/tg.svg", link: "https://t.me/Egonys_Korion" },
  {
    name: "Instagram",
    icon: "/svg/instagram.svg",
    link: "https://www.instagram.com/egonys.model",
  },
];

if (import.meta.client) {
  const currentLocale = locale.value || "en";
  const localePath = currentLocale === "ru" ? "/ru/" : "/";

  setSeo({
    page: "egor",
    url: localePath,
    hreflangs: [
      { lang: "en", href: "/" },
      { lang: "ru", href: "/ru/" },
    ],
  });
}

useScrollReveal();
</script>
