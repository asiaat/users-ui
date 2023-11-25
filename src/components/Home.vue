<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref(new Date());
// In case of a range picker, you'll receive [Date, Date]
const format = (date) => {
  const day     = date.getDate();
  const month   = date.getMonth() + 1;
  const year    = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const authStore = useAuthStore();

onMounted(async () => {
  await authStore.getUser();
});

</script>
<template>
    <div class="max-w-7xl mx-auto">
        <h1>Home ...</h1>
        <div>
            <Datepicker v-model="date" :format="format" />
        </div>
       
      <div v-if="authStore.user">
        <h1>{{ authStore.user.name }}</h1>
        <p>{{ authStore.user.email }}</p>
      </div>
      <div v-else>
        <h1>Go and login</h1>
      </div>
    </div>
  </template>