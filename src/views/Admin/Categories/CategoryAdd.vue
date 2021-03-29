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
        <h4 class="text-center">Form Add Category</h4>
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
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <div class="mt-5 text-center">
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
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        description: "",
      },
      loading: false,
      error: null,
      rules: {
        name: { required: true, message: "Please input name" },
        description: { required: true, message: "Please input description" },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onAddCategory();
        } else {
          return false;
        }
      });
    },
    async onAddCategory() {
      this.loading = true;
      const category = {
        name: this.ruleForm.name,
        description: this.ruleForm.description,
      };
      try {
        await this.$store.dispatch("categories/onAddCategory", category);

        this.$router.replace({ name: "CategoryList" });
      } catch (err) {
        this.error = err.response.data.error || this.$t("fail");
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

#btn-submit {
  background-color: #263a4f;
  border: none;
}
#btn-submit:hover {
  background-color: #a3cc01 !important;
}
</style>
