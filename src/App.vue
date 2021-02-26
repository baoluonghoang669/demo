<template>
  <div class="layout">
    <the-header></the-header>
    <div>
      <router-view v-slot="{ Component }">
        <transition name="moveUp" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,900|Oswald:300,400,500,600,700");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*-------transition,animation --------*/
.moveUp-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.moveUp-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.moveUp-enter-active {
  transition: all 0.3s ease-out;
}

.moveUp-leave-active {
  transition: all 0.3s ease-in;
}

.moveUp-enter-to,
.moveUp-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.col-md-offset-right-1,
.col-lg-offset-right-1 {
  margin-right: 8.33333333%;
}

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*---------------------------------------------------- */
/*----------------------------------------------------*/
.list {
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: none;
  outline: none;
}

.row.m0 {
  margin: 0px;
}

.p0 {
  padding: 0px;
}

body {
  font-family: "Heebo", sans-serif;
  color: #999999;
  font-weight: normal;
  font-size: 14px;
}

body {
  margin: 0px;
  padding: 0px;
}

#success {
  display: none;
}

#error {
  display: none;
}

.display_table {
  display: table;
  width: 100%;
}

.display_table_row {
  display: table-row;
}

.display_table_cell {
  display: table-cell;
  float: none !important;
}

.p_100 {
  padding: 100px 0px;
}

iframe {
  border: none;
}

i:before {
  margin-left: 0px !important;
}

.per_bg {
  background: #0e0e0e;
}

.row_direction {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  cursor: pointer;
  background: #a3cc01;
}

::-moz-selection {
  background-color: #a3cc01;
  color: #fff;
}

::selection {
  background-color: #a3cc01;
  color: #fff;
}

-webkit-::-moz-selection {
  background-color: #a3cc01;
  color: #fff;
}

-webkit-::selection {
  background-color: #a3cc01;
  color: #fff;
}

::-moz-selection {
  background-color: #a3cc01;
  color: #fff;
}

/* Container Custome Code css
============================================================================================ */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}

/* End Container Custome Code css
============================================================================================ */
.s_title {
  color: #999999;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 45px;
}

.s_title.white {
  color: #8d9aa8;
}

.main_title h2 {
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-size: 42px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0px;
}

.main_title.white h2 {
  color: #263a4f;
}

/* Main title css
============================================================================================ */
/* Proloader css
============================================================================================ */
.preloader {
  position: fixed;
  overflow: hidden;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  color: #4b4b4b;
  text-align: center;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.double-bounce1,
.double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #a3cc01;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2s infinite ease-in-out;
  animation: sk-bounce 2s infinite ease-in-out;
}

.double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@-webkit-keyframes sk-bounce {
  0%,
  100% {
    -webkit-transform: scale(0);
  }
  50% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}

/* Icon Push */
@-webkit-keyframes hvr-icon-push {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}

@keyframes hvr-icon-push {
  50% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
}

