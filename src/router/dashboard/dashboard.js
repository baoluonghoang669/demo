const ReviewPage = () => import("../../views/Admin/Reviews/ReviewPage.vue");
const ProjectPage = () => import("../../views/Admin/Projects/ProjectPage.vue");
const CategoryPage = () => import("../../views/Admin/Categories/CategoryPage.vue");
const UserPage = () => import("../../views/Admin/Users/UserPage.vue");
const Messages = () => import("../../views/Admin/Messages.vue");
const DashBoard = () => import("../../views/Admin/Dashboard.vue");



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
