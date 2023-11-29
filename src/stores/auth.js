import { defineStore } from "pinia";
import axios from "axios";
//import { useAuthStore } from './auth';

function formatDate(date) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
  
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
  
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
  
    return [year, month, day].join('-');
  };

export const useAuthStore = defineStore("auth",{
    state: () => ({
        authUser: null,
        authErrors: []
      }),
      getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors
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
            this.authErrors = [];
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
            this.authErrors = [];
            await this.getToken();
            try {
              await axios.post("/register", {
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

            const formattedDateOfBirth = formatDate(data.dateofbirth);

            await this.getToken();
            try {
              await axios.put("/update", {
                firstname: data.firstname,
                lastname: data.lastname,
                dateofbirth: formattedDateOfBirth,
              });
              this.router.push("/");
            } catch (error) {
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          }, 
          async handleLogout() {
            this.authErrors = [];
            await axios.post("/logout");
            this.authUser = null;
          },
          async handleForgotPassword(email) {
            this.getToken();
            try {
              const response = await axios.post("/forgot-password", {
                email: email,
              });
              this.authStatus = response.data.status;
              console.log("handleForgotPassword: "+this.authStatus);
              this.router.push("/emailsent");
            } catch (error) {
                console.log("handleForgotPassword: error: "+error.response.status);
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          },
          async handleResetPassword(resetData) {
            this.getToken();
            this.authErrors = [];
            try {
              const response = await axios.post("/reset-password", resetData);
              this.authStatus = response.data.status;
              //console.log("handleResetPassword: "+this.authStatus);
              this.router.push("/login");
            } catch (error) {
                //console.log("catch error: ");
              if (error.response.status === 422) {
                this.authErrors = error.response.data.errors;
              }
            }
          },         
          async handleGoogleAuth() {
            this.getToken();
            this.authErrors = [];
            try {
              const response = await axios.get("/api/auth/google/redirect");
              console.log(response);
              window.location.href = response.data.url;
            } catch (error) {
              
                this.authErrors = error;
                console.log("CATCH error: "+this.authErrors);
             
            }
          },
          async handleGoogleCallback(token) {
            this.getToken();
            this.authErrors = [];
            try {
              const response = await axios.post("/api/auth/google/callback", { token });
              this.authUser = response.data.user;
              localStorage.setItem('userToken', response.data.token); // Salvestage token
            } catch (error) {
              this.authErrors = error;
            }
          },
          
      }
})