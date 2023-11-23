<script setup>
import { ref } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  email: "",
  password: "",
});

const handleLogin = async () => {
    await axios.post('/login',{
        email: form.value.email,
        password: form.value.password
    });

    router.push("/");
}
</script>

<template>
    <section class="bg-[#F4F7FF] py-20 lg:py-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div
            class="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden
              rounded-lg
              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
            "
          >
            <div class="mb-10 text-center md:mb-16">Login </div>
            <form @submit.prevent="handleLogin">
              <div class="mb-6">
                <input
                  type="email"
                  v-model="form.email"
                  placeholder="Email"
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
                />
                <div  class="flex">
                  
                </div>
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  v-model="form.password"
                  placeholder="Password"
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
                />
                
              </div>
              <div class="mb-10">
                <button
                  type="submit"
                  class="
                    w-full
                    px-4
                    py-3
                    bg-indigo-500
                    hover:bg-indigo-700
                    rounded-md
                    text-white
                  "
                >
                  Login
                </button>
              </div>
            </form>
            <router-link
              to="/forgot-password"
              class="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
            >
              Forgot Password?
            </router-link>
            <p class="text-base text-[#adadad]">
             
              <router-link to="/register" class="text-primary hover:underline">
                Register
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

