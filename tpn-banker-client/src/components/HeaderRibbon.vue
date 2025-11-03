<template>
  <div class="header-ribbon"
    style="display: flex; justify-content: space-between; align-items: center; padding: 0 20px;">
    <h3>🧭 TPN BANKERS</h3>
    <div style="display: flex; gap: 12px;">
      <Button @click="handleNavigation('home')" style="background: transparent; border: 1px solid white; color: white;
        padding: 6px 12px; border-radius: 6px; cursor: pointer;">HOME</Button>
      <Button @click="handleNavigation('generateBill')" style="background: transparent; border: 1px solid white; color: white;
        padding: 6px 12px; border-radius: 6px; cursor: pointer;">GENERATE BILL</Button>
      <Button @click="handleNavigation('logOut')" style="background: transparent; border: 1px solid white; color: white;
        padding: 6px 12px; border-radius: 6px; cursor: pointer;" >LOG OUT</Button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useToast } from 'primevue/usetoast';
import Button from 'primevue/button';

const toast = useToast();
const router = useRouter();


const handleNavigation = (toPath) => {

  console.log("Navigating to:", toPath);

  switch (toPath) {
    case 'home':
      router.push('/customer-list-page');
      break;
    case 'generateBill':
      router.push('/generate-bill');
      break;
    case 'logOut':
      localStorage.clear();
      router.push('/login');
      toast.add({ severity: 'warn', summary: 'LogOut Success', life: 2000 });
      break;
    default:
      console.warn("Unknown navigation path:", toPath);

    };
};

</script>

<style scoped>
.header-ribbon {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}
</style>