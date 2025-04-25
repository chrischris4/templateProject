<template>
    <transition name="fade" enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-200 ease-in" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <div v-if="isOpen" class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-black/50 ">
            <div class="bg-white p-6 rounded-xl shadow-lg w-2xs">
                <h2>Renommer votre template</h2>
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
import { defineProps, defineEmits } from 'vue'


const { isOpen } = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['update:isOpen'])

const emitClose = () => {
    emit('update:isOpen', false)
}

</script>

<style scoped></style>