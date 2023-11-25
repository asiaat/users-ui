import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import "./axios";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.component('VueDatePicker', VueDatePicker);
app.mount("#app");