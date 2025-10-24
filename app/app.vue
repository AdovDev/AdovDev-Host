<template>
  <div class="bgFonDev min-h-screen relative sm:mx-30 max-[40rem]:mx-10">
    <HeaderComponent :is-hidden="isHidden" />
    <NuxtPage />
    <FooterComponent class="fade-up" />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useScrollReveal } from "~/composables/useScrollReveal";

const isMounted = ref(false);
const isHidden = ref(false);
let lastScroll = 0;
let scrollTimeout = null;

// Скролл-хидер
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

// Анимации
useScrollReveal();
</script>
