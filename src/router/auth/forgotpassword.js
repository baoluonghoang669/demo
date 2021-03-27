import ResetPasswordForm from "../../components/auth/ResetPasswordForm.vue";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm.vue";

export default [
  {
    path: "",
    name: "Forgotpassword",
    component: ForgotPasswordForm,
  },
  {
    path: "resetpassword",
    name: "Resetpassword",
    component: ResetPasswordForm,
  },
];
