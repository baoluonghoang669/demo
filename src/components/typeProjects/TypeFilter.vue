<template>
  <div class="float-md-right">
    <p class="btn-all" @click="fetchListProjects()">All</p>

    <div
      class="portfolio_filter list"
      v-for="category in categories"
      :key="category.id"
    >
      <p @click="fetchProjectsForCategory(category.id)">
        {{ category.name }}
      </p>
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
    this.fetchProjectsForCategory();
  },
  computed: {
    categories() {
      return this.$store.getters["categories/getCategories"];
    },
    projects() {
      return this.$store.getters["projects/getProjects"];
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
    async fetchListProjects() {
      try {
        await this.$store.dispatch("projects/fetchListProjects");
      } catch (error) {
        this.err = error || "Fail to fetch";
      }
    },
    async fetchProjectsForCategory(id) {
      try {
        await this.$store.dispatch("projects/fetchProjectsForCategory", id);
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

p {
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #999999;
  transition: 0.3s all ease-in-out;
}

p:hover {
  border: none;
  color: #263a4f;
}

.btn-all {
  transform: translateY(11px);
}

p:hover,
p:active {
  color: #a3cc01;
}
</style>
