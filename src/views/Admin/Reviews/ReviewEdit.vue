<template>
  <div class="container rounded bg-none">
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
    <form @submit.prevent="onSave()">
      <div class="col-md-8">
        <architect-button
          typeClass="fix-back-btn"
          link
          :path="'/dashboard/reviews'"
        >
          <i class="fas fa-undo-alt"></i
        ></architect-button>
        <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="text-center">Form Edit Review</h4>
          </div>
          <div class="row mt-3">
            <div class="col-md-12">
              <label class="labels">Comment</label>
              <input
                type="text"
                name="comment"
                class="form-control"
                placeholder="Comment"
                v-model="comment"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Rating</label
              ><input
                type="number"
                name="rating"
                class="form-control"
                placeholder="Rating"
                v-model.number="rating"
              />
            </div>
            <div class="col-md-12">
              <label class="labels">Id Project</label
              ><input
                type="text"
                name="idProject"
                class="form-control"
                v-model="project"
                disabled
              />
            </div>
          </div>
          <div class="mt-5 text-center">
            <button class="btn btn-primary fixed-button" type="submit">
              Save and Update
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
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchReviewById();
  },
  computed: {
    comment: {
      get() {
        return this.$store.state.reviews.detailReview.comment;
      },
      set(value) {
        this.$store.commit("reviews/updateComment", value);
      },
    },
    rating: {
      get() {
        return this.$store.state.reviews.detailReview.rating;
      },
      set(value) {
        this.$store.commit("reviews/updateRating", value);
      },
    },
    project: {
      get() {
        if (this.$store.state.reviews.detailReview.project) {
          return this.$store.state.reviews.detailReview.project.name;
        }
        return this.$store.state.reviews.detailReview.project;
      },
      set(value) {
        this.$store.commit("reviews/updateProject", value);
      },
    },
  },
  methods: {
    async fetchReviewById() {
      try {
        await this.$store.dispatch(
          "reviews/fetchReviewById",
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },

    async onSave() {
      this.loading = true;
      const data = {
        comment: this.comment,
        rating: this.rating,
      };
      try {
        await this.$store.dispatch("reviews/updateReviewById", data);

        this.$router.replace({ name: "ReviewList" });
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
