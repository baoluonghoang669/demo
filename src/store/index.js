import { createStore } from "vuex";
import authModule from "./auth/index";
import projectsModule from "./projects/index";
import reviewsModule from "./reviews/index";
import categoriesModule from "./categories/index";

export default createStore({
  modules: {
    auth: authModule,
    projects: projectsModule,
    reviews: reviewsModule,
    categories: categoriesModule,
  },
});
