<template>
  <section id="projects" class="py-20 bgFonDev light:bgFon">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center text-white mb-16">Проекты</h2>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = ref([
  { id: 1, name: 'MONEY', type: 'fintech', logo: 'MONEY' },
  { id: 2, name: 'ZIG', type: 'crypto', logo: 'ZIG' },
  { id: 3, name: 'QUO', type: 'trading', logo: 'QUO' },
  { id: 4, name: 'Adov', type: 'agency', logo: 'Adov' },
  { id: 5, name: 'MONEY', type: 'fintech', logo: 'MONEY' },
  { id: 6, name: 'ZIG', type: 'crypto', logo: 'ZIG' },
  { id: 7, name: 'QUO', type: 'trading', logo: 'QUO' },
  { id: 8, name: 'AU', type: 'luxury', logo: 'AU' }
])
</script>