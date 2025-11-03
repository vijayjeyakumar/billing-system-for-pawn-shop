<template>
  <AppLayout />
</template>

<script setup>
import AppLayout from './Layout/AppLayout.vue'
</script>


<style>
:root {
  --surface-ground: #1e1e2d;
  --surface-card: #2a2833;
  --surface-section: #1e1e2d;
  --text-color: #ffffffde;
  --text-color-secondary: #ffffff99;
  --primary-color: #6366f1;
  --primary-color-text: #ffffff;
  --surface-hover: #383848;
  --card-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  --border-radius: 6px;
   --p-toast-message-success-bg: green;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--surface-ground);
  color: var(--text-color);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>