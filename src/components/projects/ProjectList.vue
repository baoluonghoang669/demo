<template>
  <div>
    <h4 class="container">{{ $t("type-home") }} : {{ projects.length }}</h4>
    <card-search-form class="container">
      <search-form
        :inputs="searchFormData.inputs"
        :handleSearch="handleSearch"
        :handleClear="handleClear"
      >
      </search-form>
    </card-search-form>
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
      formSearch: {},
      total: 0,
    };
  },
  created() {
    this.fetchProjects();
  },
  computed: {
    searchFormData: function() {
      return {
        inputs: [
          {
            inputType: "input",
            label: "Name",
            name: "name",
            attributes: { clearable: true },
            trim: true,
          },
          {
            inputType: "input",
            label: "Description",
            name: "description",
            attributes: { clearable: true },
            trim: true,
          },
          {
            inputType: "input",
            label: "Cost",
            name: "cost",
            attributes: { clearable: true, filterable: true },
            trim: true,
          },
          // {
          //   inputType: "input",
          //   label: "Categories",
          //   name: "categories",
          //   attributes: { clearable: true },
          //   trim: true,
          // },
          {
            inputType: "input",
            label: "Address",
            name: "address",
            attributes: { clearable: true },
            trim: true,
          },
          {
            inputType: "input",
            label: "Area",
            name: "area",
            attributes: { clearable: true },
            trim: true,
          },
          {},
        ],
      };
    },
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
  async mounted() {
    await this.eventRefresh();
  },
  methods: {
    async eventRefresh(page) {
      this.loading = true;
      await this.$store.dispatch("projects/index", {
        page: page || 1,
        ...this.formSearch,
      });
      this.total = this.projects.totalCount;
      this.loading = false;
    },
    async handleSearch(form, refs) {
      this.formSearch = form;
      await this.eventRefresh();
      refs.validate((valid) => {
        console.log(valid);
      });
    },
    async handleClear(form, refs) {
      await this.$store.dispatch("projects/index", { page: 1 });
      refs.resetFields();
      this.total = this.projects.totalCount;
    },
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