.hvr-icon-push {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-box-shadow: 0 0 1px transparent;
  box-shadow: 0 0 1px transparent;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.hvr-icon-push .hvr-icon {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  -o-transition-property: transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-transition-timing-function: ease-out;
  -o-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.hvr-icon-push:hover .hvr-icon,
.hvr-icon-push:focus .hvr-icon,
.hvr-icon-push:active .hvr-icon {
  -webkit-animation-name: hvr-icon-push;
  animation-name: hvr-icon-push;
  -webkit-animation-duration: 0.3s;
  animation-duration: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
}

/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Project Breadcrumb css
============================================================================================ */
.project_breadcrumb_area {
  background-size: cover;
  min-height: 100vh;
  position: relative;
  z-index: 2;
}

.project_breadcrumb_area .breadcrumb_inner {
  position: relative;
  min-height: 100vh;
}

.project_breadcrumb_area .breadcrumb_inner .breadcrumb_link {
  position: absolute;
  left: 0px;
  top: 40%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.project_breadcrumb_area .breadcrumb_inner .breadcrumb_link a {
  font-size: 18px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  position: relative;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.project_breadcrumb_area .breadcrumb_inner .breadcrumb_link a:before {
  content: "";
  width: 86px;
  height: 6px;
  background: #a3cc01;
  position: absolute;
  top: -26px;
  left: 0px;
}

.project_breadcrumb_area .breadcrumb_inner .breadcrumb_link a:hover {
  color: #a3cc01;
}

.project_breadcrumb_area .bread_bottom_text {
  position: absolute;
  left: -4px;
  bottom: -5px;
}

.project_breadcrumb_area .bread_bottom_text h2 {
  color: #fff;
  text-transform: uppercase;
  font-size: 12vh;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0px;
}

.project_breadcrumb_area .page_lines.white_br .line {
  background: rgba(255, 255, 255, 0.2);
}

.breadcrumb_link {
  padding-top: 220px;
}

.breadcrumb_link a {
  font-size: 16px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  margin-right: 12px;
  position: relative;
  font-weight: normal;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.breadcrumb_link a:before {
  content: "/";
  position: absolute;
  right: -12px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  color: #8d9aa8;
}

.breadcrumb_link a:last-child {
  margin-right: 0px;
}

.breadcrumb_link a:last-child:before {
  display: none;
}

.breadcrumb_link a:first-child {
  color: #263a4f;
  font-weight: bold;
}

.breadcrumb_link a:hover {
  color: #a3cc01;
}

.breadcrumb_link.sinlge_banner {
  padding-top: 120px;
}

.breadcrumb_link.sinlge_banner .s_bread_inner {
  max-width: 770px;
  margin: auto;
}

/* End Project Breadcrumb css
============================================================================================ */
/* Single Banner Image css
============================================================================================ */

.image_banner_area .single_banner_text {
  padding-top: 270px;
  padding-bottom: 230px;
}

.image_banner_area .single_banner_text .date {
  margin-bottom: 28px;
}

.image_banner_area .single_banner_text .date a {
  font-size: 14px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  font-weight: normal;
  text-transform: uppercase;
}

.image_banner_area .single_banner_text .date a:last-child {
  font-weight: bold;
}

.image_banner_area .single_banner_text .date i {
  font-size: 6px;
  color: #fff;
  position: relative;
  top: -2px;
  padding-left: 2px;
  padding-right: 2px;
}

.image_banner_area .single_banner_text h3 {
  color: #fff;
  font-size: 48px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  line-height: 52px;
  margin-bottom: 0px;
}

.page_link {
  margin-bottom: 100px;
}

.page_link a {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
  text-transform: uppercase;
  margin-right: 15px;
  position: relative;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.page_link a:before {
  content: "/";
  color: #8d9aa8;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  position: absolute;
  right: -12px;
  top: 46%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.page_link a.active {
  color: #263a4f;
  font-weight: bold;
}

.page_link a:last-child {
  margin-right: 0px;
}

.page_link a:last-child:before {
  display: none;
}

.page_link a:hover {
  color: #a3cc01;
}

/* End Single Banner Image css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
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
  left: 16%;
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
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
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

/* End Home Full Menu css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Inter Studio css
============================================================================================ */
.bg_color {
  background: #1b1b1b;
}

.since_text {
  position: relative;
  left: 40px;
}

.since_text h5 {
  position: absolute;
  left: 0px;
  top: 36px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  color: #fff;
  font-size: 13.63px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.34px;
}

.intes_studio_area {
  padding-top: 160px;
}

.intes_studio_area .studio_img {
  width: 100%;
  max-width: 400px;
  height: 100%;
  position: relative;
}

.intes_studio_area .studio_img:after {
  content: "";
  width: 191px;
  height: 191px;
  position: absolute;
  right: -95px;
  top: 44.9%;
  z-index: -1;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.intes_studio_area .studio_img img {
  width: 100%;
  position: relative;
  z-index: 2;
}

.intes_studio_area .studio_img .years_text {
  position: absolute;
  right: 0px;
  top: 58%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
}

.intes_studio_area .studio_img .years_text:before {
  content: "";
  width: 153px;
  height: 153px;
  border: 5px solid #a3cc01;
  display: inline-block;
  right: -79px;
  position: relative;
}

.intes_studio_area .studio_img .years_text .years_text_inner {
  position: relative;
  right: -110px;
  top: -100px;
}

.intes_studio_area .studio_img .years_text .years_text_inner h1 {
  color: #fff;
  font-size: 105px;
  font-weight: bold;
  font-family: "Oswald", sans-serif;
  margin-bottom: 0px;
}

.intes_studio_area .studio_img .years_text .years_text_inner h2 {
  color: #fff;
  font-size: 48px;
  font-family: "Heebo", sans-serif;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin-bottom: 0px;
}

.intes_studio_area .studio_img .years_text .years_text_inner h4 {
  font-size: 16px;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 0px;
  padding-left: 3px;
}

.studio_text {
  margin-left: -15px;
}

.studio_text h3 {
  color: #fff;
  font-size: 42px;
  line-height: 48px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 35px;
}

.studio_text h5 {
  font-size: 24px;
  line-height: 30px;
  font-family: "Heebo", sans-serif;
  color: #fff;
  max-width: 380px;
  font-weight: normal;
  margin-bottom: 50px;
}

.studio_text p {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  letter-spacing: 0.21px;
  font-weight: normal;
  margin-bottom: 120px;
}

.white_cl .since_text h5 {
  color: #263a4f;
}

.white_cl.intes_studio_area .studio_img .years_text .years_text_inner h1 {
  color: #263a4f;
}

.white_cl.intes_studio_area .studio_img .years_text .years_text_inner h2 {
  color: #263a4f;
}

.white_cl.intes_studio_area .studio_img .years_text .years_text_inner h4 {
  color: #263a4f;
}

.white_cl .studio_text h3 {
  color: #263a4f;
}

.white_cl .studio_text h5 {
  color: #263a4f;
}

.white_cl .studio_text p {
  color: #8d9aa8;
}

/* End Inter Studio css
============================================================================================ */
/* Specialliazition css
============================================================================================ */
.speciallization_area {
  padding-top: 130px;
}

.speciallization_area .s_title {
  margin-bottom: 70px;
}

.spec_item h4 {
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
  margin-top: 40px;
}

.spec_item p {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  letter-spacing: 0.21px;
  font-weight: "Heebo", sans-serif;
  font-weight: normal;
  max-width: 320px;
  margin-bottom: 30px;
}

.white_cl .spec_item h4 {
  color: #263a4f;
}

.white_cl .spec_item p {
  color: #8d9aa8;
}

/* End Specialliazition css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Border Button css
============================================================================================ */
.br_btn {
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-family: "Heebo", sans-serif;
  position: relative;
  line-height: 40px;
  margin-bottom: 0px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.br_btn:before {
  content: "";
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  left: 0px;
  bottom: 0px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.br_btn:hover {
  color: #a3cc01;
}

.br_btn:hover:before {
  background: #a3cc01;
}

.br_btn.white {
  color: #263a4f;
}

.br_btn.white:before {
  background: #263a4f;
}

.br_btn.white:hover {
  color: #a3cc01;
}

.br_btn.white:hover:before {
  background: #a3cc01;
}

.view_btn {
  color: #a3cc01;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
  font-weight: 500;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.view_btn:hover {
  color: #fff;
}

.view_btn.white:hover {
  color: #263a4f;
}

.see_btn {
  font-size: 12px;
  color: #263a4f;
  font-weight: bold;
  font-family: "Heebo", sans-serif;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  margin-top: 25px;
  display: block;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.see_btn:hover {
  color: #a3cc01;
}

.comment_btn {
  width: 170px;
  height: 50px;
  background: #263a4f;
  color: #fff;
  border-radius: 0px;
  border: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  letter-spacing: 0.35px;
  text-transform: uppercase;
}

.comment_btn:hover {
  background: #a3cc01;
}

/* Border Button css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Latest Projects css
============================================================================================ */
.latest_project {
  padding-top: 160px;
}

.latest_project .l_text {
  padding-bottom: 70px;
  overflow: hidden;
}

.fillter_slider {
  display: flex;
  overflow: hidden;
}

.fillter_slider .owl-prev,
.fillter_slider .owl-next {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
  font-size: 100px;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.fillter_slider .owl-prev {
  left: 70px;
}

.fillter_slider .owl-next {
  right: 70px;
}

.fillter_slider:hover .owl-prev,
.fillter_slider:hover .owl-next {
  opacity: 1;
}

.gird_sizer {
  width: 25%;
}

.projects_item {
  position: relative;
}

.projects_item .hover {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  overflow: hidden;
}

.projects_item .hover i {
  position: absolute;
  right: -35px;
  top: 20px;
  color: #fff;
  font-size: 48px;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.projects_item .hover .project_text {
  position: absolute;
  left: 40px;
  bottom: 45px;
  color: #fff;
}

.projects_item .hover .project_text h5 {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  opacity: 0;
  margin-bottom: -5px;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.projects_item .hover .project_text h4 {
  font-size: 36px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  max-width: 340px;
  margin-bottom: -5px;
  opacity: 0;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
  color: #fff;
}

.projects_item:hover .hover {
  background: rgba(163, 204, 1, 0.9);
}

.projects_item:hover .hover i {
  right: 30px;
}

.projects_item:hover .hover .project_text h5 {
  margin-bottom: 15px;
  opacity: 1;
}

.projects_item:hover .hover .project_text h4 {
  margin-bottom: 0px;
  opacity: 1;
}

.portfolio_filter {
  position: relative;
  top: 10px;
}

.portfolio_filter li {
  display: inline-block;
  margin-right: 30px;
}

.portfolio_filter li a {
  font-size: 18px;
  color: #999999;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.portfolio_filter li:last-child {
  margin-right: 0px;
}

.portfolio_filter li:hover a,
.portfolio_filter li.active a {
  color: #fff;
}

.white_cl .portfolio_filter li a {
  color: #8d9aa8;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.white_cl .portfolio_filter li.active a {
  color: #263a4f;
}

.white_cl .portfolio_filter li:hover a {
  color: #263a4f;
}

/* End Latest Projects css
============================================================================================ */
/* End Latest Projects css
============================================================================================ */
.our_press_area {
  padding-top: 145px;
  padding-bottom: 135px;
}

.our_press_area .s_title {
  margin-bottom: 80px;
}

.press_img_item .date {
  margin-bottom: 15px;
  margin-top: 15px;
}

.press_img_item .date a {
  font-size: 12px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.press_img_item .date a:first-child {
  color: #999999;
  font-weight: 500;
}

.press_img_item .date a:first-child:hover {
  color: #fff;
}

.press_img_item .date a:hover {
  color: #a3cc01;
}

.press_img_item .date i {
  color: #999999;
  font-size: 6px;
  position: relative;
  top: -2px;
}

.press_img_item h4 {
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.press_img_item h4:hover {
  color: #a3cc01;
}

.press_item {
  margin-bottom: 25px;
  max-width: 465px;
  margin-left: 70px;
}

.press_item .date {
  margin-bottom: 12px;
}

.press_item .date a {
  font-size: 12px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.press_item .date a:first-child {
  color: #999999;
}

.press_item .date a:first-child:hover {
  color: #fff;
}

.press_item .date a:hover {
  color: #a3cc01;
}

.press_item .date i {
  color: #999999;
  font-size: 6px;
  position: relative;
  top: -2px;
}

.press_item h4 {
  font-size: 24px;
  line-height: 30px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.press_item h4:hover {
  color: #a3cc01;
}

.press_item:last-child {
  margin-bottom: 0px;
}

.white_cl .press_img_item .date a {
  color: #263a4f;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.white_cl .press_img_item .date a:first-child {
  color: #8d9aa8;
}

.white_cl .press_img_item .date a:first-child:hover {
  color: #263a4f;
}

.white_cl .press_img_item .date a:hover {
  color: #a3cc01;
}

.white_cl .press_img_item .date i {
  color: #8d9aa8;
}

.white_cl .press_img_item h4 {
  color: #263a4f;
}

.white_cl .press_img_item h4:hover {
  color: #a3cc01;
}

.white_cl .press_item .date a {
  color: #263a4f;
}

.white_cl .press_item .date a:first-child {
  color: #8d9aa8;
}

.white_cl .press_item .date a:first-child:hover {
  color: #263a4f;
}

.white_cl .press_item .date a:hover {
  color: #a3cc01;
}

.white_cl .press_item .date i {
  color: #8d9aa8;
}

.white_cl .press_item h4 {
  color: #263a4f;
}

.white_cl .press_item h4:hover {
  color: #a3cc01;
}

/* End Latest Projects css
============================================================================================ */
/* Project Details css
============================================================================================ */
.project_details_area {
  padding-top: 115px;
  padding-bottom: 115px;
}

.back_btn {
  margin-bottom: 70px;
}

.back_btn a {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  color: #263a4f;
}

.back_btn a i {
  padding-right: 5px;
  font-size: 20px;
  position: relative;
  top: 2px;
}

.pd_item h5 {
  font-size: 14px;
  font-weight: bold;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  margin-bottom: 15px;
}

.pd_item h5 span {
  color: #8d9aa8;
  font-weight: normal;
}

.pd_item h5:last-child {
  margin-bottom: 0px;
}

.pd_item h5.share_link a {
  color: #00c1f1;
  position: relative;
  margin-right: 10px;
  font-weight: normal;
}

.pd_item h5.share_link a:before {
  content: "";
  width: 4px;
  height: 1px;
  background: #8d9aa8;
  position: absolute;
  right: -8px;
  top: 50%;
}

.pd_item h5.share_link a:last-child {
  margin-right: 0px;
  color: #fc7d00;
}

.pd_item h5.share_link a:last-child:before {
  display: none;
}

.pd_item h5.share_link a:nth-child(2) {
  color: #1f5fa6;
}

.pd_item h5.share_link a:nth-child(3) {
  color: #d10000;
}

.project_villa_area .villa_text {
  margin-bottom: 70px;
}

.project_villa_area .villa_text h2 {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  font-size: 36px;
  margin-bottom: 60px;
}

.project_villa_area .villa_text p {
  font-size: 18px;
  line-height: 30px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #263a4f;
  margin-bottom: 0px;
}

.project_villa_area .link_btn {
  margin-top: 135px;
  margin-bottom: 145px;
}

.project_villa_area .link_btn a {
  font-size: 30px;
  font-weight: bold;
  font-family: "Heebo", sans-serif;
  color: #263a4f;
  position: relative;
  display: inline-block;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.project_villa_area .link_btn a:before {
  content: "";
  position: absolute;
  left: 0px;
  bottom: 5px;
  background: #263a4f;
  height: 2px;
  width: 100%;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.project_villa_area .link_btn a:hover {
  color: #a3cc01;
}

.project_villa_area .link_btn a:hover:before {
  background: #a3cc01;
}

.villa_slider {
  position: relative;
  z-index: 2;
}

.villa_slider .owl-prev,
.villa_slider .owl-next {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
  font-size: 60px;
  color: #8d9aa8;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  cursor: pointer;
}

.villa_slider .owl-prev:hover,
.villa_slider .owl-next:hover {
  color: #263a4f;
}

.villa_slider .owl-prev {
  left: -70px;
}

.villa_slider .owl-next {
  right: -70px;
}

.prev_next_area {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: wrap;
  -ms-flex: wrap;
  flex: wrap;
  text-align: center;
  position: relative;
  z-index: 2;
}

.prev_next_area .prev {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  background: #eaf0f3;
  text-align: center;
  padding: 48px 0px;
}

.prev_next_area .prev a {
  text-transform: uppercase;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  letter-spacing: 18px;
  color: #8d9aa8;
}

.prev_next_area .next {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  background-size: cover;
  padding: 48px 0px;
}

.prev_next_area .next a {
  text-transform: uppercase;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  letter-spacing: 18px;
  color: #fff;
}

/* End Project Details css
============================================================================================ */
/* Our Projects css
============================================================================================ */
.our_projects_area .projects_tt {
  overflow: hidden;
  padding-bottom: 140px;
  padding-top: 40px;
}

.isotope_fillter {
  margin-top: 22px;
}

.isotope_fillter li {
  display: inline-block;
  margin-right: 30px;
}

.isotope_fillter li a {
  font-size: 18px;
  color: #8d9aa8;
  font-weight: normal;
  font-family: "Heebo", sans-serif;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.isotope_fillter li:hover a,
.isotope_fillter li.active a {
  color: #263a4f;
}

.isotope_fillter li:last-child {
  margin-right: 0px;
}

.our_projects_area {
  overflow: hidden;
}

.projects_inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: -3px;
  margin-bottom: -3px;
  margin-left: -3px;
  margin-right: -3px;
  overflow: hidden;
}

.projects_inner .projects_column {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
  padding: 3px 3px;
  overflow: hidden;
}

.projects_inner .projects_item .hover .project_text h5 {
  margin-bottom: 12px;
  opacity: 1;
}

.projects_inner .projects_item .hover .project_text h4 {
  opacity: 1;
  margin-bottom: 0px;
}

.full_project_area {
  padding-top: 200px;
}

.full_project_area .main_title {
  text-align: center;
  margin-bottom: 0px;
  margin-bottom: 85px;
}

.full_project_area .main_title h2 {
  font-size: 60px;
}

.full_project_area .isotope_fillter {
  text-align: center;
  margin-top: 0px;
  margin-bottom: 55px;
}

.p_full_item {
  margin-bottom: 140px;
  position: relative;
}

.p_full_item:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.p_full_item .hover {
  position: absolute;
  left: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  top: 50%;
  width: 100%;
  text-align: center;
}

.p_full_item .hover h5 {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.21px;
  display: block;
  opacity: 0;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.p_full_item .hover h4 {
  color: #fff;
  font-size: 36px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  opacity: 0;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  margin-bottom: 0px;
}

.p_full_item:last-child {
  margin-bottom: 0px;
}

.p_full_item:hover:before {
  opacity: 1;
}

.p_full_item:hover .hover h5 {
  opacity: 1;
  margin-bottom: 13px;
}

.p_full_item:hover .hover h4 {
  opacity: 1;
}

.pagination_dotted {
  text-align: center;
  padding: 100px 0px;
}

.pagination_dotted a {
  height: 5px;
  width: 5px;
  background: #263a4f;
  display: inline-block;
  border-radius: 50%;
  margin-right: 12px;
}

.pagination_dotted a:last-child {
  margin-right: 0px;
}

.pagination_dotted a.active {
  -webkit-transform: scale(1.4);
  -ms-transform: scale(1.4);
  transform: scale(1.4);
}

/* End Our Projects css
============================================================================================ */
/* Masonry Project css
============================================================================================ */
.ms_project_area .pagination_dotted {
  background: #fff;
}

.ms_project_inner .ms_p_item {
  width: calc(100% / 4);
}

.ms_project_inner .ms_p_item .hover {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  overflow: hidden;
}

.ms_project_inner .ms_p_item .hover i {
  position: absolute;
  right: -50px;
  top: 20px;
  color: #fff;
  font-size: 48px;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.ms_project_inner .ms_p_item .hover .project_text {
  position: absolute;
  left: 40px;
  bottom: 45px;
  color: #fff;
}

.ms_project_inner .ms_p_item .hover .project_text h5 {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  opacity: 0;
  margin-bottom: -5px;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.ms_project_inner .ms_p_item .hover .project_text h4 {
  font-size: 36px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  max-width: 340px;
  margin-bottom: -5px;
  opacity: 0;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
  color: #fff;
}

.ms_project_inner .ms_p_item:hover .hover {
  background: rgba(0, 0, 0, 0.5);
}

.ms_project_inner .ms_p_item:hover .hover i {
  right: 30px;
}

.ms_project_inner .ms_p_item:hover .hover .project_text h5 {
  margin-bottom: 15px;
  opacity: 1;
}

.ms_project_inner .ms_p_item:hover .hover .project_text h4 {
  margin-bottom: 0px;
  opacity: 1;
}

/* End Masonry Project css
============================================================================================ */
/* About Studio css
============================================================================================ */
.about_studio_area {
  padding-top: 150px;
}

.about_studio_area .ab_studio_text {
  padding-right: 20px;
}

.about_studio_area .ab_studio_text .s_title {
  font-size: 16px;
  color: #8d9aa8;
  margin-bottom: 43px;
}

.about_studio_area .ab_studio_text h5 {
  font-size: 30px;
  line-height: 36px;
  color: #263a4f;
  margin-bottom: 35px;
}

.about_studio_area .ab_studio_text h5:last-child {
  margin-bottom: 0px;
}

.speciallization_area.ab_spec {
  padding-top: 120px;
  padding-bottom: 125px;
}

.meet_team_area {
  padding-top: 120px;
  padding-bottom: 138px;
}

.team_inner h4 {
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #8d9aa8;
  margin-bottom: 68px;
}

.team_inner h3 {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  position: relative;
  margin-top: 70px;
  display: inline-block;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.team_inner h3:before {
  content: "";
  height: 2px;
  width: 100%;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: #929ca7;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.team_inner h3:hover {
  color: #a3cc01;
}

.team_inner h3:hover:before {
  background: #a3cc01;
}

.team_slider {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team_slider .team_slider {
  position: absolute;
  top: -99px;
  right: 0px;
}

.team_slider .owl-prev,
.team_slider .owl-next {
  display: inline-block;
  font-size: 36px;
  color: #999999;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  cursor: pointer;
}

.team_slider .owl-prev:hover,
.team_slider .owl-next:hover {
  color: #000;
}

.team_slider .owl-prev {
  margin-right: 30px;
}

.team_item {
  position: relative;
}

.team_item:before {
  content: "";
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(163, 204, 1, 0.9);
  opacity: 0;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.team_item .hover {
  position: absolute;
  left: 24px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  opacity: 0;
  -webkit-transition: all 400ms ease;
  -o-transition: all 400ms ease;
  transition: all 400ms ease;
}

.team_item .hover h5 {
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #fff;
  margin-bottom: 7px;
}

.team_item .hover h6 {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #fff;
  margin-bottom: 20px;
}

.team_item .hover .list {
  -webkit-transform: translateY(10px);
  -ms-transform: translateY(10px);
  transform: translateY(10px);
  opacity: 0;
  -webkit-transition: all 500ms ease;
  -o-transition: all 500ms ease;
  transition: all 500ms ease;
}

.team_item .hover .list li {
  display: inline-block;
  margin-right: 18px;
}

.team_item .hover .list li a {
  font-size: 16px;
  color: #fff;
}

.team_item .hover .list li:last-child {
  margin-right: 0px;
}

.team_item:hover:before {
  opacity: 1;
}

.team_item:hover .hover {
  opacity: 1;
}

.team_item:hover .hover .list {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

/* End About Studio css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Clients css
============================================================================================ */
.clients_area {
  padding-top: 130px;
  padding-bottom: 130px;
}

.clients_area .main_title {
  margin-bottom: 80px;
}

.test_item {
  background: #2a2a2a;
  border-top: 5px solid #a3cc01;
  padding: 80px 50px 40px 36px;
  position: relative;
}

.test_item:before {
  content: "\7b";
  font-family: "ElegantIcons";
  position: absolute;
  right: 22px;
  top: 20px;
  color: #a3cc01;
  font-size: 60px;
  line-height: 50px;
}

.test_item h4 {
  font-size: 14px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 20px;
}

.test_item h4 span {
  color: #fff;
  font-weight: 500;
  font-size: 18px;
}

.test_item p {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 0px;
}

.testimonials_slider .testimonials_slider {
  position: absolute;
  top: -129px;
  right: 0px;
}

.testimonials_slider .owl-prev,
.testimonials_slider .owl-next {
  font-size: 36px;
  color: #999999;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  cursor: pointer;
  display: inline-block;
}

.testimonials_slider .owl-prev:hover,
.testimonials_slider .owl-next:hover {
  color: #fff;
}

.testimonials_slider .owl-prev {
  margin-right: 45px;
}

.clients_slider {
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clients_slider .item {
  text-align: center;
  line-height: 55px;
  cursor: pointer;
}

.clients_slider .item img {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  line-height: 55px;
  opacity: 0.6;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.clients_slider .item:hover img {
  opacity: 1;
}

.white_cl.clients_area {
  background-color: #f9fafa;
}

.white_cl .test_item {
  background: #fff;
  border-top: 5px solid #a3cc01;
  margin-right: 5px;
  margin-left: 5px;
}

.white_cl .test_item h4 {
  color: #8d9aa8;
  font-weight: normal;
}

.white_cl .test_item h4 span {
  color: #263a4f;
  font-weight: 500;
  font-size: 18px;
}

.white_cl .test_item p {
  color: #8d9aa8;
}

.white_cl .clients_slider .item img {
  opacity: 0.25;
}

.white_cl .clients_slider .item:hover img {
  opacity: 1;
}

.white_cl.clients_area .owl-prev:hover,
.white_cl.clients_area .owl-next:hover {
  color: #263a4f;
}

/* End Clients css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
.animations {
  position: relative;
}

.full_pad {
  overflow: hidden;
}

.full_pad .animsition {
  position: absolute;
  z-index: 35;
  left: 0;
  width: 100%;
  top: 0;
  height: 100%;
}

@media (min-width: 1800px) {
  .section {
    overflow-x: hidden;
  }
  .box_lay {
    margin-left: 40px;
    margin-right: 40px;
    overflow: hidden;
    position: relative;
    min-height: calc(100vh - 80px);
    margin-top: 40px;
  }
}

.pagepiling .scroll-wrap {
  position: relative;
  min-height: 100%;
}

.pagepiling .section-bg {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.pagepiling .mapBox {
  position: absolute !important;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100% !important;
  background-size: cover;
  background-position: center;
}

.pagepiling .mapBox button {
  display: none;
}

.pagepiling .mapBox .gmnoprint.gm-bundled-control {
  display: none;
}

.section {
  background: #eaedee;
}

.section.section-2 .scrollable-content .vertical-centred {
  padding-top: 10rem;
  padding-bottom: 10rem;
}

.scrollable-content {
  white-space: nowrap;
  width: 100%;
  font-size: 0;
}

.scrollable-content:before {
  content: "";
  display: inline-block;
  height: 100vh;
  vertical-align: middle;
}

@media (min-width: 1800px) {
  .scrollable-content:before {
    height: calc(100vh - 80px);
  }
}

.scrollable-content .vertical-centred {
  width: 100%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  position: relative;
  padding-top: 10rem;
  padding-bottom: 10rem;
  font-size: 1rem;
}

.inter_content h2 {
  font-size: 100px;
  color: #fff;
  font-weight: bold;
  position: relative;
  font-family: "Heebo", sans-serif;
  margin-bottom: 30px;
}

.inter_content h2:before {
  content: "";
  height: 4px;
  width: 100px;
  background: #a3cc01;
  position: absolute;
  top: -12px;
  left: 5px;
}

.inter_content p {
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 80px;
}

.inter_content a {
  color: #fff;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.inter_content a i {
  padding-left: 3px;
}

.inter_content a:hover {
  color: #a3cc01;
}

.full_10_box {
  position: relative;
  padding-left: 17px;
  margin-top: 5px;
}

.full_10_box:before {
  content: "";
  height: 153px;
  width: 153px;
  border: 5px solid #a3cc01;
  display: inline-block;
  position: absolute;
  left: -7px;
  top: 0px;
  z-index: -1;
}

.full_10_box:after {
  content: "";
  width: 191px;
  height: 191px;
  position: absolute;
  right: 1px;
  top: -19px;
  z-index: -1;
}

.full_10_box h2 {
  font-size: 105px;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  padding-top: 60px;
}

.full_10_box h3 {
  font-size: 48px;
  font-weight: 900;
  font-family: "Heebo", sans-serif;
  text-transform: uppercase;
  padding-left: 7px;
}

.full_10_box h5 {
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  font-family: "Heebo", sans-serif;
  padding-left: 8px;
}

.full_footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 40px;
  z-index: 5;
  background: transparent;
}

.full_footer .float-left h5 {
  color: #263a4f;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.full_footer .float-left h5 a {
  font-weight: bold;
  color: #263a4f;
}

.full_footer .float-right .list li {
  display: inline-block;
  margin-right: 25px;
}

.full_footer .float-right .list li a {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  font-size: 14px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.full_footer .float-right .list li:last-child {
  margin-right: 0px;
}

.full_footer .float-right .list li:hover a {
  color: #a3cc01;
}

.full_footer.content-white {
  background: transparent;
}

.full_footer.content-white .float-left h5 {
  color: #fff;
}

.full_footer.content-white .float-left h5 a {
  color: #fff;
}

.full_footer.content-white .float-right .list li a {
  color: #fff;
}

.full_footer.content-white .float-right .list li:hover a {
  color: #a3cc01;
}

.full_testimonials_area .main_title {
  margin-bottom: 80px;
}

.full_testimonials_area .full_white .test_item {
  background: #fff;
}

.full_testimonials_area .full_white .test_item h4 {
  color: #8d9aa8;
}

.full_testimonials_area .full_white .test_item h4 span {
  color: #263a4f;
}

.full_testimonials_area .full_white .test_item p {
  color: #8d9aa8;
}

.full_testimonials_area .full_white .testimonials_slider .owl-prev:hover,
.full_testimonials_area .full_white .testimonials_slider .owl-next:hover {
  color: #263a4f;
}

.full_spec_area .main_title {
  margin-bottom: 80px;
}

.full_spec_area .spec_item h4 {
  color: #263a4f;
}

.full_spec_area .spec_item p {
  color: #8d9aa8;
}

.full_spec_area .spec_item a:hover {
  color: #263a4f;
}

#full_page_slider {
  overflow: hidden;
}

#full_page_slider .left_ar,
#full_page_slider .right_ar {
  height: 70px;
  width: 70px;
  border: 2px solid #fff;
  text-align: center !important;
  line-height: 48px !important;
  color: #fff;
  display: inline-block;
  font-size: 30px !important;
  -webkit-transition: all 300ms ease !important;
  -o-transition: all 300ms ease !important;
  transition: all 300ms ease !important;
}

#full_page_slider .left_ar:hover,
#full_page_slider .right_ar:hover {
  background: #263a4f;
  color: #fff !important;
  border-color: #263a4f;
}

#full_page_slider ul li .count {
  font-weight: bold !important;
  font-family: "Oswald", sans-serif;
}

#full_page_slider ul li .left_ar {
  right: 135px !important;
}

@media (min-width: 1800px) {
  .full_slider_inner {
    position: relative;
    overflow: hidden;
    height: calc(100vh - 80px);
  }
  .full_slider_inner .forcefullwidth_wrapper_tp_banner {
    height: calc(100vh - 80px) !important;
  }
  .full_slider_inner .forcefullwidth_wrapper_tp_banner .rev_slider_wrapper {
    height: calc(100vh - 80px) !important;
  }
}

@media (max-height: 900px) {
  .full_slider_inner {
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  .full_slider_inner .forcefullwidth_wrapper_tp_banner {
    height: 100% !important;
  }
  .full_slider_inner .forcefullwidth_wrapper_tp_banner .rev_slider_wrapper {
    height: 100% !important;
  }
}

.left_contact_details h1 {
  font-size: 60px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 80px;
}

.left_contact_details h2 {
  font-size: 30px;
  color: #666666;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 12px;
}

.left_contact_details h2 span {
  color: #fff;
  font-weight: 700;
}

.left_contact_details p {
  font-size: 14px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  line-height: 24px;
  margin-bottom: 10px;
}

.left_contact_details a {
  display: block;
  font-size: 14px;
  color: #fff;
  font-family: "Heebo", sans-serif;
  line-height: 24px;
  margin-bottom: 20px;
}

.left_contact_details .map_btn {
  margin-bottom: 0px;
  margin-top: 110px;
  color: #00ccff;
  display: inline-block;
}

.left_contact_details .map_btn i {
  padding-left: 2px;
}

.left_contact_details .map_btn:hover {
  color: #a3cc01;
}

.right_contact_form h4 {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  margin-bottom: 80px;
  margin-top: 30px;
}

.right_contact_form .contact_us_form .form-group {
  margin-bottom: 20px;
}

.right_contact_form .contact_us_form .form-group input {
  border-radius: 0px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #525252;
  padding: 0px;
  height: 53px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.right_contact_form .contact_us_form .form-group input.placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group input:-moz-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group input::-moz-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form
  .contact_us_form
  .form-group
  input::-webkit-input-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group input:focus {
  border-color: #7d7d7d;
  color: #fff;
}

.right_contact_form .contact_us_form .form-group input:focus.placeholder {
  color: #fff;
}

.right_contact_form .contact_us_form .form-group input:focus:-moz-placeholder {
  color: #fff;
}

.right_contact_form .contact_us_form .form-group input:focus::-moz-placeholder {
  color: #fff;
}

.right_contact_form
  .contact_us_form
  .form-group
  input:focus::-webkit-input-placeholder {
  color: #fff;
}

.right_contact_form .contact_us_form .form-group textarea {
  border-radius: 0px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #525252;
  padding: 5px 0px;
  height: 160px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
  resize: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.right_contact_form .contact_us_form .form-group textarea.placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group textarea:-moz-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group textarea::-moz-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form
  .contact_us_form
  .form-group
  textarea::-webkit-input-placeholder {
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-size: 14px;
}

.right_contact_form .contact_us_form .form-group textarea:focus {
  border-color: #7d7d7d;
  color: #fff;
}

.right_contact_form .contact_us_form .form-group textarea:focus.placeholder {
  color: #fff;
}

.right_contact_form
  .contact_us_form
  .form-group
  textarea:focus:-moz-placeholder {
  color: #fff;
}

.right_contact_form
  .contact_us_form
  .form-group
  textarea:focus::-moz-placeholder {
  color: #fff;
}

.right_contact_form
  .contact_us_form
  .form-group
  textarea:focus::-webkit-input-placeholder {
  color: #fff;
}

.right_contact_form .contact_us_form .form-group .order_s_btn {
  background: transparent;
  border-radius: 0px;
  text-align: left;
  text-transform: uppercase;
  padding: 0px;
  color: #fff;
  font-weight: bold;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  display: inline-block;
  width: auto;
}

.right_contact_form .contact_us_form .form-group .order_s_btn:focus {
  outline: none;
  border: none;
}

.right_contact_form .contact_us_form .form-group .order_s_btn i {
  padding-left: 5px;
}

.right_contact_form .contact_us_form .form-group .order_s_btn:hover {
  color: #a3cc01;
}

.right_contact_form .contact_us_form .form-group:last-child {
  margin-bottom: 0px;
  margin-top: 55px;
}

.right_position {
  position: absolute;
  right: 90px;
  z-index: 35;
}

.right_position ul {
  position: relative;
  top: -6px;
}

.right_position ul li {
  margin-bottom: 25px !important;
}

.right_position ul li a span {
  height: 13px !important;
  width: 13px !important;
  background: #253a4f !important;
  opacity: 0.25;
  border: none !important;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.right_position ul li a.active span {
  opacity: 1;
}

.right_position ul li:last-child {
  margin-bottom: 0px !important;
}

.right_position.white ul li a span {
  background: #fff !important;
  opacity: 0.5;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.right_position.white ul li a.active span {
  opacity: 1;
}

.section .box_content {
  -webkit-transform: translateY(7rem);
  -ms-transform: translateY(7rem);
  transform: translateY(7rem);
  -webkit-transition: all 0.35s 0.6s ease;
  -o-transition: all 0.35s 0.6s ease;
  transition: all 0.35s 0.6s ease;
  opacity: 0;
}

.section .box_content .main_title.white h2 {
  text-transform: capitalize;
  font-size: 60px;
}

.section.active .box_content {
  -webkit-transform: translateY(0rem);
  -ms-transform: translateY(0rem);
  transform: translateY(0rem);
  opacity: 1;
}

/* Contact Success and error Area css
============================================================================================ */
.modal-message .modal-dialog {
  position: absolute;
  top: 36%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) !important;
  -ms-transform: translateX(-50%) translateY(-50%) !important;
  transform: translateX(-50%) translateY(-50%) !important;
  margin: 0px;
  max-width: 500px;
  width: 100%;
}

.modal-message .modal-dialog .modal-content .modal-header {
  text-align: center;
  display: block;
  border-bottom: none;
  padding-top: 50px;
  padding-bottom: 50px;
}

.modal-message .modal-dialog .modal-content .modal-header .close {
  position: absolute;
  right: -15px;
  top: -15px;
  padding: 0px;
  color: #fff;
  opacity: 1;
  cursor: pointer;
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.modal-message .modal-dialog .modal-content .modal-header h2 {
  display: block;
  text-align: center;
  color: #a3cc01;
  padding-bottom: 10px;
  font-family: "Heebo", sans-serif;
}

.modal-message .modal-dialog .modal-content .modal-header p {
  display: block;
}

/* End Contact Success and error Area css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Video Frame css
============================================================================================ */
/**
 * Simple fade transition,
 */
.mfp-fade.mfp-bg {
  opacity: 0;
  -webkit-transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}

.mfp-fade.mfp-bg.mfp-ready {
  opacity: 0.8;
}

.mfp-fade.mfp-bg.mfp-removing {
  opacity: 0;
}

.mfp-fade.mfp-wrap .mfp-content {
  opacity: 0;
  -webkit-transition: all 0.15s ease-out;
  -moz-transition: all 0.15s ease-out;
  -o-transition: all 0.15s ease-out;
  transition: all 0.15s ease-out;
}

.mfp-fade.mfp-wrap.mfp-ready .mfp-content {
  opacity: 1;
}

.mfp-fade.mfp-wrap.mfp-removing .mfp-content {
  opacity: 0;
}

/* Styles for dialog window */
#small-dialog {
  background: #000;
  text-align: left;
  max-width: 800px;
  margin: 40px auto;
  position: relative;
  overflow: visible;
}

#small-dialog .mfp-close {
  right: -40px;
  top: -40px;
}

/**
 * Fade-move animation for second dialog
 */
/* at start */
.my-mfp-slide-bottom .zoom-anim-dialog {
  opacity: 0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  -webkit-transform: translateY(-40px) perspective(600px) rotateX(10deg);
  -moz-transform: translateY(-40px) perspective(600px) rotateX(10deg);
  -ms-transform: translateY(-40px) perspective(600px) rotateX(10deg);
  -o-transform: translateY(-40px) perspective(600px) rotateX(10deg);
  transform: translateY(-40px) perspective(600px) rotateX(10deg);
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
  opacity: 1;
  -webkit-transform: translateY(0) perspective(600px) rotateX(0);
  -moz-transform: translateY(0) perspective(600px) rotateX(0);
  -ms-transform: translateY(0) perspective(600px) rotateX(0);
  -o-transform: translateY(0) perspective(600px) rotateX(0);
  transform: translateY(0) perspective(600px) rotateX(0);
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
  opacity: 0;
  -webkit-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -moz-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -ms-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  -o-transform: translateY(-10px) perspective(600px) rotateX(10deg);
  transform: translateY(-10px) perspective(600px) rotateX(10deg);
}

/* Dark overlay, start state */
.my-mfp-slide-bottom.mfp-bg {
  opacity: 0;
  -webkit-transition: opacity 0.3s ease-out;
  -moz-transition: opacity 0.3s ease-out;
  -o-transition: opacity 0.3s ease-out;
  transition: opacity 0.3s ease-out;
}

/* animate in */
.my-mfp-slide-bottom.mfp-ready.mfp-bg {
  opacity: 0.8;
}

/* animate out */
.my-mfp-slide-bottom.mfp-removing.mfp-bg {
  opacity: 0;
}

/* End Video Frame css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Blog Grid css
============================================================================================ */
.blog_grid_inner {
  padding-left: 80px;
  padding-right: 80px;
  overflow: hidden;
}

.blog_grid_inner .pagination_dotted {
  padding-top: 40px;
}

.blog_g_item {
  margin-bottom: 90px;
  overflow: hidden;
}

.blog_g_item .press_img {
  overflow: hidden;
  display: inline-block;
}

.blog_g_item .press_img img {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.blog_g_item .press_img_item .date a {
  color: #263a4f;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.blog_g_item .press_img_item .date a:first-child {
  color: #8d9aa8;
}

.blog_g_item .press_img_item .date a:first-child:hover {
  color: #263a4f;
}

.blog_g_item .press_img_item .date a:hover {
  color: #a3cc01;
}

.blog_g_item .press_img_item .date i {
  color: #8d9aa8;
}

.blog_g_item .press_img_item h4 {
  color: #263a4f;
}

.blog_g_item .press_img_item h4:hover {
  color: #a3cc01;
}

.blog_g_item:hover .press_img img {
  -webkit-transform: scale(1.04);
  -ms-transform: scale(1.04);
  transform: scale(1.04);
}

.blog_ms_inner {
  margin-bottom: -55px;
  overflow: hidden;
}

.blog_ms_inner .blog_g_item {
  margin-bottom: 55px;
}

/* End Blog Grid css
============================================================================================ */
/* Blog with Sidebar css
============================================================================================ */
.blog_sidebar_area {
  padding-top: 115px;
}

.left_sidebar_area {
  margin-right: -30px;
}

.left_sidebar_area.mg_left {
  margin-left: -30px;
  margin-right: 0px;
}

.l_widget {
  margin-bottom: 60px;
}

.l_widget:last-child {
  margin-bottom: 0px;
}

.l_wd_title h3 {
  font-size: 24px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #263a4f;
  margin-bottom: 35px;
}

.search_wd .input-group input {
  border: none;
  background: #f1f4f5;
  border-radius: 0px;
  height: 50px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 0px 15px;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
}

.search_wd .input-group input.placeholder {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
}

.search_wd .input-group input:-moz-placeholder {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
}

.search_wd .input-group input::-moz-placeholder {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
}

.search_wd .input-group input::-webkit-input-placeholder {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
}

.categories_wd .list li a {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  border-bottom: 1px solid #d3d8dc;
  display: block;
  padding: 15px 0px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.categories_wd .list li a span {
  float: right;
}

.categories_wd .list li:first-child a {
  padding-top: 0px;
}

.categories_wd .list li:last-child a {
  padding-bottom: 0px;
  border-bottom: none;
}

.categories_wd .list li:hover a {
  color: #a3cc01;
}

.r_post_wd .media {
  margin-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #d3d8dc;
}

.r_post_wd .media .d-flex {
  padding-right: 20px;
}

.r_post_wd .media .media-body h4 {
  font-size: 14px;
  line-height: 20px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #263a4f;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.r_post_wd .media .media-body h4:hover {
  color: #a3cc01;
}

.r_post_wd .media:nth-child(2) {
  margin-top: 0px;
}

.r_post_wd .media:last-child {
  padding-bottom: 0px;
  border: none;
}

.tags_wd .tag_list a {
  display: inline-block;
  border: 1px solid #8d9aa8;
  color: #8d9aa8;
  padding: 0px 14px;
  margin-right: 6px;
  margin-bottom: 10px;
  line-height: 28px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  vertical-align: middle;
  text-align: center;
}

.tags_wd .tag_list a:hover {
  background: #263a4f;
  border-color: #263a4f;
  color: #fff;
}

.blog_side_item {
  margin-top: 28px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e9ebed;
}

.blog_side_item .media .d-flex {
  padding-right: 25px;
}

.blog_side_item .media .media-body .tag {
  text-transform: uppercase;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #263a4f;
  font-size: 14px;
  margin-bottom: 15px;
  display: inline-block;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.blog_side_item .media .media-body .tag:hover {
  color: #a3cc01;
}

.blog_side_item .media .media-body h4 {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  line-height: 30px;
  font-size: 24px;
  margin-bottom: 20px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.blog_side_item .media .media-body h4:hover {
  color: #a3cc01;
}

.blog_side_item .media .media-body .time {
  font-size: 12px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.blog_side_item .media .media-body .time:hover {
  color: #263a4f;
}

.blog_side_item:first-child {
  margin-top: 0px;
}

.blog_side_item:last-child {
  border-bottom: none;
  margin-bottom: 0px;
  padding-bottom: 0px;
}

.pagination_inner {
  margin-top: 100px;
  margin-bottom: 110px;
}

.pagination_inner .pagination li {
  margin-right: 25px;
}

.pagination_inner .pagination li a {
  padding: 0px;
  border: none;
  font-size: 18px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
  background: transparent;
}

.pagination_inner .pagination li:last-child {
  margin-right: 0px;
}

.pagination_inner .pagination li:hover a,
.pagination_inner .pagination li.active a {
  color: #263a4f;
  background: transparent;
  font-weight: bold;
}

.pagination_inner .pagination li.next a {
  color: #263a4f;
}

/* End Blog with Sidebar css
============================================================================================ */
/* Single blog Gallery css
============================================================================================ */
.blog_gallery_area .blog_g_slider {
  position: relative;
}

.blog_gallery_area .blog_g_slider .owl-prev,
.blog_gallery_area .blog_g_slider .owl-next {
  position: absolute;
  top: 50%;
  margin-top: -30px;
  z-index: 2;
  height: 60px;
  width: 60px;
  border: 1px solid #fff;
  text-align: center;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.blog_gallery_area .blog_g_slider .owl-prev i,
.blog_gallery_area .blog_g_slider .owl-next i {
  font-size: 36px;
}

.blog_gallery_area .blog_g_slider .owl-prev:hover,
.blog_gallery_area .blog_g_slider .owl-next:hover {
  background: #263a4f;
  border-color: #263a4f;
}

.blog_gallery_area .blog_g_slider .owl-prev {
  left: 80px;
}

.blog_gallery_area .blog_g_slider .owl-next {
  right: 80px;
}

.box_layout {
  max-width: 770px;
  margin: auto;
}

.single_blog_content {
  padding-top: 92px;
  padding-bottom: 120px;
}

.s_blog_text_inner .blog_main_text {
  padding-bottom: 65px;
}

.s_blog_text_inner .blog_main_text h4 {
  font-size: 48px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
}

.s_blog_text_inner .blog_main_text .date {
  margin-bottom: 60px;
}

.s_blog_text_inner .blog_main_text .date a {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.s_blog_text_inner .blog_main_text .date a:last-child {
  color: #263a4f;
  font-weight: bold;
}

.s_blog_text_inner .blog_main_text .date a:last-child:hover {
  color: #a3cc01;
}

.s_blog_text_inner .blog_main_text .date a:hover {
  color: #263a4f;
}

.s_blog_text_inner .blog_main_text .date i {
  font-size: 6px;
  color: #8d9aa8;
  position: relative;
  top: -2px;
  padding-left: 2px;
  padding-right: 2px;
}

.s_blog_text_inner .blog_main_text p {
  font-size: 16px;
  line-height: 30px;
  color: #263a4f;
  margin-bottom: 0px;
}

.s_blog_text_inner .blog_main_text img {
  margin-top: 65px;
  margin-bottom: 65px;
}

.s_blog_text_inner .blog_main_text .embed-responsive {
  margin-bottom: 60px;
}

.s_blog_text_inner .blog_main_text h5 {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 35px;
}

.s_blog_text_inner .blog_main_text .blockquote {
  padding-left: 80px;
  padding-right: 90px;
  margin-bottom: 45px;
  margin-top: 45px;
}

.s_blog_text_inner .blog_main_text .blockquote h6 {
  margin-bottom: 0px;
  font-size: 24px;
  color: #263a4f;
  line-height: 36px;
  letter-spacing: 0.6px;
  font-weight: 300;
  position: relative;
  padding-left: 20px;
}

.s_blog_text_inner .blog_main_text .blockquote h6 i {
  font-style: normal;
  position: absolute;
  left: 0px;
  top: 5px;
  font-size: 60px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: 100;
}

.s_blog_text_inner .blog_main_text .s_blog_tag {
  margin-top: 83px;
}

.s_blog_text_inner .blog_main_text .s_blog_tag a {
  display: inline-block;
  border: 1px solid #8d9aa8;
  color: #8d9aa8;
  font-size: 14px;
  line-height: 28px;
  padding: 0px 16px;
  text-decoration: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  margin-right: 6px;
}

.s_blog_text_inner .blog_main_text .s_blog_tag a:hover {
  background: #263a4f;
  border-color: #263a4f;
  color: #fff;
}

.s_blog_text_inner .blog_main_text .s_blog_tag a:last-child {
  margin-right: 0px;
}

.s_blog_text_inner.video_s_blog .blog_main_text h4 {
  font-size: 36px;
}

.related_post {
  border-top: 2px solid #e9ebed;
  padding-top: 60px;
}

.related_post h4 {
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #263a4f;
  font-size: 24px;
  margin-bottom: 40px;
}

.related_post .blog_g_item {
  margin-bottom: 0px;
}

.s_blog_text_inner.video_s_blog {
  padding-bottom: 80px;
}

/* End Single blog Gallery css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Blog Comment Form css
============================================================================================ */
.comment_form {
  background: #ebf0f4;
  padding: 130px 0px;
}

.comment_title {
  padding-bottom: 45px;
}

.comment_title h2 {
  font-size: 24px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  color: #263a4f;
  margin-bottom: 12px;
}

.comment_title p {
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
  margin-bottom: 0px;
}

.comment_from .form-group {
  margin-bottom: 30px;
}

.comment_from .form-group input {
  height: 50px;
  border: 1px solid #bcc5ce;
  border-radius: 0px;
  padding: 0px 15px;
  background: #fff;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group input.placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group input:-moz-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group input::-moz-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group input::-webkit-input-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group textarea {
  height: 216px;
  border: 1px solid #bcc5ce;
  border-radius: 0px;
  padding: 15px 15px;
  background: #fff;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  resize: none;
  font-weight: normal;
}

.comment_from .form-group textarea.placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group textarea:-moz-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group textarea::-moz-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group textarea::-webkit-input-placeholder {
  font-size: 14px;
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
}

.comment_from .form-group:last-child {
  margin-bottom: 0px;
  margin-top: 17px;
}

.p_star {
  display: inline-block;
  position: relative;
}

.p_star input {
  background: #fff;
}

.p_star input:valid + .placeholder {
  display: none;
}

.p_star .placeholder {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 30px;
  z-index: 1;
}

.p_star .placeholder::before {
  content: attr(data-placeholder);
  color: #8d9aa8;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  font-size: 14px;
}

.p_star .placeholder::after {
  content: " *";
  color: tomato;
}

/* End Blog Comment Form css
============================================================================================ */
/* End Blog Comment Form css
============================================================================================ */
.banner_map .mapBox {
  min-height: 620px;
}

.contact_area2 {
  padding-top: 145px;
  padding-bottom: 160px;
}

.contact_area2 .left_contact_details h1 {
  font-size: 48px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 85px;
}

.contact_area2 .left_contact_details h2 {
  font-size: 30px;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  color: #8d9aa8;
  margin-bottom: 25px;
}

.contact_area2 .left_contact_details h2 span {
  font-weight: bold;
  color: #263a4f;
}

.contact_area2 .left_contact_details p {
  font-size: 14px;
  line-height: 24px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 25px;
}

.contact_area2 .left_contact_details a {
  font-size: 14px;
  line-height: 24px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 25px;
}

.contact_area2 .left_contact_details .map_btn {
  color: #0099cc;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: 100px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.contact_area2 .left_contact_details .map_btn:hover {
  color: #a3cc01;
}

.contact_area2 .right_contact_form h4 {
  font-size: 18px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
}

.contact_area2 .right_contact_form .contact_us_form .form-group input {
  border-bottom-color: #e9ebed;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  input.placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  input:-moz-placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  input::-moz-placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  input::-webkit-input-placeholder {
  color: #8d9aa8;
}

.contact_area2 .right_contact_form .contact_us_form .form-group input:focus {
  border-bottom-color: #a8b0b9;
  color: #263a4f;
}

.contact_area2 .right_contact_form .contact_us_form .form-group textarea {
  border-bottom-color: #e9ebed;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  textarea.placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  textarea:-moz-placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  textarea::-moz-placeholder {
  color: #8d9aa8;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  textarea::-webkit-input-placeholder {
  color: #8d9aa8;
}

.contact_area2 .right_contact_form .contact_us_form .form-group textarea:focus {
  border-bottom-color: #a8b0b9;
  color: #263a4f;
}

.contact_area2 .right_contact_form .contact_us_form .form-group .order_s_btn {
  font-size: 14px;
  color: #263a4f;
  display: inline-block;
  width: auto;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  .order_s_btn:hover {
  color: #a3cc01;
}

.contact_area2
  .right_contact_form
  .contact_us_form
  .form-group
  .order_s_btn:focus {
  border: none;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.contact_area2 .right_contact_form .contact_us_form .form-group:last-child {
  margin-top: 62px;
}

label {
  margin-top: 8px;
}

.success-message,
.error-message {
  display: none;
  margin-top: 5px;
  padding-left: 15px;
}

/* End Blog Comment Form css
============================================================================================ */
/*---------------------------------------------------- */
/*----------------------------------------------------*/
/* Footer css
============================================================================================ */
.footer_area {
  background: #1b1b1b;
  padding-left: 76px;
  padding-right: 76px;
  padding-top: 120px;
}

.footer_area .footer_widgets {
  padding-bottom: 100px;
}

.footer_area .footer_widgets .f_widgets_item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}

.footer_area .footer_widgets .f_widgets_item:nth-child(2) .f_contact {
  margin-left: -56px;
}

.footer_area .footer_widgets .f_widgets_item:nth-child(3) .f_link {
  margin-left: 75px;
}

.footer_area .footer_widgets .f_widgets_item:nth-child(4) .f_link {
  margin-left: 95px;
}

.footer_area .footer_widgets .f_widgets_item:nth-child(5) .f_link {
  margin-left: 85px;
}

.f_title {
  margin-bottom: 25px;
}

.f_title h3 {
  color: #fff;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 0px;
}

.f_contact {
  max-width: 270px;
}

.f_contact a {
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 15px;
}

.f_contact a:last-child {
  margin-bottom: 0px;
}

.f_contact p {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 15px;
}

.f_link .list li {
  margin-bottom: 10px;
}

.f_link .list li a {
  font-size: 14px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.f_link .list li:last-child {
  margin-bottom: 0px;
}

.f_link .list li:hover a {
  color: #fff;
}

.footer_copyright {
  overflow: hidden;
  border-top: 2px solid #282828;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 48px 0px;
}

.footer_copyright .left_text {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 50%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

.footer_copyright .left_text p {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  margin-bottom: 0px;
}

.footer_copyright .left_text p a {
  color: #fff;
  font-weight: bold;
}

.footer_copyright .middle_text {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  float: none;
  max-width: 500px;
  width: 100%;
  text-align: center;
}

.footer_copyright .middle_text .list {
  display: inline-block;
  width: 100%;
  text-align: center;
}

.footer_copyright .middle_text .list li {
  display: inline-block;
  margin-right: 25px;
}

.footer_copyright .middle_text .list li a {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.footer_copyright .middle_text .list li:last-child {
  margin-right: 0px;
}

.footer_copyright .middle_text .list li:hover a {
  color: #fff;
}

.footer_copyright .right_text {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  width: 50%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.footer_copyright .right_text .list li {
  display: inline-block;
  margin-right: 25px;
}

.footer_copyright .right_text .list li a {
  font-size: 14px;
  line-height: 24px;
  color: #999999;
  font-family: "Heebo", sans-serif;
  font-weight: normal;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.footer_copyright .right_text .list li:hover a,
.footer_copyright .right_text .list li.active a {
  color: #fff;
}

.footer_copyright .right_text .list li:last-child {
  margin-right: 0px;
}

.white_f {
  background: #fff;
  border-top: 2px solid #f0f0f0;
}

.white_f .f_title h3 {
  color: #263a4f;
}

.white_f .f_contact a {
  color: #8d9aa8;
}

.white_f .f_contact p {
  color: #8d9aa8;
}

.white_f .f_link .list li a {
  color: #8d9aa8;
}

.white_f .f_link .list li:hover a {
  color: #263a4f;
}

.white_f .footer_copyright {
  border-top: 2px solid #f0f0f0;
}

.white_f .footer_copyright .left_text p {
  color: #8d9aa8;
}

.white_f .footer_copyright .left_text p a {
  color: #263a4f;
}

.white_f .footer_copyright .middle_text .list li a {
  color: #8d9aa8;
}

.white_f .footer_copyright .middle_text .list li:hover a {
  color: #263a4f;
}

.white_f .footer_copyright .right_text .list li a {
  color: #8d9aa8;
}

.white_f .footer_copyright .right_text .list li:hover a,
.white_f .footer_copyright .right_text .list li.active a {
  color: #263a4f;
}

/* End Footer css
============================================================================================ */
/*---------------------------------------------------- */

/*# sourceMappingURL=style.css.map */
/* responsive*/
@media (max-width: 1500px) {
  .animations {
    position: static;
    margin: 0px;
    padding: 0px;
    height: 100%;
    overflow: visible;
  }
  /*
	.section.slider .forcefullwidth_wrapper_tp_banner {
		height: 100vh !important;
	}
	.full_slider_inner {
		height: 100vh !important;
	}
*/
  .scrollable-content {
    overflow: hidden;
  }
  .full_testimonials_area .main_title {
    margin-bottom: 60px;
  }
  .animations .clients_slider {
    padding-top: 70px;
  }
  .pagepiling .pp-scrollable {
    overflow-y: auto;
  }
}
@media (max-width: 1400px) {
  .projects_item .hover .project_text h4 {
    font-size: 26px;
  }
  .home_slider .year {
    display: none;
  }
  .home_slider .social_icon {
    display: none;
  }
}
@media (max-width: 1370px) {
  .since_text {
    left: 0px;
  }
  .full_spec_area .main_title {
    margin-top: 100px;
    margin-bottom: 20px;
  }
}
@media (max-width: 1300px) {
  .since_text h5 {
    position: relative;
    left: 0px;
    top: 0px;
    transform: rotate(0deg);
  }
  .since_text {
    left: 0px;
    max-width: 1170px;
    margin: 0px auto 20px;
  }
}
@media (max-width: 1199px) {
  .home_slider .rev_slider ul li .line_1,
  .home_slider .rev_slider ul li .line_2,
  .home_slider .rev_slider ul li .line_3,
  .home_slider .rev_slider ul li .line_4 {
    display: none !important;
  }

  .since_text {
    max-width: 930px;
    margin: 0px auto 20px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(5) .f_link {
    margin-left: 40px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(3) .f_link {
    margin-left: 40px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(4) .f_link {
    margin-left: 40px;
  }
  .projects_item .hover .project_text {
    left: 20px;
    bottom: 40px;
  }
  .our_projects_area .projects_tt {
    padding-bottom: 90px;
  }
  .breadcrumb_link {
    padding-top: 170px;
  }
  .projects_inner .projects_column {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  .ms_project_inner .ms_p_item .hover .project_text h4 {
    font-size: 26px;
  }
  .ms_project_inner .ms_p_item .hover .project_text {
    left: 20px;
  }
  .ms_project_area .pagination_dotted {
    padding-bottom: 0px;
  }
  .full_10_box {
    right: 100px;
  }
  .right_position {
    right: 15px;
  }
  .full_footer {
    display: none;
  }
  .full_spec_area .main_title {
    margin-bottom: 28px;
    margin-top: 140px;
  }
  .footer_copyright {
    display: block;
    text-align: center;
  }
  .footer_copyright .left_text {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
  .footer_copyright .right_text {
    width: 100%;
    display: block;
    margin-top: 20px;
  }
}
@media (max-width: 991px) {
  .navbar-toggler {
    position: relative;
    border: 0px;
    display: inline-block;
    width: 30px;
    height: 20px;
    padding: 0px;
  }
  .navbar-toggler span {
    position: absolute;
    height: 3px;
    width: 100%;
    background: #fff;
    transition: all 300ms ease;
    cursor: pointer;
    left: 0px;
  }
  .dark_menu .navbar-toggler span {
    background: #263a4f;
  }
  .dark_menu .navbar-toggler {
    margin-right: 15px;
  }
  .navbar-toggler span:first-child {
    top: 0px;
  }
  .navbar-toggler span:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  .navbar-toggler span:last-child {
    bottom: 0px;
  }
  .navbar-toggler[aria-expanded="true"] span:nth-child(1) {
    transform: translateY(9px) rotate(-45deg);
  }
  .navbar-toggler[aria-expanded="true"] span:nth-child(3) {
    transform: translateY(-8px) rotate(45deg);
  }
  .navbar-toggler[aria-expanded="true"] span:nth-child(2) {
    visibility: hidden;
  }
  .header_menu_area .navbar.navbar-expand-lg {
    background: transparent !important;
    padding: 20px 15px;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li {
    display: block;
    margin-right: 0px;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li > a {
    display: block;
    color: #263a4f;
    line-height: 42px;
    padding: 0px 15px;
  }
  .header_menu_area .navbar.navbar-expand-lg .navbar-collapse {
    background: #fff;
    margin-top: 15px;
  }
  .header_menu_area .navbar.navbar-expand-lg .navbar-toggler:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right {
    display: block;
    max-width: 100%;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li {
    display: block;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li a {
    display: block;
    color: #263a4f;
  }
  .header_menu_area
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li.submenu
    .dropdown-menu
    li
    a {
    border: none;
  }
  .header_menu_area
    .navbar.navbar-expand-lg
    .nav.navbar-nav.navbar-right
    li.active
    a {
    color: #a3cc01;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav {
    margin-left: 0%;
  }
  .header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right {
    margin-top: 0px;
  }
  .header_menu_area
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li.submenu
    .dropdown-menu {
    margin: 0px;
    padding: 0px;
    border-radius: 0px;
    border: none;
  }
  .page_lines {
    display: none;
  }
  .section.section-2 .scrollable-content .vertical-centred {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .scrollable-content .vertical-centred {
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
  .intes_studio_area {
    padding-top: 100px;
  }
  .studio_text {
    margin-left: 0px;
    margin-top: 50px;
  }
  .since_text {
    max-width: 690px;
    margin: 0px auto 20px;
  }
  .studio_text p {
    margin-bottom: 60px;
  }
  .speciallization_area .spec_item {
    margin-bottom: 30px;
  }
  .speciallization_area .row {
    margin-bottom: -30px;
    overflow: hidden;
  }
  .latest_project .float-md-left {
    float: none !important;
    text-align: center;
  }
  .latest_project .float-md-right {
    float: none !important;
    text-align: center;
    margin-top: 20px;
  }
  .latest_project {
    padding-top: 100px;
  }
  .press_item {
    margin-left: 0px;
    margin-top: 30px;
  }
  .press_item_inner {
    margin-top: 60px;
  }
  .footer_area .footer_widgets .f_widgets_item {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  .footer_area .footer_widgets .f_widgets_item {
    margin-bottom: 30px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(4) .f_link {
    margin-left: 0px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(5) .f_link {
    margin-left: 0px;
  }
  .footer_widgets {
    margin-bottom: -30px !important;
    overflow: hidden;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(5) .f_link {
    margin-left: -52px;
  }
  .header_menu_area.dark_menu .navbar.navbar-expand-lg {
    padding-left: 0px;
    padding-right: 0px;
  }
  .dark_menu .navbar.navbar-expand-lg .navbar-brand {
    padding-left: 15px;
    position: relative;
    top: 3px;
  }
  .breadcrumb_link {
    padding-top: 150px;
  }
  .press_img_item h4 {
    font-size: 18px;
    line-height: 28px;
  }
  .blog_g_item {
    margin-bottom: 30px;
  }
  .blog_grid_inner .pagination_dotted {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .our_projects_area .projects_tt {
    padding-bottom: 100px;
  }
  .blog_grid_inner {
    padding-left: 15px;
    padding-right: 15px;
  }
  .left_sidebar_area {
    margin-right: 0px;
  }
  .project_breadcrumb_area .bread_bottom_text h2 {
    font-size: 60px;
    line-height: 65px;
  }
  .project_details_area .col-sm-6 {
    margin-bottom: 30px;
  }
  .project_details_area .row {
    margin-bottom: -30px;
    overflow: hidden;
  }
  .villa_slider .owl-prev {
    left: 10px;
  }
  .villa_slider .owl-next {
    right: 10px;
  }
  .project_villa_area .link_btn {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .left_sidebar_area.mg_left {
    margin-left: 0px;
    margin-right: 0px;
  }
  .related_post {
    margin-top: 20px;
    border-top: 0px;
  }
  .our_projects_area .projects_tt .float-md-left {
    float: none !important;
    text-align: center;
  }
  .our_projects_area .projects_tt .float-md-right {
    float: none !important;
    text-align: center;
  }
  .pagination_dotted {
    padding-bottom: 50px;
  }
  .p_full_item {
    margin-bottom: 50px;
  }
  .ms_project_inner .ms_p_item {
    width: calc(100% / 3);
  }
  .inter_content h2 {
    font-size: 60px;
    margin-bottom: 18px;
    margin-top: 120px;
  }
  .full_header {
    padding: 18px 15px;
  }
  .inter_content p {
    margin-bottom: 40px;
  }
  .full_10_box {
    right: 0px;
    margin-top: 40px;
    margin-bottom: 100px;
  }
  .full_footer {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 12px;
  }
  .full_spec_area .col-md-6 {
    margin-bottom: 40px;
  }
  .full_testimonials_area {
    margin-bottom: 70px;
  }
  .full_testimonials_area .main_title.white {
    margin-top: 120px;
  }
  .full_testimonials_area .testimonials_slider .owl-prev,
  .testimonials_slider .owl-next {
    top: -103px !important;
  }
  .vertical-centred .contact_area .left_contact_details {
    margin-top: 120px;
  }
  .left_contact_details h1 {
    margin-bottom: 50px;
  }
  .left_contact_details .map_btn {
    margin-top: 55px;
  }
  .right_contact_form {
    margin-bottom: 70px;
  }
  #full_page_slider .left_ar,
  #full_page_slider .right_ar {
    height: 40px;
    width: 40px;
    border: 2px solid #fff;
    line-height: 20px !important;
    font-size: 18px !important;
  }
  .side_menu .menu-lang {
    top: 54px;
  }
  .side_menu .menu-footer {
    bottom: 55px;
  }
  .contact_area2 .left_contact_details .map_btn {
    margin-top: 60px;
    margin-bottom: 50px;
  }
  .contact_area2 {
    padding-top: 100px;
    padding-bottom: 0px;
  }
  .banner_map .mapBox {
    min-height: 400px;
  }
  .fillter_slider .owl-next {
    right: 5px;
  }
  .fillter_slider .owl-prev {
    left: 5px;
  }
  .full_10_box:after {
    display: none;
  }
  .header_menu_area {
    display: none;
  }
  .side_menu .close-menu {
    right: 30px;
    top: 30px;
  }
  .full_header.mobile_menu .float-left .phone {
    display: none;
  }
  .menu_gap + section,
  .menu_gap + div {
    padding-top: 76px;
  }
}
@media (max-width: 767px) {
  .section .box_content .main_title.white h2 {
    text-transform: capitalize;
    font-size: 28px;
  }
  .home_slider .rev_slider .tp-bullets {
    left: auto !important;
    right: -80px !important;
  }
  .full_header .float-left .phone {
    display: none;
  }
  .full_header .float-left {
    max-width: none;
    width: auto;
  }
  .blog_grid_inner .pagination_dotted {
    padding-top: 80px;
    padding-bottom: 20px;
  }
  .since_text {
    max-width: 510px;
    margin: 0px auto 20px;
  }
  .blog_side_inner .blog_side_item .media {
    display: block;
  }
  .blog_side_inner .blog_side_item .media-body {
    margin-top: 30px;
  }
  .blog_side_item .media .d-flex {
    padding-right: 0px;
  }
  .s_blog_text_inner .blog_main_text h4 {
    font-size: 36px;
  }
  .s_blog_text_inner .blog_main_text .blockquote {
    padding-left: 25px;
    padding-right: 25px;
  }
  .image_banner_area .single_banner_text h3 {
    font-size: 28px;
    line-height: 36px;
  }
  .image_banner_area .single_banner_text {
    padding-top: 200px;
    padding-bottom: 125px;
  }
  .page_link {
    margin-bottom: 60px;
  }
  .projects_inner .projects_column {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .ms_project_inner .ms_p_item {
    width: calc(100% / 2);
  }
  .ms_project_area .pagination_dotted {
    padding-top: 70px;
  }
  .testimonials_slider .testimonials_slider {
    position: static;
    top: 0px;
  }
  .testimonials_slider .testimonials_slider .owl-prev,
  .testimonials_slider .testimonials_slider .owl-next {
    position: absolute;
    margin: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
  .full_testimonials_area .testimonials_slider .owl-prev,
  .testimonials_slider .owl-next {
    top: 50% !important;
  }
  .testimonials_slider .owl-prev {
    left: 2px;
  }
  .testimonials_slider .owl-next {
    right: 2px;
  }
  .side_menu .close-menu {
    right: 20px;
    top: 20px;
  }
  .side_menu .menu-lang {
    top: 36px;
  }
  .side_menu .menu-footer {
    bottom: 30px;
  }
  .side_menu .copy {
    margin-top: 13px;
  }
  .clients_slider {
    padding-top: 70px;
  }
  #full_page_slider ul li .left_ar {
    right: 120px !important;
  }
  #full_page_slider .right_ar {
    right: 40px !important;
  }
}
@media (max-width: 650px) {
  .footer_area .footer_widgets .f_widgets_item {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(2) .f_contact {
    margin-left: 0px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(3) .f_link {
    margin-left: 0px;
  }
  .footer_area .footer_widgets .f_widgets_item:nth-child(5) .f_link {
    margin-left: 0px;
  }
  .inter_content h2 {
    font-size: 42px;
    margin-top: 160px;
  }
  .inter_content p {
    font-size: 18px;
    line-height: 26px;
  }
  .inter_content a {
    font-size: 16px;
  }
  .full_10_box::before {
    left: 0px;
  }
  .full_10_box {
    padding-left: 25px;
  }
  .full_header.content-white .float-left .phone {
    display: none;
  }
  .full_header .float-left .phone {
    display: none;
  }
  #pp-nav {
    display: none;
  }
}
@media (max-width: 575px) {
  .intes_studio_area .studio_img .years_text::before {
    right: auto;
    left: 0px;
  }
  .intes_studio_area .studio_img::after {
    display: none;
  }
  .intes_studio_area .studio_img {
    width: 100%;
    max-width: 100%;
  }
  .intes_studio_area .studio_img .years_text {
    right: auto;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  .intes_studio_area .studio_img .years_text .years_text_inner {
    right: -27px;
  }
  .since_text {
    padding-left: 15px;
    max-width: 100%;
  }
  .fillter_slider .owl-prev,
  .fillter_slider .owl-next {
    font-size: 50px;
  }
  .fillter_slider {
    max-width: 476px;
    margin: 0px auto 0px;
  }
  .main_title h2 {
    font-size: 26px;
  }
  .footer_area {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 70px;
  }
  .intes_studio_area {
    padding-top: 70px;
  }
  .speciallization_area {
    padding-top: 70px;
  }
  .latest_project {
    padding-top: 70px;
  }
  .our_press_area {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .clients_area {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .blog_g_item {
    max-width: 417px;
    margin: 0px auto 30px;
  }
  .full_project_area .main_title h2 {
    font-size: 40px;
  }
  .full_project_area {
    padding-top: 150px;
  }
  .blog_ms_inner .blog_g_item {
    max-width: 370px;
    margin: 0px auto 55px;
  }
  .pagination_dotted {
    padding-top: 65px;
    padding-bottom: 20px;
  }
  .blog_sidebar_area {
    padding-top: 80px;
  }
  .project_breadcrumb_area .bread_bottom_text h2 {
    font-size: 35px;
    line-height: 42px;
  }
  .back_btn {
    margin-bottom: 50px;
  }
  .project_details_area {
    padding-top: 65px;
    padding-bottom: 80px;
  }
  .blog_gallery_area .blog_g_slider .owl-prev,
  .blog_gallery_area .blog_g_slider .owl-next {
    height: 40px;
    width: 40px;
    line-height: 43px;
    margin-top: -17px;
  }
  .blog_gallery_area .blog_g_slider .owl-prev {
    left: 15px;
  }
  .blog_gallery_area .blog_g_slider .owl-next {
    right: 15px;
  }
  .breadcrumb_link.sinlge_banner {
    padding-top: 70px;
  }
  .single_blog_content {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .image_banner_area .single_banner_text {
    padding-top: 180px;
    padding-bottom: 80px;
  }
  .related_post .blog_g_item {
    max-width: 370px;
    margin: auto;
  }
  .related_post .row {
    margin-bottom: -30px;
    overflow: hidden;
  }
  .comment_form {
    padding: 70px 0px;
  }
  .related_post {
    margin-top: 0px;
  }
  .full_project_area .main_title {
    margin-bottom: 65px;
  }
  .about_studio_area {
    padding-top: 70px;
  }
  .about_studio_area .ab_studio_text h5 {
    font-size: 24px;
    line-height: 33px;
  }
  .speciallization_area.ab_spec {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  .meet_team_area {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
@media (max-width: 480px) {
  .studio_text h3 {
    font-size: 32px;
    line-height: 40px;
  }
  .portfolio_filter li {
    margin-right: 12px;
  }
  .footer_area .footer_widgets .f_widgets_item {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .footer_area {
    padding-left: 15px;
    padding-right: 15px;
  }
  .footer_copyright .middle_text .list li {
    margin-right: 12px;
  }
  .isotope_fillter li {
    margin-right: 18px;
  }
  .projects_inner .projects_column {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 15px;
    padding-top: 0px;
  }
  .projects_inner {
    display: block;
    margin: 0px;
  }
  .ms_project_inner .ms_p_item {
    width: calc(100% / 1);
  }
  .section .box_content .main_title.white h2 {
    text-transform: capitalize;
    font-size: 28px;
  }
  .spec_item h4 {
    font-size: 24px;
  }
}
</style>
