<template>
  <header
    :class="[
      'fixed top-5 left-0 w-full rounded-full z-50 transition-transform duration-300',
      isHidden ? '-translate-y-[105%]' : 'translate-y-0',
    ]"
  >
    <div
      class="bg-black/5 border border-white/10 max-[40rem]:mx-6 mx-26 px-4 rounded-full header-blur-glass header-shadow-glass "
    >
      <div class="w-full flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink
          :to="langRoute('/')"
          class="flex min-[60rem]:w-[275px] items-center max-[20rem]:gap-2 gap-5 cursor-pointer"
        >
          <img
            src="/svg/logo.svg"
            alt="Logo"
            class="h-10 w-10 bg-white/5 rounded-full"
          >
          <span class="min-[60rem]:text-2xl text-xl max-[15rem]:hidden font-bold text-white">AdovDev</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden min-[60rem]:flex items-center duration-300 space-x-8">
          <NuxtLink
            :to="langRoute('/about')"
            class="text-white hover:border-b font-semibold duration-50"
            >{{ t("header.about") }}</NuxtLink
          >
          <NuxtLink
            :to="langRoute('/portfolio')"
            class="text-white hover:border-b font-semibold duration-50"
            >{{ t("header.portfolio") }}</NuxtLink
          >
          <NuxtLink
            :to="langRoute('/contact')"
            class="text-white hover:border-b font-semibold duration-50"
            >{{ t("header.contact") }}</NuxtLink
          >
        </nav>

        <!-- Mobile Hamburger -->
        <div class="flex items-center min-[60rem]:hidden relative">
          <button class="buttonMobile p-2" @click="toggleMobileMenu">
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <transition name="fade-scale">
            <div
              v-if="isMobileMenuOpen"
              class="absolute -right-4 top-20 w-40 bg-white/5 header-blur-glass header-shadow-glass border border-white/10 rounded-4xl overflow-hidden shadow-lg z-50 p-3 flex flex-col gap-2"
            >
              <NuxtLink
                :to="langRoute('/about')"
                class="text-white py-2 px-3 rounded-full hover:bg-white/10"
                @click="closeMobileMenu"
                >{{ t("header.about") }}</NuxtLink
              >
              <NuxtLink
                :to="langRoute('/portfolio')"
                class="text-white py-2 px-3 rounded-full hover:bg-white/10"
                @click="closeMobileMenu"
                >{{ t("header.portfolio") }}</NuxtLink
              >
              <NuxtLink
                :to="langRoute('/contact')"
                class="text-white py-2 px-3 rounded-full hover:bg-white/10"
                @click="closeMobileMenu"
              >{{ t("header.contact") }}</NuxtLink
              >
              <hr class="border-white/10 my-1" >
              <button
                class="text-white py-2 px-3 rounded-full hover:bg-white/10 flex items-center gap-2"
                @click="selectLanguage('en')"
              >
                <img src="/svg/en.svg" class="w-5 h-5" > English
              </button>
              <button
                class="text-white py-2 px-3 rounded-full hover:bg-white/10 flex items-center gap-2"
                @click="selectLanguage('ru')"
              >
                <img src="/svg/ru.svg" class="w-5 h-5" > Русский
              </button>
            </div>
          </transition>
        </div>

        <!-- Language / Contact Buttons for desktop -->
        <div class="hidden min-[60rem]:flex items-center space-x-4 relative">
          <!-- Language Switcher -->
          <div ref="langWrapper" class="relative">
            <button
              type="button"
              class="buttonHeader flex items-center gap-2"
              @click="toggleLanguageMenu"
            >
              <img :src="currentLanguage.flag" class="w-6 h-6" >
              <span class="font-semibold">{{
                currentLanguage.code.toUpperCase()
              }}</span>
            </button>
            <transition name="fade-scale">
              <div
                v-if="isLangOpen"
                class="absolute -right-37 mt-7 w-50 bg-white/5 header-blur-glass header-shadow-glass cursor-default border border-white/10 rounded-4xl overflow-hidden shadow-lg z-50 p-3 flex flex-col gap-2"
              >
                <button
                  type="button"
                  class="buttonHeader flex items-center gap-3 justify-center px-3 py-2 w-full"
                  @click="selectLanguage('en')"
                >
                  <img src="/svg/en.svg" class="w-6 h-6" > English
                </button>
                <button
                  type="button"
                  class="buttonHeader flex items-center gap-3 justify-center px-3 py-2 w-full"
                  @click="selectLanguage('ru')"
                >
                  <img src="/svg/ru.svg" class="w-6 h-6" > Русский
                </button>
              </div>
            </transition>
          </div>

          <!-- Contact Popup -->
          <div ref="contactWrapper" class="relative text-nowrap">
            <button
              type="button"
              class="buttonHeader font-semibold"
              @click="toggleContactPopup"
            >
              {{ t("header.contactUs") }}
            </button>
            <transition name="fade-scale">
              <div
                v-if="isContactOpen"
                class="absolute -right-4 mt-7 w-80 bg-white/5 header-blur-glass header-shadow-glass border border-white/10 rounded-4xl overflow-hidden z-50 p-3 flex flex-col gap-3"
              >
                <button
                  type="button"
                  class="buttonHeader flex items-center gap-2 justify-center"
                  @click="openTelegram"
                >
                  <img src="/svg/tg.svg" class="w-5 h-5" > Telegram
                </button>
                <button
                  type="button"
                  class="buttonHeader flex items-center gap-2 justify-center"
                  @click="openEmail"
                >
                  <Icon name="heroicons:envelope" class="w-5 h-5" /> Email
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watch } from "vue";
import { useI18n } from "#i18n";
import { useRouter } from "vue-router";

