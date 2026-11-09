<template>
  <v-app>
    <div class="app-shell">
      <SiteHeader />
      <v-main>
        <RouterView />
      </v-main>
      <footer class="site-footer">
        <span>✳ BROTE</span>
        <span>Un espacio de escucha, cuidado y respeto.</span>
        <span>Si estás en peligro inmediato, llama al 911.</span>
      </footer>
    </div>
  </v-app>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
</script>
