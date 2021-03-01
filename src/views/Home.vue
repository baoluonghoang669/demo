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
          <p>Brian’s Villa<br />Private Residence</p>
        </div>
      </div>
      <div class="year">
        <router-link to="/">2018</router-link>
      </div>
      <div class="social_icon">
        <ul class="list">
          <li>
            <router-link to="https://twitter.com/"
              ><i class="ion-social-twitter"></i
            ></router-link>
          </li>
          <li>
            <router-link to="https://www.facebook.com/"
              ><i class="ion-social-facebook"></i
            ></router-link>
          </li>
          <li>
            <router-link to="https://www.google.com/"
              ><i class="ion-social-googleplus"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </section>
    <!--================Inter Studio Area =================-->
    <section class="intes_studio_area white_cl">
      <div class="since_text">
        <h5>Since 2004</h5>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="studio_img">
              <img src="./../assets/images/studio1.jpg" alt="" />
              <div class="years_text">
                <div class="years_text_inner">
                  <h1>10</h1>
                  <h2>Years</h2>
                  <h4>working</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="studio_text">
              <h6 class="s_title white">Intria Studio</h6>
              <h3>Make is a different kind of architecture practice</h3>
              <h5>We know that good design means good business</h5>
              <p>
                Founded by Robert Downey Jr in 2004, we’re an employee-owned
                firm pursuing a democratic design process that values everyone’s
                input. Today we have more than 150 people in London, Hong Kong
                and Sydney providing architecture, interior & urban design
                services from concept to completion.
              </p>
              <router-link class="br_btn white" to="/about"
                >more about us</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Inter Studio Area =================-->

    <!--================Our Speciallization Area =================-->
    <section class="speciallization_area white_cl">
      <div class="container">
        <h6 class="s_title white">Our Speciallization</h6>
        <div class="row">
          <!--list our speciallization (list of projects) -->
          <type-list></type-list>
          <!-- end list -->
        </div>
      </div>
    </section>
    <!--================End Our Speciallization Area =================-->

    <!--================Latest Project Area =================-->
    <section class="latest_project white_cl">
      <div class="container">
        <div class="l_text">
          <div class="float-md-left">
            <div class="main_title white">
              <h2>Architecture Samples</h2>
            </div>
          </div>
          <div class="float-md-right">
            <ul class="portfolio_filter list">
              <li class="active" data-filter="*">
                <router-link to="#">All</router-link>
              </li>
              <li data-filter=".arc">
                <router-link to="#">Architecture</router-link>
              </li>
              <li data-filter=".inter">
                <router-link to="#">Interior</router-link>
              </li>
              <li data-filter=".urban">
                <router-link to="#">Urban Design</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--Project list -->
      <carousel :per-page="1" :mouse-drag="false">
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
      </carousel>
    </section>
    <!--================End Latest Project Area =================-->

    <!--================Our Press Area =================-->
    <section class="our_press_area white_cl">
      <div class="container">
        <h6 class="s_title white">Our Press</h6>
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
                <router-link to="#">august 19, 2018</router-link>
                <i class="ion-record"></i>
                <router-link to="#">news</router-link>
              </div>
              <router-link to="#"
                ><h4>
                  HPG Australia announces winning design team on One Sydney Park
                </h4></router-link
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="press_item_inner">
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 30, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">event</router-link>
                </div>
                <router-link to="#"
                  ><h4>CTBUH International Conference 2017</h4></router-link
                >
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 20, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"
                  ><h4>
                    Changing it up: Make commissions artist Garth Knight for
                    groundbreaking new display suite
                  </h4></router-link
                >
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 26, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"><h4>LandAid SleepOut</h4></router-link>
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">May 19, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"
                  ><h4>
                    Planning approved for restoration of Hornsey Town Hall
                  </h4></router-link
                >
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
          <h2>+2,500 Happy clients</h2>
        </div>

        <!-- Comment list of user -->
        <comment-list></comment-list>
        <!-- end comment -->

        <div class="clients_slider owl-carousel">
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-1.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-2.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-3.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-4.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!--================End Clients Area =================-->
  </div>
</template>

<script>
import CommentList from "../components/comment/CommentList.vue";
import { Carousel, Slide } from "vue-carousel";

import TypeList from "../components/typeProjects/TypeList.vue";
export default {
  name: "Home",
  components: { CommentList, TypeList, Carousel, Slide },
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

.home_slider .rev_slider li .count {
  color: #fff;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  position: relative !important;
  z-index: 29 !important;
}

.home_slider .rev_slider li .text_3 {
  color: #fff;
  font-family: "Heebo", sans-serif;
}

.home_slider .rev_slider li .video {
  overflow: visible;
}

.home_slider .rev_slider li .video img:hover {
  -webkit-animation-name: hvr-icon-push;
  animation-name: hvr-icon-push;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

.home_slider .rev_slider .tp-bullet {
  border-radius: 50%;
  background: #fff;
  opacity: 0.35;
}

.home_slider .rev_slider .tp-bullet.selected {
  opacity: 1;
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
  right: 30%;
  z-index: 25;
  top: 46%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
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
  font-size: 100px;
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

.layout {
  overflow: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
}

.page_lines {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
}

.page_lines .line {
  position: absolute;
  width: 2px;
  height: 50000px;
  background: #222222;
}

.page_lines .line + .line {
  left: auto;
  right: 0px;
}

.page_lines .col-lg-4:first-child .line {
  left: 0px;
}

.page_lines .col-lg-4:nth-child(2) .line {
  left: 7.5px;
}

.page_lines.white_br .line {
  background-color: #f8f8f8;
}

/* End Home Full Slider css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
</style>
