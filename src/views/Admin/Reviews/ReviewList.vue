<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">All Reviews</h4>
          </div>
          <div class="input-group no-border fix-position-input">
            <input
              type="text"
              v-model="search"
              class="form-control"
              placeholder="Search by comment..."
            />
          </div>
          <div class="card-body">
            <div v-if="loading"><architect-loading></architect-loading></div>
            <div
              class="table-responsive"
              v-else-if="!loading && reviews && reviews.length > 0"
            >
              <table class="table">
                <thead class=" text-primary">
                  <th>
                    Comment
                  </th>
                  <th>
                    Rating
                  </th>
                  <th>
                    Related Projects
                  </th>
                  <th>
                    User
                  </th>
                  <th>
                    Edit
                  </th>
                </thead>
                <tbody v-for="review in researchReviews" :key="review.id">
                  <tr>
                    <td>
                      {{ review.comment }}
                    </td>
                    <td>
                      {{ review.rating }}
                    </td>
                    <td v-if="review.project">
                      {{ review.project.name }}
                    </td>
                    <td v-else></td>
                    <td>
                      {{ review.user }}
                    </td>
                    <td class="flex-edit">
                      <architect-button
                        link
                        :path="'/dashboard/reviews/editReview/' + review._id"
                        ><i class="far fa-edit"></i
                      ></architect-button>

                      <i
                        class="far fa-trash-alt"
                        @click="onDelete(review._id)"
                      ></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else>There is no reviews !</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ArchitectButton from "../../../components/common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  data() {
    return {
      loading: false,
      err: null,
      search: "",
    };
  },
  created() {
    this.fetchAllReviews();
  },
  computed: {
    reviews() {
      return this.$store.getters["reviews/getReviews"];
    },
    researchReviews() {
      if (this.search) {
        return this.reviews.filter((review) => {
          return review.comment.startsWith(this.search);
        });
      } else {
        return this.reviews;
      }
    },
  },
  methods: {
    async onDelete(id) {
      try {
        await this.$store.dispatch("reviews/onDeleteReview", id);
      } catch (error) {
        this.err = error;
      }
    },
    async fetchAllReviews() {
      try {
        await this.$store.dispatch("reviews/fetchAllReviews");
      } catch (error) {
        this.err = error;
      }
    },
  },
};
</script>
<style scoped>
@import "../../../../public/css/dashboard/paper-dashboard.css";
@import "../../../../public/css/dashboard/bootstrap.min.css";
.flex-edit {
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.nav li a {
  color: #fff;
}

.fa-edit {
  color: #a3cc01;
  margin: 0 2px;
  cursor: pointer;
}
.fa-trash-alt {
  color: red;
  cursor: pointer;
}

.btn-primary {
  background-color: #263a4f !important;
  width: 200px;
  margin: 0 15px;
  border: none;
}

.btn-primary:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}

th {
  color: #263a4f;
}

td,
th {
  text-align: center;
}
.fix-position-input {
  width: 40%;
  left: 58%;
  transform: translateY(-35px);
  outline: none;
}
</style>
