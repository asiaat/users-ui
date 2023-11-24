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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;