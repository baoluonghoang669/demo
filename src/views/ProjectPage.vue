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
import ProjectList from "../components/projects/ProjectList.vue";
import TypeFilter from "../components/typeProjects/TypeFilter.vue";
export default {
  components: { ProjectList, TypeFilter },
};
</script>

<style scoped>
p {
  color: #263a4f;
  font-weight: 500;
}
</style>
