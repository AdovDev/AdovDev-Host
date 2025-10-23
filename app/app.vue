<template>
  <div
    v-if="!isMounted"
    class="bg-black fixed inset-0 z-100 flex items-center justify-center"
  >
    <p class="text-center mt-10 text-2xl text-white">Загрузка...</p>
  </div>

  <div class="bgFonDev min-h-screen relative sm:mx-30 max-[40rem]:mx-10">
    <HeaderComponent :is-hidden="isHidden" />
    <NuxtPage />
    <FooterComponent class="fade-up" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "vue-i18n";
import { useHead, useRoute } from "#imports";
import { useScrollReveal } from "~/composables/useScrollReveal";
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
const route = useRoute();

watch(
  locale,
  (newLocale) => {
    const seo = seoData[newLocale] || seoData.en;
    const currentUrl = `https://adovdev.com${route.fullPath}`;

    useHead({
      htmlAttrs: {
        lang: newLocale,
      },
      title: seo.title,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:image", content: seo.ogImage },
        { property: "og:type", content: "website" },
        { property: "og:url", content: currentUrl },
        { name: "theme-color", content: "#111111" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:image", content: seo.ogImage },
      ],
      link: [
        { rel: "canonical", href: currentUrl },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
      ],
    });
  },
  { immediate: true }
);

useScrollReveal();
</script>
