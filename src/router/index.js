import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "Project" */ "../views/Project/Project.vue"),
  },
  {
    path: "/project/:id",
    name: "ProjectDetail",
    component: () =>
      import(
        /* webpackChunkName: "ProjectDetail" */ "../views/Project/ProjectDetail.vue"
      ),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "Contact" */ "../views/Contact.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "Auth" */ "../views/Auth.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
      import(
        /* webpackChunkName: "ForgotPassword" */ "../views/ForgotPassword.vue"
      ),
  },
  {
    path: "/:NotFound(.*)*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "../components/layouts/404.vue"),
  },
  /*-------------------admin-----------------*/
  {
    path: "/dashboard",
    name: "DashBoard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin/Dashboard.vue"),
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

export default router;
