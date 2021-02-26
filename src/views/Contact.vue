<template>
  <div>
    <!--================Contact Area =================-->
    <section class="contact_area2">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="left_contact_details">
              <h1>Contact</h1>
              <h2><span>New York,</span> United States</h2>
              <p>
                No. 1002, Dahill Rd Str, Borough Park,<br />
                NY 9982, USA
              </p>
              <a href="tel:3689565656">(+070) 3689 56 56 56</a>
              <a href="mailto:contact@interstudio.co">contact@interstudio.co</a>
              <a
                class="map_btn"
                href="https://www.google.com/maps/place/%E0%A6%B0%E0%A6%BE%E0%A6%B6%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE/@49.7916688,68.7571364,3z/data=!3m1!4b1!4m5!3m4!1s0x453c569a896724fb:0x1409fdf86611f613!8m2!3d61.52401!4d105.318756"
                target="_blank"
                >Map Direction <i class="ion-chevron-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="right_contact_form">
              <h4>Send a message for us</h4>
              <form class="row contact_us_form js-form">
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Adam Warlock"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Here goes your message"
                    required
                  ></textarea>
                </div>
                <div class="form-group col-md-12">
                  <button
                    type="submit"
                    value="submit"
                    class="btn order_s_btn form-control"
                  >
                    Send Message <i class="ion-ios-play"></i>
                  </button>
                </div>
                <div class="success-message">
                  <i class="fa fa-check text-primary"></i> Thank you!. Your
                  message is successfully sent...
                </div>
                <div class="error-message">
                  We're sorry, but something went wrong
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--================End Contact Area =================-->
  </div>
</template>
<script>
export default {};
</script>

<style scoped></style>
