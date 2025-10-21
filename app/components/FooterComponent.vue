<template>
  <footer class="bgFonDev w-full mt-30">
    <div class="w-full mx-auto py-10 border-t border-gray-800">
      <div class="grid grid-cols-2 w-full md:grid-cols-4 gap-15">
        <!-- Logo & Description -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2 cursor-pointer">
          <img src="/svg/logo.svg" alt="logo" class="h-10 w-10 bg-white/5 backdrop-blur-glass shadow-glass rounded-full">
          <span class="text-xl font-bold text-white">AdovDev</span>
        </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ t("footer.description") }}
          </p>
          
          <div class="flex space-x-4">
            <div class="text-gray-400 text-sm">{{ t("footer.address") }}</div>
          </div>
        </div>
        
        <!-- Services -->
        <div class="container mt-4 flex flex-col justify-start items-end text-end">
          <h4 class="text-white font-semibold mb-4">{{ t("footer.services") }}</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t("footer.web") }}</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t("footer.dev") }}</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">{{ t("footer.seo") }}</a></li>
          </ul>
        </div>
        <!-- Contacts -->
        <div class="container mt-4 flex flex-col gap-2 justify-start items-end text-end">
          <h4 class="text-white font-semibold mb-2">{{ t("footer.contact") }}</h4>
          <div class="flex space-x-4">
            <a href="https://t.me/Egonys_korion" class="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">{{ t("footer.socialTg") }}</a>
          </div>
          <div class="flex space-x-4">
            <a href="mailto:adovdev@gmail.com" class="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer">аdovdev@gmail.com</a>
          </div>
        </div>
        
        <!-- Socials -->
        <div class="container mt-4 flex flex-col justify-start items-end text-end">
          <h4 class="text-white font-semibold mb-4">{{ t("footer.socials") }}</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="https://t.me/adovdev" class="text-gray-400 hover:text-white transition-colors">Telegram</a></li>
            <li><a href="https://github.com/MrL1s" class="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
            <li><a href="https://www.instagram.com/egonys.model" class="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-10 pt-8">
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            {{ t("footer.legal") }}
          </div>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
import { useI18n } from '#imports';

const { t } = useI18n();

</script>