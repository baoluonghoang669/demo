<template>
  <div class="form-auth">
    <forgot-password-form></forgot-password-form>
  </div>
</template>
<script>
import ForgotPasswordForm from "../components/auth/ForgotPasswordForm.vue";
export default {
  components: { ForgotPasswordForm },
  data() {
    return {
      email: null,
      formIsInvalid: false,
    };
  },
};
</script>
<style scoped>
.form-auth {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 11%;
  margin-bottom: 2%;
}
</style>
