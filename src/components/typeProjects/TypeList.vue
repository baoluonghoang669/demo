<template>
  <div class="row">
    <div
      class="col-lg-4 col-sm-6"
      v-for="category in categories"
      :key="category.id"
    >
      <div class="spec_item">
        <img :src="category.image" alt="img" />
        <h4>{{ category.name }}</h4>
        <p>
          {{ category.description }}
        </p>
        <architect-button link typeClass="view_btn white" path="/project"
          >View project</architect-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      err: null,
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
    async fetchCategories() {
      try {
        await this.$store.dispatch("categories/fetchCategories");
      } catch (error) {
        this.err = error || "Fail to fetch";
      }
    },
  },
};
</script>
<style scoped>
.spec_item img {
  width: 111px;
  height: 110px;
}
</style>
