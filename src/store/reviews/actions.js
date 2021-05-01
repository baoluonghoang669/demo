import router from "../../router/index";
import http from "../../helpers/http";
import FileSaver from "file-saver";
import CONSTANTS from "../../helpers/constant";

export default {
    //get all reviews of users
    async fetchAllReviews({ commit }) {
        const response = await http.get("reviews");
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_REVIEWS", responseData);
    },

    //get detail review of a user
    async fetchDetailReview({ commit }, payload) {
        const response = await http.get(`projects/${payload}/reviews`);
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_REVIEWS", responseData);
    },

    //get detail review of a user
    async fetchReviewById({ commit }, payload) {
        const response = await http.get(`reviews/${payload}`);
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_DETAIL_REVIEW", responseData);
    },

    async updateReviewById({ commit }, payload) {
        const detailReview = {
            comment: payload.comment,
            rating: payload.rating,
        };

        const response = await http.put(
            `reviews/${router.currentRoute.value.params.id}`,
            detailReview
        );

        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_DETAIL_REVIEW", detailReview);
    },

    //delete review of a user
    async onDeleteReview({ commit }, payload) {
        const response = await http.delete(`reviews/${payload}`);

        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("DELETE_REVIEW", payload);
    },

    //delete review of a user
    // async onUpdateReview({ commit }, payload) {
    //     const response = await http.put(`reviews/${payload}`);

    //     const responseData = response.data.data;
    //     if (responseData.success === false) {
    //         return;
    //     }

    //     commit("DELETE_REVIEW", payload);
    // },

    //add review when user post a comment
    async addUserReview({ commit }, payload) {
        const userReview = {
            comment: payload.comment,
            rating: payload.rating,
        };

        const response = await http.post(
            `projects/${router.currentRoute.value.params.id}/reviews`,
            userReview
        );

        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("ADD_REVIEW", userReview);
    },

    async getExcelFiles({ commit }) {
        const response = await http.get("reviews/export", {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, "reviews.xlsx");

        commit(responseData);
    },

    async getExcelFileById({ commit }, payload) {
        const response = await http.get(`reviews/export/${payload}`, {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, `review_${payload}.xlsx`);
        commit(responseData);
    },

    async index({ commit }, form) {
        let query = `limit=${CONSTANTS.limit}`;
        Object.keys(form).forEach((key) => {
            query += "&" + key + "=" + (form[key] || "");
        });
        const response = await http.get(`reviews?${query}`).then(
            (res) => res.data.data,
            (err) => ({
                error: {
                    ...err.response.data,
                },
            })
        );
        if (!response.error) commit("SET_DATA_REVIEW", response);
    },
};