<script setup>
</script>

<template>
    <nav class="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
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
              class="block rounded py-2 pr-4 pl-3 text-gray-400"
              aria-current="page"
              >Home</router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Login' }"
              class="block rounded py-2 pr-4 pl-3 text-gray-400"
              aria-current="page"
              >Login</router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'Register' }"
              class="block rounded py-2 pr-4 pl-3 text-gray-400"
              aria-current="page"
              >Sign Up</router-link>
          </li>
        </ul>
        </div>
    </nav>
</template>
