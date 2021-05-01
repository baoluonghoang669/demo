<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">All Projects</h4>
          </div>
          <router-link
            :to="{ name: 'ProjectAdd' }"
            type="button"
            class="btn btn-primary"
          >
            Add Project
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
            <b class="fix-quantity">Quantity: {{ projects.length }}</b>
            <label class="fix-flex"
              >Excel File:
              <input
                type="file"
                id="file"
                ref="file"
                v-on:change="handleFileUpload()"
              />
            </label>
            <button type="button" class="btn btn-info" @click="onImportExcels">
              Import Excel
            </button>
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
            <div
              class="table-responsive"
              v-else-if="projects && projects.length > 0"
            >
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th class="th-name">
                    Name
                  </th>
                  <th>
                    Image
                  </th>
                  <th>
                    Description
                  </th>
                  <th>
                    Categories
                  </th>
                  <th>
                    Architecture
                  </th>
                  <th>
                    Client
                  </th>
                  <th>
                    Cost
                  </th>
                  <th>
                    Area
                  </th>

                  <th>
                    Actions
                  </th>
                </thead>
                <tbody v-for="project in projects" :key="project.id">
                  <tr>
                    <td v-if="project">
                      {{ project.name }}
                    </td>
                    <td v-if="project">
                      <img
                        class="fix-size-img"
                        :src="project.photo"
                        alt="img"
                      />
                    </td>
                    <td v-if="project">
                      {{ project.description }}
                    </td>
                    <td v-if="project.categories">
                      {{ project.categories.name }}
                    </td>
                    <td v-else>
                      No category
                    </td>
                    <td>
                      {{ project.architecture }}
                    </td>
                    <td>
                      {{ project.client }}
                    </td>
                    <td>{{ project.cost }} vnd</td>
                    <td>{{ project.area }} m<sup>2</sup></td>
                    <td style="width: 80px">
                      <architect-button
                        link
                        :path="'/dashboard/projects/editProject/' + project._id"
                        class="edit-btn"
                        ><i class="far fa-edit"></i
                      ></architect-button>
                      <el-popconfirm
                        title="Are you sure to delete this project?"
                        @confirm="onConfirm(project._id)"
                      >
                        <template #reference>
                          <i class="far fa-trash-alt"></i>
                        </template>
                      </el-popconfirm>
                      <i
                        class="fas fa-file-export"
                        @click="onExport(project._id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>There is no projects !</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArchitectButton from "../../../components/common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  data() {
    return {
      loading: false,
      error: null,
      file: "",
      formSearch: {},
      total: 0,
      categories: null,
    };
  },
  created() {
    this.fetchListProjects();
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
  },
  async mounted() {
    await this.eventRefresh();
    await this.fetchCategories();
  },
  methods: {
    async onConfirm(id) {
      await this.onDelete(id);
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
    async fetchCategories() {
      const res = await this.$store.dispatch("categories/fetchListCategories");
      this.categories = res.map((item) => ({
        label: item.name,
        value: item.name,
      }));
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
    async onDelete(id) {
      try {
        await this.$store.dispatch("projects/onDeleteProject", id);
      } catch (error) {
        this.err = error;
      }
    },
    async fetchListProjects() {
      this.loading = true;
      try {
        await this.$store.dispatch("projects/fetchListProjects");
      } catch (err) {
        this.error = err;
      }
      this.loading = false;
    },
    async onExport(id) {
      try {
        await this.$store.dispatch("projects/getExcelFileById", id);
      } catch (error) {
        this.err = error || this.$t("fail");
      }
    },
    async onExportExcels() {
      try {
        await this.$store.dispatch("projects/getExcelFiles");
      } catch (error) {
        this.err = error || this.$t("fail");
      }
    },
    async onImportExcels() {
      if (this.file === "") {
        alert("Please import a excel file");
        return;
      }
      window.location.reload();
      let formData = new FormData();
      formData.append("file", this.file);
      try {
        await this.$store.dispatch("projects/importExcels", formData);
      } catch (error) {
        this.err = error || this.$t("fail");
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>
<style scoped>
.fix-flex {
  display: flex;
  align-items: center;
}
.fa {
  cursor: pointer;
}
.th-name {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: none;
}
.flex-edit {
  padding: 12px 7px;
  vertical-align: middle;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fa-undo-alt {
  position: absolute;
  right: 3%;
  top: 4%;
}

.fa-undo-alt:hover {
  color: #a3cc01;
}

.fix-size-img {
  width: 100px;
  height: 100px;
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

.edit-btn:hover {
  transform: scale(0.9);
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
