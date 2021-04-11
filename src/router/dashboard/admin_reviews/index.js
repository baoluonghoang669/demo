const ReviewEdit = () => import("../../../views/Admin/Reviews/ReviewEdit.vue");
const ReviewList = () => import("../../../views/Admin/Reviews/ReviewList.vue");

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
