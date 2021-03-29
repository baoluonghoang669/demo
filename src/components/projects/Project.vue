<template>
  <div>
    <section class="breadcrumb_link">
      <div class="container">
        <p>{{ $t("Welcome to") }}</p>
      </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================Our Projects Area =================-->
    <section class="our_projects_area">
      <div class="container">
        <div class="projects_tt">
          <div class="float-md-left">
            <div class="main_title white">
              <h2>{{ $t("menu.project") }}</h2>
            </div>
          </div>
          <type-filter></type-filter>
        </div>
      </div>
      <project-list></project-list>
    </section>
    <architect-advertise-label class="container"></architect-advertise-label>
  </div>
</template>
<script>
import TypeFilter from "../typeProjects/TypeFilter.vue";
import ProjectList from "./ProjectList.vue";
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
