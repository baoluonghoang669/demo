import axios from "axios";
export default {
  async fetchListProjects({ commit }) {
    const url = process.env.VUE_APP_GET_PROJECTS;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setProjects", responseData);
  },

  //Get projects belongs to it's category
  async fetchProjectsForCategory({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${payload}/projects`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setProjects", responseData);
  },

  async fetchDetailProject({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_PROJECTS}/${payload}`;

    const response = await axios.get(url);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setProjectsDetail", responseData);
  },

  async onDeleteProject({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_PROJECTS}/${payload}`;

    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("deleteProject", payload);
  },

  async onAddProject({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_CATEGORIES}/${localStorage.getItem(
      "category"
    )}/projects`;

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

    const response = await axios.post(url, project, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("addProject", project);
  },
};
