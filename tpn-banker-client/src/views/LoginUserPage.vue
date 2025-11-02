<template>
  <div class="login-wrapper">
    <div class="login-inner">
      <Card class="login-card">
        <template #title>
          <h2 class="login-title">Sign In</h2>
        </template>
        <template #content>
          <div class="p-fluid">
            <div class="p-field">
              <label for="username">Username</label>
              <InputText id="username" v-model="username" placeholder="Enter username" />
            </div>
            <div class="p-field">
              <label for="password">Password</label>
              <InputText id="password" type="password" v-model="password" placeholder="Enter password" />
            </div>
            <Button label="Login" @click="handleLogin" class="login-button" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

function handleLogin() {
  console.log('Logging in with:', username.value, password.value);
}
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background-color: #f4f6f8;
  box-sizing: border-box;
}

.login-inner {
  width: 100%;
  max-width: 400px;
}

.login-card {
  width: 100%;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.login-title {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.p-field {
  margin-bottom: 1.25rem;
}

.login-button {
  width: 100%;
  font-weight: 600;
}
</style>