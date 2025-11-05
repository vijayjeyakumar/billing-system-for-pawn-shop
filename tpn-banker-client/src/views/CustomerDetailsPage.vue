<template>
<div  v-if="customer" class="page-wrapper">
    <div class="customer-card">
      <div class="card-header">
        <div class="customer-info">
          <h2>{{ customer.name }}</h2>
         
          <p><strong>Customer ID:</strong> {{ customer.customerId }}</p>
        </div>
      </div>
    
      <div class="card-body">
        <p><strong>Phone:</strong> {{ customer.phone }}</p>
        <p><strong>Aadhar:</strong> {{ customer.aadhar }}</p>
        <p><strong>Interest:</strong> {{ customer.interest }}</p>
        <p><strong>Loan Amount:</strong> {{ customer.loanAmount }}</p>
        <p><strong>Processed Date:</strong> {{ customer.processedDate }}</p>
        <p><strong>Processed By:</strong> {{ customer.processedBy }}</p>
        <p><strong>Due Date:</strong> {{ customer.dueDate }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted,watch } from 'vue';
const customer = ref(null);

watch(customer, (newVal) => {
  console.log('Customer changed:', newVal);
});

onMounted(() => {
  console.log('CustomerDetailsPage mounted');

  customer.value = {
    customerId: 'CUST001',
    name: 'John Doe',
    phone: '9876543210',
    aadhar: '1234-5678-9012',
    interest: '12%',
    loanAmount: '₹50,000',
    processedDate: '2025-10-01',
    processedBy: 'Admin',
    dueDate: '2025-12-01',
  };
  
});

</script>

<style scoped>
.page-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a2833 ;
  padding: 2rem;
  box-sizing: border-box;
}

.customer-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
   color: #1d1c1c;
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.customer-image {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 1.5rem;
}

.customer-info h2 {
  margin: 0;
  font-size: 1.8rem;
}

.card-body p {
  margin: 0.5rem 0;
  font-size: 1rem;
}
</style>

<style>
/* Ensure full height for html and body */
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
