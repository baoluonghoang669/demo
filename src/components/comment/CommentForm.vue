<template>
  <div>
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
    <section class="comment_form">
      <div class="container">
        <div class="fomment_form_inner box_layout fix_box_layout">
          <div class="comment_title">
            <h2>{{ $t("leave-review") }}</h2>
          </div>
          <form
            class="row comment_fro m"
            @submit.prevent="sendComment()"
            novalidate="novalidate"
          >
            <div class="form-group col-md-12">
              <textarea
                class="form-control fix-textarea"
                id="comment"
                rows="1"
                name="comment"
                placeholder="Comment"
                v-model="comment"
                required
              ></textarea>
            </div>
            <div class="form-group p_star col-md-6">
              <input
                type="number"
                class="form-control"
                id="rating"
                name="rating"
                placeholder="Rating/10"
                min="1"
                max="10"
                v-model.number="rating"
                required
              />
            </div>
            <div class="form-group col-md-12">
              <architect-button value="value" type="submit" v-if="isAuth">{{
                $t("post-comment")
              }}</architect-button>
              <architect-button
                link
                :path="'/auth'"
                :query="linkQuery"
                value="value"
                type="submit"
                typeClass=" form-control fix_btn"
                v-else
                >{{ $t("post-comment") }}</architect-button
              >
            </div>
          </form>
        </div>
      </div>
    </section>
    <div class="link_btn">
      <architect-button link :path="'/contact'"
        >{{ $t("work-together") }} !</architect-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comment: "",
      rating: "",
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchDetailReview();
  },

  computed: {
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    linkQuery() {
      return "project/" + this.$route.params.id;
    },
  },
  methods: {
    async fetchDetailReview() {
      try {
        this.$store.dispatch(
          "reviews/fetchDetailReview",
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },
    async sendComment() {
      this.loading = true;

      const data = {
        comment: this.comment,
        rating: this.rating,
      };

      try {
        await this.$store
          .dispatch("reviews/addUserReview", data)
          .then(() => this.fetchDetailReview())
          .then(() => {
            this.comment = "";
            this.rating = "";
          });
      } catch (err) {
        this.error = this.$t("notify-comment");
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
.comment_form {
  padding: 20px 0;
  background: transparent;
}

.comment_title {
  padding: 0;
}

.fix_btn {
  width: 170px;
  height: 50px;
  background: #263a4f;
  color: #fff;
  border-radius: 0px;
  border: none;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline: none !important;
  font-size: 14px;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  -webkit-transition: all 400ms linear 0s;
  -o-transition: all 400ms linear 0s;
  transition: all 400ms linear 0s;
  letter-spacing: 0.35px;
  text-transform: uppercase;
}
</style>
