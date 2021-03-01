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
.clients_slider,
.team_slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.moveUp-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.moveUp-leave-to {
  opacity: 0;
  transform: translateY(10px);
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
  transform: translateY(0);
}
</style>
