import axios from "axios";
export default {
  async fetchDetailReview({ commit }, payload) {
    const url = `http://localhost:3000/api/v1/projects/${payload}/reviews`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (response.success === false) {
      //error
    }

    commit("setReviews", responseData);
  },
};
