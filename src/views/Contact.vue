<template lang="">
    <div class="grid place-items-center h-screen font-Redwing">
      <div class="flex flex-col gap-8">
          <a href="https://github.com/DaffaAhmadSM" class="flex items-center gap-4" target="_blank"><img :src="githubSvg" alt="github" width="64"><span class="text-3xl">https://github.com/DaffaAhmadSM</span></a>
          <a href="https://www.instagram.com/darfr12/" class="flex items-center gap-4" target="_blank"><img :src="instagramSvg" alt="instagram" width="64"><span class="text-3xl">@darfr12</span></a>
          <!-- email -->
          <a href="mailto:daffamubaroqi321+works@gmai.com" class="flex items-center gap-4" target="_blank"><img :src="emailSvg" alt="email" width="64"><span class="text-3xl">daffamubaroqi321+works@gmail.com</span></a>
      </div>
    </div>
</template>
<script setup()>
export default {
    name: 'Contact',
    setup() {
        return {
            githubSvg,
            instagramSvg,
            emailSvg
        }
    },
}
    const githubSvg = new URL('../assets/img/github.svg', import.meta.url).href;
    const instagramSvg = new URL('../assets/img/instagram.svg', import.meta.url).href;
    const emailSvg = new URL('../assets/img/at-solid.svg', import.meta.url).href;
</script>
<style lang="">
    
</style>