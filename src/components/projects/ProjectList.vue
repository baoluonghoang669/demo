<template>
  <div class="projects_inner">
    <div
      v-for="project in projects"
      :key="project.id"
      class="projects_column arc urban"
    >
      <architect-project-item>
        <img class="img-fluid" :src="project.photo" alt="" />
        <div class="hover">
          <architect-button link :path="'/project/' + project.id"
            ><i class="ion-android-arrow-forward"></i
          ></architect-button>
          <div class="project_text">
            <architect-button link :path="'/project/' + project.id"
              ><h4>{{ project.name }}</h4></architect-button
            >
            <h4 v-if="project.averageRating > 0">
              Rating: {{ project.averageRating }}
            </h4>
          </div>
        </div>
      </architect-project-item>
    </div>
  </div>
</template>
<script>
import ArchitectButton from "../common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  created() {
    this.fetchProjects();
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getProjects"];
    },
    checkProjects() {
      return this.$store.getters["projects/checkProjects"];
    },
  },
  methods: {
    async fetchProjects() {
      try {
        await this.$store.dispatch("projects/fetchListProjects");
      } catch (error) {
        this.err = error || "Fail to fetch";
      }
    },
  },
};
</script>
<style scoped></style>
