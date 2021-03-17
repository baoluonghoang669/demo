export default {
  setProjects: (state, payload) => (state.projects = payload),

  setProjectsDetail: (state, payload) => (state.projectsDetail = payload),

  addProject(state, payload) {
    return state.projects.push(payload);
  },

  deleteProject(state, payload) {
    return state.projects.splice(
      state.projects.indexOf(
        state.projects.find((project) => project._id === payload)
      ),
      1
    );
  },
};
