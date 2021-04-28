<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">All Users</h4>
          </div>
          <router-link
            :to="{ name: 'UserAdd' }"
            type="button"
            class="btn btn-primary"
          >
            Add User
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
            <b class="fix-quantity">Quantity: {{ users.length }}</b>
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
              v-else-if="!loading && users && users.length > 0"
            >
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th>
                    Name
                  </th>
                  <th>
                    Email
                  </th>
                  <th>
                    Address
                  </th>
                  <th>
                    Birthday
                  </th>
                  <th>
                    Phone
                  </th>
                  <th>
                    City
                  </th>
                  <th>
                    Province
                  </th>
                  <th>
                    Role
                  </th>
                  <th>
                    Edit
                  </th>
                </thead>
                <tbody v-for="user in users" :key="user.id">
                  <tr>
                    <td>
                      {{ user.name }}
                    </td>
                    <td>
                      {{ user.email }}
                    </td>
                    <td>
                      {{ user.address }}
                    </td>
                    <td>
                      {{ user.birthday }}
                    </td>
                    <td>
                      {{ user.phone }}
                    </td>
                    <td>
                      {{ user.city }}
                    </td>
                    <td>
                      {{ user.province }}
                    </td>
                    <td>
                      {{ user.role }}
                    </td>
                    <td>
                      <architect-button
                        link
                        :path="'/dashboard/users/editUser/' + user._id"
                        class="edit-btn"
                        ><i class="far fa-edit"></i
                      ></architect-button>
                      <i
                        class="far fa-trash-alt"
                        @click="onDelete(user._id)"
                      ></i>
                      <i
                        class="fas fa-file-export"
                        @click="onExport(user._id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>There is no users !</div>
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
      show: false,
      err: null,
      loading: false,
      file: "",
      formSearch: {},
      total: 0,
      cities: null,
    };
  },
  created() {
    this.fetchAllUsers();
  },
  watch: {
    users() {
      return this.$store.getters["userAdmin/getUsers"];
    },
  },
  computed: {
    users() {
      return this.$store.getters["userAdmin/getUsers"];
    },
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
            label: "Email",
            name: "email",
            attributes: { clearable: true },
            trim: true,
          },
          {
            inputType: "select",
            label: "City",
            name: "city",
            attributes: { clearable: true, filterable: true },
            trim: true,
            optionValueField: "value",
            optionLabelField: "label",
            optionList: this.cities,
          },
          {
            inputType: "input",
            label: "Address",
            name: "address",
            attributes: { clearable: true },
            trim: true,
          },
          {
            inputType: "input",
            label: "Phone",
            name: "phone",
            attributes: { clearable: true },
            trim: true,
          },
          {},
        ],
      };
    },
  },
  async mounted() {
    await this.eventRefresh();
    await this.fetchCities();
  },
  methods: {
    async fetchCities() {
      const res = await this.$store.dispatch("userAdmin/getCities");
      this.cities = res.map((item) => ({
        label: item.province_name,
        value: item.province_name,
      }));
    },
    async eventRefresh(page) {
      this.loading = true;
      await this.$store.dispatch("userAdmin/index", {
        page: page || 1,
        ...this.formSearch,
      });
      this.total = this.users.totalCount;
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
      await this.$store.dispatch("userAdmin/index", { page: 1 });
      refs.resetFields();
      this.total = this.users.totalCount;
    },
    onOpen() {
      this.show = true;
    },
    clearForm() {
      this.show = false;
    },
    async onDelete(id) {
      try {
        await this.$store.dispatch("userAdmin/onDeleteUser", id);
      } catch (error) {
        this.err = error;
      }
    },
    async fetchAllUsers() {
      this.loading = true;
      try {
        await this.$store.dispatch("userAdmin/fetchAllUsers");
        this.loading = false;
      } catch (error) {
        this.err = error;
        this.loading = false;
      }
    },
    async onExport(id) {
      try {
        await this.$store.dispatch("userAdmin/getExcelFileById", id);
      } catch (error) {
        this.err = error || "Fail to get";
      }
    },
    async onExportExcels() {
      try {
        await this.$store.dispatch("userAdmin/getExcelFiles");
      } catch (error) {
        this.err = error || "Fail to get";
      }
    },
    async onImportExcels() {
      if (this.file === "") {
        alert("Please import a excel file");
        return;
      }
      this.loading = true;
      let formData = new FormData();
      formData.append("file", this.file);
      try {
        await this.$store.dispatch("userAdmin/importExcels", formData);
      } catch (error) {
        this.err = error || this.$t("fail");
      }
      this.loading = false;
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

.btn-success:hover {
  border-color: #28a745;
}
.fa {
  cursor: pointer;
}

.fix-size-img {
  width: 100px;
  height: 100px;
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
  margin-left: 10px;
  cursor: pointer;
}

.related-btn {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}

.btn-info {
  background-color: #409eff;
}
.btn {
  font-size: 12px;
}
</style>
