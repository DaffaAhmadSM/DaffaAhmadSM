

<template>
    <div class="flex h-screen justify-center items-center flex-row container gap-8 overflow-auto">
        <img :src="Gwejh" alt="aboutme" width="256" height="256" class="max-sm:hidden">
        <div class=" font-Redwing w-1/2 text-justify max-[500px]:text-center max-sm:mt-20">
            <div class="text-5xl font-Hansief md:text-6xl">
                <span class="inline-block">M</span>
                <span class="-rotate-180 inline-block">E</span>
            </div>
            <p class="md:text-3xl max-md:text-2xl max-[500px]:text-xl">
                Hello! I'm Daffa Ahmad, a developer with skills in several programming langguage and framework like vue, sveltekit, and laravel. I'm eager to gain work experience and use my expertise to make a positive impact through technology. In my free time, I enjoy staying up-to-date with new tech trends and exploring new cultures. Let's connect and discuss how I can help with your projects.
            </p>
        </div>
        
    </div>
</template>
<script setup()>
export default {
    name: 'About',
    setup() {
        return {
            Gwejh
        }
    },
}
const Gwejh = new URL('../assets/img/Gwejh.JPG', import.meta.url).href
</script>
<style lang="css">
    
</style>