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
    <div v-if="!projects || projects.length < 0">
      <architect-loading></architect-loading>
    </div>
    <div class="projects_inner infinite-list-wrapper" style="overflow:auto">
      <div
        v-for="project in projects"
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
export default {
  components: {},
  data() {
    return {
      search: "",
      formSearch: {},
      total: 0,
      categories: null,
      loading: false,
    };
  },
  // created() {
  //   this.fetchProjects();
  // },
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
          {
            inputType: "select",
            label: "Categories",
            name: "categoriesName",
            attributes: { clearable: true },
            trim: true,
            optionValueField: "value",
            optionLabelField: "label",
            optionList: this.categories,
          },
          {
            inputType: "input",
            label: "Area",
            name: "area",
            attributes: { clearable: true },
            trim: true,
          },
        ],
      };
    },
    projects() {
      return this.$store.getters["projects/getProjects"];
    },
    checkProjects() {
      return this.$store.getters["projects/checkProjects"];
    },
  },
  async mounted() {
    await this.fetchProjects();
    await this.fetchCategories();
    await this.eventRefresh();
  },
  methods: {
    async fetchCategories() {
      const res = await this.$store.dispatch("categories/fetchListCategories");
      this.categories = res.map((item) => ({
        label: item.name,
        value: item.name,
      }));
    },
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
      this.loading = true;
      try {
        await this.$store.dispatch("projects/fetchListProjects");
      } catch (error) {
        this.err = error || "Fail to fetch";
      }
      this.loading = false;
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
