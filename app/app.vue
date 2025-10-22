<template>
  <div
    v-if="!isMounted"
    class="bg-black absolute inset-0 z-100 flex items-center justify-center"
  >
    <p class="text-center mt-10 text-2xl text-white">Загрузка...</p>
  </div>
  <div class="bgFonDev min-h-screen relative sm:mx-30 max-[40rem]:mx-10">
    <HeaderComponent :is-hidden="isHidden" />

    <NuxtPage />

    <FooterComponent />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useHead } from "#imports";
import seoData from "~/config/seo.json";

const isMounted = ref(false);
const isHidden = ref(false);
let lastScroll = 0;
let scrollTimeout = null;

// ------------------------------
// Скролл-хидер
// ------------------------------
const handleScroll = () => {
  const currentScroll = window.scrollY;
  if (Math.abs(currentScroll - lastScroll) < 10) return;

  if (currentScroll > lastScroll && currentScroll > 100) {
    isHidden.value = true;
  } else if (currentScroll < lastScroll) {
    isHidden.value = false;
  }

  lastScroll = currentScroll;

  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    if (currentScroll > 50) isHidden.value = false;
  }, 500);
};

onMounted(() => {
  isMounted.value = true;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// ------------------------------
// SEO
// ------------------------------
const { locale } = useI18n();

watch(
  locale,
  (newLocale) => {
    const seo = seoData[newLocale] || seoData.en;
    useHead({
      title: seo.title, // Автоматически добавится “| AdovDev”
      meta: [
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:image", content: seo.ogImage },
        { property: "og:type", content: "website" },
      ],
    });
  },
  { immediate: true }
);
</script>
