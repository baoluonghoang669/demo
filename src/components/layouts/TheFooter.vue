<template>
  <div>
    <footer id="footer" class="footer_area white_f">
      <div class="footer_widgets row m0">
        <aside class="f_widgets_item">
          <div class="f_logo">
            <img
              class="img-fluid"
              src="../../assets/images/logo/logo-dark.png"
              alt=""
            />
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_contact">
            <div class="f_title">
              <h3>contact</h3>
            </div>
            <p>
              17 Princess Road, London, Greater London, NW18JR, United Kingdom
            </p>
            <a href="mailto:luonglinham@gmail.com">luonglinham@gmail.com</a>
            <a href="tel:+0902985987">(+0084) 912-3548-073</a>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>quick links</h3>
            </div>
            <ul class="list">
              <li><router-link to="#">Works</router-link></li>
              <li><router-link to="#">Affiliate</router-link></li>
              <li><router-link to="#">Shop</router-link></li>
              <li><router-link to="#">Partners</router-link></li>
              <li><router-link to="#">Reviews</router-link></li>
            </ul>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>Company</h3>
            </div>
            <ul class="list">
              <li><router-link to="#">About</router-link></li>
              <li><router-link to="#">Contact</router-link></li>
              <li><router-link to="#">Career</router-link></li>
              <li><router-link to="#">Blog</router-link></li>
            </ul>
          </div>
        </aside>
        <aside class="f_widgets_item">
          <div class="f_link">
            <div class="f_title">
              <h3>help center</h3>
            </div>
            <ul class="list">
              <li><router-link to="#">FAQs</router-link></li>
              <li><router-link to="#">Terms & Conditions</router-link></li>
              <li><router-link to="#">Privacy Policy</router-link></li>
              <li><router-link to="#">Help</router-link></li>
              <li><router-link to="#">Services</router-link></li>
            </ul>
          </div>
        </aside>
      </div>
      <div class="footer_copyright">
        <div class="left_text">
          <p>
            ©2018 <router-link to="#">Intria</router-link>. All Rights Reserved
          </p>
        </div>
        <div class="middle_text">
          <ul class="list">
            <li><a href="https://twitter.com">Twitter</a></li>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/?hl=vi">Instagram</a>
            </li>
            <li>
              <a href="https://www.tumblr.com/">Tumblr</a>
            </li>
            <li>
              <a href="https://www.pinterest.com/">Pinterest</a>
            </li>
          </ul>
        </div>
        <div class="right_text">
          <ul class="list">
            <li><router-link to="">Eng</router-link></li>
            <li><router-link to="">Fra</router-link></li>
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
          <a href="https://www.facebook.com/"
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
