<template>
  <div>
    <div class="container">
      <div class="l_text">
        <div class="float-md-left">
          <div class="main_title white">
            <h2>{{ $t("our-project") }}</h2>
          </div>
        </div>
        <type-filter></type-filter>
      </div>
    </div>
    <div class="fillter_slider owl-carousel">
      <carousel :items-to-show="4" :transition="500">
        <slide v-for="slide in 12" :key="slide">
          <div
            v-for="project in projects"
            :key="project.id"
            class="item arc urban"
          >
            <architect-project-item>
              <img class="fix-image-slide" :src="project.photo" alt="" />
              <div class="hover">
                <architect-button link :path="'/project/' + project.id"
                  ><i class="ion-android-arrow-forward"></i
                ></architect-button>
                <div class="project_text">
                  <h5>{{ $t("area") }}: {{ project.area }}m<sup>2</sup></h5>
                  <h5>{{ $t("architect") }}: {{ project.architecture }}</h5>
                  <architect-button link :path="'/project/' + project.id"
                    ><h4>{{ project.name }}</h4></architect-button
                  >
                  <h4 v-if="project.averageRating > 0">
                    {{ $t("rating") }}: {{ project.averageRating }}
                  </h4>
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
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import TypeFilter from "../typeProjects/TypeFilter.vue";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    TypeFilter,
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
<style scoped>
.project_text {
  text-align: left;
}
.fix-image-slide {
  width: 476px !important;
  height: 570px !important;
}
</style>
