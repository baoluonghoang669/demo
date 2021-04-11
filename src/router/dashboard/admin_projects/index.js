const ProjectList = () => import("../../../views/Admin/Projects/ProjectList.vue");
const ProjectAdd = () => import("../../../views/Admin/Projects/ProjectAdd.vue");
const ProjectEdit = () => import("../../../views/Admin/Projects/ProjectEdit.vue");

export default [
  {
    path: "",
    name: "ProjectList",
    component: ProjectList,
  },
  {
    path: "addProject",
    name: "ProjectAdd",
    component: ProjectAdd,
  },
  {
    path: "editProject/:id",
    name: "ProjectEdit",
    component: ProjectEdit,
  },
];
