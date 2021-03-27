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
        <h4 class="text-center">Form Add Project</h4>
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="ruleForm.name" required></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input
            type="textarea"
            v-model="ruleForm.description"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input
            type="textarea"
            v-model="ruleForm.address"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Category" prop="category">
          <select
            v-model="ruleForm.category"
            id="category"
            @change="handleChange($event)"
          >
            <option
              v-for="category in categories"
              :key="category._id"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>
        </el-form-item>
        <el-form-item label="Architecture" prop="architecture">
          <el-input v-model="ruleForm.architecture" required></el-input>
        </el-form-item>
        <el-form-item label="Client" prop="client">
          <el-input v-model="ruleForm.client" required></el-input>
        </el-form-item>
        <el-form-item label="Cost" prop="cost">
          <el-input
            type="cost"
            v-model.number="ruleForm.cost"
            required
          ></el-input>
        </el-form-item>
        <el-form-item label="Area" prop="area">
          <el-input
            type="area"
            v-model.number="ruleForm.area"
            required
          ></el-input>
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
      ruleForm: {
        name: "",
        description: "",
        address: "",
        architecture: "",
        category: localStorage.getItem("category"),
        client: "",
        area: "",
        cost: null,
      },
      error: null,
      loading: false,
      rules: {
        name: { required: true, message: "Please input name" },
        description: { required: true, message: "Please input description" },
        address: { required: true, message: "Please input address" },
        architecture: { required: true, message: "Please input architecture" },
        category: { required: true, message: "Please input category" },
        client: { required: true, message: "Please input client" },
        area: { required: true, message: "Please input area" },
        cost: { required: true, message: "Please input cost" },
      },
    };
  },
  created() {
    this.fetchCategories();
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
  },
  methods: {
    handleChange(e) {
      localStorage.setItem("category", e.target.value);
    },
    async fetchCategories() {
      try {
        await this.$store.dispatch("categories/fetchAllCategories");
      } catch (err) {
        this.error = err;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onAddProject();
        } else {
          return false;
        }
      });
    },
    async onAddProject() {
      this.loading = true;
      const project = {
        name: this.ruleForm.name,
        description: this.ruleForm.description,
        address: this.ruleForm.address,
        architecture: this.ruleForm.architecture,
        category: this.ruleForm.category,
        client: this.ruleForm.client,
        cost: this.ruleForm.cost,
        area: this.ruleForm.area,
      };
      try {
        await this.$store.dispatch("projects/onAddProject", project);

        this.$router.replace({ name: "ProjectList" });
      } catch (err) {
        this.error = err.response.data.error || "Fail to Add";
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
#category {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
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
