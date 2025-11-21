<template>
  <div class="surface-ground min-h-screen flex justify-content-center align-items-start p-3"
    style="padding-top: 180px; padding-left:180px; ">
    <Card class="w-full max-w-10 p-4 shadow-3" style="max-width: 1400px">
      <template #content>

        <DataTable :value="products" :filters="filters" filterDisplay="menu" scrollable  class="text-lg">
          <template #header>
            <div class="flex justify-content-between align-items-center mb-3">
              <div class="flex align-items-center gap-2">
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filters['global'].value" placeholder="Global Search..." class="w-12rem" />
                </span>
                <Button icon="pi pi-times" class="text-gray-700" @click="clearFilters" />
              </div>
            </div>
          </template>

          <Column field="id" headerStyle="width: 100px" bodyStyle="width: 80px">
            <template #header>
              <span class="font-bold">BILL ID</span>
            </template>
          </Column>

          <Column field="customerId" headerStyle="width: 250px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">CUSTOMER ID</span>
            </template>
          </Column>

          <Column field="name" headerStyle="width: 150px" bodyStyle="width: 120px">
            <template #header>
              <span class="font-bold">NAME</span>
            </template>
          </Column>

          <Column field="phone" headerStyle="width: 250px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PHONE NO</span>
            </template>
          </Column>

          <Column field="aadhar" headerStyle="width: 180px" bodyStyle="width: 180px">
            <template #header>
              <span class="font-bold">AADHAR</span>
            </template>
          </Column>

          <Column field="interest" headerStyle="width: 280px" bodyStyle="width: 100px">
            <template #header>
              <span class="font-bold">INTEREST</span>
            </template>
          </Column>

          <Column field="loanAmount" headerStyle="width: 250px" bodyStyle="width: 130px">
            <template #header>
              <span class="font-bold">LOAN AMOUNT</span>
            </template>
          </Column>

          <Column field="processedDate" headerStyle="width: 200px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PROCESSED DATE</span>
            </template>
          </Column>

          <Column field="processedBy" headerStyle="width: 200px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PROCESSED BY</span>
            </template>
          </Column>

          <Column field="dueDate" headerStyle="width: 150px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">DUE DATE</span>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filters = ref({
    global: { value: null, matchMode: 'contains' }
}); 

const products = ref([
  {
    id: 1,
    customerId: 'CUST001',
    name: 'ARJUn',
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
  } ,
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
  } ,
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
  } ,
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
  } ,
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
  } 
]);

const clearFilters = () => {
    filters.value.global.value = null;
};
</script>

<style scoped> 
:deep(.p-card) {
    margin: 0 auto !important;
}

 

:deep(.p-datatable-wrapper) {
    overflow-x: auto !important;
}

 
:deep(.p-datatable) {
    width: auto !important;
    max-width: calc(100vw - 200px) !important; /* 100px left + 100px right padding */
}

:deep(.p-datatable-table) {
    min-width: auto !important;
    width: 100% !important;
}
/* 
:deep(.p-datatable-thead > tr > th) {
    font-size: 1.3rem !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
} */

:deep(.p-datatable-tbody > tr > td) {
    font-size: 1.2rem !important;
    padding: 1rem 0.5rem !important;
    white-space: nowrap !important;
}
 
:deep(.p-datatable-thead > tr > th) {
    font-size: 1.3rem !important;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
    padding: 1rem 0.75rem !important; /* Add this line */
} 
</style> 