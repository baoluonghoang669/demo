<template>
  <div class="content">
    <div class="row" >
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="fas fa-project-diagram"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-category">Projects</p>
                  <p class="card-title">{{ projects }}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer ">
            <hr />
            <div class="stats">
              <i class="fa fa-refresh"></i>
              Update Now
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="fas fa-users-cog"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-category">Users</p>
                  <p class="card-title">{{ users }}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer ">
            <hr />
            <div class="stats">
              <i class="fa fa-calendar-o"></i>
              Last day
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="fas fa-certificate"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-category">Categories</p>
                  <p class="card-title">{{ categories }}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer ">
            <hr />
            <div class="stats">
              <i class="fa fa-clock-o"></i>
              In the last hour
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="card card-stats">
          <div class="card-body ">
            <div class="row">
              <div class="col-5 col-md-4">
                <div class="icon-big text-center icon-warning">
                  <i class="fas fa-search-location"></i>
                </div>
              </div>
              <div class="col-7 col-md-8">
                <div class="numbers">
                  <p class="card-category">Reviews</p>
                  <p class="card-title">{{ reviews }}</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer ">
            <hr />
            <div class="stats">
              <i class="fa fa-refresh"></i>
              Update now
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="card ">
          <div class="card-header ">
            <h5 class="card-title">Notification</h5>
            <p class="card-category">Update 24 Hours</p>
          </div>
          <div class="card-body ">
            <canvas id="chartHours" width="400" height="100"></canvas>
          </div>
          <div class="card-footer ">
            <hr />
            <div class="stats">
              <i class="fa fa-history"></i> Updated 3 minutes ago
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: null
    };
  },
  created() {
    Promise.all([
      this.fetchListProjects(),
      this.fetchAllReviews(),
      this.fetchCategories(),
      this.fetchAllUsers(),
    ]).then(() => {});
  },
  computed: {
    projects() {
      return this.$store.getters["projects/checkProjects"];
    },
    reviews() {
      return this.$store.getters["reviews/checkReviews"];
    },
    categories() {
      return this.$store.getters["categories/checkCategories"];
    },
    users() {
      return this.$store.getters["userAdmin/checkUsers"];
    },
  },
  methods: {
    async fetchListProjects() {
      try {
        await this.$store.dispatch("projects/fetchListProjects");
      } catch (err) {
        this.error = err
      }
    },
    async fetchAllReviews() {
      try {
        await this.$store.dispatch("reviews/fetchAllReviews");
      } catch (err) {
        this.error = err
      }
    },
    async fetchCategories() {
      try {
        await this.$store.dispatch("categories/fetchAllCategories");
      } catch (err) {
        this.error = err
      }
    },
    async fetchAllUsers() {
      try {
        await this.$store.dispatch("userAdmin/fetchAllUsers");
      } catch (err) {
        this.error = err
      }
    },
  },
};
</script>
<style scoped>
@import "../../../public/css/dashboard/paper-dashboard.css";
@import "../../../public/css/dashboard/bootstrap.min.css";

.sidebar,
.sidebar-wrapper {
  background-color: #263a4f !important;
}

.sidebar:after {
  background-color: #263a4f !important;
}

.sidebar .sidebar-wrapper {
  width: 259px;
}
</style>
