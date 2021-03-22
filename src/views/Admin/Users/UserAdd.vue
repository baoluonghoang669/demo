<template>
  <div class="container rounded bg-none">
    <architect-button typeClass="fix-back-btn" link :path="'/dashboard/users'">
      <i class="fas fa-undo-alt"></i
    ></architect-button>
    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Form Add User</h4>
      </div>
      <el-form @submit.prevent="onAddUser()" label-width="120px" class="demo-">
        <el-form-item label="Username">
          <el-input v-model="name" required></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input type="email" v-model="email" required></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input v-model="address" required></el-input>
        </el-form-item>
        <el-form-item label="Phone Number">
          <el-input type="number" v-model.number="phone" required></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            type="password"
            v-model.number="password"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Birthday">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="birthday"
              style="width: 100%;"
              required
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Country">
          <el-select
            v-model="country"
            @change="search"
            placeholder="please select your country"
          >
            <el-option label="Việt Nam" value="VietNam"></el-option>
            <el-option label="America" value="America"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="State/Region/City">
          <el-select v-model="city" placeholder="please select your city">
            <el-option label="Đà Nẵng" value="DaNang"></el-option>
            <el-option label="NewYork" value="NewYork"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Role">
          <el-radio-group v-model="role" required>
            <el-radio label="user"></el-radio>
            <el-radio label="admin"></el-radio>
          </el-radio-group>
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
      name: "",
      email: "",
      address: "",
      birthday: "",
      phone: "",
      city: "",
      country: "",
      role: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async onAddUser() {
      const data = {
        name: this.name,
        email: this.email,
        address: this.address,
        birthday: this.birthday,
        phone: this.phone,
        city: this.city,
        country: this.country,
        role: this.role,
        password: this.password,
      };
      try {
        await this.$store.dispatch("userAdmin/addUser", data);

        this.$router.replace("/dashboard/users");
      } catch (err) {
        this.error = err || "Fail to Add";
      }
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
