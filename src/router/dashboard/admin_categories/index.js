const CategoryList = () =>
  import("../../../views/Admin/Categories/CategoryList.vue");
const CategoryAdd = () =>
  import("../../../views/Admin/Categories/CategoryAdd.vue");
const CategoryEdit = () =>
  import("../../../views/Admin/Categories/CategoryEdit.vue");

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
