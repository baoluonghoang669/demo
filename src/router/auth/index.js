import ForgotPasswordRoutes from "./forgotpassword";
const ForgotPassword = () => import("../../views/ForgotPassword.vue");
const AuthForm = () => import("../../components/auth/AuthForm.vue");

export default [
  {
    path: "",
    name: "Auth",
    component: AuthForm,
  },
  {
    path: "forgotpassword",
    name: "Forgotpassword",
    component: ForgotPassword,
    children: ForgotPasswordRoutes,
  },
];
