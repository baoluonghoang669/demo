<template>
  <div>
    <!--================Slider Home Area =================-->
    <section class="home_slider">
      <div
        id="home_full_slider"
        class="rev_slider fullscreenbanner"
        data-version="5.3.1.6"
      >
        <!-- MAIN IMAGE -->
        <img
          src="./../assets/images/slider1.jpg"
          alt="banner"
          data-bgposition="center center"
          data-bgfit="cover"
          data-bgrepeat="no-repeat"
          class="rev-slidebg"
          data-bgparallax="10"
          data-no-retina
        />
      </div>
      <div class="text_box">
        <div class="tp-caption tp-resizeme text_1">
          Brian’s Villa<br />Private Residence
        </div>
      </div>
      <div class="year">
        <router-link to="/">2018</router-link>
      </div>
      <div class="social_icon">
        <ul class="list">
          <li>
            <router-link to="/"><i class="ion-social-twitter"></i></router-link>
          </li>
          <li>
            <router-link to="/"
              ><i class="ion-social-facebook"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/"
              ><i class="ion-social-googleplus"></i
            ></router-link>
          </li>
        </ul>
      </div>
    </section>
    <!--================Inter Studio Area =================-->
    <section class="intes_studio_area white_cl">
      <div class="since_text">
        <h5>Since 2004</h5>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="studio_img">
              <img src="./../assets/images/studio1.jpg" alt="" />
              <div class="years_text">
                <div class="years_text_inner">
                  <h1>10</h1>
                  <h2>Years</h2>
                  <h4>working</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="studio_text">
              <h6 class="s_title white">Intria Studio</h6>
              <h3>Make is a different kind of architecture practice</h3>
              <h5>We know that good design means good business</h5>
              <p>
                Founded by Robert Downey Jr in 2004, we’re an employee-owned
                firm pursuing a democratic design process that values everyone’s
                input. Today we have more than 150 people in London, Hong Kong
                and Sydney providing architecture, interior & urban design
                services from concept to completion.
              </p>
              <router-link class="br_btn white" to="#"
                >more about us</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Inter Studio Area =================-->

    <!--================Our Speciallization Area =================-->
    <section class="speciallization_area white_cl">
      <div class="container">
        <h6 class="s_title white">Our Speciallization</h6>
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="spec_item">
              <img src="./../assets/images/icons/spec-d-1.png" alt="" />
              <h4>Architecture</h4>
              <p>
                Inter’s singular aim is to design the best buildings, places and
                spaces in the world. A central part of this is providing the
                complete design of buildings across a range of sectors.
              </p>
              <router-link class="view_btn white" to="#"
                >View project</router-link
              >
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="spec_item">
              <img src="./../assets/images/icons/spec-d-2.png" alt="" />
              <h4>Interior</h4>
              <p>
                We offer a fully integrated service that complements the
                overarching architectural concept, ensuring each project is
                finished to a high level of quality and detail.
              </p>
              <router-link class="view_btn white" to="#"
                >View project</router-link
              >
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="spec_item">
              <img src="./../assets/images/icons/spec-d-3.png" alt="" />
              <h4>Urban Design</h4>
              <p>
                Working with client and community, we deliver masterplans that
                create vibrant new places and spaces, attract people, and
                encourage investment through popularity and increased activity
              </p>
              <router-link class="view_btn white" to="#"
                >View project</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Our Speciallization Area =================-->

    <!--================Latest Project Area =================-->
    <section class="latest_project white_cl">
      <div class="container">
        <div class="l_text">
          <div class="float-md-left">
            <div class="main_title white">
              <h2>Latest projects</h2>
            </div>
          </div>
          <div class="float-md-right">
            <ul class="portfolio_filter list">
              <li class="active" data-filter="*">
                <router-link to="#">All</router-link>
              </li>
              <li data-filter=".arc">
                <router-link to="#">Architecture</router-link>
              </li>
              <li data-filter=".inter">
                <router-link to="#">Interior</router-link>
              </li>
              <li data-filter=".urban">
                <router-link to="#">Urban Design</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fillter_slider owl-carousel">
        <div class="item arc urban">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-1.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item arc inter">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-2.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item arc inter urban">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-3.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item arc urban">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-4.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item inter inter">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-4.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item inter">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-3.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item inter urban">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-1.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="item inter urban">
          <div class="projects_item">
            <img src="./../assets/images/products/l-project-2.jpg" alt="" />
            <div class="hover">
              <router-link to="#"
                ><i class="ion-android-arrow-forward"></i
              ></router-link>
              <div class="project_text">
                <h5>Interior - Architecture</h5>
                <router-link to="#"
                  ><h4>Private Residence In North London</h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Latest Project Area =================-->

    <!--================Our Press Area =================-->
    <section class="our_press_area white_cl">
      <div class="container">
        <h6 class="s_title white">Our Press</h6>
        <div class="row">
          <div class="col-lg-6">
            <div class="press_img_item">
              <div class="press_img">
                <img
                  class="img-fluid"
                  src="./../assets/images/press.jpg"
                  alt=""
                />
              </div>
              <div class="date">
                <router-link to="#">august 19, 2018</router-link>
                <i class="ion-record"></i>
                <router-link to="#">news</router-link>
              </div>
              <router-link to="#"
                ><h4>
                  HPG Australia announces winning design team on One Sydney Park
                </h4></router-link
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="press_item_inner">
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 30, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">event</router-link>
                </div>
                <router-link to="#"
                  ><h4>CTBUH International Conference 2017</h4></router-link
                >
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 20, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"
                  ><h4>
                    Changing it up: Make commissions artist Garth Knight for
                    groundbreaking new display suite
                  </h4></router-link
                >
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">july 26, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"><h4>LandAid SleepOut</h4></router-link>
              </div>
              <div class="press_item">
                <div class="date">
                  <router-link to="#">May 19, 2018</router-link>
                  <i class="ion-record"></i>
                  <router-link to="#">News</router-link>
                </div>
                <router-link to="#"
                  ><h4>
                    Planning approved for restoration of Hornsey Town Hall
                  </h4></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Our Press Area =================-->

    <!--================Clients Area =================-->
    <section class="clients_area white_cl">
      <div class="container">
        <div class="main_title white">
          <h2>+2,500 Happy clients</h2>
        </div>
        <div class="testimonials_slider owl-carousel">
          <div class="item">
            <div class="test_item">
              <h4><span>Ryan Betthalyn</span> / Director at Chobham Manor</h4>
              <p>
                Sed elit quam, iaculis sed semper sit amet udin vitae nibh.
                Rubino staveuo at magna akal semperFusce commodo molestie
                luctus.Lorem ipsum ulicon Dolor tusima olatiup.
              </p>
            </div>
          </div>
          <div class="item">
            <div class="test_item">
              <h4><span>Bobs Hanley</span> / Owner of Edden Villa</h4>
              <p>
                Paras stalor ed elit quam, iaculis sed semper sit amet udin
                vitae nibh. at magna akal semperFusce commodo molestie
                luctus.Lorem ipsum vitalun Dolor tusima olatiup aculis sed
                semper sit ame
              </p>
            </div>
          </div>
        </div>
        <div class="clients_slider owl-carousel">
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-1.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-2.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-3.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-4.png" alt="" />
          </div>
          <div class="item">
            <img src="./../assets/images/clients-logo/c-logo-d-5.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!--================End Clients Area =================-->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.testimonials_slider {
  display: flex;
}

</style>
