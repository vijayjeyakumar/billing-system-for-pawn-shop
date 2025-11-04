<template>
    <div class="flex justify-content-center">


        <Card class="w-11 p-4 shadow-3">
            <template #content>
               <DataTable :value="products" :filters="filters" filterDisplay="menu" tableStyle="min-width: 50rem">
        <template #header>
          <div class="grid">
            <div class="col-3 mb-3 mt-3">
              <span class="p-input-icon-left w-full">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Global Search..." class="w-full" />
              </span>
              <Button icon="pi pi-times" class="mt-2 text-gray-700" @click="clearFilter" />
            </div>
          </div>
        </template>

        <Column field="id" header="#"></Column>
        <Column field="customerId" header="Customer ID"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="phone" header="Phone Number"></Column>
        <Column field="aadhar" header="Aadhar Number"></Column>
        <Column field="interest" header="Interest"></Column>
        <Column field="loanAmount" header="Loan Amount"></Column>
        <Column field="processedDate" header="Loan Processed Date"></Column>
        <Column field="processedBy" header="Loan Processed By"></Column>
        <Column field="dueDate" header="Due Date"></Column>
      </DataTable>
 
            </template>
        </Card>

    </div>
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
    processedBy: 'Manager',
    dueDate: '2025-11-15'
  }
]);  
</script>
