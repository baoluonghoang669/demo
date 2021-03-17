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
export default {};
</script>
<style></style>
