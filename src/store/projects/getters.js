export default {
    getProjects: (state) => state.projects,
    getProjectsDetail: (state) => state.projectsDetail,
    checkProjects: (state) => state.projects.length,
    getTitleHeader: (state) => state.sourceBanner,
};