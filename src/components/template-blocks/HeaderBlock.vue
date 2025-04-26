<template>
  <header :style="{ backgroundColor: headerStyle.backgroundColor, color: headerStyle.textColor }"
    @click="() => openModal('header', headerStyle)"
    :class="[headerStyle.displayType, 'text-neutral-900 p-6 border-4 border-white/0 relative hover:border-blue-400 cursor-pointer']">
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">MonSite</h1>
      <ul class="flex gap-4">
        <li v-for="(link, index) in headerStyle.links" :key="index">
          <router-link :to="link.url" class="hover:underline">{{ link.text }}</router-link>
        </li>
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
  links: [
    { text: 'Link_1', url: '#' },
    { text: 'Link_2', url: '#' },
    { text: 'Link_3', url: '#' },
  ],
});
</script>