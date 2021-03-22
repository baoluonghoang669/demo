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
        ref="ruleForm demo-"
        label-width="120px"
        class="demo-ruleForm"
        @submit.prevent="onAddProject()"
      >
        <el-form-item label="Name">
          <el-input v-model="name" required></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="description" required></el-input>
        </el-form-item>
        <el-form-item label="Address">
          <el-input type="textarea" v-model="address" required></el-input>
        </el-form-item>
        <el-form-item label="Category">
          <select
            v-model="category"
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
        <el-form-item label="Architecture">
          <el-input v-model="architecture" required></el-input>
        </el-form-item>
        <el-form-item label="Client">
          <el-input v-model="client" required></el-input>
        </el-form-item>
        <el-form-item label="Cost">
          <el-input type="cost" v-model.number="cost" required></el-input>
        </el-form-item>
        <el-form-item label="Area">
          <el-input type="area" v-model.number="area" required></el-input>
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
      description: "",
      address: "",
      architecture: "",
      category: localStorage.getItem("category"),
      client: "",
      area: "",
      cost: null,
      error: null,
      loading: false,
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
    async onAddProject() {
      this.loading = true;
      const project = {
        name: this.name,
        description: this.description,
        address: this.address,
        architecture: this.architecture,
        category: this.category,
        client: this.client,
        cost: this.cost,
        area: this.area,
      };
      try {
        await this.$store.dispatch("projects/onAddProject", project);

        this.$router.replace("/dashboard/projects");
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
</style>
