<template>
  <footer class="bgFonDev w-full mt-30">
    <div class="w-full mx-auto py-10 border-t border-gray-800 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      <div
        class="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 md:gap-15"
      >
        <!-- Logo & Description -->
        <div class="space-y-4">
          <div class="flex items-center max-[49.9rem]:justify-center space-x-2">
            <img
              src="/svg/logo.svg"
              alt="logo"
              class="h-10 w-10 max-[49.9rem]:h-12 max-[49.9rem]:w-12 bg-white/5 backdrop-blur-glass shadow-glass rounded-full"
            />
            <span class="text-xl max-[49.9rem]:text-2xl font-bold text-white">AdovDev</span>
          </div>
          <p class="text-gray-400 text-sm max-[49.9rem]:text-lg max-[49.9rem]:text-center leading-relaxed">
            {{ t("footer.description") }}
          </p>

          <div
            class="flex flex-col sm:flex-row sm:space-x-4 text-gray-400 text-sm max-[49.9rem]:text-lg max-[49.9rem]:text-center"
          >
            <span>{{ t("footer.address") }}</span>
          </div>
        </div>

        <!-- Services -->
        <div
          class="flex flex-col sm:items-end text-start sm:text-end mt-4 md:mt-0 max-[49.9rem]:text-center"
        >
          <h4 class="text-white font-semibold mb-4 max-[49.9rem]:text-xl">
            {{ t("footer.services") }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >{{ t("footer.web") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >{{ t("footer.dev") }}</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >{{ t("footer.seo") }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Contacts -->
        <div
          class="flex flex-col sm:items-end text-start sm:text-end mt-4 md:mt-0 gap-2 max-[49.9rem]:text-center"
        >
          <h4 class="text-white font-semibold mb-2 max-[49.9rem]:text-xl">
            {{ t("footer.contact") }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="https://t.me/Egonys_korion"
                class="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer max-[49.9rem]:text-lg"
                >{{ t("footer.socialTg") }}</a
              >
            </li>
            <li>
              <a
                href="mailto:adovdev@gmail.com"
                class="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer max-[49.9rem]:text-lg"
                >adovdev@gmail.com</a
              >
            </li>
          </ul>
        </div>

        <!-- Socials -->
        <div
          class="flex flex-col sm:items-end text-start sm:text-end mt-4 md:mt-0 max-[49.9rem]:text-center"
        >
          <h4 class="text-white font-semibold mb-4 max-[49.9rem]:text-xl">
            {{ t("footer.socials") }}
          </h4>
          <ul class="space-y-2 text-sm">
            <li class="flex justify-center items-center gap-2">
              <img src="/svg/tg.svg" class="w-6 h-6" alt="telegram">
              <a
                href="https://t.me/adovdev"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >Telegram</a
              >
            </li>
            <li class="flex justify-center items-center gap-2">
              <img src="/svg/github.svg" class="w-6 h-6" alt="github">
              <a
                href="https://github.com/MrL1s"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >GitHub</a
              >
            </li>
            <li class="flex justify-center items-center gap-2">
              <img src="/svg/instagram.svg" class="w-6 h-6" alt="instagram">
              <a
                href="https://www.instagram.com/egonys.model"
                class="text-gray-400 hover:text-white transition-colors max-[49.9rem]:text-lg"
                >Instagram</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-10 pt-8">
        <div
          class="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0"
        >
          <div class="text-gray-400 text-sm text-center md:text-left max-[49.9rem]:text-lg">
            {{ t("footer.legal") }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from "#imports";

const { t } = useI18n();
</script>
