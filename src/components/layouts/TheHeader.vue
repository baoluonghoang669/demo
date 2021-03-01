<template>
  <div>
    <header
      :class="[
        isColor ? 'header_menu_area white_menu' : 'header_menu_area dark_menu',
      ]"
    >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">
          <img src="../../assets/images/logo/logo-white.png" />
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
            <li class="dropdown submenu">
              <router-link
                to="/samples"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >{{ $t("menu.samples") }}</router-link
              >
            </li>
            <li>
              <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
            </li>
          </ul>
          <ul
            class="nav fix-nav
            "
          >
            <li><router-link to="/auth">Account</router-link></li>
            <img
              src="../../assets/images/icons/user-white.png"
              class="fix-img"
              alt="img"
            />
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
    <header class="full_header content-white mobile_menu">
      <div class="float-left">
        <router-link class="logo" to="/"
          ><img src="../../assets/images/logo/logo-white.png" alt=""
        /></router-link>
        <router-link class="phone" to="/"
          ><i class="lnr lnr-phone-handset"></i> (+070) 3689 56 56
          56</router-link
        >
      </div>
      <div class="float-right">
        <div class="bar_menu">
          <i class="lnr lnr-menu"></i>
        </div>
      </div>
    </header>

    <div class="click-capture"></div>
    <div class="side_menu">
      <span class="close-menu lnr lnr-cross right-boxed"></span>
      <div class="menu-lang right-boxed">
        <router-link to="" class="active">Eng</router-link>
        <router-link to="">Fra</router-link>
        <router-link to="">ger</router-link>
      </div>
      <ul class="menu-list right-boxed">
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
          <router-link to="/samples">{{ $t("menu.samples") }}</router-link>
        </li>
        <li>
          <router-link to="/contact">{{ $t("menu.contact") }}</router-link>
        </li>
      </ul>
    </div>
    <!--================End Slider Home Area =================-->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      check: this.$store.getters["auth/getLanguages"] || "us",
    };
  },
  computed: {
    isColor() {
      if (this.$route.path === "/") {
        return true;
      }
      return false;
    },
  },
  methods: {
    handleChange(e) {
      localStorage.setItem("lang", e.target.value);
      this.$i18n.locale = e.target.value;
      this.$store.commit("auth/setLanguages", e.target.value);
    },
  },
};
</script>
<style scoped>
.vuei18n {
  border-radius: 5%;
}

.flag-icon-us.flag-icon-squared {
  background-position: center;
  background-size: cover;
  position: center;
}

.flag-icon.flag-icon-squared {
  width: 1.5em;
  border-radius: 50%;
  height: 1.5rem;
  transform: translate(-6px, -5px);
}

