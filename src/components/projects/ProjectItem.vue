<template>
  <div>
    <architect-project-item>
      <img class="img-fluid" :src="source" alt="" />
      <slot></slot>
    </architect-project-item>
  </div>
</template>
<script>
export default {
  props: {
    source: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>
<style scoped></style>
