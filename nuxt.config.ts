import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: [
    "@nuxt/ui",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/eslint",
    "reka-ui/nuxt",
    "@nuxtjs/i18n",
  ],
  app: {
    head: {
      titleTemplate: "%s | AdovDev",
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
      ],
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    langDir: "locales/",
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "ru", file: "ru.json", name: "Русский" },
    ],
    baseUrl: "https://adovdev.com",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  nitro: { prerender: { failOnError: true }, logLevel: 3 },
});
