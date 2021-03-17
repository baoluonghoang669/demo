import { createStore } from "vuex";
import authModule from "./auth/index";
import projectsModule from "./projects/index";
import reviewsModule from "./reviews/index";
import categoriesModule from "./categories/index";
import userAdminModule from "./userAdmin/index";
import messagesModule from "./messages/index";

export default createStore({
  modules: {
    auth: authModule,
    projects: projectsModule,
    reviews: reviewsModule,
    categories: categoriesModule,
    userAdmin: userAdminModule,
    messages: messagesModule,
  },
});
