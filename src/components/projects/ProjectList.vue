<template>
  <div>
    <h4 class="container">{{ $t("type-home") }} : {{ projects.length }}</h4>
    <architect-input-search class="fix-search-projects">
      <input
        type="text"
        v-model="search"
        class="form-control"
        placeholder="Search by name..."
      />
    </architect-input-search>
    <div class="projects_inner">
      <div
        v-for="project in researchProjects"
        :key="project.id"
        class="projects_column arc urban"
      >
        <architect-project-item>
          <img class="img-fluid fix-img-fluid" :src="project.photo" alt="" />
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
  </div>
</template>
<script>
import ArchitectButton from "../common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  data() {
    return {
      search: "",
    };
  },
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
    researchProjects() {
      if (this.search) {
        return this.projects.filter((project) => {
          return project.name.startsWith(this.search);
        });
      } else {
        return this.projects;
      }
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
<style scoped>
.fix-img-fluid {
  height: 470px !important;
}
.fix-search-projects {
  width: 28% !important;
}
</style>
