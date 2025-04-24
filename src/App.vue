<script setup>
</script>

<template>
  <div>
    <nav class="flex gap-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view></router-view>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style>
