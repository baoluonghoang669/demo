<template>
  <div class="related_post">
    <h4>Related Projects</h4>
    <div class="row">
      <div class="blog_g_item" v-for="project in projects" :key="project.id">
        <div class="press_img_item">
          <div class="press_img">
            <architect-button
              link
              :path="'/project/' + project.id + '/projectDetail/' + id"
              ><img class="img-fluid" :src="project.photo" alt=""
            /></architect-button>
          </div>
          <div class="date">
            <architect-button
              link
              :path="'/project/' + project.id + '/projectDetail/' + id"
              ><h4>{{ project.name }}</h4></architect-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  created() {
    this.fetchProjectsForCategory();
  },
  props: ["category", "id"],
  computed: {
    projects() {
      return this.$store.getters["projects/getProjects"];
    },
  },
  methods: {
    async fetchProjectsForCategory() {
      try {
        await this.$store.dispatch(
          "projects/fetchProjectsForCategory",
          this.category
        );
      } catch (error) {
        this.err = error || "Fail to fetch";
      }
    },
  },
};
</script>
<style scoped>
.row {
  justify-content: space-between;
}

.img-fluid {
  cursor: pointer;
}
</style>
