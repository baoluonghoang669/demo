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
    <!--================End Post Gallery Slider Area =================-->

    <!--================About Studio Area =================-->
    <section class="about_studio_area">
      <div class="container">
        <div class="ab_studio_text">
          <h6 class="s_title white">Intria Studio</h6>
          <h5>
            Make is a different kind of architecture practice. Founded by Robert
            Downey Jr in 2004, we’re an employee-owned firm pursuing a
            democratic design process that values everyone’s input.
          </h5>
          <h5>
            Today we have more than 150 people in London, Hong Kong and Sydney
            providing architecture, interior and urban design services from
            concept to completion.
          </h5>
        </div>
      </div>
    </section>
    <!--================End About Studio Area =================-->

    <!--================Our Speciallization Area =================-->
    <section class="speciallization_area ab_spec white_cl">
      <div class="container">
        <h6 class="s_title white">Our Speciallization</h6>
        <div class="row">
          <!--list our speciallization (list of projects) -->
          <type-list></type-list>
          <!-- end list -->
        </div>
      </div>
    </section>
    <!--================End Our Speciallization Area =================-->

    <!--================Clients Area =================-->
    <section class="clients_area white_cl">
      <div class="container">
        <div class="main_title white">
          <h2>+2,500 Happy clients</h2>
        </div>

        <!-- Comment list of user -->
        <comment-list></comment-list>
        <!-- end comment -->

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

    <!--================Meet Team Area =================-->
    <section class="meet_team_area">
      <div class="container">
        <div class="team_inner">
          <h4>Meet Our Team</h4>
          <div class="team_slider owl-carousel">
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/team-1.jpg"
                  alt=""
                />
                <div class="hover">
                  <h5>Jason Staham</h5>
                  <h6>CEO Founder</h6>
                  <ul class="list">
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-twitter"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-facebook"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-linkedin"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/team-2.jpg"
                  alt=""
                />
                <div class="hover">
                  <h5>Jason Staham</h5>
                  <h6>CEO Founder</h6>
                  <ul class="list">
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-twitter"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-facebook"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-linkedin"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/team-3.jpg"
                  alt=""
                />
                <div class="hover">
                  <h5>Jason Staham</h5>
                  <h6>CEO Founder</h6>
                  <ul class="list">
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-twitter"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-facebook"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-linkedin"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="team_item">
                <img
                  src="./../assets/images/page-about/team/team-4.jpg"
                  alt=""
                />
                <div class="hover">
                  <h5>Jason Staham</h5>
                  <h6>CEO Founder</h6>
                  <ul class="list">
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-twitter"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-facebook"></i
                      ></router-link>
                    </li>
                    <li>
                      <router-link to="#"
                        ><i class="ion-social-linkedin"></i
                      ></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <router-link to="#"><h3>Join our team</h3></router-link>
        </div>
      </div>
    </section>
    <!--================End Meet Team Area =================-->
  </div>
</template>
<script>
import CommentList from "../components/comment/CommentList.vue";
import TypeList from "../components/typeProjects/TypeList.vue";
export default {
  components: { TypeList, CommentList },
};
</script>

<style scoped>
.fix-img {
  margin-top: 120px;
}
</style>
