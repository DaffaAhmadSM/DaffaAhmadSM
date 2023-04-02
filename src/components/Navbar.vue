<template>
        <ul  class="grid grid-cols-2 text-4xl mt-8 ml-20 mr-20 max-[960px]:hidden xl:text-6xl lg:text-5xl">
            <div class="flex flex-row justify-between mr-32">
                <div>
                    <li>
                        <router-link class="text-white font-Hansief flex flex-row underline decoration-8 decoration-redHoverDeactive hover:decoration-redHoverActive" :to="{ name: 'home'}">
                            <div style="height: 5vh; width: 5vh;" class="rounded-full bg-redHoverActive"></div>
                            Home
                        </router-link>
                    </li>
                </div>
                    <li><router-link class="text-white font-Hansief underline decoration-8 decoration-redHoverDeactive" :to="{name: 'about'}" :class="['decoration-redHoverActive' && 'router-link-active']">About</router-link></li>
            </div>
            <div class="flex flex-row justify-between ml-32">
                <li>
                <router-link class="text-white font-Hansief underline decoration-8 decoration-redHoverDeactive" :to="{name: 'works'}">works</router-link></li>
                <button class="font-Hansief z-20 transition-all duration-300" @click="toggleMenuAnime" :class="{ 'text-black': menuActive }">
                    <div class="border-r-4" :class="{'border-gray-700': menuActive}">
                    <li>
                            <div class="pr-3">
                                <span class="relative -top-1">M</span>
                                <span class="inline-block relative -bottom-1 -rotate-180">E</span>
                                <span class="relative -top-1">N</span>
                                <span class="inline-block relative rotate-180">U</span>
                            </div>
                        </li>
                    </div>
                </button>
            </div>
            
        </ul>

        <ul class="text-5xl max-[960px]:flex justify-end  mt-8 ml-20 mr-10 hidden">
            <button class="font-Hansief z-20" @click="toggleMenuAnime" :class="{ 'text-black': menuActive }">
                <div class="border-r-4 transition-all duration-300" :class="{'border-gray-700': menuActive}">
                    <li class="pr-3">
                            <div>
                                <span class="relative -top-1">M</span>
                                <span class="inline-block relative -bottom-1 -rotate-180">E</span>
                                <span class="relative -top-1">N</span>
                                <span class="inline-block relative rotate-180">U</span>
                            </div>
                        </li>
                    </div>
                </button>
        </ul>

        <!-- menu full screen with animation fade in :class-->
        <div class="bg-white bg-noiceInvert fixed top-0 left-0 w-full h-full z-10 transition-all duration-300 ease-cubic-menu" :class="{'left-full': !menuActive}">
                <div class="flex flex-col justify-start text-black max-md:text-9xl max-md:mt-40 xl:text-[8.5rem] text-[8.3rem] lg:ml-60 font-Redwing">
                    <router-link :to="{name:'about'}" @click="toggleMenuAnime"><span class="hover:bg-black hover:text-white pr-10 hover:text-[8.6rem] transition-all duration-300">About</span></router-link>
                    <router-link :to="{name:'works'}" @click="toggleMenuAnime"><span class="hover:bg-black hover:text-white pr-10 hover:text-[8.6rem] transition-all duration-300">Works</span></router-link>
                    <router-link :to="{name:''}" @click="toggleMenuAnime"><span class="hover:bg-black hover:text-white pr-10 hover:text-[8.6rem] transition-all duration-300">Contact</span></router-link>
                    <router-link :to="{name:''}" @click="toggleMenuAnime"><span class="hover:bg-redHoverActive hover:text-white pr-10 hover:text-[8.6rem] transition-all duration-300">Blog</span></router-link>
            </div>
        </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    },
    data() {
        return {
            menuActive: false
        }
    },
    methods: {

        toggleMenuAnime(): void{
            this.menuActive = !this.menuActive
        }
    }

})
</script>

<style scoped lang="css">
    .router-link-exact-active {
        text-decoration-color: #B41923;
    }
</style>