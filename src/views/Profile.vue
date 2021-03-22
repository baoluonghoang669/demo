<template>
  <div class="container rounded bg-white">
    <profile-form></profile-form>
  </div>
</template>
<script>
import ProfileForm from "../components/auth/ProfileForm.vue";
export default {
  components: { ProfileForm },
};
</script>
<style scoped>
.rounded {
  margin-top: 200px;
}
</style>
