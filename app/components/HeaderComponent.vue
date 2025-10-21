<template>
  <header
    :class="[
      'fixed top-5 left-0 w-full rounded-full z-50 transition-transform duration-300',
      isHidden ? '-translate-y-[105%]' : 'translate-y-0',
    ]"
  >
    <div
      class="mx-26 px-4 rounded-full header-blur-glass header-shadow-glass bg-black/5 border border-white/10"
    >
      <div class="w-full">
        <div class="flex items-center justify-between py-4">
          <!-- Logo -->
          <NuxtLink
            :to="langRoute('/')"
            class="flex items-center justify-start gap-5 w-[280px] cursor-pointer"
          >
            <img
              src="/svg/logo.svg"
              alt="Logo"
              class="h-10 w-10 bg-white/5 rounded-full"
            />
            <span class="text-xl font-bold text-white">AdovDev</span>
          </NuxtLink>

          <!-- Navigation -->
          <nav class="hidden md:flex text-md items-center space-x-8">
            <NuxtLink
              :to="langRoute('/about')"
              class="text-white hover:border-b font-semibold duration-50"
            >
              {{ t("header.about") }}
            </NuxtLink>
            <NuxtLink
              :to="langRoute('/portfolio')"
              class="text-white hover:border-b font-semibold duration-50"
            >
              {{ t("header.portfolio") }}
            </NuxtLink>
            <NuxtLink
              :to="langRoute('/contact')"
              class="text-white hover:border-b font-semibold duration-50"
            >
              {{ t("header.contact") }}
            </NuxtLink>
          </nav>

          <!-- Action Buttons -->
          <div class="flex items-center space-x-4 relative">
            <!-- Language Switcher -->
            <div ref="langWrapper" class="relative">
              <button
                type="button"
                class="buttonHeader flex items-center gap-2 focus:outline-none"
                aria-expanded="isLangOpen"
                @click="toggleLanguageMenu"
              >
                <img :src="currentLanguage.flag" class="w-6 h-6" />
                <span class="font-semibold">{{
                  currentLanguage.code.toUpperCase()
                }}</span>
              </button>

              <transition name="fade-scale">
                <div
                  v-if="isLangOpen"
                  class="absolute -right-37 mt-7 w-50 bg-white/5 header-blur-glass header-shadow-glass cursor-default border border-white/10 rounded-4xl overflow-hidden shadow-lg z-50 p-3"
                >
                  <!-- Buttons: English / Russian -->
                  <div class="flex flex-col gap-2">
                    <button
                      type="button"
                      class="buttonHeader flex items-center gap-3 justify-center px-3 py-2 w-full"
                      @click="selectLanguage('en')"
                    >
                      <img src="/svg/en.svg" class="w-6 h-6" alt="EN" />
                      <span class="text-md font-semibold text-white"
                        >English</span
                      >
                    </button>

                    <button
                      type="button"
                      class="buttonHeader flex items-center gap-3 justify-center px-3 py-2 w-full"
                      @click="selectLanguage('ru')"
                    >
                      <img src="/svg/ru.svg" class="w-6 h-6" alt="RU" />
                      <span class="text-md font-semibold text-white"
                        >Русский</span
                      >
                    </button>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Contact Popup -->
            <div ref="contactWrapper" class="relative">
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
                    <img src="/svg/tg.svg" class="w-5 h-5" />
                    Telegram
                  </button>

                  <button
                    type="button"
                    class="buttonHeader flex items-center gap-2 justify-center"
                    @click="openEmail"
                  >
                    <Icon name="heroicons:envelope" class="w-5 h-5" />
                    Email
                  </button>
                </div>
              </transition>
            </div>
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

defineProps({ isHidden: { type: Boolean, default: false } });

const { locale, setLocale, t } = useI18n();
const router = useRouter();

// список языков
const languages = [
  { code: "en", flag: "/svg/en.svg", label: "English" },
  { code: "ru", flag: "/svg/ru.svg", label: "Русский" },
];

const currentLanguage = computed(
  () => languages.find((l) => l.code === locale.value) || languages[0]
);

const isLangOpen = ref(false);
const isContactOpen = ref(false);

const langWrapper = ref(null);
const contactWrapper = ref(null);

const langRoute = (path) => {
  if (locale.value === 'ru') {
    return path === '/' ? '/ru' : '/ru' + path;
  }
  return path;
};



// === Сохраняем выбранный язык в localStorage ===
const selectLanguage = (code) => {
  if (locale.value === code) {
    isLangOpen.value = false;
    return;
  }

  setLocale(code);
  localStorage.setItem("adovdev-lang", code); // 🧠 сохраняем язык

  const path = router.currentRoute.value.fullPath;
  if (code === "ru") {
    if (!path.startsWith("/ru")) {
      router.push("/ru" + (path === "/" ? "" : path));
    }
  } else {
    if (path.startsWith("/ru")) {
      const newPath = path.replace(/^\/ru/, "") || "/";
      router.push(newPath);
    }
  }

  isLangOpen.value = false;
};

// === При загрузке страницы восстанавливаем язык ===
onMounted(() => {
  const savedLang = localStorage.getItem('adovdev-lang');
  if (savedLang && savedLang !== locale.value) {
    setLocale(savedLang);

    const path = router.currentRoute.value.fullPath;
    if (savedLang === 'ru' && !path.startsWith('/ru')) {
      router.push('/ru' + (path === '/' ? '' : path));
    } else if (savedLang === 'en' && path.startsWith('/ru')) {
      router.push(path.replace(/^\/ru/, '') || '/');
    }
  }
});


onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("click", handleDocumentClick);
});

// === Прочее остаётся как есть ===
const toggleLanguageMenu = () => {
  isLangOpen.value = !isLangOpen.value;
  if (isLangOpen.value) isContactOpen.value = false;
};
const toggleContactPopup = () => {
  isContactOpen.value = !isContactOpen.value;
  if (isContactOpen.value) isLangOpen.value = false;
};

const openTelegram = () => {
  window.open("https://t.me/adovdev", "_blank");
};
const openEmail = () => {
  window.location.href = "mailto:adovdev@gmail.com";
};

const handleScroll = () => {
  if (isLangOpen.value || isContactOpen.value) {
    isLangOpen.value = false;
    isContactOpen.value = false;
  }
};
const handleDocumentClick = (e) => {
  const lw = langWrapper.value;
  const cw = contactWrapper.value;
  const target = e.target;
  if (isLangOpen.value && lw && !lw.contains(target)) {
    isLangOpen.value = false;
  }
  if (isContactOpen.value && cw && !cw.contains(target)) {
    isContactOpen.value = false;
  }
};

// закрытие при переходах
watch(
  () => router.currentRoute.value.fullPath,
  () => {
    isLangOpen.value = false;
    isContactOpen.value = false;
  }
);
</script>


<style scoped>
@import "tailwindcss";
/* Transition used for both popups */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.22s ease-out;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(-6px);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.buttonHeader {
  @apply border py-2 px-4 cursor-pointer text-center rounded-full bg-white/5 hover:bg-white/10 border-white/10 hover:border-sky-300/30 transition-all duration-300 ease-in-out;
  backdrop-filter: blur(10px) saturate(160%) brightness(90%);
  -webkit-backdrop-filter: blur(10px) saturate(160%) brightness(90%);
  box-shadow: 0 4px 24px rgba(255, 255, 255, 0.05),
    inset 0 0 12px rgba(255, 255, 255, 0.04);
}
</style>
