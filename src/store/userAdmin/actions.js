import router from "../../router/index";
import http from "../../helpers/http";
import axios from "axios";
import FileSaver from "file-saver";

export default {
  async fetchAllUsers({ commit }) {
    const response = await http.get("users");
    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_USERS", responseData);
  },

  async sortUsers({ commit }, payload) {
    const response = await http.get(`users?sort=${payload}`);
    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_USERS", responseData);
  },

  async fetchUserById({ commit }, payload) {
    const response = await http.get(`users/${payload}`);

    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_DETAIL_USER", responseData);
  },

  async updateUserById({ commit }, payload) {
    const detailUser = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      birthday: payload.birthday,
      city: payload.city,
      country: payload.country,
    };

    const response = await http.put(
      `users/${router.currentRoute.value.params.id}`,
      detailUser
    );

    if (response.success === false) {
      //error
    }

    commit("SET_DETAIL_USER", detailUser);
  },

  async onDeleteUser({ commit }, payload) {
    const response = await http.delete(`users/${payload}`);

    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
      return;
    }

    commit("DELETE_USER", payload);
  },

  async addUser({ commit }, payload) {
    const user = {
      name: payload.name,
      email: payload.email,
      address: payload.address,
      birthday: payload.birthday,
      phone: payload.phone,
      city: payload.city,
      country: payload.country,
      role: payload.role,
      password: payload.password,
    };

    const response = await http.post("users", user);

    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
      return;
    }

    commit("ADD_USER", user);
  },

  async getCity({ commit }) {
    const url = "https://vapi.vnappmob.com/api/province";
    const response = await axios.get(url);

    const responseData = response.data;

    commit("GET_CITY", responseData);
  },

  async getProvice({ commit }) {
    const url = `https://vapi.vnappmob.com/api/province/district/${localStorage.getItem(
      "city"
    )}`;
    console.log(url);
    const response = await axios.get(url);
    const responseData = response.data;

    commit("GET_PROVINCES", responseData);
  },

  async getExcelFiles({ commit }) {
    const response = await http.get("users/export", {
      responseType: "blob",
    });
    const responseData = response.data;

    FileSaver.saveAs(responseData, "assets.csv");

    commit(responseData);
  },

  async getExcelFileById({ commit }, payload) {
    const response = await http.get(`users/export/${payload}`, {
      responseType: "blob",
    });
    const responseData = response.data;

    FileSaver.saveAs(responseData, `assets_${payload}.csv`);
    commit(responseData);
  },
};
