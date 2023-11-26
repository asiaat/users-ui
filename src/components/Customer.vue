
<script setup>
  import { ref, onMounted } from "vue";
  import { useAuthStore } from "../stores/auth";
 
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  const format = (date) => {
    const day     = date.getDate();
    const month   = date.getMonth() + 1;
    const year    = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
  
  const authStore = useAuthStore();
  const isEditing = ref(false);

  onMounted(async () => {
    await authStore.getUser();
    
    initializeForm();
  });
  
  const form = ref({
        email: "",
        password: "",
        password_confirmation : "",
        firstname:"",
        lastname:"",
        dateofbirth:"",
    });

    const initializeForm = () => {
        form.value.firstname = authStore.user.firstname || "";
        form.value.lastname = authStore.user.lastname || "";
        form.value.dateofbirth = authStore.user.dateofbirth || "";
    };
  
  const editProfile = () => {
    isEditing.value = true;
  };
  
  const cancelEdit = () => {
    isEditing.value = false;
  };
  
  
  </script>

<template>
    <section class="bg-[#F4F7FF] py-20 lg:py-[160px]">
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
              <div v-if="authStore.user">
                <div v-if="isEditing">
                  <!-- Muutmise vorm -->
                  <form @submit.prevent="authStore.handleUpdateCustomer(form)">
                    <div class="mb-6">
                      
                      <Datepicker v-model="form.dateofbirth" :format="format" />
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        v-model="form.firstname"
                        placeholder="firstname"
                        class="input-style"
                        
                      />
                    </div>
                    <div class="mb-6">
                      <input
                        type="text"
                        v-model="form.lastname"
                        placeholder="lastname"
                        class="input-style"
                      />
                    </div>
                    
                    
                    <div class="mb-10">
                        <button type="submit" class="button-style">Save Changes</button>
                        <button type="button" @click="cancelEdit" class="button-style-secondary">Cancel</button>
                    </div>
                  </form>
                </div>
                <div v-else>
                  <!-- Andmete vaatamine -->
                  <p class="mb-4 text-base text-body-color">First Name: {{ authStore.user.firstname  }}</p>
                  <p class="mb-4 text-base text-body-color">Last Name: {{ authStore.user.lastname  }}</p>
                  <p class="mb-4 text-base text-body-color">Date of Birth: {{ authStore.user.dateofbirth  }}</p>
                  
                  <button @click="editProfile" class="button-style">Edit Profile</button>
                </div>
              </div>
              <div v-else>
                <h1>Please login to view your profile</h1>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  

  
  <style>
  .button-style {
  display: block;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background-color: #4F46E5; /* Indigo värv */
  color: white;
  border-radius: 0.375rem;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-style:hover {
  background-color: #4338CA; /* Tumedam indigo värv */
}

.button-style-secondary {
  display: block;
  width: 100%;
  padding: 0.75rem 1.25rem;
  background-color: #E5E7EB; /* Hall värv */
  color: #1F2937; /* Tume tekst */
  border-radius: 0.375rem;
  margin-top: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-style-secondary:hover {
  background-color: #D1D5DB; /* Tumedam hall värv */
}
  .input-style {
    border: 1px solid #E9EDF4;
    background-color: #FCFDFE;
    padding: 0.75rem 1.25rem;
    border-radius: 0.375rem;
    width: 100%;
    
    placeholder: #ACB6BE;
    
    focus:border-indigo-500;
    focus-visible:shadow-none;
  }
  
  .button-style {
    display: block;
    width: 100%;
    padding: 0.75rem 1.25rem;
    background-color: indigo-500;
    hover:bg-indigo-700;
    border-radius: 0.375rem;
    color: white;
    margin-top: 1rem;
  }
  </style>
  
  
  