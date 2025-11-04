<template>
  <div class="login-container surface-ground">
    <div class="login-card">

      <!-- Header -->
      <div class="login-header">
        <div class="icon-wrapper">
           <img src="/src/assets/icon2.png" alt="My Logo" class="my-logo-class" />

        </div>
        <h1>Welcome Back</h1>
        <p>Sign in to continue</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="login-form"> 

        <!-- Email Field -->
        <div class="field">
          <label for="email" class="block text-100 font-medium mb-2">Email Address</label>
          <span class="p-input-icon-left w-full">

            <InputText
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email Here"
              class="w-full p-inputtext-lg"
              required
            />
          </span>
        </div>

        <!-- Password Field -->
        <div class="field">
          <label for="password" class="block text-100 font-medium mb-2">Password</label>
          <span class="p-input-icon-left w-full">
            <Password
              id="password"
              v-model="password"
              placeholder="Enter your password Here"
              :feedback="false"
              class="w-full"
              inputClass="w-full p-inputtext-lg"
              required
            />
          </span>
        </div>

        <!-- Submit Button -->
      
      <PrimeButton label="Sign In" type="submit" severity="primary"  raised size="large" class="w-full"  />


      </form>
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

// Reactive state
const toast = useToast();
const router = useRouter();
const email = ref('');
const password = ref(''); 

onMounted(() => {
  console.log('Login page mounted');
});

// Methods
const handleSubmit = () => {
  console.log('Login attempt');


  //Here call API for validation put inside try catch

  // Show alert instead of toast
  toast.add({
    severity: 'success',
    detail: 'Login Success',
    life: 5000 
  });

  //Navigate to customer list page
  router.push('/customer-list-page');
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



.icon-wrapper i {
  font-size: 2rem;
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
</style>