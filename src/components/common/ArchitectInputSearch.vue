<template>
  <div class="input-group no-border fix-position-input">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
  border: 2px solid #263a4f;
  border-radius: 2%;
}
</style>
