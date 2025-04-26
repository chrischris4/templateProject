<template>
    <div
        class="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl p-4 md:p-5 w-1/3 hover:border-blue-500 cursor-pointer">
        <div class="flex justify-between w-full relative">
            <h3 class="text-lg font-bold text-gray-800 m-0 p-0">
                Card title
            </h3>
            <button @click="emitClose" class="p-2 pb-0.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 absolute top-0 right-0 cursor-pointer">
                <span class="material-symbols-rounded">
                    visibility
                </span>
            </button>
        </div>
        <p class="mt-1 text-xs font-medium uppercase text-gray-500">
            Card subtitle
        </p>
        <p class="mt-2 text-gray-500 dark:text-neutral-400">
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-hidden focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
            href="#">
            Card link
            <svg class="shrink-0 size-4 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </a>
    </div>
</template>

<script>
export default {
    name: 'TemplateLinks',
}
</script>

<style scoped></style>