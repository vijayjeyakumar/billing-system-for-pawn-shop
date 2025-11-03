<template>
    <div class="card">
        <DataTable :value="products" tableStyle="min-width: 50rem">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="text-xl font-bold">Products</span>
                    <Button icon="pi pi-refresh" rounded raised />
                </div>
            </template>
            <Column field="name" header="Name"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.image" class="w-24 rounded" />
                </template>
            </Column>
            <Column field="price" header="Price">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category"></Column>
       
            <Column header="Status">
            
            </Column>
            <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
        </DataTable>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const products = ref([
    {
        name: 'Bamboo Watch',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        rating: 5,
        inventoryStatus: 'INSTOCK'
    },
    {
        name: 'Black Watch',
        image: 'black-watch.jpg',
        price: 72,
        category: 'Accessories',
        rating: 4,
        inventoryStatus: 'LOWSTOCK'
    },
    {
        name: 'Blue Band',
        image: 'blue-band.jpg',
        price: 79,
        category: 'Fitness',
        rating: 3,
        inventoryStatus: 'OUTOFSTOCK'
    }
]);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const getSeverity = (product) => {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warn';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return null;
    }
};
</script>
