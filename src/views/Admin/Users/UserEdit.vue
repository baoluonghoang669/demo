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
    <architect-button typeClass="fix-back-btn" link :name="'UserList'">
      <i class="fas fa-undo-alt"></i
    ></architect-button>
    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Form Edit User</h4>
      </div>
      <el-form @submit.prevent="onSave()" label-width="120px" class="demo-">
        <el-form-item label="Username">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Phone Number">
          <el-input v-model.number="phone"></el-input>
        </el-form-item>
        <el-form-item label="Country">
          <el-select v-model="country" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="State/Region/City">
          <el-select v-model="city" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Birthday">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="birthday"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Role">
          <el-radio-group v-model="role">
            <el-radio label="user"></el-radio>
            <el-radio label="admin"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Address">
          <el-input type="textarea" v-model.number="address"></el-input>
        </el-form-item>
        <div class="text-center">
          <button class="btn btn-primary fixed-button" type="submit">
            Update and Save
          </button>
        </div>
      </el-form>
    </div>
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
.el-form {
  flex-direction: column;
}
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
