<template>
    <header class=" bg-neutral-900 text-white p-6 shadow-md mt-4 mx-4 rounded-lg">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">MonSite</h1>
        <ul class="flex gap-4">
          <li><router-link to="/" class="hover:underline">Accueil</router-link></li>
          <li><router-link to="/about" class="hover:underline">À propos</router-link></li>
          <li><router-link to="/dashboard" class="hover:underline">Dashboard</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  