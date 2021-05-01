<template>
  <div>
    <!--================Post Gallery Slider Area =================-->
    <section class="about_image">
      <img
        class="img-fluid fix-img"
        src="./../assets/images/page-about/about-img.jpg"
        alt=""
      />
    </section>
    <!--================About Studio Area =================-->
    <section class="about_studio_area">
      <div class="container">
        <div class="ab_studio_text">
          <h6 class="s_title white">{{ $t("troc") }}</h6>
          <h5>
            {{ $t("text-about") }}
          </h5>
          <h5>
            {{ $t("today-about") }}
          </h5>
        </div>
      </div>
    </section>

    <!--================End Clients Area =================-->
    <section class="blog_sidebar_area">
      <div class="container">
        <div class="row row_direction">
          <div class="col-lg-12 offset-lg-1">
            <div class="s_blog_text_inner video_s_blog">
              <div class="blog_main_text">
                <a href="#"
                  ><h4>{{ $t("best") }}</h4></a
                >
                <div class="date">
                  <a href="#">{{ $t("day1z") }}</a>
                  <i class="ion-record"></i>
                  <a href="#">{{ $t("news") }}</a>
                </div>
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe
                    class="embed-responsive"
                    src="https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0"
                  ></iframe>
                </div>
                <p>
                  {{ $t("des-about") }}
                </p>
                <p>
                  {{ $t("say-about") }}
                </p>
                <p>
                  {{ $t("end-about") }}
                </p>
                <p>
                  {{ $t("txt") }}
                </p>
                <p>
                  {{ $t("txt-more") }}
                </p>
                <img
                  class="img-fluid"
                  src="img/blog/single-blog-2.jpg"
                  alt=""
                />
                <h5>{{ $t("txt1") }}</h5>
                <p>
                  {{ $t("txt2") }}
                </p>
                <blockquote class="blockquote">
                  <h6>
                    <i>“</i> {{ $t("txt3") }}<br />
                    {{ $t("txt4") }}
                  </h6>
                </blockquote>
                <p>
                  {{ $t("txt5") }}
                </p>
                <div class="s_blog_tag">
                  <architect-button link :name="'Project'">{{
                    $t("view-project")
                  }}</architect-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================Meet Team Area =================-->
    <section class="meet_team_area">
      <div class="container">
        <div class="team_inner">
          <h4>{{ $t("meet-team") }}</h4>
          <div class="team_slider owl-carousel">
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/linh.jpg"
                  alt="img"
                />
                <div class="hover">
                  <h5>{{ $t("CEO") }}</h5>
                  <h6>{{ $t("founder") }}</h6>
                  <ul class="list">
                    <li>
                      <a href="https://www.facebook.com/linh.luong.37"
                        ><i class="ion-social-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/linh.luong.37"
                        ><i class="ion-social-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/linh.luong.37"
                        ><i class="ion-social-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/khanh.png"
                  alt="img"
                />
                <div class="hover">
                  <h5>{{ $t("DIRECTOR") }}</h5>
                  <h6>{{ $t("director") }}</h6>
                  <ul class="list">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100016579994548"
                        ><i class="ion-social-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100016579994548"
                        ><i class="ion-social-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100016579994548"
                        ><i class="ion-social-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/khanh2.png"
                  alt="img"
                />
                <div class="hover">
                  <h5>{{ $t("MANAGER") }}</h5>
                  <h6>{{ $t("manager") }}</h6>
                  <ul class="list">
                    <li>
                      <a href="https://www.facebook.com/khanh.tran.1987"
                        ><i class="ion-social-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/khanh.tran.1987"
                        ><i class="ion-social-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/khanh.tran.1987"
                        ><i class="ion-social-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/hinhvuong.png"
                  alt="img"
                />
                <div class="hover">
                  <h5>{{ $t("DESIGNER") }}</h5>
                  <h6>{{ $t("designer") }}</h6>
                  <ul class="list">
                    <li>
                      <a href="https://www.facebook.com/Tv.tien2507"
                        ><i class="ion-social-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Tv.tien2507"
                        ><i class="ion-social-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Tv.tien2507"
                        ><i class="ion-social-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href="https://www.facebook.com/TROC-Studio-111045133645249"
            ><h3>{{ $t("our-fanpage") }}</h3></a
          >
        </div>
      </div>
    </section>
    <!--================End Meet Team Area =================-->
    <architect-advertise-label class="container"></architect-advertise-label>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style scoped>
.fix-img {
  margin-top: 120px;
}
a {
  cursor: pointer;
}

a:hover {
  border-bottom: 1px solid #fff;
}
</style>
