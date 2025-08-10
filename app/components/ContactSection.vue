<template>
  <section id="contacts" class="py-20 bg-gradient-to-br bgFonDev light:bgFon">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-between gap-12 items-center">
          <!-- Contact Form -->
          <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-lg p-8 border border-teal-700/30">
            <h2 class="text-2xl font-bold text-white mb-8 text-center">Обсудим проект?</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-teal-300 mb-2">Имя</label>
                  <UInput 
                    v-model="form.firstName"
                    placeholder="Иван"
                    variant="outline"
                    color="teal"
                    class="bg-gray-800/50"
                  />
                </div>
                <div>
                  <label class="block text-sm text-teal-300 mb-2">Фамилия</label>
                  <UInput 
                    v-model="form.lastName"
                    placeholder="Фамилия"
                    variant="outline"
                    color="teal"
                    class="bg-gray-800/50"
                  />
                </div>
              </div>
              
              <!-- Email -->
              <div>
                <label class="block text-sm text-teal-300 mb-2">Email</label>
                <UInput 
                  v-model="form.email"
                  placeholder="test@gmail.com"
                  type="email"
                  variant="outline"
                  color="teal"
                  class="bg-gray-800/50"
                />
              </div>
              
              <!-- Phone -->
              <div>
                <label class="block text-sm text-teal-300 mb-2">Номер телефона</label>
                <UInput 
                  v-model="form.phone"
                  placeholder="+7 (123) 456-78-90"
                  variant="outline"
                  color="teal"
                  class="bg-gray-800/50"
                />
              </div>
              
              <!-- Message -->
              <div>
                <label class="block text-sm text-teal-300 mb-2">Сообщение</label>
                <UTextarea 
                  v-model="form.message"
                  placeholder="Ты хочешь, заказ?"
                  rows="4"
                  variant="outline"
                  color="teal"
                  class="bg-gray-800/50"
                />
              </div>
              
              <!-- Submit Button -->
              <UButton 
                type="submit"
                color="teal"
                size="lg"
                class="w-full"
                :loading="isSubmitting"
              >
                Отправить!
              </UButton>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-3xl font-bold text-white mb-6">Свяжитесь с нами</h3>
              <p class="text-gray-300 leading-relaxed">
                Готовы обсудить ваш проект? Заполните форму, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>
            
            <!-- Contact Methods -->
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center border border-teal-500/30">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p class="text-white font-medium">Email</p>
                  <p class="text-gray-400">hello@adovdev.com</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-500/20 to-teal-600/20 flex items-center justify-center border border-teal-500/30">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <p class="text-white font-medium">Телефон</p>
                  <p class="text-gray-400">+7 (999) 123-45-67</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Handle form submission
    console.log('Form submitted:', form.value)
    
    // Reset form
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
    
    // Show success message
    // You can add toast notification here
    
  } catch (error) {
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>