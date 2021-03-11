import axios from "axios";
import router from "../../router";

export default {
  async onLogin({ commit }, payload) {
    let url = "http://localhost:3000/api/v1/auth/login";

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

    commit("setToken", {
      token: responseData.token,
    });
  },

  async onRegister({ commit }, payload) {
    let url = "http://localhost:3000/api/v1/auth/register";

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

    commit("setToken", {
      token: responseData.token,
    });
  },

  async fetchDetailUser({ commit }) {
    let url = "http://localhost:3000/api/v1/auth/me";

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    commit("setUser", response.data.data);
  },

  async saveDetailUser({ commit }, payload) {
    let url = "http://localhost:3000/api/v1/auth/updatedetails";

    const detailUser = {
      username: payload.username,
      phone: payload.phone,
      address: payload.address,
      birthday: payload.birthday,
      city: payload.city,
      country: payload.country,
    }

    const response = axios.put(
      url, detailUser,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    console.log(response);
    commit("setUser", ...detailUser);
  },

  async logout({ commit }) {
    let url = "http://localhost:3000/api/v1/auth/logout";

    const response = await axios.get(url);
    const responseData = response.data;

    localStorage.removeItem("token");
    router.push("/");

    commit("setToken", {
      token: null,
      responseData,
    });
  },
};
