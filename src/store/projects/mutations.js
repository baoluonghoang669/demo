export default {
    SET_PROJECTS: (state, payload) => (state.projects = payload),

    SET_DETAIL_PROJECT: (state, payload) => (state.projectsDetail = payload),

    ADD_PROJECT(state, payload) {
        return state.projects.push(payload);
    },

    DELETE_PROJECT(state, payload) {
        return state.projects.splice(
            state.projects.indexOf(
                state.projects.find((project) => project._id === payload)
            ),
            1
        );
    },

    UPDATE_NAME: (state, payload) => (state.projectsDetail.name = payload),
    UPDATE_PHOTO: (state, payload) => (state.projectsDetail.photo = payload),
    UPDATE_DESCRIPTION: (state, payload) =>
        (state.projectsDetail.description = payload),
    UPDATE_ARCHITECTURE: (state, payload) =>
        (state.projectsDetail.architecture = payload),
    UPDATE_CLIENT: (state, payload) => (state.projectsDetail.client = payload),
    UPDATE_COST: (state, payload) => (state.projectsDetail.cost = payload),
    UPDATE_AREA: (state, payload) => (state.projectsDetail.area = payload),

    //Search
    SET_DATA_PROJECT(state, data) {
        return (state.projects = Object.freeze(data));
    },
};