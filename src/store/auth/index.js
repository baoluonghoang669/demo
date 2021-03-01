import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    lang: localStorage.getItem("lang") || null
  },
  mutations,
  actions,
  getters,
}