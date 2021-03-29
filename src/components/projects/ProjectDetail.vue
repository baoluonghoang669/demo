<template>
  <div>
    <the-header></the-header>
    <div>
      <section class="about_image">
        <img
          class="img-fluid fix-img"
          src="./../../assets/images/page-project/detail-project/project-banner-1.jpg"
          alt=""
        />
      </section>
      <!--================End Project Details Area =================-->
      <section class="breadcrumb_link">
        <div class="container">
          <router-link :to="{ name: 'ProjectDetail' }">Home</router-link>
          <router-link :to="{ name: 'Project' }">Projects</router-link>
        </div>
      </section>
      <!--================End Project Details Area =================-->
      <section class="project_details_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5 v-if="projects.categories">
                  Category: <span>{{ projects.categories.name }}</span>
                </h5>
                <h5>
                  Client: <span>{{ projects.client }}</span>
                </h5>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5>
                  Completed: <span>{{ projects.completeDay }}</span>
                </h5>
                <h5>
                  Architect: <span>{{ projects.architecture }}</span>
                </h5>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5>
                  Area: <span>{{ projects.area }} m<sup>2</sup></span>
                </h5>
                <h5 class="share_link">
                  Cost: <span>{{ projects.cost }} vnd</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--================End Project Details Area =================-->

      <!--================Project Villa Area =================-->
      <section class="project_villa_area">
        <div class="container">
          <div class="villa_text">
            <h2>{{ projects.name }}</h2>
            <p>
              {{ projects.description }}
            </p>
          </div>
          <div class="villa_slider">
            <carousel :items-to-show="1" :wrapAround="true" :transition="1000">
              <slide v-for="slide in 3" :key="slide">
                <div class="item">
                  <img
                    class="fix-img-slider"
                    src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=610&w=1170"
                    alt=""
                  />
                </div>
                <div class="item">
                  <img
                    class="fix-img-slider"
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=610&w=1170"
                    alt=""
                  />
                </div>
                <div class="item">
                  <img
                    class="fix-img-slider"
                    src="https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=610&w=1170"
                    alt=""
                  />
                </div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div>
          <div class="villa_reviews" v-if="reviews">
            <h2>{{ reviews.length }} Comments</h2>
            <div
              class="list_comments"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="comment_item">
                <img src="./../../assets/avatar.jpg" class="avatar" alt="img" />
                <div class="comment_content" v-if="review.user">
                  <h4>{{ review.user.name }}</h4>
                  <p>
                    {{ review.comment }}
                  </p>
                  <h5>Rating: {{ review.rating }}/10</h5>
                  <small>{{ review.createdAt }}</small>
                </div>
              </div>
            </div>
          </div>
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
          <section class="comment_form first_form">
            <div class="container">
              <div class="fomment_form_inner box_layout fix_box_layout">
                <div class="comment_title">
                  <h2>Leave a Review</h2>
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
                    <architect-button value="value" type="submit" v-if="isAuth"
                      >Post Comment</architect-button
                    >
                    <architect-button
                      link
                      :path="'/auth'"
                      :query="linkQuery"
                      value="value"
                      type="submit"
                      typeClass=" form-control fix_btn"
                      v-else
                      >Post comment</architect-button
                    >
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div class="link_btn">
            <architect-button link :path="'/contact'"
              >Let’s work together !</architect-button
            >
          </div>
          <b
            >Contact:
            <a class="fix-tel" href="tel:+0902985987">(+84)902 985 987</a></b
          >
          <project-related
            v-if="projects.categories"
            :category="projects.categories.id"
            :id="projects.id"
          ></project-related>
        </div>
      </section>
      <!--================End Project Villa Area =================-->
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import TheFooter from "../layouts/TheFooter.vue";
import TheHeader from "../layouts/TheHeader.vue";
import ProjectRelated from "./ProjectRelated.vue";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
    TheFooter,
    TheHeader,
    ProjectRelated,
  },
  data() {
    return {
      comment: "",
      rating: "",
      loading: false,
      error: null,
    };
  },
  created() {
    this.fetchDetailProject();
    this.fetchDetailReview();
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getProjectsDetail"];
    },
    reviews() {
      return this.$store.getters["reviews/getReviews"];
    },
    isAuth() {
      return this.$store.getters["auth/isAuth"];
    },
    linkQuery() {
      return "project/" + this.$route.params.id;
    },
  },
  methods: {
    async fetchDetailProject() {
      try {
        this.$store.dispatch(
          "projects/fetchDetailProject",
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },
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

      const comment = {
        comment: this.comment,
        rating: this.rating,
      };
      try {
        await this.$store
          .dispatch("reviews/addUserReview", comment)
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
#btn-submit {
  background-color: #263a4f;
  border: none;
}
#btn-submit:hover {
  background-color: #a3cc01 !important;
}
.fix-img-slider {
  width: 1111px;
  height: 610px;
}
#message {
  height: 200px;
}
.fix_btn {
  background-color: #263a4f;
}
.carousel .carousel__prev {
  background-color: #263a4f !important;
  border: none;
}

.carousel .carousel__next {
  background-color: #263a4f !important;
  border: none;
}

.avatar {
  width: 100px;
  height: 100px;
}

.villa_reviews {
  margin-top: 60px;
}

.villa_reviews h2 {
  color: #263a4f;
  font-family: "Heebo", sans-serif;
  font-weight: bold;
  font-size: 36px;
}
.comment_item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
}

.comment_content {
  padding-left: 40px;
}

.comment_content h4 {
  color: #263a4f;
  font-weight: 500;
  font-size: 18px;
}

.comment_content h5 {
  font-size: 12px;
}

.comment_content p {
  color: #8d9aa8;
}

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

.project_villa_area .link_btn {
  margin-top: 55px;
  margin-bottom: 55px;
}

/*second form*/
.second_form {
  background: #ebf0f4;
  padding: 130px 0;
}

#comment {
  height: 100px;
}
</style>
