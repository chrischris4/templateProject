<template>
    <div class="flex w-full mt-32 relative">
        <SideBar />
        <div class="flex w-[calc(80%-48px)] justify-end absolute right-4">
            <div class="bg-white p-6 rounded-xl w-full shadow-lg">
                <div class="mb-4">
                    <h2 class="text-xl font-bold">Nouveau template</h2>
                </div>
                <div class="w-full mx-auto border-dashed border border-gray-400 rounded-xl px-4">
                    <HeaderBlock />
                    <HeroBlock />
                    <h2 class=" text-2xl mt-8 mb-2 font-bold">Gallery</h2>
                    <div class="flex gap-4 w-full mx-auto">
                        <CardBlock />
                        <CardBlock />
                        <CardBlock />
                    </div>
                    <h2 class=" text-2xl mt-8 mb-2 font-bold">Gallery</h2>
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
</script>