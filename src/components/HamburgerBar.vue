<script setup>
import { useAuthStore } from "../stores/auth";
import { ref, onMounted, onUnmounted } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  console.log("isMenuOpen status: "+isMenuOpen.value);
};

const checkWindowSize = () => {
  if (window.innerWidth > 768) { // Eeldame, et 768px on piir, kus hamburgeri menüü kaob
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', checkWindowSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkWindowSize);
});

const authStore = useAuthStore();
</script>
<template>
  <nav class="rounded bg-indigo-700 text-white px-2 py-2.5 sm:px-4 z-50 relative">
    <div
      class="container mx-auto flex flex-wrap items-center justify-between"
      bis_skin_checked="1"
    >
      <a href="/" class="flex items-center">
        Customers
      </a>
      <a> 
       
      </a>
      <button
        data-collapse-toggle="navbar-default"
        @click="toggleMenu"
        type="button"
        class="
          ml-3
          inline-flex
          items-center
          rounded-lg
          p-2
          text-sm text-gray-500
          hover:bg-gray-100
          focus:outline-none focus:ring-2 focus:ring-gray-200
          dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
          md:hidden
        "
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

     

      <div
        class="hidden w-full md:block md:w-auto"
        id="navbar-default"
        bis_skin_checked="1"
      >
        <ul
          class="
            mt-4
            flex flex-col
            rounded-lg
            p-4
            md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
          "
        >
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="block rounded py-2 pr-4 pl-3 text-white"
              aria-current="page"
              >Home</router-link
            >
          </li>
          <template v-if="!authStore.user">
            <li>
              <router-link
                :to="{ name: 'Login' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                "
                >Login</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Register' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-50
                  hover:bg-gray-700
                  md:border-0
                "
                >Register</router-link
              >
            </li>
          </template>
          <template v-else>
            <button
              @click="authStore.handleLogout"
              class="
                block
                rounded
                py-2
                pr-4
                pl-3
                text-gray-50
                hover:bg-gray-700
                md:border-0
              "
            >
              Logout
            </button>
          </template>
        </ul>
      </div>
    </div>
  </nav>

  <div v-show="isMenuOpen" class="fixed inset-0 pt-16 z-40 bg-white p-5">
    <div class="flex flex-col h-full justify-between">
      <ul class="space-y-4">
       

        <li>
              <router-link
                :to="{ name: 'Home' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-600
                  hover:bg-gray-300
                "
                @click="toggleMenu"
                >Home</router-link
              >
            </li>
        <template v-if="!authStore.user">
            <li>
              <router-link
                :to="{ name: 'Login' }"
                class="
                  block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-600
                  hover:bg-gray-300
                "
                @click="toggleMenu"
                >Login</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Register' }"
                class="
                block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-600
                  hover:bg-gray-300
                "
                @click="toggleMenu"
                >Register</router-link
              >
            </li>
          </template>
          <template v-else>
            <li>
                <router-link
                :to="{ name: 'Customer' }"
                class="
                block
                  rounded
                  py-2
                  pr-4
                  pl-3
                  text-gray-600
                  hover:bg-gray-300
                "
                @click="toggleMenu"
                >Customer's settings</router-link
              >
            </li>
            <li>
                <button
              @click="authStore.handleLogout"
              class="
                block
                rounded
                py-2
                pr-4
                pl-3
                text-gray-600
                hover:bg-gray-300
              "
            >
              Logout
            </button>
            </li>
            
          </template>
      </ul>
      <button @click="toggleMenu" class="self-end">Close</button>
    </div>
  </div>
</template>