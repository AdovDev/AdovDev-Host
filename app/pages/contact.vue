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

// Только на клиенте, чтобы prerender не падал
if (import.meta.client) {
  const currentLocale = locale.value || "en";

  setSeo({
    page: "contact",
    seoData: {
      title: "Contact",
      description: "Contact Adov.dev",
    },
    url: `https://adov.dev${currentLocale === "ru" ? "/ru" : ""}`,
    hreflangs: [
      { lang: "en", href: "https://adov.dev" },
      { lang: "ru", href: "https://adov.dev/ru" },
    ],
  });
}

useScrollReveal();
</script>
