<template>
  <div id="header">
    <header
      :class="[
        isLink ? 'header_menu_area white_menu' : 'header_menu_area dark_menu',
      ]"
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
          <div class="fix-main-logo">
            <img src="../../assets/images/logo/1-removebg-preview.png" />
          </div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">{{ $t("menu.home") }}</router-link>
            </li>
            <li>
              <router-link to="/about">{{ $t("menu.about") }}</router-link>
            </li>
            <li>
              <router-link to="/project">{{ $t("menu.project") }}</router-link>
            </li>
            <li>
              <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
            </li>
            <li v-if="isAuth">
              <router-link to="/profile">{{ $t("menu.profile") }}</router-link>
            </li>
            <li v-if="isAdmin === 'admin' && isAuth">
              <router-link to="/dashboard">{{
                $t("menu.dashboard")
              }}</router-link>
            </li>
          </ul>
          <ul class="fix-nav-tel">
            <img src="../../assets/images/icons/phone-call.png" alt="img" />
            <a class="fix-tel" href="tel:+0902985987">(+84)902 985 987</a>
          </ul>
          <ul
            class="nav fix-nav
            "
          >
            <img
              src="../../assets/images/icons/user-white.png"
              class="fix-img"
              alt="img"
            />
            <li v-if="!isAuth">
              <router-link to="/auth">{{ $t("menu.account") }}</router-link>
            </li>
            <li v-else>
              <a @click="logout">{{ $t("menu.logout") }}</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <flag class="flag" :iso="check" />
            <select
              class="vuei18n"
              v-model="check"
              id="check"
              @change="handleChange($event)"
            >
              <option value="us">
                English
              </option>
              <option value="vn">Vietnam</option>
            </select>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Menu Header responsive at mobile screen -->
    <header class="full_header content-white mobile_menu">
      <div class="float-left">
        <router-link class="logo" to="/"
          ><img
            class="fix-responsive-logo"
            src="../../assets/images/logo/1-removebg-preview.png"
        /></router-link>
        <router-link class="phone" to="/"
          ><i class="lnr lnr-phone-handset"></i> (+84) 902 985 987</router-link
        >
      </div>
      <div class="float-right">
        <div class="bar_menu">
          <i class="lnr lnr-menu" @click="openMenu"></i>
        </div>
      </div>
    </header>

    <!-- teleport -->
    <teleport to="body">
      <transition name="dialog">
        <div class="modal" v-if="modalOpen" @click="closeMenu">
          <div class="content-modal" v-if="modalOpen">
            <i class="fa fa-times" @click="closeMenu"></i>
            <ul class="responsive-nav">
              <img
                src="../../assets/images/icons/user-white.png"
                class="fix-img"
                alt="img"
              />
              <li v-if="!isAuth">
                <router-link to="/auth">{{ $t("menu.account") }}</router-link>
              </li>
              <li v-else>
                <router-link to="/profile">{{
                  $t("menu.profile")
                }}</router-link>
                <a @click="logout">{{ $t("menu.logout") }}</a>
              </li>
            </ul>
            <ul class="responsive-tel">
              <img src="../../assets/images/icons/phone-call.png" alt="img" />
              <router-link class="fix-tel" to="tel:+13174562564"
                >(+84)902 985 987</router-link
              >
            </ul>
            <ul class="responsive-menu menu-list right-boxed">
              <li>
                <router-link to="/">{{ $t("menu.home") }}</router-link>
              </li>
              <li>
                <router-link to="/about">{{ $t("menu.about") }}</router-link>
              </li>
              <li>
                <router-link to="/project">{{
                  $t("menu.project")
                }}</router-link>
              </li>
              <li>
                <router-link to="/contact">{{
                  $t("menu.contact")
                }}</router-link>
              </li>
            </ul>
            <div class="menu-footer right-boxed">
              <div class="social-list">
                <router-link
                  to="https://twitter.com"
                  class="icon ion-social-twitter"
                ></router-link>
                <router-link
                  to="https://www.facebook.com"
                  class="icon ion-social-facebook"
                ></router-link>
                <router-link
                  to="https://www.instagram.com/?hl=vi"
                  class="icon ion-social-instagram"
                ></router-link>
                <router-link
                  to="https://www.tumblr.com"
                  class="icon ion-social-tumblr"
                ></router-link>
                <router-link
                  to="https://www.pinterest.com"
                  class="icon ion-social-dribbble-outline"
                ></router-link>
              </div>
              <div class="copy">{{ $t("logo") }}</div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      check: this.$store.getters["auth/getLanguages"] || "us",
      modalOpen: false,
      err: null,
    };
  },
  watch: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
  computed: {
    isLink() {
      if (this.$route.path === "/") {
        return true;
      }
      return false;
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    isAdmin() {
      return this.$store.getters["auth/isAdmin"];
    },
  },
  methods: {
    //change language using vuei18n
    handleChange(e) {
      localStorage.setItem("lang", e.target.value);
      this.$i18n.locale = e.target.value;
      this.$store.commit("auth/SET_LANGUAGES", e.target.value);
    },
    //responsive menu
    openMenu() {
      this.modalOpen = true;
    },
    closeMenu() {
      this.modalOpen = false;
    },
    //logout
    logout() {
      return this.$store.dispatch("auth/logout");
    },
  },
};
</script>
<style scoped>
/*custom modal teleport with responsive menu*/
/* transition animation */
select {
  outline: none;
  background: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
}
option {
  color: #000;
}
a {
  cursor: pointer;
}
.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.dialog-enter-active {
  transition: all 0.3s ease-out;
}
.dialog-leave-active {
  transition: all 0.3s ease-in;
}
.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
.copy {
  color: #fff;
}
.social-list .icon {
  color: #fff;
  margin: 0 5px;
}
.social-list .icon:hover {
  transform: translateY(-5px);
  transition: 0.3s all ease;
}
.menu-footer {
  position: absolute;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.fix-nav-tel {
  width: 27%;
  transform: translate(-10px, 8px);
}
.fix-tel {
  color: #fff;
}
.fix-tel:hover {
  color: #a3cc01 !important;
}
.fa-times:hover {
  transform: translateY(-5px);
  transition: 0.3s ease all;
}
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-modal {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #263a4f;
  width: 100%;
  height: 100%;
  padding: 5px;
  z-index: 9999;
}
.content-modal i {
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  cursor: pointer;
  color: #fff;
}
.responsive-nav {
  position: absolute;
  top: 5%;
  display: flex;
  left: 0;
}
.responsive-tel {
  position: absolute;
  top: 5%;
  display: flex;
  left: 30%;
}
.responsive-nav li a {
  color: #fff;
  padding: 0 9px;
}
.responsive-right {
  position: absolute;
  top: 4%;
  display: flex;
}
.responsive-right .flag {
  transform: translate(-5px, 5px);
}
.responsive-menu {
  position: absolute;
  top: 10%;
  width: 100%;
  padding: 0;
  text-align: center;
}
.responsive-menu li {
  margin: 10px 0;
  border-bottom: 1px solid #fff;
}
.responsive-menu li:hover {
  background: #263a4f;
  color: #fff;
}
.responsive-menu li a {
  color: #fff;
}
.responsive-menu li a:hover {
  color: #a3cc01;
  transition: 0.3s all ease;
}
/*============ end custom modal =============*/
li {
  list-style-type: none;
}
.vuei18n {
  border-radius: 5%;
}
.flag-icon-us.flag-icon-squared {
  background-position: center;
  background-size: cover;
  position: center;
}
.flag-icon.flag-icon-squared {
  width: 1em;
  height: 1rem;
  transform: translate(-6px, 0px);
}
.fix-nav {
  flex-wrap: nowrap;
  margin-right: 40px;
  width: 16%;
}
.fix-nav li {
  padding: 0 5px;
}
.fix-nav li a {
  text-decoration: none;
  color: #fff;
}
.fix-nav li a:hover {
  color: #a3cc01;
}
.fix-img {
  height: 17px;
  transform: translateY(3px);
}
.fix-dark li a {
  color: #263a4f;
}
.fix-white li a {
  color: #fff;
}
/* Home Full Menu css
============================================================================================ */
.header_menu_area {
  position: absolute;
  left: 0px;
  width: 100%;
  z-index: 30;
  top: 0px;
}
.header_menu_area .navbar.navbar-expand-lg {
  background: transparent !important;
  padding: 45px 75px 0px 75px;
}
.header_menu_area .navbar.navbar-expand-lg .navbar-brand img {
  display: inline-block;
}
.header_menu_area .navbar.navbar-expand-lg .navbar-brand img + img {
  display: none;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav {
  display: block;
  width: 100%;
  float: none;
  margin-left: 5.7%;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li {
  display: inline-block;
  margin-right: 50px;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li a {
  font-family: "Heebo", sans-serif;
  color: #fff;
  font-size: 14px;
  -webkit-transition: color 400ms linear 0s;
  -o-transition: color 400ms linear 0s;
  transition: color 400ms linear 0s;
  line-height: 35px;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li
  a.router-link-exact-active {
  color: #a3cc01;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.fix-nav
  li
  a.router-link-exact-active {
  color: #a3cc01;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li a:after {
  display: none;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li:last-child {
  margin-right: 0px;
}
@media (min-width: 992px) {
  .header_menu_area
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li.submenu
    .dropdown-menu {
    -webkit-transition: all 400ms ease-out;
    -o-transition: all 400ms ease-out;
    transition: all 400ms ease-out;
    display: block;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    min-width: 250px;
    background: #ffffff;
    border-radius: 0px;
    border: none;
    padding: 0px;
    left: -20px;
    top: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    visibility: hidden;
    margin-top: 0px;
    -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.08);
    opacity: 0;
  }
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li {
  margin-right: 0px;
  display: block;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li
  a {
  display: block;
  line-height: 42px;
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  text-transform: inherit;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  font-weight: normal;
  text-shadow: none;
  padding: 0 20px;
  font-size: 14px;
  border-bottom: 1px solid #f1f1f1;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li
  a:before {
  display: none;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li:last-child
  a {
  border-bottom: 0px;
}
@media (min-width: 992px) {
  .header_menu_area
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li:hover.submenu
    .dropdown-menu {
    visibility: visible;
    top: 35px;
    opacity: 1;
  }
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right {
  display: inline-block;
  max-width: 100px;
  width: 100%;
  margin-left: 0px;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li {
  display: inline-block;
}
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li a {
  color: #999999;
}
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav.navbar-right
  li:hover
  a,
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav.navbar-right
  li.active
  a {
  color: #fff;
}
.header_menu_area.navbar_fixed .navbar.navbar-expand-lg {
  padding-top: 0px;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .navbar-brand
  img {
  display: none;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .navbar-brand
  img
  + img {
  display: inline-block;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .navbar-toggler
  span {
  background: #263a4f;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li
  a {
  line-height: 70px;
  color: #263a4f;
  -webkit-transition: color all 400ms ease;
  -o-transition: color all 400ms ease;
  transition: color all 400ms ease;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.active
  > a {
  color: #a3cc01;
}
.header_menu_area.white_menu.navbar_fixed
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li:hover
  > a {
  color: #a3cc01;
}
.dark_menu {
  background: #263a4f;
}
.dark_menu .navbar.navbar-expand-lg {
  background: #263a4f !important;
  padding: 45px 75px 37px 75px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
.header_menu_area.is_sticky {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  width: 100%;
  -webkit-animation: 0.95s ease-in-out 0s normal none 1 running fadeInDown;
  animation: 0.95s ease-in-out 0s normal none 1 running fadeInDown;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
}
.dark_menu .navbar.navbar-expand-lg .navbar-brand {
  padding-top: 0px;
}
.dark_menu .navbar.navbar-expand-lg .nav.navbar-nav li a {
  color: #fff;
}
.dark_menu .navbar.navbar-expand-lg .nav.navbar-nav li:hover a,
.dark_menu .navbar.navbar-expand-lg .nav.navbar-nav li.active a {
  color: #a3cc01;
}
.fix-main-logo {
  width: 130px;
  height: 30px;
  transform: translateY(-55px);
}
.fix-main-logo img {
  max-width: 100%;
  height: auto;
}
</style>
