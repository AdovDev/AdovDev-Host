<template>
  <section class="py-20 bgFonDev light:bgFon">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-white mb-16">Услуги</h2>
      
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Web Design -->
        <div class="bg-gradient-to-br from-blue-900/30 to-blue-800/20 backdrop-blur-lg p-8 border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
          <div class="text-center">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
              <Icon name="heroicons:computer-desktop" class="w-8 h-8 text-red-400" />
            </div>
            
            <h3 class="text-xl font-semibold text-white mb-4">Веб дизайн</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Наилучший дизайн среди конкурентов
            </p>
          </div>
        </div>
        
        <!-- Development -->
        <div class="bg-gradient-to-br from-purple-900/30 to-purple-800/20 backdrop-blur-lg p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
          <div class="text-center">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
              <Icon name="heroicons:code-bracket" class="w-8 h-8 text-red-400" />
            </div>
            
            <h3 class="text-xl font-semibold text-white mb-4">Разработка</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Наилучшее качество среди конкурентов
            </p>
          </div>
        </div>
        
        <!-- SEO -->
        <div class="bg-gradient-to-br from-teal-900/30 to-teal-800/20 backdrop-blur-lg p-8 border border-teal-700/30 hover:border-teal-500/50 transition-all duration-300 hover:scale-105">
          <div class="text-center">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center border border-red-500/30">
              <Icon name="heroicons:rocket-launch" class="w-8 h-8 text-red-400" />
            </div>
            
            <h3 class="text-xl font-semibold text-white mb-4">SEO</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Наилучшая SEO оптимизация среди конкурентов
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Services section logic
</script>