import AuthForm from "../../components/auth/AuthForm.vue";
import ForgotPassword from "../../views/ForgotPassword.vue";
import ForgotPasswordRoutes from "./forgotpassword";

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
