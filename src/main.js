import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";
import i18n from "./plugins/i18n";
import VueAgile from "vue-agile";
import VueSmoothScroll from "vue3-smooth-scroll";
import ArchitectButton from "./components/common/ArchitectButton.vue";
import ArchitectProjectItem from "./components/common/ArchitectProjectItem.vue";

createApp(App)
  .use(VueAgile)
  .use(store)
  .use(i18n)
  .use(FlagIcon)
  .use(VueSmoothScroll)
  .use(router)
  .component("architect-button", ArchitectButton)
  .component("architect-project-item", ArchitectProjectItem)
  .mount("#app");
