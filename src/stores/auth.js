import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null,
        
      }),
      getters: {
        user: (state) => state.authUser,
       
      },
      actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
          },
          async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
          },
          async handleLogin(data) {
            
            await this.getToken();
      
            try {
              await axios.post("/login", {
                email: data.email,
                password: data.password,
              });
              this.router.push("/");
            } catch (error) {
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          }, 
          async handleRegister(data) {
            
            await this.getToken();
            try {
              await axios.post("/register", {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation,
                firstname: data.firstname,
                lastname: data.lastname,
              });
              this.router.push("/");
            } catch (error) {
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          }, 
          async handleUpdateCustomer(data) {
            
            await this.getToken();
            try {
              await axios.put("/update", {
                name: data.name,
                firstname: data.firstname,
                lastname: data.lastname,
                birthofdate: data.birthofdate,
              });
              this.router.push("/");
            } catch (error) {
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          }, 
          async handleLogout() {
            await axios.post("/logout");
            this.authUser = null;
          },
          async handleForgotPassword(email) {
            //this.authErrors = [];
            this.getToken();
            try {
              const response = await axios.post("/forgot-password", {
                email: email,
              });
              this.authStatus = response.data.status;
            } catch (error) {
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          },
      }
})