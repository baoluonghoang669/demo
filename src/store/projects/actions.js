import axios from "axios";
export default {
  async fetchListProjects({ commit }) {
    const url = "http://localhost:3000/api/v1/projects";

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (response.success === false) {
      //error
    }

    commit("setProjects", responseData);
  },

  async fetchDetailProject( {commit}, payload ) {
    const url = `http://localhost:3000/api/v1/projects/${payload}`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (response.success === false) {
      //error
    }

    commit("setProjects", responseData);
  }
};
