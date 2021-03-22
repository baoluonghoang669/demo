import ProjectList from "../../../views/Admin/Projects/ProjectList.vue";
import ProjectAdd from "../../../views/Admin/Projects/ProjectAdd.vue";
import ProjectEdit from "../../../views/Admin/Projects/ProjectEdit.vue";

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
