import ProjectDetail from "../../components/projects/ProjectDetail.vue";
import Project from "../../components/projects/Project.vue";
import ProjectMoreDetail from "../../components/projects/ProjectMoreDetail.vue";

export default [
  {
    path: "",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
  },
  {
    path: "/project/:id/projectDetail/:projectId",
    name: "ProjectMoreDetail",
    component: ProjectMoreDetail,
  },
];
