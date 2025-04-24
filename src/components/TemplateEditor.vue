<template>
    <transition name="fade" enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-200 ease-in" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95">
        <div v-if="isOpen"
            class="absolute top-0 z-50 flex items-center justify-center w-full">
            <div class="bg-white p-6 rounded-xl w-full shadow-lg">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-bold">Nouveau template</h2>
                    <button @click="emitClose" class="text-gray-500 hover:text-gray-800 text-xl">&times;</button>
                </div>
                <HeaderBlock/>
                <HeroBlock/>
                <div class="flex gap-4 w-full">
                <CardBlock/>
                <CardBlock/>
                <CardBlock/>
                </div>
                <GalleryBlock/>
                <FormBlock/>
                <FooterBlock/>
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
import HeaderBlock from './template-blocks/HeaderBlock.vue'
import HeroBlock from './template-blocks/HeroBlock.vue'
import CardBlock from './template-blocks/CardBlock.vue'
import GalleryBlock from './template-blocks/GalleryBlock.vue'
import FormBlock from './template-blocks/FormBlock.vue'
import FooterBlock from './template-blocks/FooterBlock.vue'

// Props
const { isOpen } = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
})

// Emit event to close modal
const emit = defineEmits(['update:isOpen'])

const emitClose = () => {
    emit('update:isOpen', false)
}
</script>