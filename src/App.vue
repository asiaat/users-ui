<script setup>
  import Navi from './components/Navi.vue';
  import HamburgerBar from './components/HamburgerBar.vue';
</script>

<template>
  <main>
    <HamburgerBar />
    <RouterView />
  </main>
</template>