<template>
  <div class="container rounded bg-none">
    <form @submit.prevent="onAddProject()">
      <div class="col-md-8">
        <architect-button
          typeClass="fix-back-btn"
          link
          :path="'/dashboard/projects'"
        >
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Add Project</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Name: </label
              ><input
                type="text"
                name="name"
                class="form-control"
                placeholder="Enter project name"
                v-model="name"
              />
            </div>
          </div>
          <!-- <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Select image:</label>
              <input type="file" id="img" name="img" accept="image/*" />
            </div>
          </div> -->
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Description: </label
              ><input
                type="text"
                name="description"
                class="form-control"
                placeholder="Enter description"
                v-model="description"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Address: </label
              ><input
                name="address"
                type="text"
                class="form-control"
                placeholder="enter address"
                v-model="address"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Category: </label>
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
            </div>
            <div class="col-md-12">
              <label class="labels">Architecture: </label
              ><input
                type="text"
                name="architecture"
                class="form-control"
                placeholder="Architecture"
                v-model="architecture"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Area: </label
              ><input
                type="text"
                name="rating"
                class="form-control"
                placeholder="Architecture"
                v-model.number="area"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-6">
              <label class="labels">Client: </label
              ><input
                type="text"
                class="form-control"
                name="client"
                placeholder="Client"
                v-model="client"
              />
            </div>
            <div class="col-md-6">
              <label class="labels">Cost</label
              ><input
                type="text"
                name="cost"
                v-model="cost"
                class="form-control"
                placeholder="Cost"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Add Project
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
      name: "",
      description: "",
      address: "",
      architecture: "",
      category: localStorage.getItem("category"),
      client: "",
      area: "",
      cost: null,
      error: null,
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
        this.error = err || "Fail to Add";
      }
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
