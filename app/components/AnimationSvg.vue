<template>
  <div class="flex flex-col justify-center items-center">
    <div class="container flex justify-center items-center gap-4">
      <img
        src="/svg/3d-left-top.svg"
        alt="Left Top"
        class="w-30 h-30 object-cover animate-breath-left"
      />
      <img
        src="/svg/3d-right-top.svg"
        alt="Right Top"
        class="w-30 h-30 object-cover animate-breath-right"
      />
    </div>
    <img
      src="/svg/3d-bottom.svg"
      alt="Bottom"
      class="w-30 h-30 object-cover animate-breath-bottom"
    />
  </div>
</template>

<style scoped>
@keyframes breath-left {
  0%, 100% {
    transform: translateX(0) rotate(0deg);
  }
  50% {
    transform: translateX(-8px) rotate(-5deg);
  }
}

@keyframes breath-right {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(8px) rotate(5deg);
  }
}

@keyframes breath-bottom {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-6px, -6px) rotate(-6deg);
  }
}

.animate-breath-left {
  animation: breath-left 3s ease-in-out infinite;
}

.animate-breath-right {
  animation: breath-right 3.5s ease-in-out infinite;
}

.animate-breath-bottom {
  animation: breath-bottom 4s ease-in-out infinite;
}
</style>
