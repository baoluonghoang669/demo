<template>
  <div>
    <!--================Breadcrumb Area =================-->
    <section class="breadcrumb_link">
      <div class="container">
        <a href="#">Home</a>
        <a class="active" href="#">projects</a>
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
          <div class="float-md-right">
            <ul class="isotope_fillter list">
              <li class="active" data-filter="*"><a href="#">All</a></li>
              <li data-filter=".arc"><a href="#">Architecture</a></li>
              <li data-filter=".inter"><a href="#">Interior</a></li>
              <li data-filter=".urban"><a href="#">Urban Design</a></li>
            </ul>
          </div>
        </div>
      </div>
      <project-list></project-list>
    </section>
  </div>
</template>
<script>
import ProjectList from '../components/projects/ProjectList.vue';
export default {
  components: { ProjectList },};
</script>

<style scoped></style>
