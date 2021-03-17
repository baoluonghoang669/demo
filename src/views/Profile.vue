<template>
  <div class="container rounded bg-white">
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

    <!--form update profile -->
    <form @submit.prevent="onSave()" class="row" v-if="user">
      <div class="col-md-4">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <div class="fix-avatar">
            <img class="rounded-circle mt-5" src="./../assets/avatar.jpg" />
          </div>
          <span><button class="change-avatar">Change avatar</button></span>
          <span> </span>
        </div>
      </div>
      <div class="col-md-8">
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-right">Profile Settings</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Username</label
              ><input
                type="text"
                name="name"
                class="form-control"
                placeholder="Enter your name"
                v-model="name"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Email</label
              ><input
                type="text"
                name="email"
                class="form-control"
                v-model="email"
                disabled
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Phone Number</label
              ><input
                type="number"
                name="number"
                class="form-control"
                placeholder="Enter phone number"
                v-model="phone"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                name="address"
                class="form-control"
                placeholder="enter address"
                v-model="address"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Birthday</label
              ><input
                type="text"
                name="birthday"
                class="form-control"
                placeholder="Birthday"
                v-model="birthday"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Role</label
              ><input
                name="role"
                type="text"
                class="form-control"
                placeholder="Role"
                v-model="role"
                disabled
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Country</label
              ><input
                type="text"
                name="country"
                class="form-control"
                placeholder="country"
                v-model="country"
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region/City</label
              ><input
                type="text"
                name="city"
                class="form-control"
                v-model="city"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      error: null,
      loading: false,
      formIsInvalid: false,
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
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    user() {
      return this.$store.getters["auth/user"];
    },
  },
  methods: {
    // Fetch detail user when logged in
    async fetchDetailUser() {
      try {
        await this.$store.dispatch("auth/fetchDetailUser");
      } catch (err) {
        this.error = err;
      }
    },
    //Save user informations
    async onSave() {
      this.loading = true;
      const data = {
        name: this.name,
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
.rounded {
  margin-top: 200px;
}
.fix-avatar {
  vertical-align: middle;
  border-radius: 50%;
}

.fix-avatar img {
  width: 100%;
}

.fixed-button {
  background-color: #263a4f;
  border: none;
}

.fixed-button:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}

.change-avatar {
  border: 1px solid #000;
  background: transparent;
  margin-top: 10px;
  border-radius: 5%;
  transition: 0.3s all ease;
  padding: 5px;
}

.change-avatar:hover {
  background-color: #263a4f !important;
  color: #fff;
}
</style>
