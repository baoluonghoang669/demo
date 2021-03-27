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
@import "../../../public/css/dashboard/paper-dashboard.css";
@import "../../../public/css/dashboard/bootstrap.min.css";

.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
}

.sidebar,
.sidebar-wrapper {
  background-color: #263a4f !important;
}

.sidebar:after {
  background-color: #263a4f !important;
}

.sidebar .sidebar-wrapper {
  width: 259px;
}

.nav li a {
  color: #fff;
}

.fa-edit {
  color: #a3cc01;
  margin: 0 2px;
  cursor: pointer;
}
.fa-trash-alt {
  color: red;
  cursor: pointer;
}

.btn-primary {
  background-color: #263a4f !important;
  width: 200px;
  margin: 0 15px;
  border: none;
}

.btn-primary:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}

th {
  color: #263a4f;
}

td,
th {
  text-align: center;
}
</style>
