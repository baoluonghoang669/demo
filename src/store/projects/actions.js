import router from "../../router/index";
import http from "../../helpers/http";
import FileSaver from "file-saver";
// import CONSTANTS from "../../helpers/constant";

export default {
    async fetchListProjects({ commit }) {
        const response = await http.get("projects");
        const responseData = response.data.data;
        if (responseData.success === false) {
            //error
        }

        commit("SET_PROJECTS", responseData);
    },

    //update project's photo
    async uploadPhoto({ commit }, files) {
        let formData = new FormData();
        formData.append("file", files);

        const response = await http.put(
            `projects/${router.currentRoute.value.params.id}/photo`,
            formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        if (response.success === false) {
            return;
        }

        commit("UPDATE_PHOTO", response.data.data);
    },

    //Get projects belongs to it's category
    async fetchProjectsForCategory({ commit }, payload) {
        const response = await http.get(`categories/${payload}/projects`);
        const responseData = response.data.data;
        if (responseData.success === false) {
            //error
        }

        commit("SET_PROJECTS", responseData);
    },

    async fetchDetailProject({ commit }, payload) {
        const response = await http.get(`projects/${payload}`);
        const responseData = response.data.data;
        if (responseData.success === false) {
            //error
        }

        commit("SET_DETAIL_PROJECT", responseData);
    },

    //Update project by id
    async onUpdateProject({ commit }, payload) {
        const detailProject = {
            name: payload.name,
            description: payload.description,
            architecture: payload.architecture,
            client: payload.client,
            cost: payload.cost,
            area: payload.area,
        };

        const response = await http.put(
            `projects/${router.currentRoute.value.params.id}`,
            detailProject
        );

        if (response.data.data.success === false) {
            //error
        }

        commit("SET_DETAIL_PROJECT", detailProject);
    },

    async onDeleteProject({ commit }, payload) {
        const response = await http.delete(`projects/${payload}`);

        const responseData = response.data.data;
        if (responseData.success === false) {
            //error
        }

        commit("DELETE_PROJECT", payload);
    },

    async onAddProject({ commit }, payload) {
        const project = {
            name: payload.name,
            description: payload.description,
            address: payload.address,
            architecture: payload.architecture,
            category: payload.category,
            client: payload.client,
            cost: payload.cost,
            area: payload.area,
        };

        const response = await http.post(
            `categories/${localStorage.getItem("category")}/projects`,
            project
        );

        const responseData = response.data.data;
        if (responseData.success === false) {
            //error
        }

        commit("ADD_PROJECT", project);
    },
    async getExcelFiles({ commit }) {
        const response = await http.get("projects/export", {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, "projects.xlsx");

        commit(responseData);
    },

    async getExcelFileById({ commit }, payload) {
        const response = await http.get(`projects/export/${payload}`, {
            responseType: "blob",
        });
        const responseData = response.data;

        FileSaver.saveAs(responseData, `project_${payload}.xlsx`);
        commit(responseData);
    },

    async importExcels({ commit }, payload) {
        const response = await http.post(`projects/import`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        const responseData = response.data.data;
        commit("SET_PROJECTS", responseData);
    },

    async index({ commit }, form) {
        let query = `limit=50`;
        Object.keys(form).forEach((key) => {
            query += "&" + key + "=" + (form[key] || "");
        });
        const response = await http.get(`projects?${query}`).then(
            (res) => res.data.data,
            (err) => ({
                error: {
                    ...err.response.data,
                },
            })
        );
        if (!response.error) commit("SET_DATA_PROJECT", response);
    },
};