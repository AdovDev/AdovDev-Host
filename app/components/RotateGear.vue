<template>
  <div ref="gearContainer" class="fixed -top-1/2 blur-[10px] -right-1/2 w-full h-full overflow-visible pointer-events-none">
    <img
      src="/svg/gear.svg"
      alt="Gear"
      class="w-full h-full transform origin-center opacity-5"
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
rotation.value = window.scrollY * 0.1  // 0.3 – скорость вращения
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


