import UserList from "../../../views/Admin/Users/UserList.vue";
import UserAdd from "../../../views/Admin/Users/UserAdd.vue";
import UserEdit from "../../../views/Admin/Users/UserEdit.vue";

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
