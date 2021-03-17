import axios from "axios";
export default {
  async fetchAllCategories({ commit }) {
    const url = process.env.VUE_APP_GET_CATEGORIES;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setCategories", responseData);
  },

  //for show in client
  async fetchCategories({ commit }) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}?limit=3`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setCategories", responseData);
  },

  async onAddCategory({ commit }, payload) {
    const url = process.env.VUE_APP_GET_CATEGORIES;

    const category = {
      name: payload.name,
      description: payload.desription,
    };

    const response = await axios.post(url, category, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("addCategory", category);
  },

  async onDeleteCategory({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${payload}`;

    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      //error
    }

    commit("deleteCategory", payload);
  },
};
