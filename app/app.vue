<template>
  <div class="relative min-h-screen bgFonDev sm:mx-30 max-[40rem]:mx-10">

    <!-- Прелоадер -->
    <div id="page-preloader" class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
      <div class="loader border-4 border-t-teal-400 border-gray-700 rounded-full w-16 h-16 animate-spin"></div>
    </div>

    <HeaderComponent :is-hidden="isHidden" />
    <NuxtPage />
    <FooterComponent class="fade-up" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useScrollReveal } from "~/composables/useScrollReveal";

const isHidden = ref(false);
let lastScroll = 0;
let scrollTimeout = null;

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
  window.addEventListener("scroll", handleScroll);

  // Убираем прелоадер после полной загрузки страницы
  window.addEventListener("load", () => {
    const preloader = document.getElementById("page-preloader");
    if (preloader) {
      preloader.classList.add("opacity-0");
      setTimeout(() => preloader.remove(), 300); // плавный фейд
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Анимации
useScrollReveal();
</script>

<style scoped>
.loader {
  border-top-color: #14b8a6; /* teal-400 */
}
#page-preloader {
  transition: opacity 0.3s ease;
}
</style>
