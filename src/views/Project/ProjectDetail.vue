<template>
  <div>
    <section class="about_image">
      <img
        class="img-fluid fix-img"
        src="./../../assets/images/page-project/detail-project/project-banner-1.jpg"
        alt=""
      />
    </section>
    <!--================End Project Details Area =================-->

    <!--================End Project Details Area =================-->
    <section class="project_details_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="pd_item">
              <h5>Location: <span></span></h5>
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
                Area: <span>{{ projects.area }} sqr</span>
              </h5>
              <h5 class="share_link">Cost: {{ projects.cost }}</h5>
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
                  src="./../../assets/images/page-project/latest-project/project-s-1.jpg"
                  alt=""
                />
              </div>
              <div class="item">
                <img
                  src="./../../assets/images/page-project/latest-project/project-s-1.jpg"
                  alt=""
                />
              </div>
              <div class="item">
                <img
                  src="./../../assets/images/page-project/latest-project/project-s-1.jpg"
                  alt=""
                />
              </div>
            </slide>
            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
        <div class="villa_reviews">
          <h2>69 Comments</h2>
          <div class="list_comments" v-for="review in reviews" :key="review.id">
            <div class="comment_item">
              <img src="./../../assets/avatar.jpg" class="avatar" alt="img" />
              <div class="comment_content">
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
        <section class="comment_form first_form">
          <div class="container">
            <div class="fomment_form_inner box_layout fix_box_layout">
              <div class="comment_title">
                <h2>Leave a Review</h2>
              </div>
              <form
                class="row comment_from"
                action="#"
                method="post"
                novalidate="novalidate"
              >
                <div class="form-group col-md-12">
                  <textarea
                    class="form-control fix-textarea"
                    name="comment"
                    id="comment"
                    rows="1"
                    placeholder="Comment"
                  ></textarea>
                </div>
                <div class="form-group p_star col-md-6">
                  <input
                    type="number"
                    class="form-control"
                    id="rating"
                    name="rating"
                    required
                    min="1"
                    max="10"
                  />
                  <span
                    class="placeholder"
                    data-placeholder="Rating / 10"
                  ></span>
                </div>
                <div class="form-group col-md-12">
                  <architect-button value="value" type="submit"
                    >Post Comment</architect-button
                  >
                </div>
              </form>
            </div>
          </div>
        </section>
        <div class="link_btn">
          <a href="#">Let’s work together !</a>
        </div>
        <div class="related_post">
          <h4>Related Projects</h4>
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <div class="blog_g_item">
                <div class="press_img_item">
                  <div class="press_img">
                    <img
                      class="img-fluid"
                      src="./../../assets/images/page-project/related-project/related-1.jpg"
                      alt=""
                    />
                  </div>
                  <div class="date">
                    <a href="#">august 19, 2018</a>
                    <i class="ion-record"></i>
                    <a href="#">news</a>
                  </div>
                  <a href="#"><h4>Future Spaces Foundation</h4></a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="blog_g_item">
                <div class="press_img_item">
                  <div class="press_img">
                    <img
                      class="img-fluid"
                      src="./../../assets/images/page-project/related-project/related-2.jpg"
                      alt=""
                    />
                  </div>
                  <div class="date">
                    <a href="#">august 19, 2018</a>
                    <i class="ion-record"></i>
                    <a href="#">inspiration</a>
                  </div>
                  <a href="#"><h4>5 Broadgate tops out</h4></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Project Villa Area =================-->

    <!--comment form-->
    <section class="comment_form second_form">
      <div class="container">
        <div class="fomment_form_inner box_layout">
          <div class="comment_title">
            <h2>Leave a Message</h2>
            <p>Your email address will not be published</p>
          </div>
          <form
            class="row comment_from comment_from2"
            action="#"
            method="post"
            novalidate="novalidate"
          >
            <div class="form-group p_star col-md-6">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
              />
              <span class="placeholder" data-placeholder="Name"></span>
            </div>
            <div class="form-group p_star col-md-6">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
              <span class="placeholder" data-placeholder="Email"></span>
            </div>
            <div class="form-group col-md-12">
              <input
                type="text"
                class="form-control"
                id="sebject"
                name="sebject"
                placeholder="Subject (Optional)"
              />
            </div>
            <div class="form-group col-md-12">
              <textarea
                class="form-control"
                name="message"
                id="message"
                rows="1"
                placeholder="Message"
              ></textarea>
            </div>
            <div class="form-group col-md-12">
              <architect-button type="submit" value="submit"
                >Send message</architect-button
              >
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  created() {
    this.fetchDetailProject();
    this.fetchDetailReview();
  },
  computed: {
    projects() {
      return this.$store.getters["projects/getProjects"];
    },
    reviews() {
      return this.$store.getters["reviews/getReviews"];
    },
  },
  methods: {
    async fetchDetailProject() {
      try {
        this.$store.dispatch(
          "projects/fetchDetailProject",
          this.$route.params.id
        );
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDetailReview() {
      try {
        this.$store.dispatch(
          "reviews/fetchDetailReview",
          this.$route.params.id
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
#message {
  height: 200px;
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

.fix_box_layout {
  max-width: 100%;
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
