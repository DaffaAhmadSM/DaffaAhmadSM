<script setup>
 import {RouterView} from 'vue-router'
 import Navbar from './components/Navbar.vue'
 import background from './assets/img/Noice.png'
</script>
<template>
    <div class="bg-2D2D2D flex flex-col relative h-screen overflow-auto" style="background-image: url(/Noice.png);">
        <nav v-if="!$route.meta.hidenav" class="absolute w-full">
            <Navbar/>
        </nav>
        <main>
            <RouterView/>
        </main>
        <footer>
            
        </footer>
    </div>
</template>
<style scoped>

</style>
