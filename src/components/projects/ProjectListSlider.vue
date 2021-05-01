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
      <el-carousel :interval="4000" type="card" height="570px">
        <el-carousel-item v-for="project in projects" :key="project.id">
          <architect-project-item class="medium">
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
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import TypeFilter from "../typeProjects/TypeFilter.vue";

export default {
  components: {
    TypeFilter,
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
  width: 100%;
  height: 570px !important;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__indicators--outside {
  display: none;
}
</style>
