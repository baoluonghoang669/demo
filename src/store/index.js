import { createStore } from "vuex";
import authModule from "./auth/index";

export default createStore({
  modules: {
    auth: authModule,
  },
});
