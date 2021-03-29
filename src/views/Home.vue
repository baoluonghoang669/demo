<template>
  <div>
    <!--================Slider Home Area =================-->
    <section class="home_slider">
      <div
        id="home_full_slider"
        class="rev_slider fullscreenbanner"
        data-version="5.3.1.6"
      >
        <!-- MAIN IMAGE -->
        <img
          src="./../assets/images/slider1.jpg"
          alt="banner"
          data-bgposition="center center"
          data-bgfit="cover"
          data-bgrepeat="no-repeat"
          class="rev-slidebg"
          data-bgparallax="10"
          data-no-retina
        />
      </div>
      <div class="text_box">
        <div class="tp-caption tp-resizeme text_1">
          <p>{{ $t("troc") }}<br />{{ $t("company") }}</p>
        </div>
      </div>
      <div class="year">
        <router-link to="">2021</router-link>
      </div>
    </section>
    <!--================Inter Studio Area =================-->
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
    <!--================End Inter Studio Area =================-->

    <!--================Our Speciallization Area =================-->
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
              <h4>
                {{ $t("prize1") }}
              </h4>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="press_item_inner">
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day2") }}</p>
                </div>
                <h4>{{ $t("prize2") }}</h4>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day3") }}</p>
                </div>
                <h4>
                  {{ $t("prize3") }}
                </h4>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day4") }}</p>
                </div>
                <h4>{{ $t("prize4") }}</h4>
              </div>
              <div class="press_item">
                <div class="date">
                  <p>{{ $t("day5") }}</p>
                </div>
                <h4>
                  {{ $t("prize5") }}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Our Press Area =================-->

    <!--================Clients Area =================-->
    <section class="clients_area white_cl">
      <div class="container">
        <div class="main_title white">
          <h2>+500 {{ $t("happy-client") }}</h2>
        </div>

        <!-- Comment list of user -->
        <comment-list></comment-list>
        <!-- end comment -->

        <architect-advertise-label></architect-advertise-label>
      </div>
    </section>
    <!--================End Clients Area =================-->
  </div>
</template>

<script>
import CommentList from "../components/comment/CommentList.vue";
import ProjectListSlider from "../components/projects/ProjectListSlider.vue";

import TypeList from "../components/typeProjects/TypeList.vue";
export default {
  name: "Home",
  components: { CommentList, TypeList, ProjectListSlider },
};
</script>

<style scoped>
/* Home Full Slider css
============================================================================================ */
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
  left: 41%;
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

/* End Home Full Slider css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
</style>
