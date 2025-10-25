<template>
  <section
    id="contacts"
    class="py-10 w-full bg-gradient-to-br bgFonDev relative"
  >
    <div class="w-full">
      <div
        class="grid grid-cols-1 w-full min-[60rem]:grid-cols-2 gap-12 items-center min-[60rem]:justify-between justify-center border-gray-800 pt-10"
      >
        <!-- Левая часть — форма -->
        <div
          class="flex flex-col md:flex-row items-center justify-center min-[60rem]:justify-start relative"
        >
          <div
            class="bg-gradient-to-br rounded-4xl shadowDev to-white/10 from-white/5 shadow-glass p-8 border border-white/20 w-full max-w-md"
          >
            <h2 class="text-2xl font-bold text-white mb-8 text-center">
              {{ t("contactSection.discussProject") }}
            </h2>

            <form class="space-y-6" @submit.prevent="submitForm">
              <!-- Поля формы (firstName, lastName, email, phone, message) -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col">
                  <label class="block text-sm text-white mb-2">
                    {{ t("contactSection.firstName") }}
                  </label>
                  <input
                    v-model="form.firstName"
                    required
                    class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-300/40 outline-0 transition duration-300 ease-in-out"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="block text-sm text-white mb-2">
                    {{ t("contactSection.lastName") }}
                  </label>
                  <input
                    v-model="form.lastName"
                    required
                    class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                  />
                </div>
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">
                  {{ t("contactSection.email") }}
                </label>
                <input
                  v-model="form.email"
                  required
                  type="email"
                  class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                />
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">
                  {{ t("contactSection.phone") }}
                </label>
                <input
                  v-model="form.phone"
                  class="border-white/20 border-2 px-4 py-2 rounded-full focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                />
              </div>

              <div class="flex flex-col">
                <label class="block text-sm text-white mb-2">
                  {{ t("contactSection.message") }}
                </label>
                <textarea
                  v-model="form.message"
                  rows="3"
                  maxlength="500"
                  class="border-white/20 border-2 px-4 py-2 rounded-t-3xl rounded-bl-3xl rounded-br-sm focus:border-teal-400/30 outline-0 transition duration-300 ease-in-out"
                />
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full cursor-pointer bg-gray-700/90 hover:bg-teal-600/30 text-white font-bold py-2 rounded-full transition duration-300 ease-in-out"
              >
                {{ t("contactSection.send") }}
              </button>
            </form>
          </div>

          <!-- Hover Actions (Telegram и Email) -->
          <div
            class="flex max-[75rem]:hidden md:flex-col ml-0 md:ml-4 mt-6 md:mt-0 space-x-4 md:space-x-0"
          >
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
          <h3 class="text-3xl text-center font-bold text-white">
            {{ t("contactSection.getInTouch") }}
          </h3>
          <p class="text-gray-300 text-center leading-relaxed">
            {{ t("contactSection.infoText") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Попап -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closePopup"
    >
      <div
        class="bg-white/5 backdrop-blur-glass shadow-glass border border-gray-500/20 rounded-4xl max-w-2xl w-full mx-4 p-4 min-[30rem]:p-8 relative animate-fadeIn max-h-[80vh] overflow-hidden"
      >
        <!-- Close button -->
        <button
          class="absolute backdrop-blur-glass shadow-glass top-0 right-0 bg-black/45 border-2 border-white/15 p-4 rounded-bl-4xl rounded-tr-4xl cursor-pointer text-white transition-all"
          @click="closePopup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 hover:scale-130 transition-all hover:rotate-90"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Title -->
        <h1 class="text-xl min-[30rem]:text-3xl font-bold mb-4 text-center">
          {{ popupTitle }}
        </h1>

        <!-- Scrollable content -->
        <div
          class="overflow-y-auto max-h-[64vh] pr-2 space-y-4 text-center"
          style="-webkit-overflow-scrolling: touch"
        >
          <p
            class="text-lg min-[30rem]:text-xl font-normal whitespace-pre-line text-white/90"
          >
            {{ popupText }}
          </p>
        </div>

        <!-- OK button -->
        <button
          class="mt-6 w-full bg-teal-600/50 cursor-pointer hover:bg-teal-600 text-white font-bold py-3 rounded-full transition-all"
          @click="closePopup"
        >
          {{ t("contactSection.popup.button") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useI18n } from "#i18n";
const { t } = useI18n();

const mail = () => window.open("mailto:adovdev@gmail.com");
const telegram = () => window.open("https://t.me/adovdev", "_blank");

const showPopup = ref(false); // теперь универсальный попап
const popupTitle = ref(""); // заголовок попапа
const popupText = ref(""); // текст попапа
const closePopup = () => (showPopup.value = false);

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);

const submitForm = async () => {
  if (isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    const token = await grecaptcha.execute(
      "6LeP0vYrAAAAAMjDl6Y1prpKgRRUU_PyRV4tUXpm",
      { action: "submit" }
    );

    const response = await fetch("~~/vendor/send.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        message: form.message,
        token,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      popupTitle.value = t("contactSection.popup.title");
      popupText.value = t("contactSection.popup.text");
      showPopup.value = true;
      Object.keys(form).forEach((key) => (form[key] = ""));
    } else {
      popupTitle.value = t("contactSection.popup.titleError");
      popupText.value = data.message || t("contactSection.popup.textError");
      showPopup.value = true;
      console.log("error");
    }
  } catch {
    popupTitle.value = t("contactSection.popup.titleError");
    popupText.value = t("contactSection.popup.textError");
    showPopup.value = true;
    console.log("error");
  }

  isSubmitting.value = false;
};
</script>
