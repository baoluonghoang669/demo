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
            Add a User
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
              v-else-if="!loading && users && users.length > 0"
            >
              <table class="table">
                <thead class=" text-primary">
                  <th>
                    Name
                  </th>
                  <th>
                    Avatar
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
                    Country
                  </th>
                  <th>
                    Role
                  </th>
                  <th>
                    Edit
                  </th>
                </thead>
                <tbody v-for="user in researchUsers" :key="user.id">
                  <tr>
                    <td>
                      {{ user.name }}
                    </td>
                    <td>
                      <img
                        :src="user.avatar"
                        :alt="user.name"
                        class="fix-size-img"
                      />
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
                      {{ user.country }}
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
                    </td>
                  </tr>

                  <!-- Modal
                  <modal-admin
                    :show="show"
                    @close="clearForm"

                  >
                    <p>Bạn có chắc chắn muốn xoá không ?</p>
                  </modal-admin>
                  -->
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
// import ModalAdmin from "../../../components/common/ModalAdmin.vue";
export default {
  // components: { ModalAdmin },
  data() {
    return {
      show: false,
      err: null,
      loading: false,
      search: "",
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
    researchUsers() {
      if (this.search) {
        return this.users.filter((user) => {
          return user.name.startsWith(this.search);
        });
      } else {
        return this.users;
      }
    },
  },
  methods: {
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
