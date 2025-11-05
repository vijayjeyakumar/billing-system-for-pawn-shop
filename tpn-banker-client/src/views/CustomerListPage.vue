<template>
    <!-- <div class="flex justify-center mt-4 mb-4"> -->
            <Card class="flex justify-center mt-4 mb-4 p-4 shadow-3">
                <template #content>
                     <!-- <div class="flex justify-center"> -->

                    <DataTable :value="products" :filters="filters" filterDisplay="menu" tableStyle="table-layout: fixed">
                        <template #header>
                            <div class="grid">
                                <div class="col-3 mb-3 mt-3">
                                    <span class="p-input-icon-left w-4">
                                        <i class="pi pi-search" />
                                        <InputText v-model="filters['global'].value" placeholder="Global Search..." class="w-full" />
                                    </span>
                                    <Button icon="pi pi-times" class="mt-2 text-gray-700" />
                                </div>
                            </div>
                        </template>

                        <Column field="id">
                            <template #header> <h3 class="font-bold text-xl">ID</h3></template>
                        </Column>
                        
                        <Column field="customerId" headerClass="uniform-header" style="width: 200px">
                            <template #header> <h3 class="font-bold text-xl">CUSTOMER ID</h3></template>
                        </Column>
                        <Column field="name" headerClass="uniform-header" style="width: 120px">
                            <template #header> <h3 class="font-bold text-xl">NAME</h3></template>
                        </Column>

                        <!-- <Column field="name" headerClass="uniform-header" style="width: 120px">
                            <template #header><span>NAME</span></template>
                        </Column> -->

                       <Column field="phone">
                            <template #header> <h3 class="font-bold text-xl">PHONE NUMBER</h3></template>
                        </Column>
                        <Column field="aadhar">
                            <template #header> <h3 class="font-bold text-xl">AADHAR</h3></template>
                        </Column>
                        <Column field="interest">
                            <template #header> <h3 class="font-bold text-xl">INTEREST</h3></template>
                        </Column>
                        <Column field="loanAmount">
                            <template #header> <h3 class="font-bold text-xl">LOAN AMOUNT</h3></template>
                        </Column>
          
                        <Column field="processedDate">
                            <template #header> <h3 class="font-bold text-xl">PROCESSED DATE</h3></template>
                        </Column>
          
                        <Column field="processedBy">
                            <template #header> <h3 class="font-bold text-xl">PROCESSED BY</h3></template>
                        </Column>
          
                        <Column field="dueDate">
                            <template #header> <h3 class="font-bold text-xl">DUE DATE</h3></template>
                        </Column>
           
                    </DataTable>
               
                </template>
                </Card>
    
</template>


<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
 
import InputText from 'primevue/inputtext';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import Card  from 'primevue/card'; 


const filters = ref({
    global: { value: null, matchMode: 'contains' }
}); 
const products = ref([
  {
    id: 1,
    customerId: 'CUST001',
    name: 'John Doe',
    phone: '9876543210',
    aadhar: '1234-5678-9012',
    interest: '12%',
    loanAmount: '₹50,000',
    processedDate: '2025-10-01',
    processedBy: 'Admin',
    dueDate: '2025-12-01'
  },
  {
    id: 2,
    customerId: 'CUST002',
    name: 'Jane Smith',
    phone: '9123456780',
    aadhar: '2345-6789-0123',
    interest: '10%',
    loanAmount: '₹75,000',
    processedDate: '2025-09-15',
    processedBy: 'vijay@ymail.com',
    dueDate: '2025-11-15'
  },
  {
    id: 2,
    customerId: 'CUST002',
    name: 'Jane Smith',
    phone: '9123456780',
    aadhar: '2345-6789-0123',
    interest: '10%',
    loanAmount: '₹75,000',
    processedDate: '2025-09-15',
    processedBy: 'Manager',
    dueDate: '2025-11-15'
  },
  {
    id: 2,
    customerId: 'CUST002',
    name: 'Jane Smith',
    phone: '9123456780',
    aadhar: '2345-6789-0123',
    interest: '10%',
    loanAmount: '₹75,000',
    processedDate: '2025-09-15',
    processedBy: 'Balan@gmail.com',
    dueDate: '2025-11-15'
  }, 
  {
    id: 2,
    customerId: 'CUST002',
    name: 'Jane Smith',
    phone: '9123456780',
    aadhar: '2345-6789-0123',
    interest: '10%',
    loanAmount: '₹75,000',
    processedDate: '2025-09-15',
    processedBy: 'Manager',
    dueDate: '2025-11-15'
  }
]);  
</script>



<style scoped>
.uniform-header {
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
}</style>