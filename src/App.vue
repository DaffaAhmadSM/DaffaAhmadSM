<script setup>
 import {RouterView} from 'vue-router'
 import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="bg-2D2D2D flex min-h-screen flex-col bg-noice lg:overflow-hidden">
        <nav>
            <Navbar/>
        </nav>
        <main class="min-h-full">
            <RouterView/>
        </main>
        <footer>
            
        </footer>
    </div>
    
</template>

<style scoped>

</style>
