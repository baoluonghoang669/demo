import router from "../../router/index";
import http from "../../helpers/http";
import FileSaver from "file-saver";
import CONSTANTS from "../../helpers/constant";

export default {
    //Fetch all categories
    async fetchAllCategories({ commit }) {
        const response = await http.get("categories");
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_CATEGORIES", responseData);
    },

    //Show in client
    async fetchCategories({ commit }) {
        const response = await http.get("categories?limit=3");
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_CATEGORIES", responseData);
    },

    //Sort
    async sortCategories({ commit }, payload) {
        const response = await http.get(`categories?sort=${payload}`);
        const responseData = response.data.data;

        if (responseData.success === false) {
            return;
        }

        commit("SET_CATEGORIES", responseData);
    },

    //Get detail of a category
    async fetchDetailCategory({ commit }, payload) {
        const response = await http.get(`categories/${payload}`);
        const responseData = response.data.data;
        if (responseData.success === false) {
            return;
        }

        commit("SET_DETAIL_CATEGORY", responseData);
    },

    //Update project by id
    async updateCategoryById({ commit }, payload) {
        const detailCategory = {
            name: payload.name,
            description: payload.description,
        };

        const response = await http.put(
            `categories/${router.currentRoute.value.params.id}`,
            detailCategory
        );

        const responseData = response.data.data;

        if (responseData.success === false) {
            return;
        }

        commit("SET_DETAIL_CATEGORY", detailCategory);
    },

    //Add a category
    async onAddCategory({ commit }, payload) {
        const category = {
            name: payload.name,
            description: payload.description,
        };

        const response = await http.post("categories", category);

        const responseData = response.data.data;

        if (responseData.success === false) {
            return;
        }

        commit("ADD_CATEGORY", category);
    },

    //Delete a category
    async onDeleteCategory({ commit }, payload) {
        const response = await http.delete(`categories/${payload}`);

        const responseData = response.data.data;

        if (responseData.success === false) {
            return;
        }

        commit("DELETE_CATEGORY", payload);
    },

    async getExcelFiles({ commit }) {
        const response = await http.get("categories/export", {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, "categories.xlsx");

        commit(responseData);
    },

    async getExcelFileById({ commit }, payload) {
        const response = await http.get(`categories/export/${payload}`, {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, `category_${payload}.xlsx`);
        commit(responseData);
    },

    async index({ commit }, form) {
        let query = `limit=${CONSTANTS.limit}`;
        Object.keys(form).forEach((key) => {
            query += "&" + key + "=" + (form[key] || "");
        });
        const response = await http.get(`categories?${query}`).then(
            (res) => res.data.data,
            (err) => ({
                error: {
                    ...err.response.data,
                },
            })
        );
        if (!response.error) commit("SET_DATA_CATEGORY", response);
    },
};