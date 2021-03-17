import ReviewList from "../../../views/Admin/Reviews/ReviewList.vue";
import ReviewEdit from "../../../views/Admin/Reviews/ReviewEdit.vue";

export default [
  {
    path: "",
    name: "ReviewList",
    component: ReviewList,
  },
  {
    path: "editReview/:id",
    name: "ReviewEdit",
    component: ReviewEdit,
  },
];
