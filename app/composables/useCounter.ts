import { ref, onMounted } from 'vue'

export function useCounter(target: number, duration = 1500) {
  const count = ref(0)
  const started = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry) return // безопасно на случай undefined
          if (entry.isIntersecting && !started.value) {
            started.value = true
            entry.target.classList.add('show') // для fade-up
            
            const start = performance.now()

            function animate(now: number) {
              const progress = Math.min((now - start) / duration, 1)
              count.value = Math.floor(progress * target)
              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            requestAnimationFrame(animate)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.9 }
    )

    const elements = document.querySelectorAll('.fade-counter')
    elements.forEach((el) => observer.observe(el))
  })

  return count
}
