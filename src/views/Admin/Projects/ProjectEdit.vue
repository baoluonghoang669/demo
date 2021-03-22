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
    <architect-button
      typeClass="fix-back-btn"
      link
      :path="'/dashboard/projects'"
    >
      <i class="fas fa-undo-alt"></i
    ></architect-button>

    <!-- form -->
    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Form Edit Project</h4>
      </div>
      <el-form @submit.prevent="onSave()" label-width="120px" class="demo-">
        <el-form-item label="Name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Description">
          <el-input type="textarea" v-model="description"></el-input>
        </el-form-item>
        <el-form-item label="Architecture">
          <el-input v-model="architecture"></el-input>
        </el-form-item>
        <el-form-item label="Client">
          <el-input v-model="client"></el-input>
        </el-form-item>
        <el-form-item
          label="Cost"
          :rules="[
            { required: true, message: 'cost is required' },
            { type: 'number', message: 'cost must be a number' },
          ]"
        >
          <el-input
            type="cost"
            v-model.number="cost"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="Area"
          :rules="[
            { required: true, message: 'area is required' },
            { type: 'number', message: 'area must be a number' },
          ]"
        >
          <el-input
            type="area"
            v-model.number="area"
            autocomplete="off"
          ></el-input>
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
    this.fetchProjectById();
  },
  computed: {
    name: {
      get() {
        return this.$store.state.projects.projectsDetail.name;
      },
      set(value) {
        this.$store.commit("projects/updateName", value);
      },
    },
    description: {
      get() {
        return this.$store.state.projects.projectsDetail.description;
      },
      set(value) {
        this.$store.commit("projects/updateDescription", value);
      },
    },
    architecture: {
      get() {
        return this.$store.state.projects.projectsDetail.architecture;
      },
      set(value) {
        this.$store.commit("projects/updateArchitecture", value);
      },
    },
    client: {
      get() {
        return this.$store.state.projects.projectsDetail.client;
      },
      set(value) {
        this.$store.commit("projects/updateClient", value);
      },
    },
    cost: {
      get() {
        return this.$store.state.projects.projectsDetail.cost;
      },
      set(value) {
        this.$store.commit("projects/updateCost", value);
      },
    },
    area: {
      get() {
        return this.$store.state.projects.projectsDetail.area;
      },
      set(value) {
        this.$store.commit("projects/updateArea", value);
      },
    },
  },
  methods: {
    async fetchProjectById() {
      try {
        await this.$store.dispatch(
          "projects/fetchDetailProject",
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
        description: this.description,
        architecture: this.architecture,
        client: this.client,
        cost: this.cost,
        area: this.area,
      };
      try {
        await this.$store.dispatch("projects/updateProjectById", data);

        this.$router.replace({ name: "ProjectList" });
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
