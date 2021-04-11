const ResetPasswordForm = () =>
  import("../../components/auth/ResetPasswordForm.vue");
const ForgotPasswordForm = () =>
  import("../../components/auth/ForgotPasswordForm.vue");

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
