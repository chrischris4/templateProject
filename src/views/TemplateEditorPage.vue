<template>
    <div class="flex gap-4 w-11/12 md:w-10/12 mx-auto mt-4">
        <SideBar />
        <div class="flex items-center justify-center w-full">
            <div class="bg-white p-6 rounded-xl w-full shadow-lg">
                <div class="mb-4">
                    <h2 class="text-xl font-bold">Nouveau template</h2>
                </div>
                <div class="w-full mx-auto border-dashed border border-gray-400 rounded-xl px-4">
                    <HeaderBlock />
                    <HeroBlock />
                    <h2 class=" text-2xl mt-4 mb-2">Gallery</h2>
                    <div class="flex gap-4 w-full mx-auto">
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                    </div>
                    <h2 class=" text-2xl mt-4 mb-2">Gallery</h2>
                    <GalleryBlock />
                    <FormBlock />
                    <FooterBlock />
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import HeaderBlock from '../components/template-blocks/HeaderBlock.vue'
import HeroBlock from '../components/template-blocks/HeroBlock.vue'
import CardBlock from '../components/template-blocks/CardBlock.vue'
import GalleryBlock from '../components/template-blocks/GalleryBlock.vue'
import FormBlock from '../components/template-blocks/FormBlock.vue'
import FooterBlock from '../components/template-blocks/FooterBlock.vue'
import SideBar from '../components/SideBar.vue'
</script>