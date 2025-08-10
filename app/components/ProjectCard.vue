<template>
  <div class="group cursor-pointer">
    <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg p-8 border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
      <!-- Project Logo/Icon -->
      <div class="flex items-center justify-center h-24 mb-6">
        <div class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {{ project.logo }}
        </div>
      </div>
      
      <!-- Project Info -->
      <div class="text-center">
        <h3 class="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {{ project.name }}
        </h3>
        <p class="text-sm text-gray-400 capitalize">
          {{ project.type }}
        </p>
      </div>
      
      <!-- Hover Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.group {
  position: relative;
}
</style>