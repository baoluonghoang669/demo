<template>
  <div class="testimonials_slider owl-carousel">
    <comment-item></comment-item>
    <comment-item></comment-item>
    <comment-item></comment-item>
  </div>
</template>
<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: { CommentItem },
};
</script>
<style scoped></style>
