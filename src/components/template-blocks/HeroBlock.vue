<template>
    <div>
        <div class="w-full mx-auto py-24 space-y-8 mt-4 relative bg-neutral-600 rounded-xl text-gray-200">
            <button @click="openModal"
                class="flex items-center gap-2 text-white hover:text-gray-800 text-xl absolute -top-2 -right-2 bg-blue-500 rounded-full p-2">
                <span class="material-symbols-rounded cursor-pointer">
                    edit
                </span>
            </button>
            <!-- <img class="size-full absolute top-0 start-0 object-cover rounded-xl z-0"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Card Image"> -->
            <div class="max-w-3xl text-center mx-auto">
                <h1 class="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl z-10 relative">
                    Now it's easier than ever to build products
                </h1>
            </div>
            <div class="max-w-3xl text-center mx-auto">
                <p class="text-lg relative">Preline is a large open-source project, crafted with Tailwind CSS
                    framework by Hmlstream.</p>
            </div>
            <div class="text-center">
                <a class="inline-flex justify-center items-center gap-x-3 text-center bg-linear-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-hidden focus:shadow-blue-700/50 py-3 px-6"
                    href="#">
                    Get started
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </a>
            </div>
            <!-- End Buttons -->
        </div>
    </div>
    <!-- End Hero -->
</template>

<script setup>
import { inject } from 'vue';
const openModal = inject('openModal');
</script>