<template>
    <a class="flex flex-col group bg-white border-4 border-white/0 shadow-2xs hover:shadow-lg focus:outline-hidden focus:shadow-lg transition w-full relative hover:border-blue-500"
        href="#">
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
            <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out"
                src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
                alt="Card Image">
        </div>
        <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800">
                Card title
            </h3>
            <p class="mt-1 text-gray-500">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
        </div>
    </a>
</template>
<script setup>
import { inject } from 'vue';
const openModal = inject('openModal');
</script>