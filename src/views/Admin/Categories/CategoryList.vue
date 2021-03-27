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
</style>
