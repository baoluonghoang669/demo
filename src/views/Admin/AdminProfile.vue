<template>
  <div class="content">
    <!-- first dialog -->
    <architect-dialog :show="loading" title="Authenticating...">
      <architect-loading></architect-loading>
    </architect-dialog>

    <!-- second dialog -->
    <architect-dialog
      :show="!!error"
      title="An error occurred"
      @close="clearError"
      fixed
    >
      <p>{{ error }}</p>
    </architect-dialog>

    <!-- second dialog -->
    <architect-dialog
      :show="!!notify"
      title="Notification"
      @close="clearNotify"
      fixed
    >
      <p>{{ notify }}</p>
    </architect-dialog>

    <!-- form update profile -->
    <div class="row">
      <div class="col-md-4">
        <div class="card card-user">
          <div class="image"></div>
          <div class="card-body">
            <div class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="./../../assets/avatar.jpg"
                  alt=""
                />
              </a>
              <p class="description">
                {{ email }}
              </p>
            </div>
            <p class="description text-center">
              "I like the way you work it <br />
              No diggity <br />
              I wanna bag it up"
            </p>
          </div>
          <div class="card-footer">
            <hr />
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card card-user">
          <div class="card-header">
            <h5 class="card-title">Edit Profile</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="onSave()">
              <div class="row">
                <div class="col-md-5 pr-1">
                  <div class="form-group">
                    <label>Company (disabled)</label>
                    <input
                      type="text"
                      class="form-control"
                      disabled=""
                      placeholder="Company"
                      value="Troc Architecture Inc."
                    />
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Username"
                      v-model="name"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Email address</label>
                    <input
                      type="text"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="email"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      placeholder="Address"
                      v-model="address"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Birthday</label>
                    <input
                      type="text"
                      name="birthday"
                      class="form-control"
                      placeholder="Birthday"
                      v-model="birthday"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 pr-1">
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      class="form-control"
                      placeholder="City"
                      v-model="city"
                    />
                  </div>
                </div>
                <div class="col-md-4 pr-1">
                  <div class="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      name="country"
                      class="form-control"
                      placeholder="Country"
                      v-model="country"
                    />
                  </div>
                </div>
                <div class="col-md-4 pr-1">
                  <div class="form-group">
                    <label>Phone</label>
                    <input
                      type="number"
                      name="phone"
                      class="form-control"
                      placeholder="Country"
                      v-model="phone"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Role</label>
                    <input
                      type="text"
                      name="role"
                      class="form-control"
                      placeholder="Role"
                      v-model="role"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="update ml-auto mr-auto">
                  <button type="submit" class="btn btn-primary btn-round">
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
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
      error: null,
      loading: false,
      notify: null,
    };
  },
  created() {
    this.fetchDetailUser();
  },
  computed: {
    name: {
      get() {
        return this.$store.state.auth.user.name;
      },
      set(value) {
        this.$store.commit("auth/updateName", value);
      },
    },
    email: {
      get() {
        return this.$store.state.auth.user.email;
      },
    },
    phone: {
      get() {
        return this.$store.state.auth.user.phone;
      },
      set(value) {
        this.$store.commit("auth/updatePhone", value);
      },
    },
    address: {
      get() {
        return this.$store.state.auth.user.address;
      },
      set(value) {
        this.$store.commit("auth/updateAddress", value);
      },
    },
    birthday: {
      get() {
        return this.$store.state.auth.user.birthday;
      },
      set(value) {
        this.$store.commit("auth/updateBirthday", value);
      },
    },
    role: {
      get() {
        return this.$store.state.auth.user.role;
      },
    },
    city: {
      get() {
        return this.$store.state.auth.user.city;
      },
      set(value) {
        this.$store.commit("auth/updateCity", value);
      },
    },
    country: {
      get() {
        return this.$store.state.auth.user.country;
      },
      set(value) {
        this.$store.commit("auth/updateCountry", value);
      },
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  methods: {
    async fetchDetailUser() {
      try {
        await this.$store.dispatch("auth/fetchDetailUser");
      } catch (err) {
        this.error = err;
      }
    },
    async onSave() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        birthday: this.birthday,
        city: this.city,
        country: this.country,
      };
      try {
        await this.$store
          .dispatch("auth/saveDetailUser", data)
          .then(() => (this.notify = "Update successfully !"));
      } catch (err) {
        this.error = err || "Fail to Update";
      }
      this.loading = false;
    },
    clearError() {
      this.error = null;
    },

    clearNotify() {
      this.notify = null;
    },
  },
};
</script>
<style scoped>
@import "../../../public/css/dashboard/paper-dashboard.css";
@import "../../../public/css/dashboard/bootstrap.min.css";
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
</style>
