<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Header -->
      <div class="login-header">
        <div class="icon-wrapper">
          <i class="pi pi-lock"></i>
        </div>
        <h1>Welcome </h1>
        <p>Sign in to continue</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="login-form">
        <!-- Email Field -->
        <div class="field">
          <label for="email">Email Address</label>
          <span class="p-input-icon-left w-full">
            <i class="pi pi-envelope"></i>
            <InputText
              id="email"
              v-model="email"
              type="email"
              
              class="w-full"
              required
            />
          </span>
        </div>

        <!-- Password Field -->
        <div class="field">
          <label for="password">Password</label>
          <span class="p-input-icon-left w-full">
            <i class="pi pi-lock"></i>
            <Password
              id="password"
              v-model="password"
            
              :toggleMask="true"
              :feedback="false"
              class="w-full"
              inputClass="w-full"
              required
            />
          </span>
        </div>
 

        <!-- Submit Button -->
        <Button
          type="submit"
          label="Sign In"
          icon="pi pi-sign-in"
          class="w-full login-button"
        />


      </form>
    </div>

     
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button'; 

// Reactive state
const email = ref('');
const password = ref('');
const rememberMe = ref(false);

// Methods
const handleSubmit = () => {
  console.log('Login attempt:', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  });

  // Show alert instead of toast
  alert(`Login submitted successfully!\nEmail: ${email.value}`);
  
  // In a real app, you would make an API call here:
  // await loginUser({ email: email.value, password: password.value });
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  overflow-y: auto;
  z-index: 1000;
}

.login-card {
  width: 100%;
  max-width: 450px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  text-align: center;
  color: white;
}

.icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  margin-bottom: 1rem;
}

.icon-wrapper i {
  font-size: 2rem;
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

.field label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
 
 
 
.login-button {
  height: 48px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  transition: transform 0.2s;
}

.login-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(20, 9, 228, 0.4);
}
 
 
/* PrimeVue component customization */
:deep(.p-inputtext) {
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: all 0.2s;
  color: #1f2937;
  font-size: 0.95rem;
}

:deep(.p-inputtext:focus) {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  color: #111827;
}

:deep(.p-password input) {
  padding-left: 2.5rem;
  color: #1f2937;
  font-size: 0.95rem;
}

:deep(.p-input-icon-left > i) {
  left: 0.75rem;
  color: #9ca3af;
}
 
.w-full {
  width: 100%;
}
</style>