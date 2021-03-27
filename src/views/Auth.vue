<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="animate">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>
<style scoped></style>
