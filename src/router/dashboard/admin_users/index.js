const UserEdit = () => import("../../../views/Admin/Users/UserEdit.vue");
const UserAdd = () => import("../../../views/Admin/Users/UserAdd.vue");
const UserList = () => import("../../../views/Admin/Users/UserList.vue");


export default [
  {
    path: "",
    name: "UserList",
    component: UserList,
  },
  {
    path: "addUser",
    name: "UserAdd",
    component: UserAdd,
  },
  {
    path: "editUser/:id",
    name: "UserEdit",
    component: UserEdit,
  },
];
