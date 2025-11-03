<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import InputText from 'primevue/inputtext';

//Define Reactive state

onMounted(() => {
  console.log('Customer List Page mounted');
});

// Methods
const handleGenerateBill = () => { 
  
  //Here call API for validation put inside try catch
  console.log('Generate Bill clicked');

};
</script>
 