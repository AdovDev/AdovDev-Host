<template>
  <section class="flex fade-up flex-col items-center mt-10 w-full">
    <!-- Contact Form Section -->
    <ContactSection />
  </section>
</template>

<script setup>
import { setSeo } from "~/utils/seo";
import { useI18n } from "vue-i18n";
import { useScrollReveal } from "~/composables/useScrollReveal";

const { locale } = useI18n();

if (import.meta.client) {
  const currentLocale = locale.value || "en";
  const localePath = currentLocale === "ru" ? "/ru/" : "/";

  setSeo({
    page: "contact",
    url: localePath,
    hreflangs: [
      { lang: "en", href: "/" },
      { lang: "ru", href: "/ru/" },
    ],
  });
}

useScrollReveal();
</script>
