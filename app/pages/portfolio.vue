<template>
  <div class="w-full my-30 flex flex-col gap-10">
    <ProjectsSection />
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { setSeo } from "~/utils/seo";
import { useScrollReveal } from "~/composables/useScrollReveal";

const { locale } = useI18n();

if (import.meta.client) {
  const currentLocale = locale.value || "en";
  const localePath = currentLocale === "ru" ? "/ru/" : "/";

  setSeo({
    page: "portfolio",
    url: localePath,
    hreflangs: [
      { lang: "en", href: "/" },
      { lang: "ru", href: "/ru/" },
    ],
  });
}

useScrollReveal();
</script>
