import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";
import About from "../views/About.vue";
// import ProjectDetail from "../views/ProjectDetail.vue";
// import Project from "../views/Project.vue";
// import ProjectMoreDetail from "../views/ProjectMoreDetail.vue";
import Contact from "../views/Contact.vue";
import Profile from "../views/Profile.vue";
import Auth from "../views/Auth.vue";

import PageNotFound from "../components/layouts/404.vue";

import MainPage from "../views/Admin/MainPage.vue";
import ProjectPage from "../views/ProjectPage.vue";

//other routes
import DashBoardRoutes from "./dashboard/dashboard";
import ProjectRoutes from "./project/index";
import AuthRoutes from "./auth/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/:NotFound(.*)*",
    name: "404",
    component: PageNotFound,
  },
  {
    path: "/auth",
    component: Auth,
    children: AuthRoutes,
  },
  {
    path: "/project",
    component: ProjectPage,
    children: ProjectRoutes,
  },
  {
    path: "/dashboard",
    component: MainPage,
    children: DashBoardRoutes,
    meta: { authRequired: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});

router.beforeEach((to, _, next) => {
  if (to.meta.authRequired && store.getters["auth/isAdmin"] !== "admin") {
    next("/auth");
  } else {
    next();
  }
});

export default router;
