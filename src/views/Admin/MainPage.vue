<template>
  <div class="wrapper">
    <the-sidebar></the-sidebar>
    <div class="main-panel">
      <the-navbar></the-navbar>
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="animate">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import TheNavbar from "../../components/layouts/Admin/TheNavbar.vue";
import TheSidebar from "../../components/layouts/Admin/TheSidebar.vue";
export default {
  components: { TheSidebar, TheNavbar },
};
</script>
TheNavbar
<style>
.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
}

</style>
