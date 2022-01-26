<script setup lang="ts">
import { $fetch } from 'ohmyfetch';

const router = useRouter();
const register = async () => {
  const data = await $fetch('/api/register');
  router.push('/confirm-registration');
};
</script>
<template>
  <div>
    <button @click="register">Click to register</button>
  </div>
</template>
