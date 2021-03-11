<template>
  <carousel :items-to-show="2" :wrapAround="true" :transition="300">
    <slide v-for="slide in 10" :key="slide">
      <comment-item></comment-item>
    </slide>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import CommentItem from "./CommentItem.vue";
export default {
  components: { CommentItem, Carousel, Slide },
};
</script>
<style scoped></style>
