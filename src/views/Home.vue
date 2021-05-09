<template>
  <div>
    <!--================Slider Home Area =================-->
    <section class="home_slider">
      <el-carousel
        :interval="4000"
        arrow="always"
        height="1000px"
        width="1920px"
      >
        <el-carousel-item v-for="source in sourceBanner" :key="source">
          <img
            :src="source.img"
            alt="banner"
            data-bgposition="center center"
            data-bgfit="cover"
            data-bgrepeat="no-repeat"
            class="rev-slidebg"
            data-bgparallax="10"
            data-no-retina
          />
          <div class="text_box">
            <div class="tp-caption tp-resizeme text_1">
              <p>{{ source.title }}<br />{{ source.company }}</p>
            </div>
          </div>
          <div class="interior">
            <p>{{ source.interior }}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- <div
        id="home_full_slider"
        class="rev_slider fullscreenbanner"
        data-version="5.3.1.6"
      >
        <img
          src="http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-1.jpg"
          alt="banner"
          data-bgposition="center center"
          data-bgfit="cover"
          data-bgrepeat="no-repeat"
          class="rev-slidebg"
          data-bgparallax="10"
          data-no-retina
        />
      </div> -->

      <div class="year">
        <router-link to="">2021</router-link>
      </div>
    </section>
    <!--=============-->
    <section class="intes_studio_area white_cl">
      <div class="since_text">
        <h5>{{ $t("since") }} 2004</h5>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="studio_img">
              <img src="./../assets/images/studio1.jpg" alt="" />
              <div class="years_text">
                <div class="years_text_inner">
                  <h1>4</h1>
                  <h2>{{ $t("year") }}</h2>
                  <h4>{{ $t("working") }}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="studio_text">
              <h6 class="s_title white">{{ $t("troc") }}</h6>
              <h3>{{ $t("label-about") }}</h3>
              <h5>{{ $t("title-about") }}</h5>
              <p>
                {{ $t("text-about") }}
              </p>
              <architect-button link typeClass="br_btn white" path="/about">{{
                $t("more-about")
              }}</architect-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--==========-->
    <section class="speciallization_area white_cl">
      <div class="container">
        <h6 class="s_title white">{{ $t("speciallization") }}</h6>
        <type-list></type-list>
        <!-- end list -->
      </div>
    </section>
    <section class="latest_project white_cl">
      <!--Project list -->
      <project-list-slider></project-list-slider>
    </section>
    <section class="our_press_area white_cl">
      <div class="container">
        <h6 class="s_title white">{{ $t("press") }}</h6>
        <div class="row">
          <div class="col-lg-6">
            <div class="press_img_item">
              <div class="press_img">
                <img
                  class="img-fluid"
                  src="./../assets/images/press.jpg"
                  alt=""
                />
              </div>
              <div class="date">
                <p>{{ $t("day1") }}</p>
              </div>
              <a href="https://www.facebook.com/TROC-Studio-111045133645249">
                {{ $t("prize1") }}
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="press_item_inner">
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day2") }}</p>
                </div>
                <a href="https://homehome.vn/gioi-thieu/"
                  >{{ $t("prize2") }}
                </a>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day3") }}</p>
                </div>
                <a
                  href="https://www.kientrucnca.com/gioi-thieu/gioi-thieu-cong-ty-109.html"
                >
                  {{ $t("prize3") }}
                </a>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day4") }}</p>
                </div>
                <a href="https://vnhome.vn/m/mau-thiet-ke-biet-thu-dep-6">{{
                  $t("prize4")
                }}</a>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day5") }}</p>
                </div>
                <a href="https://vnhome.vn/mn/du-an-7">
                  {{ $t("prize5") }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================Clients Area =================-->
    <section class="clients_area white_cl">
      <div class="container">
        <div class="main_title white">
          <h2>{{ $t("happy-client") }}</h2>
        </div>

        <!-- Comment list of user -->
        <comment-list></comment-list>

        <architect-advertise-label></architect-advertise-label>
      </div>
    </section>
  </div>
</template>

<script>
import CommentList from "../components/comment/CommentList.vue";
import ProjectListSlider from "../components/projects/ProjectListSlider.vue";

import TypeList from "../components/typeProjects/TypeList.vue";
export default {
  name: "Home",
  components: { CommentList, TypeList, ProjectListSlider },
  data() {
    return {
      sourceBanner: [
        {
          img:
            "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-1.jpg",
          interior: "Architecture - Interior",
          title: "Troc studio",
          company: "Architecture Company",
        },
        {
          img:
            "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-2.jpg",
          interior: "Architecture - House",
          title: "Troc studio",
          company: "Architecture Company",
        },
        {
          img:
            "http://paul-themes.com/html/intria/intria-demo/intria/light/img/home-slider/slider-3.jpg",
          interior: "Architecture - Building",
          title: "Troc studio",
          company: "Architecture Company",
        },
      ],
    };
  },
  computed: {
    // sourceBanners() {
    //   return this.$store.getters["projects/getTitleHeader"];
    // },
  },
};
</script>

<style scoped>
.interior {
  position: absolute;
  top: 20%;
  left: 19%;
  color: #fff;
}
.interior p {
  font-size: 30px;
}
.home_slider {
  position: relative;
}

.home_slider .rev_slider {
  position: relative;
}

.home_slider .rev_slider li {
  z-index: 6 !important;
}

.home_slider .rev_slider li .slider_text_box {
  position: relative;
  z-index: 25 !important;
}

.home_slider .rev_slider li .text_1 {
  color: #fff;
}

.home_slider .social_icon {
  position: absolute;
  left: 75px;
  z-index: 25;
  bottom: 70px;
  color: #fff;
}

.home_slider .social_icon ul li {
  margin-bottom: 20px;
}

.home_slider .social_icon ul li a {
  color: #fff;
  font-size: 18px;
}

.home_slider .social_icon ul li a:active {
  transition: all 0.2s;
  transform: translateY(20px);
}

.home_slider .social_icon ul li:last-child {
  margin-bottom: 0px;
}

.home_slider .text_box {
  position: absolute;
  left: 46%;
  z-index: 25;
  top: 46%;
  transform: translate(-50%, -50%);
  color: #fff;
}

.home_slider .text_box .text_1 {
  font-family: Oswald, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  visibility: inherit;
  transition: none 0s ease 0s;
  text-align: left;
  line-height: 100px;
  border-width: 0px;
  margin: 0px;
  padding: 0px;
  letter-spacing: 0px;
  font-size: 80px;
  white-space: nowrap;
  min-height: 0px;
  min-width: 0px;
  max-height: none;
  max-width: none;
  opacity: 1;
  transform-origin: 50% 50% 0px;
}

.home_slider .year {
  position: absolute;
  left: 75px;
  z-index: 25;
  top: 35%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #fff;
}

.home_slider .year a {
  font-weight: 500;
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-size: 20px;
}

h4:hover {
  color: #263a4f !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

a {
  font-size: 24px;
  line-height: 30px;
  color: #263a4f;
  font-family: Heebo, sans-serif;
  font-weight: 700;
  margin-bottom: 0;
  transition: all 0.1s linear 0s;
}

a:hover {
  color: #a3cc01;
}
</style>
