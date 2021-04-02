import axios from "axios";
import router from "../../router/index";

export default {
  //get all reviews of users
  async fetchAllReviews({ commit }) {
    const url = process.env.VUE_APP_GET_REVIEWS;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_REVIEWS", responseData);
  },

  //get detail review of a user
  async fetchDetailReview({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_PROJECTS}/${payload}/reviews`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_REVIEWS", responseData);
  },

  async sortReviews({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_REVIEWS}?sort=${payload}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;

    if (responseData.success === false) {
      return;
    }

    commit("SET_REVIEWS", responseData);
  },

  //get detail review of a user
  async fetchReviewById({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_REVIEWS}/${payload}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_DETAIL_REVIEW", responseData);
  },

  async updateReviewById({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_REVIEWS}/${router.currentRoute.value.params.id}`;

    const detailReview = {
      comment: payload.comment,
      rating: payload.rating,
    };

    const response = await axios.put(url, detailReview, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_DETAIL_REVIEW", detailReview);
  },

  //delete review of a user
  async onDeleteReview({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_REVIEWS}/${payload}`;

    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("DELETE_REVIEW", payload);
  },

  //add review when user post a comment
  async addUserReview({ commit }, payload) {
    // const projectId = rootGetters["projects/getProjects"].id;
    const url = `${process.env.VUE_APP_GET_PROJECTS}/${router.currentRoute.value.params.id}/reviews`;

    const userReview = {
      comment: payload.comment,
      rating: payload.rating,
    };

    const response = await axios.post(url, userReview, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("ADD_REVIEW", userReview);
  },
};
