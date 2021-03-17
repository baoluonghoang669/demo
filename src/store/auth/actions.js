import axios from "axios";
import router from "../../router";

export default {
  async onLogin({ commit }, payload) {
    let url = process.env.VUE_APP_LOGIN;

    const response = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      token: true,
    });

    const responseData = response.data;

    if (responseData.success !== true) {
      return;
    }

    localStorage.setItem("token", responseData.token);
    localStorage.setItem("role", responseData.role);

    commit("setUser", responseData.data);

    commit("setToken", {
      token: responseData.token,
      role: responseData.role,
    });
  },

  async onRegister({ commit }, payload) {
    let url = process.env.VUE_APP_REGISTER;

    const response = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      token: true,
    });

    const responseData = response.data;

    if (response.status !== 200) {
      //error
    }

    localStorage.setItem("token", responseData.token);
    localStorage.setItem("role", responseData.role);

    commit("setToken", {
      token: responseData.token,
      role: responseData.role,
    });
  },

  async onForgotPassword({ commit }, payload) {
    let url = process.env.VUE_APP_FORGOT_PASSWORD;

    const response = await axios.post(url, {
      email: payload.email,
    });
    const responseData = response.data;

    localStorage.setItem("resetToken", response.data.resetToken);

    commit("setResetToken", {
      token: responseData.resetToken,
    });
  },

  async onResetPassword({ commit }, payload) {
    let url = `${process.env.VUE_APP_RESET_PASSWORD}/${localStorage.getItem(
      "resetToken"
    )}`;
    const password = {
      password: payload.password,
    };

    const response = await axios.put(url, password);

    if (response.data.data.success === false) {
      return;
    }

    commit("setResetPassword", password);
  },

  async fetchDetailUser({ commit }) {
    let url = process.env.VUE_APP_GET_ME;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    commit("setUser", responseData);
  },

  async saveDetailUser({ commit }, payload) {
    let url = process.env.VUE_APP_UPDATE_DETAIL;

    const detailUser = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      birthday: payload.birthday,
      city: payload.city,
      country: payload.country,
    };

    const response = axios.put(url, detailUser, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.success === false) {
      return;
    }

    commit("setUser", detailUser);
  },

  async logout({ commit }) {
    let url = process.env.VUE_APP_LOGOUT;

    const response = await axios.get(url);
    const responseData = response.data;

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    router.push("/");

    commit("setToken", {
      token: null,
      role: null,
      responseData,
    });
  },
};
