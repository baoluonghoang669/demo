<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">All Categories</h4>
          </div>
          <router-link
            :to="{ name: 'CategoryAdd' }"
            type="button"
            class="btn btn-primary"
          >
            Add Category
          </router-link>
          <card-search-form>
            <search-form
              :inputs="searchFormData.inputs"
              :handleSearch="handleSearch"
              :handleClear="handleClear"
            >
            </search-form>
          </card-search-form>
          <div class="related-btn">
            <button
              type="button"
              class="btn btn-success"
              @click="onExportExcels"
            >
              Export Excel
            </button>
          </div>
          <div class="card-body">
            <div v-if="loading"><architect-loading></architect-loading></div>
            <div class="table-responsive" v-else-if="!loading && categories">
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th>
                    Name
                  </th>
                  <th>
                    Logo Image
                  </th>
                  <th>
                    Description
                    <i
                      class="fa fa-fw fa-sort"
                      @click="sortCategories(description)"
                    ></i>
                  </th>
                  <th style="width: 160px;">
                    Related Projects
                  </th>
                  <th>
                    Edit
                  </th>
                </thead>
                <tbody
                  v-for="category in researchCategories"
                  :key="category.id"
                >
                  <tr>
                    <td>
                      {{ category.name }}
                    </td>
                    <td>
                      <img :src="category.image" :alt="category.name" />
                    </td>
                    <td>
                      {{ category.description }}
                    </td>
                    <td v-if="category.projects">
                      {{ category.projects.length }}
                    </td>
                    <td v-else>
                      No projects
                    </td>
                    <td style="width: 80px">
                      <architect-button
                        link
                        :path="
                          '/dashboard/categories/editCategory/' + category._id
                        "
                        class="edit-btn"
                        ><i class="far fa-edit"></i
                      ></architect-button>
                      <i
                        class="far fa-trash-alt"
                        @click="onDelete(category._id)"
                      ></i>
                      <i
                        class="fas fa-file-export"
                        @click="onExport(category._id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>There is no categories !</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      search: "",
      file: "",
      formSearch: {},
      total: 0,
    };
  },
  created() {
    this.fetchCategories();
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
        ],
      };
    },
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
    researchCategories() {
      if (this.search) {
        return this.categories.filter((category) => {
          return category.name.startsWith(this.search);
        });
      } else {
        return this.categories;
      }
    },
  },
  async mounted() {
    await this.eventRefresh();
  },
  methods: {
    async eventRefresh(page) {
      this.loading = true;
      await this.$store.dispatch("categories/index", {
        page: page || 1,
        ...this.formSearch,
      });
      this.total = this.categories.totalCount;
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
      await this.$store.dispatch("categories/index", { page: 1 });
      refs.resetFields();
      this.total = this.categories.totalCount;
    },
    async onDelete(id) {
      try {
        await this.$store.dispatch("categories/onDeleteCategory", id);
      } catch (error) {
        this.err = error;
      }
    },
    async sortCategories(name) {
      try {
        await this.$store.dispatch("categories/sortCategories", name);
      } catch (error) {
        this.err = error;
      }
    },
    async fetchCategories() {
      this.loading = true;
      try {
        await this.$store
          .dispatch("categories/fetchAllCategories")
          .then(() => (this.loading = false));
      } catch (error) {
        this.loading = false;
      }
    },
    async onExport(id) {
      try {
        await this.$store.dispatch("categories/getExcelFileById", id);
      } catch (error) {
        this.err = error || this.$t("fail");
      }
    },
    async onExportExcels() {
      try {
        await this.$store.dispatch("categories/getExcelFiles");
      } catch (error) {
        this.err = error || this.$t("fail");
      }
    },
  },
};
</script>
<style scoped>
.fa {
  cursor: pointer;
}

.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
}

.fa-trash-alt:hover {
  transform: scale(0.9);
}

.edit-btn {
  float: left;
}

.edit-btn:hover {
  transform: scale(0.9);
}

.fa:hover,
.fas:hover,
.far:hover {
  transform: scale(0.9);
}

.fa-file-export {
  color: rgb(39, 131, 198);
  margin-left: 7px;
  cursor: pointer;
}

.related-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.btn-success:hover {
  border-color: #28a745;
}
.btn-info {
  background-color: #409eff;
}
.btn {
  font-size: 12px;
}
</style>
