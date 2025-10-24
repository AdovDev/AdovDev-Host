<template>
  <section class="w-full mx-auto gap-10 flex flex-col">
    <!-- Фильтры -->
    <div class="flex flex-wrap justify-between items-center gap-4">
      <div
        class="flex fade-up w-full max-[20rem]:flex-col justify-center items-center gap-4"
      >
        <h2 class="text-3xl font-bold text-start text-white">
          {{ t("projects.filters") }}
        </h2>
        <!-- Поиск -->
        <input
          v-model="searchQuery"
          class="rounded-full min-[60rem]:w-1/3 bg-white/10 w-full px-4 py-2 outline-none border-2 border-white/15 focus:border-teal-500/90 focus:bg-teal-500/20 text-white placeholder-gray-400"
          type="text"
          name="search"
          :placeholder="t('projects.search')"
        >
      </div>
      <!-- Теги -->
      <div
        class="flex-wrap fade-up flex justify-center w-full items-center gap-2"
      >
        <button
          v-for="tag in allTags"
          :key="tag"
          class="px-4 py-2 rounded-full border transition"
          :class="
            activeTag === tag
              ? 'bg-teal-500/20 text-white border-2 border-teal-500/90'
              : 'border-2 border-white/10 cursor-pointer text-gray-500 bg-white/5 hover:text-white hover:bg-white/10'
          "
          @click="activeTag = tag"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- Работы -->
    <div class="columns-1 fade-up md:columns-2 gap-6">
      <div
        v-for="(work, index) in filteredWorks"
        :key="index"
        class="relative mb-6 overflow-hidden hover:scale-102 transition-transform duration-500 rounded-4xl cursor-pointer group"
        @click="openModal(work)"
      >
        <img
          :src="work.image"
          :alt="work.name"
          class="w-full object-cover transition-transform duration-500 group-hover:scale-102"
          loading="lazy"
        >

        <!-- Hover Overlay -->
        <div
          class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-6 text-center"
        >
          <h3 class="text-white min-[30rem]:text-2xl text-md font-bold mb-2">
            {{ work.name }}
          </h3>
          <p class="text-gray-200 text-sm">{{ work.description }}</p>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div
      v-if="selectedWork"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="bg-white/5 backdrop-blur-glass shadow-glass border border-gray-500/20 rounded-4xl max-w-2xl w-full max-[30rem]:mx-4 min-[30rem]:p-8 p-4 relative animate-fadeIn"
      >
        <button
          class="absolute backdrop-blur-glass shadow-glass top-0 right-0 bg-black/45 border-2 border-white/15 p-4 rounded-bl-4xl rounded-tr-4xl cursor-pointer text-white transition-all"
          @click="closeModal"
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
        <img
          :src="selectedWork.image"
          :alt="selectedWork.name"
          class="w-full rounded-3xl mb-6"
        >
        <h3 class="min-[30rem]:text-3xl text-xl font-bold mb-4">
          {{ selectedWork.name }}
        </h3>
        <p class="text-gray-100 mb-4">{{ selectedWork.description }}</p>

        <div class="flex flex-wrap gap-3">
          <span
            v-for="(tag, i) in selectedWork.tags"
            :key="i"
            class="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "#i18n";
import { useScrollReveal } from "~/composables/useScrollReveal";

const { locale, t } = useI18n();

// === Данные на двух языках ===
const worksData = {
  ru: [
    {
      name: "MoneyShopPhuket панель администратора",
      description: "Панель администратора MoneyShopPhuket.",
      image: "/images/adminpanel.png",
      tags: ["Web", "Vue", "Figma", "API"],
    },
    {
      name: "MoneyShopPhuket Сайт",
      description: "Официальный сайт MoneyShopPhuket.",
      image: "/images/moneyshop.png",
      tags: ["Web", "Figma"],
    },
    {
      name: "Tera Reborn",
      description: "Сайт онлайн игры Tera Reborn.",
      image: "/images/terareborn.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "Sharun Team",
      description: "Сайт школы плавания, бега и триатлона.",
      image: "/images/sharun.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "Leninsky | Boutique Car",
      description: "Сайт магазина автомобилей.",
      image: "/images/lenin.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "В разработке...",
      description: "Сюда может попасть ваш проект!",
      image: "/images/coming.jpg",
      tags: ["Web"],
    },
  ],
  en: [
    {
      name: "MoneyShopPhuket admin panel",
      description: "Admin panel MoneyShopPhuket.",
      image: "/images/adminpanel.png",
      tags: ["Web", "Vue", "Figma", "API"],
    },
    {
      name: "MoneyShopPhuket Website",
      description: "Official website MoneyShopPhuket.",
      image: "/images/moneyshop.png",
      tags: ["Web", "Figma"],
    },
    {
      name: "Tera Reborn",
      description: "Online game Tera Reborn.",
      image: "/images/terareborn.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "Sharun Team",
      description: "Swimming, running and triathlon school.",
      image: "/images/sharun.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "Leninsky | Boutique Car",
      description: "Car showroom website.",
      image: "/images/lenin.png",
      tags: ["Web", "Tilda", "SEO"],
    },
    {
      name: "In development...",
      description: "Your project can go here!",
      image: "/images/coming.jpg",
      tags: ["Web"],
    },
  ],
};

const searchQuery = ref("");
const activeTag = ref("Все");
const selectedWork = ref(null);

// Работы текущего языка
const works = computed(() => worksData[locale.value] || worksData.ru);

// Все теги
const allTags = computed(() => [
  locale.value === "ru" ? "Все" : "All",
  ...new Set(works.value.flatMap((w) => w.tags)),
]);

// Фильтрация
const filteredWorks = computed(() => {
  const q = searchQuery.value.toLowerCase();
  const tag = activeTag.value;
  return works.value.filter((w) => {
    const matchesTag = tag === "Все" || tag === "All" || w.tags.includes(tag);
    const matchesSearch =
      w.name.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q);
    return matchesTag && matchesSearch;
  });
});

// Модалка
const openModal = (work) => (selectedWork.value = work);
const closeModal = () => (selectedWork.value = null);

useScrollReveal();
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
