import CategoryList from "../../../views/Admin/Categories/CategoryList.vue";
import CategoryAdd from "../../../views/Admin/Categories/CategoryAdd.vue";
import CategoryEdit from "../../../views/Admin/Categories/CategoryEdit.vue";

export default [
  {
    path: "",
    name: "CategoryList",
    component: CategoryList,
  },
  {
    path: "addCategory",
    name: "CategoryAdd",
    component: CategoryAdd,
  },
  {
    path: "editCategory/:id",
    name: "CategoryEdit",
    component: CategoryEdit,
  },
];
