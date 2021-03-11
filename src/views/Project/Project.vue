<template>
  <div>
    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_link">
      <div class="container">
        <p>Welcome to</p>
      </div>
    </section>
    <!--================End Breadcrumb Area =================-->

    <!--================Our Projects Area =================-->
    <section class="our_projects_area">
      <div class="container">
        <div class="projects_tt">
          <div class="float-md-left">
            <div class="main_title white">
              <h2>our projects</h2>
            </div>
          </div>
          <type-filter></type-filter>
        </div>
      </div>
      <project-list></project-list>
    </section>
  </div>
</template>
<script>
import ProjectList from "../../components/projects/ProjectList.vue";
import TypeFilter from '../../components/typeProjects/TypeFilter.vue';
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
