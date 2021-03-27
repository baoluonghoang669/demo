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
              v-else-if="projects && projects.length > 0"
            >
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th class="th-name">
                    Name
                    <i class="fa fa-fw fa-sort" @click="sortProjects(name)"></i>
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
                    <i class="fa fa-fw fa-sort" @click="sortProjects(cost)"></i>
                  </th>
                  <th>
                    Area
                    <i class="fa fa-fw fa-sort" @click="sortProjects(area)"></i>
                  </th>

                  <th>
                    Edit
                  </th>
                </thead>
                <tbody v-for="project in researchProjects" :key="project.id">
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
                    <td v-if="project">
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
                      <architect-button
                        link
                        :path="'/dashboard/projects/editProject/' + project._id"
                        class="edit-btn"
                        ><i class="far fa-edit"></i
                      ></architect-button>
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
import ArchitectButton from "../../../components/common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  data() {
    return {
      loading: false,
      search: "",
      error: null,
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
      } catch (err) {
        this.error = err;
      }
      this.loading = false;
    },
    async sortProjects(name) {
      try {
        await this.$store.dispatch("projects/sortProjects", name);
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>
<style scoped>
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

.edit-btn:hover {
  transform: scale(0.9);
}
</style>
