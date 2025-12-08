<template>
  <div class="surface-ground min-h-screen flex justify-content-center align-items-start p-3"
    style="padding-top: 130px; padding-left: 65px; padding-right: 65px;">
    <Card class="w-full p-4 shadow-3 mx-auto" style="max-width: 95vw;">
      <template #content>
        <DataTable :value="customerList" :filters="filters" filterDisplay="menu" scrollable class="text-lg w-full">
          <template #header>
            <div class="flex justify-content-between align-items-center mb-3">
              <div class="flex align-items-center gap-2">
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filters['global'].value" placeholder="Global Search..." class="w-12rem lg:w-20rem" />
                </span>
                <Button icon="pi pi-times" class="text-gray-700" @click="clearFilters" />
              </div>
            </div>
          </template>

          <Column field="BILL_ID" headerStyle="width: 100px" bodyStyle="width: 80px">
            <template #header>
              <span class="font-bold">BILL ID</span>
            </template>
          </Column>

          <Column field="CUSTOMER_ID" headerStyle="width: 250px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">CUSTOMER ID</span>
            </template>
          </Column>

          <Column field="NAME" headerStyle="width: 150px" bodyStyle="width: 120px">
            <template #header>
              <span class="font-bold">NAME</span>
            </template>
          </Column>

          <Column field="PHONE_NO" headerStyle="width: 250px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PHONE NO</span>
            </template>
          </Column>

          <Column field="AADHAR" headerStyle="width: 180px" bodyStyle="width: 180px">
            <template #header>
              <span class="font-bold">AADHAR</span>
            </template>
          </Column>

          <Column field="INTEREST" headerStyle="width: 280px" bodyStyle="width: 100px">
            <template #header>
              <span class="font-bold">INTEREST</span>
            </template>
          </Column>

          <Column field="LOAN_AMOUNT" headerStyle="width: 200px" bodyStyle="width: 130px">
            <template #header>
              <span class="font-bold">LOAN AMT</span>
            </template>
          </Column>

          <Column field="PROCESSED_DATE" headerStyle="width: 150px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PROCESSED DATE</span>
            </template>
          </Column>

          <Column field="PROCESSED_BY" headerStyle="width: 150px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">PROCESSED BY</span>
            </template>
          </Column>

          <Column field="DUE_DATE" headerStyle="width: 150px" bodyStyle="width: 150px">
            <template #header>
              <span class="font-bold">DUE</span>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const filters = ref({
  global: { value: null, matchMode: 'contains' }
});
const clearFilters = () => {
  filters.value.global.value = null;
};

const customerList = ref([]);

onMounted(async () => {
  console.log('Customer List Page mounted');

  try {
    const response = await axios.get('/api/customer-list-page');
    customerList.value = response.data;
    console.log('Customer Data Fetched Successfully:', response.data);

  } catch (err) {
    console.error('Full error:', err);
    console.error('Error message:', err.message);
  } finally {
    console.log('Finally Reached successful:');
  }

});

</script>

<style scoped>
:deep(.p-card) {
  margin: 0 auto !important;
}

:deep(.p-datatable-wrapper) {
  overflow-x: auto !important;
}

/* Center the table on all screens */
:deep(.p-datatable) {
  width: 100% !important;
  margin: 0 auto !important;
}

:deep(.p-datatable-table) {
  min-width: auto !important;
  width: 100% !important;
  margin: 0 auto !important;
}

/* Make table take full available width */
:deep(.p-datatable-thead) {
  width: 100% !important;
}

:deep(.p-datatable-tbody) {
  width: 100% !important;
}

:deep(.p-datatable-tbody>tr>td) {
  font-size: clamp(1rem, 1.2vw, 1.2rem) !important;
  padding: 1rem 0.5rem !important;
  white-space: nowrap !important;
}

:deep(.p-datatable-thead>tr>th) {
  font-size: clamp(1.1rem, 1.3vw, 1.3rem) !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  padding: 1rem 0.75rem !important;
}

/* Force table to be centered */
:deep(.p-datatable .p-datatable-header) {
  text-align: center !important;
}

/* Make sure columns distribute evenly */
:deep(.p-column-header-content) {
  justify-content: center !important;
}

:deep(.p-datatable-tbody>tr>td) {
  text-align: center !important;
}

/* Responsive adjustments */
@media screen and (max-width: 1400px) {
  .p-3[style*="padding-left: 180px"] {
    padding-left: 100px !important;
  }
}

@media screen and (max-width: 1200px) {
  .p-3[style*="padding-left: 180px"] {
    padding-left: 50px !important;
  }
}

@media screen and (max-width: 992px) {
  .p-3[style*="padding-top: 180px"] {
    padding-top: 100px !important;
  }

  .p-3[style*="padding-left: 180px"] {
    padding-left: 20px !important;
  }
}

@media screen and (max-width: 768px) {
  .p-3[style*="padding-top: 180px"] {
    padding-top: 80px !important;
  }

  .p-3[style*="padding-left: 180px"] {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  :deep(.p-datatable-tbody>tr>td),
  :deep(.p-datatable-thead>tr>th) {
    padding: 0.75rem 0.5rem !important;
  }
}
</style>