import { ref, onMounted } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver>()

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 } // 20% элемента должно быть в зоне видимости
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observer.value?.observe(el))
  })
}
