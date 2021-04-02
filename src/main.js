import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlagIcon from "vue-flag-icon";
import i18n from "./plugins/i18n";
import VueAgile from "vue-agile";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import VueSmoothScroll from "vue3-smooth-scroll";
import ArchitectButton from "./components/common/ArchitectButton.vue";
import ArchitectAdvertiseLabel from "./components/common/ArchitectAdvertiseLabel.vue";
import ArchitectProjectItem from "./components/common/ArchitectProjectItem.vue";
import ArchitectDialog from "./components/common/ArchitectDialog.vue";
import ArchitectLoading from "./components/common/ArchitectLoading.vue";
import ArchitectInputSearch from "./components/common/ArchitectInputSearch.vue";
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

createApp(App)
  .use(VueAgile)
  .use(store)
  .use(i18n)
  .use(FlagIcon)
  .use(VueSmoothScroll)
  .use(router)
  .use(ElementPlus)
  .use(Chartkick.use(Chart))
  .component("architect-button", ArchitectButton)
  .component("architect-advertise-label", ArchitectAdvertiseLabel)
  .component("architect-project-item", ArchitectProjectItem)
  .component("architect-dialog", ArchitectDialog)
  .component("architect-loading", ArchitectLoading)
  .component("architect-input-search", ArchitectInputSearch)
  .mount("#app");
