<template>
  <header class=" bg-neutral-900 text-white p-6 shadow-md mt-4 rounded-lg relative">
    <button @click="openModal"
      class="flex items-center gap-2 text-white hover:text-gray-800 text-xl absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
      <span class="material-symbols-rounded cursor-pointer">
        edit
      </span>
    </button>
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
import { inject } from 'vue';
const openModal = inject('openModal');
</script>