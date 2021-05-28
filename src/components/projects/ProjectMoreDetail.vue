<template>
  <div>
    <the-header></the-header>
    <div>
      <section class="about_image">
        <img class="img-fluid fix-img" :src="projects.photo" alt="" />
      </section>
      <!--================End Project Details Area =================-->
      <section class="breadcrumb_link">
        <div class="container">
          <router-link :to="{ name: 'ProjectMoreDetail' }">{{
            $t('menu.home')
          }}</router-link>
          <router-link :to="{ name: 'Project' }">{{
            $t('menu.project')
          }}</router-link>
        </div>
      </section>

      <!--================End Project Details Area =================-->
      <section class="project_details_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5 v-if="projects.categories">
                  {{ $t('category') }}:
                  <span>{{ projects.categories.name }}</span>
                </h5>
                <h5>
                  {{ $t('client') }}: <span>{{ projects.client }}</span>
                </h5>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5>
                  {{ $t('completed') }}: <span>{{ projects.completeDay }}</span>
                </h5>
                <h5>
                  {{ $t('architect') }}:
                  <span>{{ projects.architecture }}</span>
                </h5>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6">
              <div class="pd_item">
                <h5>
                  {{ $t('area') }}:
                  <span>{{ projects.area }} m<sup>2</sup></span>
                </h5>
                <h5 class="share_link">
                  {{ $t('cost') }}: <span>{{ projects.cost }} vnd</span>
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
            <el-carousel height="610px">
              <el-carousel-item
                v-for="project in projects.relatedPhoto"
                :key="project._id"
              >
                <img class="fix-img-slider" :src="project" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <!-- <div class="villa_slider">
            <carousel :items-to-show="1" :wrapAround="true" :transition="1000">
              <slide v-for="slide in 2" :key="slide">
                <div
                  class="item"
                  v-for="project in projects.relatedPhoto"
                  :key="project._id"
                >
                  <img class="fix-img-slider" :src="project" alt="" />
                </div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
          </div> -->
          <div class="villa_reviews" v-if="reviews">
            <h2>{{ reviews.length }} {{ $t('comment') }}</h2>
            <div
              class="list_comments"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="comment_item">
                <img :src="review.user.avatar" class="avatar" alt="img" />
                <div class="comment_content" v-if="review.user">
                  <h4>{{ review.user.name }}</h4>
                  <p>
                    {{ review.comment }}
                  </p>
                  <h5>{{ $t('rating') }}: {{ review.rating }}/10</h5>
                  <small>{{ review.createdAt }}</small>
                </div>
              </div>
            </div>
          </div>
          <comment-form></comment-form>
          <b
            >Contact:
            <a class="fix-tel" href="tel:+0902985987">(+84)902 985 987</a></b
          >
        </div>
      </section>
      <!--================End Project Villa Area =================-->
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
import TheFooter from '../layouts/TheFooter.vue';
import TheHeader from '../layouts/TheHeader.vue';
import CommentForm from '../comment/CommentForm.vue';
export default {
  components: {
    TheFooter,
    TheHeader,
    CommentForm,
  },
  data() {
    return {
      comment: '',
      rating: '',
    };
  },
  created() {
    this.fetchDetailProject();
    this.fetchDetailReview();
  },
  computed: {
    projects() {
      return this.$store.getters['projects/getProjectsDetail'];
    },
    reviews() {
      return this.$store.getters['reviews/getReviews'];
    },
  },
  methods: {
    async fetchDetailProject() {
      try {
        this.$store.dispatch(
          'projects/fetchDetailProject',
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },
    async fetchDetailReview() {
      try {
        this.$store.dispatch(
          'reviews/fetchDetailReview',
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>
<style scoped>
.fix-img-slider {
  width: 1111px;
  height: 610px;
}
.fix-img {
  width: 100%;
  height: 750px;
}
#message {
  height: 200px;
}
.fix_btn {
  background-color: #263a4f;
}
.carousel .carousel__prev {
  background-color: #263a4f;
}

.carousel .carousel__next {
  background-color: #263a4f;
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
  font-family: 'Heebo', sans-serif;
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
  font-family: 'Heebo', sans-serif;
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
