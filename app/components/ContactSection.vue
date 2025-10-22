<template>
  <section
    id="contacts"
    class="py-10 bg-gradient-to-br bgFonDev relative"
  >
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-gray-800 pt-10">
        
        <!-- Левая часть — форма -->
        <div class="flex flex-col md:flex-row items-center justify-center relative">
          <div
            class="bg-gradient-to-br rounded-4xl shadowDev to-white/10 from-white/5 backdrop-blur-glass shadow-glass p-8 border border-white/20 w-full max-w-md"
          >
            <h2 class="text-2xl font-bold text-white mb-8 text-center">
              {{ t("contactSection.discussProject") }}
            </h2>

            <form class="space-y-6" @submit.prevent="submitForm">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col">
                  <label class="block text-sm text-white mb-2">{{
                    t("contactSection.firstName")
                  }}</label>
                  <input
                    v-model="form.firstName"
                    class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-300/40 outline-0 transition duration-300 ease-in-out"
                  >
                </div>
                <div class="flex flex-col">
                  <label class="block text-sm text-white mb-2">{{
                    t("contactSection.lastName")
                  }}</label>
                  <input
                    v-model="form.lastName"
                    class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                  >
                </div>
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">{{
                  t("contactSection.email")
                }}</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                >
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">{{
                  t("contactSection.phone")
                }}</label>
                <input
                  v-model="form.phone"
                  class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                >
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">{{
                  t("contactSection.message")
                }}</label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  maxlength="500"
                  class="border-white/20 border-2 px-4 py-2 rounded-t-3xl rounded-bl-3xl rounded-br-sm focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                />
              </div>

              <button
                type="submit"
                class="w-full cursor-pointer bg-gray-700/90 hover:bg-teal-600/30 text-white font-bold py-2 rounded-full transition duration-300 ease-in-out"
                :loading="isSubmitting"
              >
                {{ t("contactSection.send") }}
              </button>
            </form>
          </div>

          <!-- Hover Actions (адаптированы под мобильные устройства) -->
          <div class="flex max-[75rem]:hidden md:flex-col ml-0 md:ml-4 mt-6 md:mt-0 space-x-4 md:space-x-0">
            <!-- Telegram -->
            <div
              class="group relative w-12 h-30 cursor-pointer bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-t-full flex items-center justify-center border border-blue-500/20"
              @click="telegram"
            >
              <Icon name="mdi:telegram" class="text-white w-6 h-6" />
              <div
                class="absolute top-0 left-full h-30 ml-2 w-60 bg-blue-900/10 backdrop-blur-glass shadow-glass border border-blue-500/20 rounded-3xl p-4 text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ease-out z-10 text-start hidden md:block"
              >
                <h3 class="font-bold text-blue-400 mb-1">
                  {{ t("contactSection.telegram") }}
                </h3>
                <p class="text-sm text-gray-300">
                  {{ t("contactSection.telegramText") }}
                </p>
                <a
                  href="https://t.me/adovdev"
                  target="_blank"
                  class="inline-block mt-2 text-sm flex-1 bg-blue-500 text-white rounded-2xl px-3 py-1 hover:opacity-90 transition"
                >
                  {{ t("contactSection.open") }}
                </a>
              </div>
            </div>

            <!-- Email -->
            <div
              class="group relative w-12 h-30 cursor-pointer bg-gradient-to-br from-teal-500/5 to-teal-600/5 flex items-center rounded-b-full justify-center border border-teal-500/20"
              @click="mail"
            >
              <Icon name="heroicons:envelope" class="text-white w-6 h-6" />
              <div
                class="absolute top-0 left-full h-30 ml-2 w-60 bg-teal-900/10 border backdrop-blur-glass shadow-glass border-teal-500/20 rounded-3xl p-4 text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 ease-out z-10 hidden md:block"
              >
                <h3 class="font-bold text-teal-400 mb-1">Email</h3>
                <p class="text-sm text-gray-300">adovdev@gmail.com</p>
                <a
                  href="mailto:adovdev@gmail.com"
                  class="inline-block mt-2 text-sm bg-teal-600 text-white rounded-2xl px-3 py-1 hover:opacity-90 transition"
                >
                  {{ t("contactSection.write") }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Правая часть — текст -->
        <div class="text-center lg:text-left space-y-6">
          <h3 class="text-3xl font-bold text-white">
            {{ t("contactSection.getInTouch") }}
          </h3>
          <p class="text-gray-300 leading-relaxed">
            {{ t("contactSection.infoText") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "#i18n";

const { t } = useI18n();

const mail = () => {
  window.open("mailto:adovdev@gmail.com");
};

const telegram = () => {
  window.open("https://t.me/adovdev", "_blank");
};

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);

function submitForm() {
  isSubmitting.value = true;
  console.log(form);
  setTimeout(() => {
    isSubmitting.value = false;
    alert(t("contactSection.formSent"));
  }, 1000);
}
</script>
