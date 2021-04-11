<template>
  <div class="container rounded bg-none">
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

    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Form Add User</h4>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Username" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input type="email" v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="Phone Number" prop="phone">
          <el-input type="number" v-model.number="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="Birthday" prop="birthday">
          <el-col>
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="ruleForm.birthday"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="State/Region/City" prop="city">
          <el-select
            v-model="ruleForm.city"
            placeholder="please select your city"
          >
            <el-option
              :label="city.province_name"
              :value="city.province_id"
              v-for="city in cities"
              :key="city.province_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Provinces" prop="provinces">
          <el-select
            v-model="ruleForm.provinces"
            placeholder="please select your province"
          >
            <el-option
              :label="province.district_name"
              :value="province.district_name"
              v-for="province in provinces"
              :key="province.district_id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Role" prop="role">
          <el-radio-group v-model="ruleForm.role">
            <el-radio label="user"></el-radio>
            <el-radio label="admin"></el-radio>
          </el-radio-group>
        </el-form-item>
        <div class="text-center">
          <el-button
            type="primary"
            id="btn-submit"
            @click="submitForm('ruleForm')"
            >Add</el-button
          >
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      citys: "",
      ruleForm: {
        name: "",
        email: "",
        address: "",
        birthday: "",
        phone: "",
        city: this.cities,
        provinces: this.provinces,
        role: "",
        password: "",
      },
      loading: false,
      error: null,
      rules: {
        name: { required: true, message: "Please input name" },
        email: { required: true, message: "Please input email" },
        address: { required: true, message: "Please input address" },
        birthday: { required: true, message: "Please input birthday" },
        phone: { required: true, message: "Please input phone" },
        city: { required: true, message: "Please input city" },
        provinces: { required: true, message: "Please input province" },
        role: { required: true, message: "Please input role" },
        password: { required: true, message: "Please input password" },
      },
    };
  },
  watch: {
    "ruleForm.city": function(city) {
      localStorage.setItem("city", city);
    },
  },
  mounted() {
    this.getCities();
    this.getProvinces();
  },
  computed: {
    cities() {
      return this.$store.state.userAdmin.cities.results;
    },
    provinces() {
      return this.$store.state.userAdmin.provinces.results;
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onAddUser();
        } else {
          return false;
        }
      });
    },
    async onAddUser() {
      this.loading = true;
      const data = {
        name: this.ruleForm.name,
        email: this.ruleForm.email,
        address: this.ruleForm.address,
        birthday: this.ruleForm.birthday,
        phone: this.ruleForm.phone,
        city: this.ruleForm.city,
        country: this.ruleForm.country,
        role: this.ruleForm.role,
        password: this.ruleForm.password,
      };
      try {
        await this.$store.dispatch("userAdmin/addUser", data);

        this.$router.replace({ name: "UserList" });
      } catch (err) {
        this.error = err.response.data.error || this.$t("fail");
      }
      this.loading = false;
    },

    clearError() {
      this.error = null;
    },

    getCities() {
      return this.$store.dispatch("userAdmin/getCity");
    },
    getProvinces() {
      return this.$store.dispatch("userAdmin/getProvice");
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
#btn-submit {
  background-color: #263a4f;
  border: none;
}
#btn-submit:hover {
  background-color: #a3cc01 !important;
}
</style>
