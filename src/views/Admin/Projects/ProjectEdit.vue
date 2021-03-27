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

    <!-- form -->
    <div class="p-3 py-5">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="text-center">Form Edit Project</h4>
      </div>
      <form
        id="uploadForm"
        enctype="multipart/form-data"
        @submit.prevent="onUpload()"
      >
        <span class="demo-input-label">Image</span>
        <div class="fix-avatar" v-if="photo">
          <img :src="photo" />
        </div>
        <input
          type="file"
          ref="file"
          id="file"
          @change="onFileChange"
          name="file"
        />
        <input
          type="submit"
          button
          class="change-avatar"
          value="Upload avatar"
        />
      </form>
      <el-form
        status-icon
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input type="textarea" v-model="description"></el-input>
        </el-form-item>
        <el-form-item label="Architecture" prop="architecture">
          <el-input v-model="architecture"></el-input>
        </el-form-item>
        <el-form-item label="Client" prop="client">
          <el-input v-model="client"></el-input>
        </el-form-item>
        <el-form-item label="Cost" prop="cost">
          <el-input
            type="cost"
            v-model.number="cost"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Area" prop="area">
          <el-input
            type="area"
            v-model.number="area"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="text-center">
          <el-button type="primary" id="btn-submit" @click="onSave()"
            >Update and Save</el-button
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
      loading: false,
      error: null,
      fileUpload: null,
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
    photo: {
      get() {
        return this.$store.state.projects.projectsDetail.photo;
      },
      set(value) {
        this.$store.commit("projects/updatePhoto", value);
      },
    },
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.fileUpload = file;
      var reader = new FileReader();
      reader.onload = (e) => {
        this.file = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async onUpload() {
      this.loading = true;
      try {
        await this.$store.dispatch("projects/uploadPhoto", this.fileUpload);
      } catch (err) {
        this.error = err.response.data.error || "Fail to update";
      }
      this.loading = false;
    },
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
        await this.$store.dispatch("projects/onUpdateProject", data);

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
#file {
  margin-left: 15px;
}
#uploadForm {
  align-items: center;
  margin-right: 33%;
  padding: 10px 0;
}
.fix-avatar img {
  width: 100px;
  height: 100px;
  display: block;
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
