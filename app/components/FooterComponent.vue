<template>
  <footer class="bgFonDev light:bgFon border-t border-gray-800">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-45"></div>
            <span class="text-xl font-bold text-white">AdovDev</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Студия по разработке сайтов, для малого, среднего, и большего бизнеса
          </p>
          <div class="flex space-x-4">
            <div class="text-gray-400 text-sm">📞 +7(999)999-99-99</div>
          </div>
          <div class="flex space-x-4">
            <div class="text-gray-400 text-sm">✉️ adovdev@gmail.com</div>
          </div>
          <div class="flex space-x-4">
            <div class="text-gray-400 text-sm">📍 Работаем везде, Rus</div>
          </div>
        </div>
        
        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-4">Услуги</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Веб дизайн</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Разработка</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">SEO</a></li>
          </ul>
        </div>
        
        <!-- About -->
        <div>
          <h4 class="text-white font-semibold mb-4">О нас</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">О нас</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Команда</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Карьера</a></li>
          </ul>
        </div>
        
        <!-- Legal -->
        <div>
          <h4 class="text-white font-semibold mb-4">Правовая информация</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Условия использования</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-gray-400 text-sm">
            © 2024 AdovDev. Все права защищены.
          </div>
          <div class="flex space-x-6 text-sm text-gray-400">
            <a href="#" class="hover:text-white transition-colors">Пользовательское соглашение</a>
            <a href="#" class="hover:text-white transition-colors">Условия использования</a>
            <a href="#" class="hover:text-white transition-colors">Политика cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>