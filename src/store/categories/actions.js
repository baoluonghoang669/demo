import axios from "axios";
import router from "../../router/index";

export default {
  //Fetch all categories
  async fetchAllCategories({ commit }) {
    const url = process.env.VUE_APP_GET_CATEGORIES;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_CATEGORIES", responseData);
  },

  //Show in client
  async fetchCategories({ commit }) {
    //TODO không nên viết trực tiếp 3 ở đây, tạo const defaultLimit = 3 rồi truyền vào, người khác nhìn vào sẽ không hiểu vì sao là 3, , tương tự những chỗ khác
    const url = `${process.env.VUE_APP_GET_CATEGORIES}?limit=3`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_CATEGORIES", responseData);
  },

  //Sort
  async sortCategories({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}?sort=${payload}`;

    //TODO sao chỗ có chỗ không gắn token vậy, với viết vậy bị lặp lại rất nhiều, hỏi Hân nhé
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("SET_CATEGORIES", responseData);
  },

  //Get detail of a category
  async fetchDetailCategory({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${payload}`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_DETAIL_CATEGORY", responseData);
  },

  //Update project by id
  async updateCategoryById({ commit }, payload) {
    // TODO nhìn ở đây thì không biết payload này sẽ gồm những gì, nên truyền productId trong action, gọn hơn và action sẽ không bị phụ thuộc vào router
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${router.currentRoute.value.params.id}`;

    const detailCategory = {
      name: payload.name,
      description: payload.description,
    };

    const response = await axios.put(url, detailCategory, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("SET_DETAIL_CATEGORY", detailCategory);
  },

  //Add a category
  async onAddCategory({ commit }, payload) {
    const url = process.env.VUE_APP_GET_CATEGORIES;

    const category = {
      name: payload.name,
      description: payload.description,
    };

    const response = await axios.post(url, category, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("ADD_CATEGORY", category);
  },

  //Delete a category
  async onDeleteCategory({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${payload}`;

    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("DELETE_CATEGORY", payload);
  },
};
