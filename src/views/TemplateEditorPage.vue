<template>
    <div class="flex w-full pt-32">
        <Modal :isOpen="isModalOpen" @update:isOpen="isModalOpen = $event" />
        <SideBar />
        <div class="flex w-[calc(83%-48px)] justify-end absolute right-4">
            <div class="bg-white p-6 rounded-xl w-full shadow-lg">
                <div class="mb-4 flex item-center gap-4">
                    <h2 class="text-xl font-bold">Mon template</h2>
                    <button @click="emitOpen" class="flex items-center gap-2 text-gray-500 hover:text-gray-800 text-xl">
                        <span class="material-symbols-rounded cursor-pointer">
                            edit
                        </span>
                    </button>
                </div>
                <div class="w-full mx-auto border-dashed border border-gray-400">
                    <HeaderBlock />
                    <HeroBlock />
                    <TextSection/>
                    <SectionBlock/>
                    <GalleryBlock />
                    <FormBlock />
                    <FooterBlock />
                </div>

            </div>
        </div>
    </div>
    <Footer />
</template>


<script setup>
import HeaderBlock from '../components/template-blocks/HeaderBlock.vue'
import HeroBlock from '../components/template-blocks/HeroBlock.vue'
import CardBlock from '../components/template-blocks/CardBlock.vue'
import GalleryBlock from '../components/template-blocks/GalleryBlock.vue'
import FormBlock from '../components/template-blocks/FormBlock.vue'
import FooterBlock from '../components/template-blocks/FooterBlock.vue'
import SideBar from '../components/SideBar.vue'
import Footer from '../components/Footer.vue'
import Modal from '../components/Modal.vue'
import { ref, provide } from 'vue';
import TextSection from '../components/template-blocks/TextSection.vue'
import SectionBlock from '../components/template-blocks/SectionBlock.vue'
const isModalOpen = ref(false);

// Méthode pour ouvrir la modal
const emitOpen = () => {
    isModalOpen.value = true;
};

const openModal = () => {
    isModalOpen.value = true;
};

// 👇 On rend la fonction accessible aux enfants
provide('openModal', openModal);
</script>