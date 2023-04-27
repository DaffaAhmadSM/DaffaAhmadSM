
<script setup()>
export default {
    name: 'Home',
    setup() {
        return {
            arrowSvg
        }
    },
}
const arrowSvg = new URL('../assets/img/arrow.svg', import.meta.url).href
</script>

<template>
    <div class="text-white flex flex-col ml-24 max-md:ml-0 gap-10 h-screen justify-center">
        <div class="font-Redwing md:text-4xl text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="font-Redwing xl:text-9xl lg:text-8xl sm:text-7xl text-5xl flex flex-row flex-wrap"><div>Start The Exploration</div> <img :src="arrowSvg" alt="arrow svg" class="translate-y-7 lg:ml-6 sm:ml-0 hidden min-[663px]:inline md:h-full"></div>
        <router-link :to="{name:'about'}" class="font-Hansief text-6xl sm:text-8xl lg:text-9xl self-end">
            <span>START </span>
            <span class="text-redHoverActive">BUTTON</span>
        </router-link>

    </div>
</template>
<style lang="css">
    
</style>