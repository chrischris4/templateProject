<template>
    <!-- Image Grid -->
    <div class="flex flex-col  border-4 border-white/0 hover:border-blue-500 w-full pb-4 cursor-pointer">
        <h2 class=" text-2xl mt-8 mb-2 font-bold w-11/12 mx-auto">Section title</h2>
        <div
            class="grid grid-cols-1 md:grid-cols-3 gap-2 mx-auto relative w-11/12">
            <CardBlock />
            <CardBlock />
            <CardBlock />
        </div>
    </div>
</template>

<script setup>
import { inject } from 'vue';
const openModal = inject('openModal');
import CardBlock from './CardBlock.vue';
</script>