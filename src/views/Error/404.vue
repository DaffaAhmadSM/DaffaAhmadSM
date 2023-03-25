<template lang="">
    <div class="relative">        
        <div class="grid h-screen place-items-center">
            <div class="flex flex-col text-center">
                <div class="sm:text-9xl text-7xl font-Redwing">ErR0r: <span class="font-Hansief">404</span></div>
                <p class="font-Redwing sm:text-4xl text-3xl">Nothing Here. Go AWAY</p>
            </div>
        </div>
        <div class="lg:text-[15rem]">
            <div class="absolute top-0 -translate-y-24">
                <router-link :to="{name:'home'}" class="font-Hansief">
                    <div>
                        <span class="inline-block">GO</span>
                        <span class="inline-block ml-5 text-redHoverActive">HOME</span>
                    </div>
                </router-link>
            </div>
            <div class="absolute top-0 right-0 -rotate-90 origin-[70%_10%] max-[1080px]:hidden">
                <router-link :to="{name:'home'}" class="font-Hansief">
                    <div>
                        <span class="inline-block">GO</span>
                        <span class="inline-block text-redHoverActive">HOME</span>
                    </div>
                </router-link>
            </div>
            <div class="absolute bottom-0 rotate-90 origin-[35%_-10%] max-[1080px]:hidden">
                <router-link :to="{name:'home'}" class="font-Hansief">
                    <div>
                        <span class="inline-block ml-6">GO</span>
                        <span class="inline-block ml-10 text-redHoverActive">HOME</span>
                    </div>
                </router-link>
            </div>
            <div class="absolute bottom-0 right-0 translate-y-24">
                <router-link :to="{name:'home'}" class="font-Hansief">
                    <div>
                        <span class="inline-block ml-6">GO</span>
                        <span class="inline-block ml-10 text-redHoverActive">HOME</span>
                    </div>
                </router-link>
            </div>
                </div>
        </div>
</template>
<script lang="ts">
export default {
    
}
</script>
<style lang="">
    
</style>