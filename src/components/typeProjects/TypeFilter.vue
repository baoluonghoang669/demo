<template>
  <div class="float-md-right">
    <button class="btn-all">All</button>

    <div
      class="portfolio_filter list"
      v-for="category in categories"
      :key="category.id"
    >
      <button>{{ category.name }}</button>
    </div>
  </div>
</template>
<script>
export default {
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
.float-md-right,
.portfolio_filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.portfolio_filter {
  margin: 5px;
}

button {
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #999999;
  transition: 0.3s all ease-in-out;
}

button:hover {
  color: #263a4f;
}

.btn-all {
  transform: translateY(9.5px);
}
</style>
