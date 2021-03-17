
<template>
  <div class="form-auth">
    <reset-password-form></reset-password-form>
  </div>
</template>
<script>
import ResetPasswordForm from "../components/auth/ResetPasswordForm.vue";
export default {
  components: { ResetPasswordForm },
  data() {
    return {};
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
