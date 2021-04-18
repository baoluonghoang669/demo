<template>
  <div class="layout">
    <the-header v-if="!isDashBoard"></the-header>
    <router-view v-slot="{ Component }">
      <transition name="animate">
        <component :is="Component" />
      </transition>
    </router-view>
    <the-footer v-if="!isDashBoard"></the-footer>
  </div>
</template>

<script>
import TheFooter from "./components/layouts/TheFooter.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter },
  computed: {
    isDashBoard() {
      if (
        this.$route.path === "/" ||
        this.$route.path === "/about" ||
        this.$route.path === "/project" ||
        this.$route.path === "/contact" ||
        this.$route.path === "/auth" ||
        this.$route.path === "/auth/forgotpassword" ||
        this.$route.path === "/profile" ||
        this.$route.path === "/auth/forgotpassword/resetpassword"
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
@import "../public/css/style.css";
@import "../public/css/responsive.css";
@import "../public/css/bootstrap.min.css";
@import "../public/vendors/linear-icon/style.css";
@import "../public/vendors/ionicons/css/ionicons.min.css";
@import "../public/vendors/elegant-icon/style.css";

.fa-undo-alt {
  color: #263a4f;
}
a {
  text-decoration: none;
  cursor: pointer;
}
button {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.clients_slider,
.team_slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.animate-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
.animate-enter-to,
.animate-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.animate-enter-active {
  transition: 0.4s;
  transition-delay: 0.4s;
}
.animate-leave-active {
  transition: 0.4s;
}
.animate-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
