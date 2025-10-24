import { ref, onMounted } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver>()

  onMounted(() => {
    // защита для SSR
    if (!import.meta.client) return

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('.fade-up')
    elements.forEach((el) => observer.value?.observe(el))
  })
}
