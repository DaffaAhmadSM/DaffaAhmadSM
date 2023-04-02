<script setup>
 import {RouterView} from 'vue-router'
 import Navbar from './components/Navbar.vue'
</script>
<template>
    <div class="bg-2D2D2D flex min-h-screen flex-col bg-noice lg:overflow-hidden relative">
        <nav v-if="!$route.meta.hidenav">
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
