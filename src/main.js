import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

import Button from "primevue/button";
import Card from "primevue/card";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import InputText from "primevue/inputtext";

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component("Button", Button)
  .component("Card", Card)
  .component("InputText", InputText)
  .mount("#app");
