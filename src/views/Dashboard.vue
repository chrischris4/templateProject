<script setup>
import TemplateLinks from '../components/TemplateLinks.vue';
import TemplateEditor from '../components/TemplateEditor.vue';
import { ref } from 'vue'
const isModalOpen = ref(false)
</script>

<template>
    <div class="mt-4 w-10/12 mx-auto relative">
        <TemplateEditor v-model:isOpen="isModalOpen" />
        <h2 class="mb-2">Mes templates</h2>
        <div class="flex gap-4">
            <div class="flex flex-col bg-white border border-dashed border-gray-200 rounded-xl p-4 md:p-5 w-1/3">
                <h3 class="text-lg font-bold text-gray-800">
                    Créer un template
                </h3>
                <p class="mt-1 text-xs font-medium uppercase text-transparent">
                    Card subtitle
                </p>
                <p class="mt-2 text-gray-500 dark:text-neutral-400">
                    Créer un template rapidement et facilement grâce à nos outils de personnalisation.
                </p>
                <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
                    href="#" @click.prevent="isModalOpen = true">
                    Commencer !
                    <svg class="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </a>
            </div>
            <TemplateLinks />
        </div>
    </div>
</template>


<style scoped></style>