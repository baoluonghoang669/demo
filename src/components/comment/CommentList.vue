<template>
  <carousel :items-to-show="1" :transition="500">
    <slide v-for="slide in 3" :key="slide">
      <div class="item">
        <div class="test_item">
          <h4><span>Hoàng Bảo</span> / Giám đốc công ty xây dựng Thăng Long</h4>
          <p>
            Công ty chúng tôi đã hợp tác và làm việc với Troc Studio trong một
            thời gian dài. Họ làm rất tốt, chu đáo và mang tính thẩm mĩ. Chúng
            tôi đánh giá 5 sao.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="test_item">
          <h4><span>Thanh Sơn</span> / CEO công ty thiết kế thời trang</h4>
          <p>
            Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 3 tháng trở
            lại đây. Xưởng của tôi do họ thiết kế rất đẹp mắt.
          </p>
        </div>
      </div>
      <div class="item">
        <div class="test_item">
          <h4><span>Trung Nghĩa</span> / CEO khách sạn Monalisa Đà Nẵng</h4>
          <p>
            Tôi đã hợp tác và làm việc với Troc Studio trong khoảng 10 tháng trở
            lại đây. Khách sạn chúng tôi đã được họ làm lại rất kĩ càng, tỉ mỉ
            và độc đáo.
          </p>
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
export default {
  components: { Carousel, Slide },
};
</script>
<style scoped></style>
