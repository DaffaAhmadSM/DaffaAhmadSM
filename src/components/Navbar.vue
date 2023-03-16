<template>
        <ul  class="grid grid-cols-2 text-4xl mt-8 ml-20 mr-20 max-[960px]:hidden">
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
                <li><router-link class="text-white font-Hansief underline decoration-8 decoration-redHoverDeactive" :to="{name: 'works'}">works</router-link></li>
               <div class="border-r-4">
                   <li><button class="text-white font-Hansief">
                    <div class="pr-3">
                        <span class="relative -top-1">M</span>
                        <span class="inline-block relative -bottom-1 -rotate-180">E</span>
                        <span class="relative -top-1">N</span>
                        <span class="inline-block relative rotate-180">U</span>
                    </div>
                   </button></li>
               </div>
            </div>
            
        </ul>

        <ul class="text-4xl max-[960px]:flex justify-end  mt-8 ml-20 mr-10 hidden">
            <button class="text-white font-Hansief">
                <div class="border-r-4">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {}
    },
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {

    },

    created() {
    },
})
</script>

<style scoped lang="css">
    .router-link-exact-active {
        text-decoration-color: #B41923;
    }
</style>