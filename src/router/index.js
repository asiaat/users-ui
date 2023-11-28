import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    {
        path: "/customer",
        name: "Customer",
        component: () => import("../components/Customer.vue"),
      },
    {
        path: "/login",
        name: "Login",
        component: () => import("../components/Login.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () => import("../components/Register.vue"),
      },
      {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: () => import("../components/ForgotPassword.vue"),
      },
      {
        path: "/password-reset/:token",
        name: "ResetPassword",
        component: () => import("../components/ResetPassword.vue"),
      },
      {
        path: "/google",
        name: "GoogleAuth",
        component: () => import("../components/GoogleAuth.vue"),
      },
      {
        path: "/callback",
        name: "GoogleCallback",
        component: () => import("../components/GoogleCallback.vue"),
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;