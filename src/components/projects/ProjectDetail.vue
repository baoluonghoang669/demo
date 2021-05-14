<template>
  <div>
    <the-header></the-header>
    <div>
      <section class="about_image">
        <img
          v-if="projects"
          class="img-fluid fix-img"
          :src="projects.photo"
          alt=""
        />
      </section>
      <!--================End Project Details Area =================-->
      <section class="breadcrumb_link">
        <div class="container">
          <router-link :to="{ name: 'ProjectDetail' }">{{
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
          <div class="villa_reviews" v-if="reviews">
            <h2>{{ reviews.length }} {{ $t('comment') }}</h2>
            <div
              class="list_comments"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="comment_item">
                <img
                  v-if="review.user"
                  :src="review.user.avatar"
                  class="avatar"
                  alt="img"
                />
                <form class="comment_content" v-if="review.user">
                  <h4>{{ review.user.name }}</h4>

                  <p>{{ review.comment }}</p>

                  <h5>{{ $t('rating') }}: {{ review.rating }}/10</h5>
                  <small>{{
                    formatDate(review.createdAt, 'DD/MM/YYYY HH:mm')
                  }}</small>
                </form>
                <p @click="dialogVisible = true" v-if="isAuth">
                  <i class="far fa-trash-alt"></i>
                </p>
                <el-dialog
                  title="Notification"
                  v-model="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                >
                  <span>{{ $t('make-sure') }}</span>
                  <template #footer>
                    <span class="dialog-footer">
                      <el-button @click="dialogVisible = false">{{
                        $t('cancel')
                      }}</el-button>
                      <el-button type="primary" @click="onDelete(review._id)">{{
                        $t('confirm')
                      }}</el-button>
                    </span>
                  </template>
                </el-dialog>
              </div>
            </div>
          </div>
          <comment-form></comment-form>
          <b
            >{{ $t('menu.contact') }}:
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
import 'vue3-carousel/dist/carousel.css';
import { formatDate } from '../../helpers/common';
import TheFooter from '../layouts/TheFooter.vue';
import TheHeader from '../layouts/TheHeader.vue';
import ProjectRelated from './ProjectRelated.vue';
import CommentForm from '../comment/CommentForm.vue';
export default {
  components: {
    TheFooter,
    TheHeader,
    ProjectRelated,
    CommentForm,
  },
  async mounted() {
    await this.fetchDetailProject();
  },
  data() {
    return {
      loading: false,
      detail: null,
      dialogVisible: false,
      formatDate,
    };
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth'];
    },
    projects() {
      return this.$store.getters['projects/getProjectsDetail'];
    },
    reviews() {
      return this.$store.getters['reviews/getReviews'];
    },
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(() => {
          done();
          this.dialogVisible = false;
        })
        .catch(() => {});
    },
    async fetchDetailProject() {
      this.loading = true;
      try {
        this.$store.dispatch(
          'projects/fetchDetailProject',
          this.$route.params.id
        );
      } catch (err) {
        this.error = err;
      }
      this.loading = false;
    },
    onDelete(id) {
      try {
        this.$store.dispatch('reviews/onDeleteReview', id);
      } catch (err) {
        this.error = err;
      }
      this.dialogVisible = false;
    },
  },
};
</script>
<style scoped>
.fix-img {
  width: 100%;
  height: 750px;
}
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
  font-family: 'Heebo', sans-serif;
  font-weight: bold;
  font-size: 36px;
}
.comment_item {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 0;
}

.comment_content {
  padding-left: 40px;
  flex-grow: 1;
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

/* ui-element */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-icon--right {
  width: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.far {
  cursor: pointer;
}
</style>
