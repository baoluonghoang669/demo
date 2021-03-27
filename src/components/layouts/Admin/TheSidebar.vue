<template>
  <div class="sidebar">
    <div class="logo">
      <a class="simple-text logo-normal" v-if="user && isAuth">
        Hello {{ user.name }}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <ul class="nav">
        <li>
          <router-link :to="{ name: 'DashBoard' }">
            <i class="fas fa-university"></i>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Messages' }">
            <i class="far fa-user"></i>
            <p>Messages</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ProjectList' }">
            <i class="fas fa-table"></i>
            <p>Projects</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserList' }">
            <i class="fas fa-users"></i>
            <p>Users</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CategoryList' }">
            <i class="fas fa-list"></i>
            <p>Categories</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'ReviewList' }">
            <i class="fas fa-search-location"></i>
            <p>Reviews</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.fetchDetailUser();
  },
  computed: {
    user() {
      return this.$store.getters["auth/user"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
  },
  methods: {
    fetchDetailUser() {
      return this.$store.dispatch("auth/fetchDetailUser");
    },
  },
};
</script>
<style scoped>
.simple-text:hover {
  cursor: pointer;
  color: #fff !important;
}

.nav li a:hover {
  color: #a3cc01;
}

.logo {
  text-align: center;
}
</style>
