<template>
  <div class="fillter_slider owl-carousel">
    <carousel :items-to-show="4" :wrapAround="true" :transition="1000">
      <slide v-for="slide in 5" :key="slide">
        <div
          v-for="project in projects"
          :key="project.id"
          class="item arc urban"
        >
          <architect-project-item>
            <img :src="project.photo" alt="" />
            <div class="hover">
              <architect-button link :path="'/project/' + project.id"
                ><i class="ion-android-arrow-forward"></i
              ></architect-button>
              <div class="project_text">
                <architect-button link :path="'/project/' + project.id"
                  ><h4>{{ project.name }}</h4></architect-button
                >
                <h4>Rating: {{ project.averageRating }}</h4>
              </div>
            </div>
          </architect-project-item>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  data() {
    return {
      err: null,
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
