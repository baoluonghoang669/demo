<template>
  <div class="container rounded bg-none">
    <form @submit.prevent="onAddCategory()">
      <div class="col-md-8">
        <architect-button
          typeClass="fix-back-btn"
          link
          :path="'/dashboard/categories'"
        >
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Add Category</h4>
          </div>
          <div class="row mt-2">
            <div class="col-md-12">
              <label class="labels">Name</label
              ><input
                type="text"
                name="name"
                class="form-control"
                placeholder="Enter category name"
                v-model="name"
              />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Description</label
              ><input
                type="text"
                name="description"
                class="form-control"
                placeholder="Enter description"
                v-model="description"
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Add Category
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import ArchitectButton from "../../../components/common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  data() {
    return {
      name: "",
      description: "",
      error: null,
    };
  },
  methods: {
    async onAddCategory() {
      const category = {
        name: this.name,
        description: this.description,
      };
      try {
        await this.$store.dispatch("categories/onAddCategory", category);

        this.$router.replace("/dashboard/categories");
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
