<template>
<div style="padding-top: 130px; padding-left: 1px; padding-right: 65px;" v-if="customer" class="page-wrapper">
    <div class="customer-card">
      <div class="card-header">
        <div class="customer-info">
    
          <h2 class="customer-name"><strong>CUSTOMER NAME : </strong>{{ customer.NAME }}</h2>
          <p class="customer-id"><strong>Customer ID:</strong> {{ customer.CUSTOMER_ID }}</p>
        </div>
      </div>
    
      <!-- Updated card body uses a grid layout -->
      <div class="card-body-grid">
        <div class="detail-group">
          <p><strong>Phone:</strong></p>
          <span>{{ customer.PHONE_NO }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Email:</strong></p>
          <span>{{ customer.EMAIL_ID }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Aadhar:</strong></p>
          <span>{{ customer.AADHAR }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Interest:</strong></p>
          <span>{{ customer.INTEREST }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Loan Amount:</strong></p>
          <span>{{ customer.LOAN_AMOUNT }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Processed Date:</strong></p>
          <span>{{ customer.PROCESSED_DATE }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Processed By:</strong></p>
          <span>{{ customer.PROCESSED_BY }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Due Date:</strong></p>
          <span>{{ customer.DUE_DATE }}</span>
        </div>
        <div class="detail-group">
          <p><strong>Interest Amount $:</strong></p>
          <span>{{ calculatedInterest }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup> 

import { onMounted, ref } from 'vue';
import { computed } from "vue";
import { useRoute } from 'vue-router'
import axios from 'axios';
const route = useRoute() 
const customerId = route.params.id; 
var daysDiff = ref(0);
let customer  = ref([]);



  onMounted(async () => {
  console.log('CustomerDetailsPage mounted with requested customer id ', customerId);
   try {
    const response = await axios.get(`/api/customer-details-page/${customerId}`);
    customer.value = response.data;
    console.log('Customer Data Fetched Successfully:', customer.value );
     
    const currentDate = new Date();
    const startDate = new Date(customer.value.PROCESSED_DATE);

    //Calculate the difference in time (milliseconds)
    const timeDiff = currentDate.getTime() - startDate.getTime();
    daysDiff.value = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    console.log("daysDiff  is ", daysDiff);

  } catch (err) {
    console.error('Full error:', err);
    console.error('Error message:', err.message);
  } finally {
    console.log('Finally Reached successful:');
  }
  
});

 
const calculatedInterest = computed(() => {
  if (!customer.value || !daysDiff.value) return 0;

  const loan = Number(customer.value.LOAN_AMOUNT);
  const interestRate = parseFloat(customer.value.INTEREST);  
  console.log("iiiiiiiiiiiiiiiiiiiiiiiiiii", loan)
  return (loan * (interestRate / 100) * daysDiff.value) / 365;
});

</script>
<style scoped>
 

.customer-card {
  background: #ffffff;
  padding: 2.5rem; 
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); 
  max-width: 1000px; /* Made the card even wider, filling more of the screen */
  width: 900%;
  color: #1d1c1c;
  margin: 0 auto; /* Keeps it centered if the screen is super wide, but primarily wide */
}

.card-header {
  border-bottom: 1px solid #eee; 
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
}

.customer-name {
  margin: 0 0 0.5rem;
  font-size: 2.2rem; 
  color: #333;
}

.customer-id {
    font-size: 1rem;
    color: #666;
    margin: 0;
}

.card-body-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns for details */
  gap: 2rem 4rem; /* Increased horizontal gap for desktop feel */
  font-size: 1.1rem; 
}

.detail-group p {
  margin: 0 0 0.25rem;
  color: #555;
  font-weight: 600; 
}

.detail-group span {
    display: block;
    color: #1d1c1c;
    padding-left: 0.5rem; 
}

/* Add a basic media query to switch back to single column on small screens (mobile optimization) */
@media (max-width: 100%) {
    .page-wrapper {
        padding: 1rem;
    }
    .card-body-grid {
        grid-template-columns: 1fr; /* Stacks vertically on mobile */
        gap: 1rem;
    }
}
</style>


