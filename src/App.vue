<script setup>
 import {RouterView} from 'vue-router'
 import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="bg-2D2D2D flex h-screen flex-col bg-noice">
        <nav>
            <Navbar/>
        </nav>
        <main>
            <RouterView/>
        </main>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
    
</template>

<style scoped>

</style>
