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
            Add a Project
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
              v-else-if="!loading && projects && projects.length > 0"
            >
              <table class="table">
                <thead class=" text-primary">
                  <th>
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
                    Completed Day
                  </th>
                  <th>
                    Edit
                  </th>
                </thead>
                <tbody v-for="project in researchProjects" :key="project.id">
                  <tr>
                    <td>
                      {{ project.name }}
                    </td>
                    <td>
                      <img
                        class="fix-size-img"
                        :src="project.photo"
                        alt="img"
                      />
                    </td>
                    <td>
                      {{ project.description }}
                    </td>
                    <td>
                      {{ project.categories.name }}
                    </td>
                    <td>
                      {{ project.architecture }}
                    </td>
                    <td>
                      {{ project.client }}
                    </td>
                    <td>
                      {{ project.cost }}
                    </td>
                    <td>{{ project.area }} m<sup>2</sup></td>
                    <td>
                      {{ project.completeDay }}
                    </td>
                    <td>
                      <router-link :to="{ name: 'ProjectEdit' }"
                        ><i class="far fa-edit"></i
                      ></router-link>

                      <i
                        class="far fa-trash-alt"
                        @click="onDelete(project._id)"
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
export default {
  components: {},
  data() {
    return {
      loading: false,
      search: "",
    };
  },
  created() {
    this.fetchListProjects();
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getProjects"];
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
  methods: {
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
        this.loading = false;
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
</style>
