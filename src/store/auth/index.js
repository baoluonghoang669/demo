import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    lang: localStorage.getItem("lang") || null,
    user: [],
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
    resetToken : localStorage.getItem("resetToken") || null,
    resetPassword: null,
  },
  mutations,
  actions,
  getters,
};
