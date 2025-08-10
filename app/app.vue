<template>
  <div>
    <NuxtPage />
    <p v-if="!isMounted">Загрузка...</p>
  </div>
</template>

<script setup>
const isMounted = ref(false);
onMounted(() => { isMounted.value = true });
</script>