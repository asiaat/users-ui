
<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();

const form = ref({
    email: "",
    password: "",
    password_confirmation : "",
    firstname:"",
    lastname:"",
});

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
            <div class="mb-10 text-center md:mb-16">Sign Up </div>
            <form @submit.prevent="authStore.handleRegister(form)">
               
                <div class="mb-6">
                <input
                  type="text"
                  v-model="form.firstname"
                  placeholder="First Name"
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
                <div  v-if="authStore.errors.firstname" class="flex">
                    <span class="text-red-500 text-sm m-2 p-2">
                       {{ authStore.errors.firstname[0] }}
                    </span>
                </div>
                </div>

                <div class="mb-6">
                <input
                  type="text"
                  v-model="form.lastname"
                  placeholder="Last Name"
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
                <div  v-if="authStore.errors.lastname" class="flex">
                    <span class="text-red-500 text-sm m-2 p-2">
                       {{ authStore.errors.lastname[0] }}
                    </span>
                </div>
                </div>  
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
                <div  v-if="authStore.errors.email" class="flex">
                    <span class="text-red-500 text-sm m-2 p-2">
                       {{ authStore.errors.email[0] }}
                    </span>
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
                <div  v-if="authStore.errors.password" class="flex">
                    <span class="text-red-500 text-sm m-2 p-2">
                       {{ authStore.errors.password[0] }}
                    </span>
                </div>
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  v-model="form.password_confirmation"
                  placeholder="Password Conirmation"
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
                  Register
                </button>
              </div>
            </form>
            
            <p class="text-base text-[#adadad]">
             
             
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

