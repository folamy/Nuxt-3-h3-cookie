<script setup lang="ts">
// import { useRequestHeaders } from 'nuxt3';
const { data } = await useFetch('/api/get-registered');
console.log(data.value);
</script>
<template>
  <div>
    <div>Check console</div>
  </div>
</template>
