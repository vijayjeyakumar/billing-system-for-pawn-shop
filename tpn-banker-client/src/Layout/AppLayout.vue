<template>
  <div>
    <HeaderRibbon />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import HeaderRibbon from './HeaderRibbon.vue'
</script>

<style scoped>
main {
  padding-top: 60px; /* adjust based on ribbon height */
}
</style>