.fix-nav {
  flex-wrap: nowrap;
  margin-right: 40px;
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
  margin-left: 12.7%;
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

.header_menu_area.navbar_fixed {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  background: #1b1b1b;
  -webkit-transform: translateY(70px);
  -ms-transform: translateY(70px);
  transform: translateY(70px);
  -webkit-transition: background 500ms ease, -webkit-transform 500ms ease;
  transition: background 500ms ease, -webkit-transform 500ms ease;
  -o-transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease,
    -webkit-transform 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 99999;
}

.header_menu_area.navbar_fixed .navbar.navbar-expand-lg {
  padding-top: 0px;
}

.header_menu_area.navbar_fixed .navbar.navbar-expand-lg .nav.navbar-nav li a {
  line-height: 70px;
  -webkit-transition: color all 400ms ease;
  -o-transition: color all 400ms ease;
  transition: color all 400ms ease;
}

@media (min-width: 992px) {
  .header_menu_area.navbar_fixed
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li.submenu
    .dropdown-menu {
    top: 55px;
    -webkit-transition: all 400ms ease-out;
    -o-transition: all 400ms ease-out;
    transition: all 400ms ease-out;
    opacity: 0;
    visibility: hidden;
  }
}

@media (min-width: 992px) {
  .header_menu_area.navbar_fixed
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li:hover.submenu
    .dropdown-menu {
    visibility: visible;
    top: 70px;
    opacity: 1;
  }
}

.header_menu_area.navbar_fixed
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li:hover
  a {
  color: #a3cc01;
}

.header_menu_area.white_menu.navbar_fixed {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  background: #fff;
  -webkit-transform: translateY(70px);
  -ms-transform: translateY(70px);
  transform: translateY(70px);
  -webkit-transition: background 500ms ease, -webkit-transform 500ms ease;
  transition: background 500ms ease, -webkit-transform 500ms ease;
  -o-transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease,
    -webkit-transform 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 99999;
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
  background: transparent !important;
  padding: 48px 75px 37px 75px;
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

@media (min-width: 992px) {
  .dark_menu
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li.submenu
    .dropdown-menu {
    top: 80%;
  }
}

@media (min-width: 992px) {
  .dark_menu
    .navbar.navbar-expand-lg
    .nav.navbar-nav
    li:hover.submenu
    .dropdown-menu {
    visibility: visible;
    top: 100%;
    opacity: 1;
  }
}

.dark_menu .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li a {
  color: #8d9aa8;
}

.dark_menu .navbar.navbar-expand-lg .nav.navbar-nav.navbar-right li.active a {
  color: #263a4f;
}

.dark_menu.navbar_fixed {
  position: fixed;
  width: 100%;
  top: -70px;
  left: 0;
  right: 0;
  background: #fff;
  -webkit-transform: translateY(70px);
  -ms-transform: translateY(70px);
  transform: translateY(70px);
  -webkit-transition: background 500ms ease, -webkit-transform 500ms ease;
  transition: background 500ms ease, -webkit-transform 500ms ease;
  -o-transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease;
  transition: transform 500ms ease, background 500ms ease,
    -webkit-transform 500ms ease;
  -webkit-transition: transform 500ms ease, background 500ms ease;
  -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  z-index: 99999;
}

.dark_menu.navbar_fixed .navbar.navbar-expand-lg .nav.navbar-nav li a {
  line-height: 70px;
  color: #263a4f;
  -webkit-transition: color all 400ms ease;
  -o-transition: color all 400ms ease;
  transition: color all 400ms ease;
}

.dark_menu.navbar_fixed .navbar.navbar-expand-lg .nav.navbar-nav li.active a,
.header_menu_area .navbar.navbar-expand-lg .nav.navbar-nav li a:hover {
  color: #a3cc01;
}

.menu_gap + section,
.menu_gap + div {
  padding-top: 88px;
}

/* End Home Full Menu css
============================================================================================ */
/* End Home Full Menu css
============================================================================================ */
.full_header {
  position: absolute;
  left: 0px;
  width: 100%;
  top: 0px;
  z-index: 10;
  padding: 36px 50px;
  display: flex;
  justify-content: space-between;
}

.full_header:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
  width: 100%;
  height: 100%;
  background: #eaedee;
  z-index: -1;
  -webkit-transition: all 0.3s cubic-bezier(0.37, 0.31, 0.2, 0.85);
  -o-transition: all 0.3s cubic-bezier(0.37, 0.31, 0.2, 0.85);
  transition: all 0.3s cubic-bezier(0.37, 0.31, 0.2, 0.85);
}

.full_header .float-left {
  line-height: 40px;
  max-width: 600px;
  width: 100%;
}

.full_header .float-left .logo img {
  display: none;
}

.full_header .float-left .logo img + img {
  display: inline-block;
}

.full_header .float-left .phone {
  color: #263a4f;
  font-size: 14px;
  font-weight: normal;
  font-family: "Heebo", sans-serif;
  margin-left: 42%;
}

.full_header .float-right .bar_menu {
  height: 40px;
  width: 40px;
  background: #263a4f;
  text-align: center;
  cursor: pointer;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.full_header .float-right .bar_menu i {
  color: #fff;
  font-size: 20px;
  line-height: 38px;
  display: inline-block;
}

.full_header .float-right .bar_menu:hover {
  background: #a3cc01;
}

.full_header.content-white:before {
  height: 0px;
}

.full_header.content-white .float-left .logo img {
  display: inline-block;
}

.full_header.content-white .float-left .logo img + img {
  display: none;
}

.full_header.content-white .float-left .phone {
  color: #fff;
}

.side_menu {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 545px;
  z-index: 9999;
  background-color: #fff;
  -webkit-transform: translateX(100%);
  -ms-transform: translateX(100%);
  transform: translateX(100%);
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
}

.side_menu .close-menu {
  position: absolute;
  z-index: 2;
  right: 90px;
  top: 75px;
  font-size: 20px;
  cursor: pointer;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
  height: 40px;
  width: 40px;
  background: #263a4f;
  color: #fff;
  text-align: center;
  line-height: 40px;
}

.side_menu .close-menu:hover {
  background: #a3cc01;
}

.side_menu .menu-lang {
  position: absolute;
  opacity: 0;
  left: 18%;
  top: 15%;
  text-transform: uppercase;
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
  -webkit-transition: opacity 0.5s 0.4s ease, color 0.3s ease,
    -webkit-transform 0.5s 0.4s ease;
  transition: opacity 0.5s 0.4s ease, color 0.3s ease,
    -webkit-transform 0.5s 0.4s ease;
  -o-transition: transform 0.5s 0.4s ease, opacity 0.5s 0.4s ease,
    color 0.3s ease;
  transition: transform 0.5s 0.4s ease, opacity 0.5s 0.4s ease, color 0.3s ease;
  transition: transform 0.5s 0.4s ease, opacity 0.5s 0.4s ease, color 0.3s ease,
    -webkit-transform 0.5s 0.4s ease;
}

.side_menu .menu-lang a {
  color: #999999;
  font-weight: 500;
  font-size: 14px;
  margin-right: 25px;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.side_menu .menu-lang a:last-child {
  margin-right: 0px;
}

.side_menu .menu-lang a:hover,
.side_menu .menu-lang a.active {
  color: #a3cc01;
}

.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li:hover
  a,
.header_menu_area
  .navbar.navbar-expand-lg
  .nav.navbar-nav
  li.submenu
  .dropdown-menu
  li.active
  a {
  color: #fff;
  background: #a3cc01;
}

.side_menu .menu-list {
  position: absolute;
  left: 0px;
  top: 20vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 40vh;
  -webkit-overflow-scrolling: touch;
  font-weight: 600;
  width: 100%;
  display: block;
  letter-spacing: -0.025rem;
  list-style: none;
  margin: 0;
  -webkit-transform: translateY(3rem);
  -ms-transform: translateY(3rem);
  transform: translateY(3rem);
  -webkit-transition: opacity 0.5s 0.6s ease, -webkit-transform 0.5s 0.6s ease;
  transition: opacity 0.5s 0.6s ease, -webkit-transform 0.5s 0.6s ease;
  -o-transition: transform 0.5s 0.6s ease, opacity 0.5s 0.6s ease;
  transition: transform 0.5s 0.6s ease, opacity 0.5s 0.6s ease;
  transition: transform 0.5s 0.6s ease, opacity 0.5s 0.6s ease,
    -webkit-transform 0.5s 0.6s ease;
  list-style: none;
  opacity: 0;
  padding-left: 18%;
  padding-right: 100px;
  margin-top: 5vh;
}

.side_menu .menu-list li {
  margin-top: 2vh;
}

.side_menu .menu-list li a {
  font-size: 2.5vh;
  font-weight: normal;
  font-family: "Heebo", sans-serif;
  color: red;
  letter-spacing: 0.36px;
  display: block;
  position: relative;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.side_menu .menu-list li a.router-link-exact-active {
  color: #a3cc01;
}

.side_menu .menu-list li a i {
  font-size: 2.5vh;
  color: #000;
  float: right;
  font-weight: normal;
  position: absolute;
  right: 0px;
  top: 2.5px;
  -webkit-transition: all 300ms linear;
  -o-transition: all 300ms linear;
  transition: all 300ms linear;
}

.side_menu .menu-list li a.open i {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.side_menu .menu-list li ul {
  display: none;
}

.side_menu .menu-list li ul li {
  margin-top: 1vh;
}

.side_menu .menu-list li ul li a {
  font-size: 1.5vh;
  color: #8d9aa8;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
}

.side_menu .menu-list li ul li:first-child {
  margin-top: 15px;
}

.side_menu .menu-list li ul li:hover a {
  color: #263a4f;
}

.side_menu .menu-list li:first-child {
  margin-top: 0vh;
}

.side_menu .menu-list li.open a i {
  -webkit-transform: rotate(178deg);
  -ms-transform: rotate(178deg);
  transform: rotate(178deg);
}

.side_menu .menu-list li:hover > a,
.side_menu .menu-list li.active > a {
  color: #a3cc01;
}

.side_menu .menu-list li:hover > a i,
.side_menu .menu-list li.active > a i {
  color: #a3cc01;
}

.side_menu .menu-footer {
  position: absolute;
  left: 18%;
  bottom: 10%;
}

.side_menu .menu-footer .social-list {
  -webkit-transition: all 0.5s 0.7s ease;
  -o-transition: all 0.5s 0.7s ease;
  transition: all 0.5s 0.7s ease;
  opacity: 0;
  -webkit-transform: translateY(3rem);
  -ms-transform: translateY(3rem);
  transform: translateY(3rem);
}

.side_menu .menu-footer .social-list a {
  font-size: 22px;
  color: #263a4f;
  margin-right: 25px;
  -webkit-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
}

.side_menu .menu-footer .social-list a:last-child {
  margin-right: 0px;
}

.side_menu .menu-footer .social-list a:hover {
  color: #a3cc01;
}

.side_menu .copy {
  margin-top: 40px;
  color: #263a4f;
  line-height: 1.71rem;
  -webkit-transform: translateY(2rem);
  -ms-transform: translateY(2rem);
  transform: translateY(2rem);
  -webkit-transition: all 0.5s 0.9s ease;
  -o-transition: all 0.5s 0.9s ease;
  transition: all 0.5s 0.9s ease;
  opacity: 0;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
}

.side_menu.dark_s_menu {
  background: #1b1b1b;
}

.side_menu.dark_s_menu .menu-list li a {
  color: #999999;
}

.side_menu.dark_s_menu .menu-list li a i {
  color: #999999;
}

.side_menu.dark_s_menu .menu-list li ul li a {
  color: #999999;
}

.side_menu.dark_s_menu .menu-list li ul li:hover a {
  color: #a3cc01;
}

.side_menu.dark_s_menu .menu-list li:hover > a,
.side_menu.dark_s_menu .menu-list li.active > a {
  color: #a3cc01;
}

.side_menu.dark_s_menu .menu-list li:hover > a i,
.side_menu.dark_s_menu .menu-list li.active > a i {
  color: #a3cc01;
}

.side_menu.dark_s_menu .menu-footer .social-list a {
  color: #999999;
}

.side_menu.dark_s_menu .menu-footer .social-list a:hover {
  color: #a3cc01;
}

.side_menu.dark_s_menu .copy {
  color: #fff;
}

.click-capture {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 99;
}

.menu-is-opened .side_menu {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-box-shadow: 0 0 65px rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 65px rgba(0, 0, 0, 0.07);
}

.menu-is-opened .side_menu .menu-list {
  -webkit-transform: translate(0);
  -ms-transform: translate(0);
  transform: translate(0);
  opacity: 1;
}

.menu-is-opened .side_menu .menu-footer .social-list {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.menu-is-opened .side_menu .menu-footer .copy {
  opacity: 1;
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
}

.menu-is-opened .click-capture {
  visibility: visible;
}

.menu-is-opened .menu-lang {
  -webkit-transform: translate(0);
  -ms-transform: translate(0);
  transform: translate(0);
  opacity: 1;
}

.menu-is-opened .close-menu {
  opacity: 1;
}

@media (min-width: 992px) {
  .full_header.mobile_menu {
    display: none;
  }
}

@media (max-width: 991px) {
  .full_header.mobile_menu.navbar_fixed {
    position: fixed;
    width: 100%;
    top: -70px;
    left: 0;
    right: 0;
    background: #fff;
    -webkit-transform: translateY(70px);
    -ms-transform: translateY(70px);
    transform: translateY(70px);
    -webkit-transition: background 500ms ease, -webkit-transform 500ms ease;
    transition: background 500ms ease, -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
    -webkit-transition: transform 500ms ease, background 500ms ease;
    -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
    z-index: 99;
  }
  .full_header.mobile_menu.navbar_fixed .float-left .logo img {
    display: none;
  }
  .full_header.mobile_menu.navbar_fixed .float-left .logo img + img {
    display: inline-block;
  }
  .full_header.mobile_menu.ab_mobile_menu:before {
    display: none;
  }
  .full_header.mobile_menu.ab_mobile_menu .float-left .logo img {
    display: none;
  }
  .full_header.mobile_menu.ab_mobile_menu .float-left .logo img + img {
    display: inline-block;
  }
  .full_header.dark_menu.mobile_menu:before {
    display: none;
  }
  .full_header.dark_menu.mobile_menu .float-left .logo img {
    display: inline-block;
  }
  .full_header.dark_menu.mobile_menu .float-left .logo img + img {
    display: none;
  }
  .full_header.dark_menu.mobile_menu.navbar_fixed {
    position: fixed;
    width: 100%;
    top: -70px;
    left: 0;
    right: 0;
    background: #1b1b1b;
    -webkit-transform: translateY(70px);
    -ms-transform: translateY(70px);
    transform: translateY(70px);
    -webkit-transition: background 500ms ease, -webkit-transform 500ms ease;
    transition: background 500ms ease, -webkit-transform 500ms ease;
    -o-transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease;
    transition: transform 500ms ease, background 500ms ease,
      -webkit-transform 500ms ease;
    -webkit-transition: transform 500ms ease, background 500ms ease;
    -webkit-box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
    z-index: 99;
  }
  .full_header.dark_menu.mobile_menu.navbar_fixed .float-left .logo img {
    display: inline-block;
  }
  .full_header.dark_menu.mobile_menu.navbar_fixed .float-left .logo img + img {
    display: none;
  }
}
</style>
