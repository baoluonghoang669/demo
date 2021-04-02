import axios from "axios";
import router from "../../router";

export default {
  //Login
  async onLogin({ commit }, payload) {
    let url = process.env.VUE_APP_LOGIN;

    const response = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      token: true,
    });

    const responseData = response.data;

    if (responseData.success === false) {
      return;
    }
    localStorage.setItem("token", responseData.token);
    localStorage.setItem("role", responseData.role);
    localStorage.setItem("idUser", responseData.idUser);

    commit("SET_USER", responseData.data);

    commit("SET_TOKEN", {
      token: responseData.token,
      role: responseData.role,
      id: responseData.idUser,
    });
  },

  //Register
  async onRegister({ commit }, payload) {
    let url = process.env.VUE_APP_REGISTER;

    const response = await axios.post(url, {
      email: payload.email,
      password: payload.password,
      token: true,
    });

    const responseData = response.data;

    if (responseData.success === false) {
      return;
    }

    localStorage.setItem("token", responseData.token);
    localStorage.setItem("role", responseData.role);
    localStorage.setItem("idUser", responseData.idUser);

    commit("SET_TOKEN", {
      token: responseData.token,
      role: responseData.role,
      id: responseData.idUser,
    });
  },

  //Forgot password
  async onForgotPassword({ commit }, payload) {
    let url = process.env.VUE_APP_FORGOT_PASSWORD;

    const response = await axios.post(url, {
      email: payload.email,
    });
    const responseData = response.data;

    localStorage.setItem("resetToken", response.data.resetToken);

    commit("SET_RESET_TOKEN", {
      token: responseData.resetToken,
    });
  },

  //Reset password
  async onResetPassword({ commit }, payload) {
    let url = `${process.env.VUE_APP_RESET_PASSWORD}/${localStorage.getItem(
      "resetToken"
    )}`;
    const password = {
      password: payload.password,
    };

    const response = await axios.put(url, password);

    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("SET_RESET_PASSWORD", password);
  },

  //Fetch detail logged user
  async fetchDetailUser({ commit }) {
    let url = process.env.VUE_APP_GET_ME;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if(responseData.success === false) {
      return;
    }

    commit("SET_USER", responseData);
  },

  //update user detail profile
  async updateDetailUser({ commit }, payload) {
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

    commit("SET_PROFILE_USER", detailUser);
  },

  //update user's avatar
  async updateAvatar({ commit }, files) {
    let url = `${process.env.VUE_APP_AUTH}/${localStorage.getItem(
      "idUser"
    )}/avatar`;

    let formData = new FormData();
    formData.append("file", files);

    const response = await axios.put(url, formData, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.success === false) {
      return;
    }

    commit("UPDATE_AVATAR", response.data.data);
  },

  //Logout
  async logout({ commit }) {
    let url = process.env.VUE_APP_LOGOUT;

    const response = await axios.get(url);
    const responseData = response.data;

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("idUser");
    router.push("/");

    commit("SET_TOKEN", {
      token: null,
      role: null,
      idUser: null,
      responseData,
    });
  },
};
