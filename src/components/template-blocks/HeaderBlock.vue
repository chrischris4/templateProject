<template>
  <header :style="{ backgroundColor: headerStyle.backgroundColor, color: headerStyle.textColor }"
    @click="() => openModal('header', headerStyle)"
    :class="[headerStyle.displayType, 'text-neutral-900 p-6 border-4 border-white/0 relative hover:border-blue-400 cursor-pointer']">
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">MonSite</h1>
      <ul class="flex gap-4">
        <li><router-link to="#" class="hover:underline">Accueil</router-link></li>
        <li><router-link to="#" class="hover:underline">À propos</router-link></li>
        <li><router-link to="#" class="hover:underline">Dashboard</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { inject, ref } from 'vue';
const openModal = inject('openModal');

const headerStyle = ref({
  backgroundColor: '#ffffff',
  textColor: '#000000',
  displayType: '',
});
</script>