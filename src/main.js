import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";
import i18n from "./plugins/i18n";
createApp(App)
  .use(store)
  .use(i18n)
  .use(FlagIcon)
  .use(router)
  .mount("#app");
