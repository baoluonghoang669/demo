import axios from "axios";
export default {
  async fetchCategories({ commit }) {
    const url = `http://localhost:3000/api/v1/categories`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (response.success === false) {
      //error
    }

    commit("setCategories", responseData);
  },
};
