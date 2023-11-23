<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const user = ref();

onMounted(async () => {
    const data = await axios.get('/api/user');
    console.log(data);
});
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <h1>Home</h1>
    <h1>
        {{ user?.name }}
    </h1>
  </div>
</template>