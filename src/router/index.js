import { createRouter, createWebHistory } from "vue-router";
import store from "../store/index.js";

const ProjectPage = () =>
    import ("../views/ProjectPage.vue");
const MainPage = () =>
    import ("../views/Admin/MainPage.vue");
const PageNotFound = () =>
    import ("../components/layouts/404.vue");
const Auth = () =>
    import ("../views/Auth.vue");
const Profile = () =>
    import ("../views/Profile.vue");
const Contact = () =>
    import ("../views/Contact.vue");
const About = () =>
    import ("../views/About.vue");
const Home = () =>
    import ("../views/Home.vue");

//other routes
import DashBoardRoutes from "./dashboard/dashboard";
import ProjectRoutes from "./project/index";
import AuthRoutes from "./auth/index";

const routes = [{
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

//guard navigation
router.beforeEach((to, _, next) => {
    if (to.meta.authRequired && store.getters["auth/isAdmin"] !== "admin") {
        next("/auth");
    } else {
        next();
    }
});

export default router;