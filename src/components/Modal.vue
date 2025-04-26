<template>
    <transition name="fade" enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-200 ease-in" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <div v-if="isOpen"
            class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/50 ">
            <div class="bg-white p-6 rounded-xl shadow-lg  w-xl">
                <div v-if="modalType === 'header'" class="flex flex-col">
                    <h2 class="font-bold text-xl mb-4">Modifier le Header</h2>
                    <div>
                        <h3 class="">Type</h3>
                        <div class="flex gap-2 mt-4">
                            <div @click="setDisplayType('my-4 w-[calc(100%-32px)] mx-auto rounded-xl')"
                                class="w-8 h-8 bg-gray-100 border border-gray-400 rounded-xs"></div>
                            <div @click="setDisplayType('')"
                                class="w-8 h-8 bg-gray-100 border border-gray-400 rounded-xs"></div>
                        </div>
                        <h3 class="">Text color</h3>
                        <div class="flex gap-2 mt-4">
                            <div @click="setTextColor('#3490dc')"
                                class="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setTextColor('#38c172')"
                                class="w-8 h-8 bg-green-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setTextColor('#f66d9b')"
                                class="w-8 h-8 bg-pink-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setTextColor('#ffffff')"
                                class="w-8 h-8 bg-white rounded-full cursor-pointer border border-black"></div>
                        </div>
                        <h3 class="">Background color</h3>
                        <div class="flex gap-2 mt-4">
                            <div @click="setBackgroundColor('#3490dc')"
                                class="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setBackgroundColor('#38c172')"
                                class="w-8 h-8 bg-green-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setBackgroundColor('#f66d9b')"
                                class="w-8 h-8 bg-pink-500 rounded-full cursor-pointer border border-black"></div>
                            <div @click="setBackgroundColor('#ffffff')"
                                class="w-8 h-8 bg-white rounded-full cursor-pointer border border-black"></div>
                        </div>
                        <div class="flex flex-col">
                            <h3 class="">Elements</h3>
                            <div>
                                <h3 class="">Logo</h3>
                            </div>
                            <div>
                                <h3 class="mt-6">Links</h3>
                                <div class="flex flex-col gap-2 mt-2">
                                    <div v-for="(link, index) in links" :key="index"
                                        class="flex gap-2 items-center">
                                        <input v-model="link.text" class="border p-2 rounded w-full"
                                            placeholder="Link text" />
                                        <input v-model="link.url" class="border p-2 rounded w-full"
                                            placeholder="Link URL" />
                                        <button @click="removeLink(index)"
                                            class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">X</button>
                                    </div>
                                    <button @click="addLink"
                                        class="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                        Ajouter un lien
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 v-else-if="modalType === 'footer'">Modifier le Footer</h2>
                <h2 v-else>Renommer votre template</h2>
                <div class="mt-4 text-right">
                    <button @click="emitClose"
                        class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { defineProps, defineEmits, inject } from 'vue'
import { computed } from 'vue';

const links = computed(() => activeComponentState?.value?.links || []);



const { isOpen, modalType } = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    },
    modalType: {
        type: String,
        default: ''
    }
});

const activeComponentState = inject('activeComponentState');

const emit = defineEmits(['update:isOpen'])

const emitClose = () => {
    emit('update:isOpen', false)
}

const setBackgroundColor = (backgroundColor) => {
    if (activeComponentState?.value) {
        activeComponentState.value.backgroundColor = backgroundColor;
    }
}
const setTextColor = (textColor) => {
    if (activeComponentState?.value) {
        activeComponentState.value.textColor = textColor;
    }
}
const setDisplayType = (displayType) => {
    if (activeComponentState?.value) {
        activeComponentState.value.displayType = displayType;
    }
}

const addLink = () => {
  if (activeComponentState?.value) {
    activeComponentState.value.links.push({ text: 'New Link', url: '#' });
  }
}

const removeLink = (index) => {
  if (activeComponentState?.value) {
    activeComponentState.value.links.splice(index, 1);
  }
}
</script>

<style scoped></style>