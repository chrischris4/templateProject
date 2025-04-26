<template>
    <div
        class="fixed top-32 left-4 flex h-[calc(100vh-2rem)] w-1/6 flex-col rounded-xl bg-neutral-900 bg-clip-border p-4 text-gray-200 shadow-xl shadow-blue-gray-900/5">
        <div class="p-4 mb-2">
            <h5 class="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-gray-200">
                Sidebar
            </h5>
        </div>
        <nav class="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
            <div class="relative block w-full">
                <div role="button" @click="toggleCollapse"
                    class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none bg-blue-gray-50/50 text-start text-blue-gray-700 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <button type="button"
                        class=" cursor-pointer flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-900 hover:text-blue-gray-900">
                        <div class="grid mr-4 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <p
                            class="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
                            Theme
                        </p>
                        <span class="ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                stroke="currentColor" aria-hidden="true" class="w-4 h-4 mx-auto transition-transform"
                                :class="{ 'rotate-180': isOpen }">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <!-- Collapse Content -->
            <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
                <div v-show="isOpen" class="transition-all duration-300 w-11/12 mx-auto">
                    <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 hover:bg-neutral-700 hover:cursor-pointer">
                        <div class="grid mr-4 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        Inbox
                    </div>
                    <div role="button"
                        class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 hover:bg-neutral-700 hover:cursor-pointer">
                        <div class="grid mr-4 place-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                aria-hidden="true" class="w-5 h-5">
                                <path fill-rule="evenodd"
                                    d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        Inbox
                    </div>
                </div>
            </transition>


            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Header
            </div>
            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Hero
            </div>
            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Cards
            </div>
            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Gallery
            </div>
            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Form
            </div>
            <div role="button"
                class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start text-gray-200 bg-neutral-900 hover:bg-neutral-700 hover:cursor-pointer focus:bg-blue-gray-50 focus:text-blue-gray-900 active:bg-blue-gray-50 active:text-blue-gray-900">
                <div class="grid mr-4 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                        class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                            clip-rule="evenodd"></path>
                    </svg>
                </div>
                Footer
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false); // Etat pour gérer l'ouverture/fermeture du collapse

const toggleCollapse = () => {
    isOpen.value = !isOpen.value;
};

const beforeEnter = (el) => {
    el.style.maxHeight = 0;
};

const enter = (el) => {
    el.offsetHeight; // Forcer le recalcul du style
    el.style.transition = 'max-height 0.3s ease-in-out';
    el.style.maxHeight = el.scrollHeight + 'px'; // Définit la hauteur maximale pendant l'animation
};

const leave = (el) => {
    el.style.transition = 'max-height 0.3s ease-in-out';
    el.style.maxHeight = 0; // Réduit la hauteur maximale pour faire disparaître l'élément
};
</script>

<style scoped>
/* Animation pour l'ouverture et la fermeture avec max-height */
.fade-enter-active,
.fade-leave-active {
    transition: max-height 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active en version 2.1.8+ */
    {
    max-height: 0;
    overflow: hidden;
}
</style>