<template>
    <div>
        <div @click="openModal" class="w-full mx-auto py-24 space-y-8 relative bg-neutral-600 border-4 border-white/0 hover:border-blue-400 text-gray-200 cursor-pointer">
            <button @click="openModal"
                class="flex items-center gap-2 text-white hover:text-gray-800 text-xl absolute -top-3 -right-3 bg-blue-500 rounded-full p-2">
                <span class="material-symbols-rounded cursor-pointer">
                    edit
                </span>
            </button>
            <div class="max-w-3xl text-center mx-auto">
                <h1 class="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 relative">
                    Now it's easier than ever to build products
                </h1>
            </div>
            <div class="max-w-3xl text-center mx-auto">
                <p class="text-lg relative">Preline is a large open-source project, crafted with Tailwind CSS
                    framework by Hmlstream.</p>
            </div>
        </div>
    </div>
    <!-- End Hero -->
</template>

<script setup>
import { inject } from 'vue';
const openModal = inject('openModal');
</script>