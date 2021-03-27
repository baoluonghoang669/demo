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
              <table class="table table-bordered">
                <thead class=" text-primary">
                  <th>
                    Name
                    <i class="fa fa-fw fa-sort" @click="sortUsers(name)"></i>
                  </th>
                  <th>
                    Email
                    <i class="fa fa-fw fa-sort" @click="sortUsers(email)"></i>
                  </th>
                  <th>
                    Address
                    <i class="fa fa-fw fa-sort" @click="sortUsers(address)"></i>
                  </th>
                  <th>
                    Birthday
                    <i
                      class="fa fa-fw fa-sort"
                      @click="sortUsers(birthday)"
                    ></i>
                  </th>
                  <th>
                    Phone
                    <i class="fa fa-fw fa-sort" @click="sortUsers(phone)"></i>
                  </th>
                  <th>
                    City
                    <i class="fa fa-fw fa-sort" @click="sortUsers(city)"></i>
                  </th>
                  <th>
                    Country
                    <i class="fa fa-fw fa-sort" @click="sortUsers(country)"></i>
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
    async sortUsers(name) {
      try {
        await this.$store.dispatch("userAdmin/sortUsers", name);
        this.loading = false;
      } catch (error) {
        this.err = error || "Fail to sort";
      }
    },
  },
};
</script>
<style scoped>
.fa {
  cursor: pointer;
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
