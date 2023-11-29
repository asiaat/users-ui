<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const email = ref("");
</script>

<template>
  <form
    class="mx-auto max-w-md bg-slate-100 p-4 mt-12 rounded-lg"
    @submit.prevent="authStore.handleForgotPassword(email)"
  >
    <h3 class="font-bold">Forgot password</h3>

    <!-- Display success messages -->
    <div
      class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
      v-if="authStore.status"
    >
      {{ authStore.status }}
    </div>

    <!-- Display error messages -->
    <div v-if="authStore.errors.email" class="flex">
      <span class="text-red-400 text-sm m-2 p-2">{{ authStore.errors.email[0] }}</span>
    </div>

    <!-- Email Input -->
    <div class="my-6">
      <label
        for="email"
        class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
        >Your email</label
      >
      <input
        type="email"
        id="email"
        v-model="email"
        class="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
        placeholder="test@test"
      />
    </div>

    <!-- Submit Button -->
    <button
      class="
        w-full
        rounded-lg
        bg-blue-700
        px-5
        py-2.5
        text-center text-sm
        font-medium
        text-white
        hover:bg-blue-800
        focus:outline-none focus:ring-4 focus:ring-blue-300
        dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        sm:w-auto
      "
    >
      Submit
    </button>

    <!-- Disclaimer Section -->
    
    <!-- End of Disclaimer Section -->
  </form>
</template>
