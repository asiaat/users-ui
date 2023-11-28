<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
</script>

<template>
  <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px]">
            <div class="mb-10 text-center md:mb-16">Login</div>
            <!-- Nupp Google'i autentimiseks -->
            <button
              @click="authStore.handleGoogleAuth()"
              class="w-full px-4 py-3 bg-indigo-500 hover:bg-indigo-700 rounded-md text-white"
            >
              Google Auth
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
