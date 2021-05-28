<template>
  <carousel :items-to-show="1" :transition="500">
    <slide v-for="slide in 3" :key="slide">
      <div class="item">
        <div class="test_item">
          <h4><span>Hoang Bao</span> / Director of Thang Long Company</h4>
          <p>
            Our company has cooperated and worked with Troc Studio in one long
            time. They do very well, attentive and aesthetic. They I rated 5
            stars.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="test_item">
          <h4><span>Thanh Son</span> / CEO of designed company</h4>
          <p>
            I have cooperated and worked with Troc Studio for about 3 months and
            come here. My workshop was beautifully designed.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="test_item">
          <h4><span>Trung Nghia</span> / CEO of Monalisa Hotel</h4>
          <p>
            I have cooperated and worked with Troc Studio for about 10 months
            and come here. Our hotel has been very careful and meticulous and
            unique.
          </p>
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
export default {
  components: { Carousel, Slide },
};
</script>
<style scoped>
@media (max-width: 576px) {
  .carousel__slide {
    flex-wrap: wrap !important;
  }
}
</style>
