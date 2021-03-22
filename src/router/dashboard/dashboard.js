import DashBoard from "../../views/Admin/Dashboard.vue";
import Messages from "../../views/Admin/Messages.vue";
import UserPage from "../../views/Admin/Users/UserPage.vue";
import CategoryPage from "../../views/Admin/Categories/CategoryPage.vue";
import ProjectPage from "../../views/Admin/Projects/ProjectPage.vue";
import ReviewPage from "../../views/Admin/Reviews/ReviewPage.vue";

import AdminProjectRoutes from "./admin_projects/index";
import AdminUserRoutes from "./admin_users/index";
import AdminCategoryRoutes from "./admin_categories/index";
import AdminReviewRoutes from "./admin_reviews/index";

export default [
  {
    path: "",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "projects",
    name: "ProjectPage",
    component: ProjectPage,
    children: AdminProjectRoutes,
  },
  {
    path: "users",
    name: "UserPage",
    component: UserPage,
    children: AdminUserRoutes,
  },
  {
    path: "categories",
    name: "CategoryPage",
    component: CategoryPage,
    children: AdminCategoryRoutes,
  },
  {
    path: "reviews",
    name: "ReviewPage",
    component: ReviewPage,
    children: AdminReviewRoutes,
  },
];
