<template>
  <div class="form-auth">
    <auth-form></auth-form>
  </div>
</template>
<script>
import AuthForm from "../components/auth/AuthForm.vue";
export default {
  components: { AuthForm },
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