const { locale, setLocale, t } = useI18n();
const router = useRouter();

const languages = [
  { code: "en", flag: "/svg/en.svg", label: "English" },
  { code: "ru", flag: "/svg/ru.svg", label: "Русский" },
];

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value) || languages[0]
);

const isLangOpen = ref(false);
const isContactOpen = ref(false);
const isMobileMenuOpen = ref(false);
const isHidden = ref(false);

let lastScroll = 0;
let scrollTimeout = null;

const langWrapper = ref(null);
const contactWrapper = ref(null);

const langRoute = (path) => locale.value === "ru" ? (path === "/" ? "/ru" : "/ru" + path) : path;

const toggleLanguageMenu = () => {
  isLangOpen.value = !isLangOpen.value;
  if (isLangOpen.value) isContactOpen.value = false;
};
const toggleContactPopup = () => {
  isContactOpen.value = !isContactOpen.value;
  if (isContactOpen.value) isLangOpen.value = false;
};
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const selectLanguage = (code) => {
  setLocale(code);
  localStorage.setItem("adovdev-lang", code);
  closeMobileMenu();
  isLangOpen.value = false;
};
const openTelegram = () => window.open("https://t.me/adovdev", "_blank");
const openEmail = () => (window.location.href = "mailto:adovdev@gmail.com");

// Скролл для скрытия хедера
const handleScroll = () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 70) {
    isHidden.value = true;
  } else {
    isLangOpen.value = false;
    isMobileMenuOpen.value = false;
    isContactOpen.value = false;
    isHidden.value = false;
  }
  lastScroll = current;

  // Выдвижение хедера через 1 сек после остановки
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isHidden.value = false;
  }, 1000);
};

const handleDocumentClick = (e) => {
  const lw = langWrapper.value;
  const cw = contactWrapper.value;
  const target = e.target;
  if (isLangOpen.value && lw && !lw.contains(target)) isLangOpen.value = false;
  if (isContactOpen.value && cw && !cw.contains(target))
    isContactOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  document.addEventListener("click", handleDocumentClick);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleDocumentClick);
  clearTimeout(scrollTimeout);
});

// Закрытие при переходах
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    isLangOpen.value = false;
    isContactOpen.value = false;
    closeMobileMenu();
  }
);
</script>

<style scoped>
@import "tailwindcss";
/* Transition used for popups */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s ease-out;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-6px);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.buttonMobile {
  @apply border py-4 px-4 cursor-pointer text-center rounded-full transition-all duration-300 ease-in-out;
  background-color: #03040a; /* fallback для всех */
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(255,255,255,0.05), inset 0 0 12px rgba(255,255,255,0.04);
}

.buttonHeader {
  @apply border py-2 px-4 cursor-pointer text-center rounded-full transition-all duration-300 ease-in-out;
  background-color: #03040a; /* fallback для всех */
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 24px rgba(255,255,255,0.05), inset 0 0 12px rgba(255,255,255,0.04);
}
/* fallback для браузеров без backdrop-filter */
@supports ((-webkit-backdrop-filter: blur(8px)) or (backdrop-filter: blur(8px))) {
  .buttonHeader,
  .buttonMobile {
    background-color: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px) saturate(160%) brightness(100%);
    -webkit-backdrop-filter: blur(10px) saturate(160%) brightness(100%);
  }
}

</style>
