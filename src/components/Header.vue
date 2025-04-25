<template>
  <header class="bg-neutral-900 text-white p-6 shadow-md top-4 rounded-lg fixed left-4 w-[calc(100%-32px)] z-50">
    <nav class="mx-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">MonSite</h1>
      <ul class="flex gap-4 item-center">
        <router-link to="/templateEditor">
        <button @click="emitClose" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Créer un template
        </button>
      </router-link>
        <li class="my-auto"><router-link to="/" class="hover:underline">Accueil</router-link></li>
        <li class="my-auto"><router-link to="/about" class="hover:underline">À propos</router-link></li>
        <li class="my-auto"><router-link to="/dashboard" class="hover:underline">Dashboard</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>
