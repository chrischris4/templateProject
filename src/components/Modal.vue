<template>
    <transition name="fade" enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-200 ease-in" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <div v-if="isOpen"
            class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/50 ">
            <div class="bg-white p-6 rounded-xl shadow-lg w-2xs">
                <h2 v-if="modalType === 'header'" class="font-bold text-xl">Modifier le Header</h2>
                <div v-if="modalType === 'header'" class="flex gap-2 mt-4">
                    <div @click="setColor('#3490dc')" class="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border border-black"></div>
                    <div @click="setColor('#38c172')" class="w-8 h-8 bg-green-500 rounded-full cursor-pointer border border-black"></div>
                    <div @click="setColor('#f66d9b')" class="w-8 h-8 bg-pink-500 rounded-full cursor-pointer border border-black"></div>
                    <div @click="setColor('#ffffff')" class="w-8 h-8 bg-white rounded-full cursor-pointer border border-black"></div>
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

const setColor = (color) => {
    if (activeComponentState?.value) {
        activeComponentState.value.backgroundColor = color;
    }
}
</script>

<style scoped></style>