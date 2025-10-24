<template>
  <div
    class="min-h-screen bgFonDev text-white flex flex-col items-center pt-30"
  >
    <!-- Header block -->
    <div class="flex flex-col fade-up items-center text-center gap-4">
      <div
        class="p-1 rounded-full backdrop-blur-glass shadow-glass bg-white/10 border border-white/10 shadow-md"
      >
        <img
          src="/images/ilyas.png"
          alt="Ilyas Keldibekov"
          class="w-40 h-40 object-cover rounded-full"
        />
      </div>

      <h1 class="text-4xl font-semibold textAdovRed">{{ t("ilyas.name") }}</h1>
      <p class="text-sm opacity-80">{{ t("ilyas.title") }}</p>

      <p class="max-w-2xl mt-6 text-base leading-relaxed opacity-90">
        {{ t("ilyas.description") }}
      </p>
    </div>

    <!-- Achievements -->
    <div
      class="mt-16 max-[40rem]:w-full max-w-4xl fade-up grid md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <div
        v-for="award in awards"
        :key="award.title"
        class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 hover:bg-white/10 border border-white/10 rounded-3xl p-6 transition-all duration-300 shadowDev hover:scale-[1.03]"
      >
        <img :src="award.icon" alt="icon" class="w-10 h-10 mb-2" />
        <p class="font-medium text-lg text-nowrap">{{ award.title }}</p>
        <span class="text-sm opacity-75">{{ award.year }}</span>
      </div>
    </div>

    <!-- Awards Stand -->
    <div class="mt-20 mb-16 max-[40rem]:w-full text-center fade-up">
      <h2 class="text-2xl mb-6 font-semibold textAdov">
        {{ t("ilyas.awards") }}
      </h2>
      <div
        class="grid grid-cols-1 min-[40rem]:grid-cols-2 min-[60rem]:grid-cols-3 gap-6"
      >
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

    <!-- socials -->
    <div class="mt-4 mb-16 max-[40rem]:w-full fade-up text-center">
      <h2 class="text-2xl mb-6 font-semibold textAdov">
        {{ t("ilyas.socials") }}
      </h2>
      <div class="grid grid-cols-3 gap-6">
        <div
          v-for="social in socials"
          :key="social.name"
          class="flex flex-col items-center gap-2 backdrop-blur-glass shadow-glass bg-white/5 border border-white/10 rounded-3xl p-4 shadowDev hover:scale-105 transition-all duration-300"
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
        @click="openIlyas"
      >
        {{ t("hide.titleIlyas") }}
      </button>
    </div>

    <!-- popup history -->
    <div
      v-if="ilyasPopup"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeIlyas"
    >
      <div
        class="bg-white/5 backdrop-blur-glass shadow-glass border border-gray-500/20 rounded-4xl max-w-2xl w-full mx-4 p-4 min-[30rem]:p-8 relative animate-fadeIn max-h-[80vh] overflow-hidden"
      >
        <button
          class="absolute backdrop-blur-glass shadow-glass top-0 right-0 bg-black/45 border-2 border-white/15 p-4 rounded-bl-4xl rounded-tr-4xl cursor-pointer text-white transition-all"
          @click="closeIlyas"
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
            {{ t("hide.ilyas") }}
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

const ilyasPopup = ref(false);

const openIlyas = () => {
  ilyasPopup.value = true;
};
const closeIlyas = () => {
  ilyasPopup.value = false;
};

const awards = [
  { title: "WorldSkills Buisness", year: "2022", icon: "/svg/trophy.svg" },
  { title: "WorldSkills Web", year: "2023", icon: "/svg/trophy.svg" },
  { title: "WorldSkills Web", year: "2024", icon: "/svg/trophy.svg" },
  { title: "Red Diploma in IT", year: "2021-2025", icon: "/svg/lesson.svg" },
];

const socials = [
  {
    name: "GitHub",
    icon: "/svg/github.svg",
    link: "https://github.com/AdovDev",
  },
  { name: "Telegram", icon: "/svg/tg.svg", link: "https://t.me/Ilyas_Adov" },
  {
    name: "Instagram",
    icon: "/svg/instagram.svg",
    link: "https://www.instagram.com/Ilyas.adov",
  },
];

if (import.meta.client) {
  const currentLocale = locale.value || "en";
  const localePath = currentLocale === "ru" ? "/ru/" : "/";

  setSeo({
    page: "ilyas",
    url: localePath,
    hreflangs: [
      { lang: "en", href: "/" },
      { lang: "ru", href: "/ru/" },
    ],
  });
}

useScrollReveal();
</script>
