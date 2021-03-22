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
            Add a Category
          </router-link>
          <div class="input-group no-border fix-position-input">
            <input
              type="text"
              v-model="search"
              class="form-control"
              placeholder="Search by name..."
            />
          </div>
          <div class="card-body">
            <div v-if="loading"><architect-loading></architect-loading></div>
            <div
              class="table-responsive"
              v-else-if="!loading && categories && categories.length > 0"
            >
              <table class="table">
                <thead class=" text-primary">
                  <th>
                    Name
                  </th>
                  <th>
                    Logo Image
                  </th>
                  <th>
                    Description
                  </th>
                  <th>
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
                    <td>
                      {{ category.projects.length }}
                    </td>
                    <td>
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
    };
  },
  created() {
    this.fetchCategories();
  },
  computed: {
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
  methods: {
    async onDelete(id) {
      try {
        await this.$store.dispatch("categories/onDeleteCategory", id);
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
  },
};
</script>
<style scoped>
@import "../../../../public/css/dashboard/paper-dashboard.css";
@import "../../../../public/css/dashboard/bootstrap.min.css";
.sidebar,
.sidebar-wrapper {
  background-color: #263a4f !important;
}

.sidebar:after {
  background-color: #263a4f !important;
}

.sidebar .sidebar-wrapper {
  width: 259px;
}

.nav li a {
  color: #fff;
}

.fa-edit {
  color: #a3cc01;
  margin: 0 2px;
  cursor: pointer;
}
.fa-trash-alt {
  color: red;
  cursor: pointer;
}

.btn-primary {
  background-color: #263a4f !important;
  width: 200px;
  margin: 0 15px;
  border: none;
}

.btn-primary:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}

th {
  color: #263a4f;
}

td,
th {
  text-align: center;
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
</style>
