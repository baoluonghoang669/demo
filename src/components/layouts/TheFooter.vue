<template>
  <div>
    <footer id="footer" class="footer_area white_f">
      <div class="footer_widgets row m0">
        <aside class="f_widgets_item">
          <div class="f_title">
            <h3>{{ $t("troc") }}</h3>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_contact">
            <div class="f_title">
              <h3>{{ $t("menu.contact") }}</h3>
            </div>
            <p>
              {{ $t("detail-address") }}
            </p>
            <a href="mailto:luonglinham@gmail.com">luonglinham@gmail.com</a>
            <a href="tel:+0902985987">(+84) 902 985 987</a>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>{{ $t("menu.about") }}</h3>
            </div>
            <ul class="list">
              <li>
                <a
                  href="https://www.facebook.com/TROC-Studio-111045133645249/"
                  >{{ $t("fanpage") }}</a
                >
              </li>
              <li>
                <a
                  href="https://www.google.com/search?q=troc+studio&rlz=1C1CHBF_enVN852VN852&oq=troc+studio&aqs=chrome..69i57j35i39j69i60l6.1264j0j7&sourceid=chrome&ie=UTF-8"
                  >{{ $t("information") }}</a
                >
              </li>
              <li>
                <a href="https://www.facebook.com/">{{ $t("menu.project") }}</a>
              </li>
            </ul>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>{{ $t("my-company") }}</h3>
            </div>
            <ul class="list">
              <li>
                <architect-button link :name="'Home'">{{
                  $t("menu.home")
                }}</architect-button>
              </li>
              <li>
                <architect-button link :name="'About'">{{
                  $t("menu.about")
                }}</architect-button>
              </li>
              <li>
                <architect-button link :name="'Contact'">{{
                  $t("menu.contact")
                }}</architect-button>
              </li>
              <li>
                <architect-button link :name="'Project'">{{
                  $t("menu.project")
                }}</architect-button>
              </li>
            </ul>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>{{ $t("support") }}</h3>
            </div>
            <ul class="list">
              <li>
                <a href="http://ipc.danang.gov.vn/vi/du-an-keu-goi-dau-tu">{{
                  $t("investors")
                }}</a>
              </li>
              <li>
                <a
                  href="https://kinhnghiemdulichdn.com/thiet-ke-nha-da-nang/"
                  >{{ $t("designers") }}</a
                >
              </li>
              <li>
                <a href="https://batdongsan.com.vn/bat-dong-san-da-nang">{{
                  $t("estate")
                }}</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div class="footer_copyright">
        <div class="left_text">
          <p>
            ©2017 <router-link to="#">{{ $t("troc") }}</router-link
            >. {{ $t("rule") }}
          </p>
        </div>
        <div class="middle_text">
          <ul class="list">
            <li>
              <a href="https://twitter.com">{{ $t("Twitter") }}</a>
            </li>
            <li>
              <a href="https://www.facebook.com">{{ $t("Facebook") }}</a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=vi">{{
                $t("Instagram")
              }}</a>
            </li>
            <li>
              <a href="https://www.tumblr.com/">{{ $t("Tumblr") }}</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">{{ $t("Pinterest") }}</a>
            </li>
          </ul>
        </div>
        <div class="right_text">
          <ul class="list">
            <li>
              <a href="https://www.facebook.com/TROC-Studio-111045133645249"
                >Fanpage</a
              >
            </li>
            <li><a href="https://www.facebook.com/">HomePage</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <!--================End Footer Area =================-->

    <div class="social_icon">
      <ul class="list">
        <li>
          <a
            href="#header"
            v-smooth-scroll="{
              duration: 1000,
              offset: -50,
              updateHistory: false,
            }"
            ><i class="fas fa-angle-up"></i
          ></a>
        </li>
        <li></li>

        <li>
          <a href="https://www.facebook.com/TROC-Studio-111045133645249"
            ><i class="ion-social-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://twitter.com/"><i class="ion-social-twitter"></i></a>
        </li>
        <li>
          <a href="https://www.github.com/"
            ><i class="ion-social-github"></i
          ></a>
        </li>
        <li>
          <a href="tel:+0902985987"
            ><img src="../../assets/images/icons/phone-call.png" alt="img"
          /></a>
        </li>
        <li>
          <a
            href="#footer"
            v-smooth-scroll="{
              duration: 1000,
              offset: -50,
              updateHistory: false,
            }"
            ><i class="fas fa-angle-down"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/*fix social icon */
.social_icon {
  position: fixed;
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 9999;
}

.social_icon .list li a {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  line-height: 0;
  background-color: #263a4f;
  border: 1px solid #fff;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
}

.social_icon .list li a:hover {
  background-color: #a3cc01;
}

.social_icon .list li {
  padding: 5px;
}
</style>
