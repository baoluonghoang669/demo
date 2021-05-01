import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
// import i18n from "../../plugins/i18n";

export default {
    namespaced: true,
    state: {
        projects: [],
        projectsDetail: [],
        // sourceBanner: [{
        //         img: "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-1.jpg",
        //         interior: i18n.t("interior"),
        //         title: "Troc studio",
        //         company: i18n.t("architecture-company"),
        //     },
        //     {
        //         img: "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-2.jpg",
        //         interior: i18n.t("house"),
        //         title: "Troc studio",
        //         company: i18n.t("architecture-company"),
        //     },
        //     {
        //         img: "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-3.jpg",
        //         interior: i18n.t("building"),
        //         title: "Troc studio",
        //         company: i18n.t("architecture-company"),
        //     },
        // ],
    },
    mutations,
    actions,
    getters,
};