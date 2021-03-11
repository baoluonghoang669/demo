import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    lang: localStorage.getItem("lang") || null,
    user: [],
    token: localStorage.getItem("token") || null,
  },
  mutations,
  actions,
  getters,
};
