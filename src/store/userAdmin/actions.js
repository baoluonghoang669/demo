import axios from "axios";
import router from "../../router/index";
export default {
  async fetchAllUsers({ commit }) {
    const url = process.env.VUE_APP_GET_USERS;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_USERS", responseData);
  },

  async sortUsers({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_USERS}?sort=${payload}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_USERS", responseData);
  },

  async fetchUserById({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_USERS}/${payload}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("SET_DETAIL_USER", responseData);
  },

  async updateUserById({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_USERS}/${router.currentRoute.value.params.id}`;

    const detailUser = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      address: payload.address,
      birthday: payload.birthday,
      city: payload.city,
      country: payload.country,
    };

    const response = await axios.put(url, detailUser, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.success === false) {
      //error
    }

    commit("SET_DETAIL_USER", detailUser);
  },

  async onDeleteUser({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_USERS}/${payload}`;

    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
      return;
    }

    commit("DELETE_USER", payload);
  },

  async addUser({ commit }, payload) {
    const url = process.env.VUE_APP_GET_USERS;

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

    const response = await axios.post(url, user, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

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
};
