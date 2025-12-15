<template>
  <div class="login-container surface-ground">
    <div class="login-card">

      <!-- Header -->
      <div class="login-header">
           <img src="/src/assets/icon2.png" alt="My Logo" class="my-logo-class" />
        <h1>Welcome Back</h1>
        <p>Sign in to continue</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="login-form"> 

        <!-- Email Field -->
        <div class="field">
          <label for="email" class="block text-100 font-medium mb-2">Email Address</label>
          <span class="p-input-icon-left w-full">
            <InputText id="email" v-model="email" type="email" placeholder="Enter your email Here" class="w-full p-inputtext-lg" required/>
          </span>
        </div>

        <!-- Password Field -->
        <div class="field">
          <label for="password" class="block text-100 font-medium mb-2">Password</label>
          <span class="p-input-icon-left w-full">
            <Password id="password" v-model="password" placeholder="Enter your password Here" :feedback="false" class="w-full" inputClass="w-full p-inputtext-lg" required/>
          </span>
        </div>

      <!-- Submit Button -->
      <PrimeButton label="Sign In" type="submit" :loading="loading" :disabled="loading" severity="primary" @click="handleSubmit()" raised size="large" class="w-full"  />
      </form>
       
        <div class="version-footer">
        <span>TPN Banker Beta version 1.0</span>
        <span>  © 2026 TPN Banker. All rights reserved.</span>
      </div>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import PrimeButton from 'primevue/button';
import { useToast } from 'primevue/usetoast';
import { useRouter } from 'vue-router';
// Add at top of your LoginUserPage.vue
import axios from 'axios';

// Reactive state
const toast = useToast();
const router = useRouter();
const email = ref('');
const password = ref(''); 
const loading = ref(false);

onMounted(() => {
  console.log('Login page mounted');
});

const handleSubmit = async () => {

  if (loading.value) return;
  loading.value = true;

  console.log('Login attempt');
    try {

          const response = await axios.post('http://localhost:3005/api/login', {
            username: email.value,
            password: password.value
          });
      
        console.log('Login successful:', response.data);
        toast.add({severity: 'success',  detail: 'Login Success',  life: 5000  });
        router.push('/customer-list-page');
      
      } catch (err) { 
          toast.add({ severity: 'error',  summary: 'Login Failed',  detail: data.message || 'Invalid credentials',  life: 3000  })
          console.error('Full error:', err);
          console.error('Error message:', err.message);
      } finally {
          console.log('Finally Reached successful:');
      }
};
 
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
  z-index: 1000;
}

.login-card {
  width: 100%;
  max-width: 450px;
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  background: var(--surface-card);
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-header {
  background: var(--primary-color);
  padding: 3rem 2rem;
  text-align: center;
  color: var(--primary-color-text);
}



.login-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.login-header p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95rem;
}

.login-form {
  padding: 2rem;
}

.field {
  margin-bottom: 1.5rem;
}

:deep(.p-password input) {
  width: 100%;
}

:deep(.p-input-icon-left > i) {
  left: 0.75rem;
  color: var(--text-color-secondary);
}

.w-full {
  width: 100%;
}

.version-footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-align: right;
  font-size: 1.4rem;
  color: #ffffff;
}


</style>