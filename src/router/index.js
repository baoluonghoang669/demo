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
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Project.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/samples",
    name: "Samples",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Samples.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Auth.vue"),
  },
  {
    path: "/:NotFound(.*)*",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/layouts/404.vue"),
  },
  /*-------------------admin-----------------*/
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin/Dashboard.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
