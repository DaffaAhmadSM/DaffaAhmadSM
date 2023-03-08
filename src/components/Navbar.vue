<template>
        <ul class="grid grid-cols-2 text-4xl mt-8 ml-16 mr-16">
            <div class="flex flex-row justify-between mr-10">
                <div @mouseover="hover = true"  @mouseleave="hover = false">
                    <li>
                        <router-link v-if="currentRouteName == 'home'" class="text-white font-Hansief flex flex-row underline decoration-8 decoration-redHoverActive" :to="{ name: 'home'}">
                            <div style="height: 5vh; width: 5vh;" class="rounded-full bg-redHoverActive"></div>
                            Home
                        </router-link>
                        <router-link v-else  class="text-white font-Hansief flex flex-row underline decoration-8 decoration-redHoverDeactive hover:decoration-redHoverActive" :to="{ name: 'home'}">
                            <div style="height: 5vh; width: 5vh;" class="rounded-full bg-592D2D" :class="{'bg-redHoverActive': hover}"></div>
                            Home
                        </router-link>
                    </li>
                </div>
                    <li><router-lin k class="text-white font-Hansief underline decoration-8 decoration-redHoverDeactive" :to="{name: 'about'}" :class="['decoration-redHoverActive' && 'router-link-active']">About</router-lin></li>
            </div>
            <div class="flex flex-row justify-between">
                <li><router-link class="text-white font-Hansief underline decoration-8 decoration-redHoverDeactive" :to="{name: 'works'}">works</router-link></li>
                <li><router-link class="text-white font-Hansief" to="/about">Menu</router-link></li>
            </div>
            
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
            hover: false
        }
    },
    computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
})
</script>

<style scoped>
</style>