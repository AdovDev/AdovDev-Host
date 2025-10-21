<template>
  <section class="py-15 bgFonDev w-full light:bgFon">
    <div class="w-full">
      <h2 class="text-4xl font-bold text-center text-white mb-16">{{ t("services.title") }}</h2>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 w-full md:grid-cols-3 gap-8">
        <!-- Web Design -->
        <div
          class="bg-gradient-to-br rounded-4xl from-blue-900/10 to-teal-800/10 backdrop-blur-glass shadow-glass p-8 border border-teal-700/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon
                name="heroicons:computer-desktop"
                class="w-8 h-8 text-gray-100"
              />
            </div>

            <h3 class="text-xl font-semibold text-white mb-4">{{ t("services.web") }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("services.descriptionWeb") }}
            </p>
          </div>
        </div>

        <!-- Development -->
        <div
          class="bg-gradient-to-br rounded-4xl from-teal-900/10 to-teal-800/10 backdrop-blur-glass shadow-glass p-8 border border-teal-700/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon
                name="heroicons:code-bracket"
                class="w-8 h-8 text-gray-100"
              />
            </div>

            <h3 class="text-xl font-semibold text-white mb-4">
              {{ t("services.dev") }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("services.descriptionDev") }}
            </p>
          </div>
        </div>

        <!-- SEO -->
        <div
          class="bg-gradient-to-br rounded-4xl from-teal-900/10 to-teal-800/10 backdrop-blur-glass shadow-glass p-8 border border-teal-700/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon
                name="heroicons:rocket-launch"
                class="w-8 h-8 text-gray-100"
              />
            </div>

            <h3 class="text-xl font-semibold text-white mb-4">SEO</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("services.descriptionSeo") }}
            </p>
          </div>
        </div>

        <!-- telegram bot-->
        <div
          class="bg-gradient-to-br rounded-4xl from-teal-900/10 to-teal-800/10 backdrop-blur-glass shadow-glass p-8 border border-teal-700/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon
                name="heroicons:chat-bubble-bottom-center-text"
                class="w-8 h-8 text-gray-100"
              />
            </div>

            <h3 class="text-xl font-semibold text-white mb-4">{{ t("services.telegram") }}</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("services.descriptionTelegram") }}
            </p>
          </div>
        </div>

        <!-- Mobile developer -->
        <div
          class="bg-gradient-to-br rounded-4xl from-teal-900/10 to-teal-800/10 backdrop-blur-glass shadow-glass p-8 border border-teal-700/20 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon
                name="heroicons:device-phone-mobile"
                class="w-8 h-8 text-gray-100"
              />
            </div>

            <h3 class="text-xl font-semibold text-white mb-4">
              {{ t("services.mobile") }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              {{ t("services.descriptionMobile") }}
            </p>
          </div>
        </div>

        <!-- view project button-->
        <NuxtLink
          to="/portfolio"
          class="bg-gradient-to-br rounded-4xl from-teal-900/10 to-blue-800/20 backdrop-blur-glass shadow-glass p-8 border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
        >
          <div class="text-center">
            <!-- Icon -->
            <div
              class="w-16 h-16 mx-auto rounded-4xl mb-6 bg-gradient-to-br from-gray-500/20 to-gray-600/20 flex items-center justify-center border border-gray-500/30"
            >
              <Icon name="heroicons:plus" class="w-8 h-8 text-gray-100" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
              {{ t("services.checkProjects") }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Services section logic
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
