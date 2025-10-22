<template>
  <div ref="gearContainer" class="absolute z-100 top-1 left-1 w-16 h-16 overflow-visible pointer-events-none">
    <img
      src="/svg/gear-white.svg"
      alt="Gear"
      class="w-full h-full transform origin-center"
      :style="{ rotate: rotation + 'deg' }"
    >
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const rotation = ref(0)
const gearContainer = ref(null)

const handleScroll = () => {
  // Меняем угол вращения в зависимости от прокрутки
rotation.value = window.scrollY * 0.3  // 0.3 – скорость вращения
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


