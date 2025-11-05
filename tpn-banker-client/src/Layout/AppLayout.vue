<template>
  <div class="layout-wrapper">
    <HeaderRibbon v-if="isLoginRoute" />
    <Toast style="top: 65px;" />
    <router-view></router-view>
  </div>
</template>

<script setup>
import HeaderRibbon from '@/components/HeaderRibbon.vue'
import { computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoginRoute = computed(() => route.path !== '/login')

// Log on initial mount
onMounted(() => {
  console.log("Initial Header Ribbon State:", isLoginRoute.value)
})

// Watch for route changes
watch(route, (newRoute) => {
  
  console.log("Current path:", newRoute.path)
  console.log("Route changed - Header Ribbon State:", isLoginRoute.value)
}, { immediate: true })
</script>

<style scoped>
main {
  padding-top: 60px; /* adjust based on ribbon height */
}
</style>