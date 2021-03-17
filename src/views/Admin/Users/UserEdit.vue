<template>
  <div class="container rounded bg-none">
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

    <!--form edit user -->
    <form @submit.prevent="onSave()">
      <div class="col-md-8">
        <architect-button typeClass="fix-back-btn" link :name="'UserList'">
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Edit User</h4>
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
              <label class="labels">Select avatar:</label>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Phone Number</label
              ><input
                type="number"
                name="phone"
                v-model="phone"
                class="form-control"
                placeholder="Enter phone number"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address</label
              ><input
                type="text"
                name="address"
                class="form-control"
                v-model="address"
                placeholder="Address"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Birthday</label
              ><input
                type="text"
                name="birthday"
                v-model="birthday"
                class="form-control"
                placeholder="Birthday"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Role</label
              ><input
                type="text"
                class="form-control"
                v-model="role"
                name="role"
                placeholder="Role"
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
                v-model="country"
                class="form-control"
                placeholder="Country"
              />
            </div>
            <div class="col-md-6">
              <label class="labels">State/Region/City</label
              ><input
                type="text"
                name="city"
                v-model="city"
                placeholder="City"
                class="form-control"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Save and update
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchUserById();
  },
  computed: {
    name: {
      get() {
        return this.$store.state.userAdmin.detailUser.name;
      },
      set(value) {
        this.$store.commit("userAdmin/updateName", value);
      },
    },
    phone: {
      get() {
        return this.$store.state.userAdmin.detailUser.phone;
      },
      set(value) {
        this.$store.commit("userAdmin/updatePhone", value);
      },
    },
    address: {
      get() {
        return this.$store.state.userAdmin.detailUser.address;
      },
      set(value) {
        this.$store.commit("userAdmin/updateAddress", value);
      },
    },
    birthday: {
      get() {
        return this.$store.state.userAdmin.detailUser.birthday;
      },
      set(value) {
        this.$store.commit("userAdmin/updateBirthday", value);
      },
    },
    role: {
      get() {
        return this.$store.state.userAdmin.detailUser.role;
      },
    },
    city: {
      get() {
        return this.$store.state.userAdmin.detailUser.city;
      },
      set(value) {
        this.$store.commit("userAdmin/updateCity", value);
      },
    },
    country: {
      get() {
        return this.$store.state.userAdmin.detailUser.country;
      },
      set(value) {
        this.$store.commit("userAdmin/updateCountry", value);
      },
    },
  },
  methods: {
    async fetchUserById() {
      try {
        await this.$store.dispatch(
          "userAdmin/fetchUserById",
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },

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
        await this.$store.dispatch("userAdmin/updateUserById", data);

        this.$router.replace({ name: "UserList" });
      } catch (err) {
        this.error = err.response.data.error || "Fail to Update";
      }
      this.loading = false;
    },

    clearError() {
      this.error = null;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: 500;
}

.rounded form {
  display: flex;
  justify-content: center;
}

.text-center {
  width: 100%;
  font-size: 40px;
  font-weight: bolder;
}

.fixed-button {
  background-color: #263a4f;
  border: none;
}

.fixed-button:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}
</style>
