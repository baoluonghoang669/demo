<template>
  <div>
    <!--================Contact Area =================-->
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.241461923242!2d108.23503131443708!3d16.05295498889102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219d7dc514d97%3A0xa8d71291f45e6850!2zazU1LCAxMSBOZ8WpIEjDoG5oIFPGoW4sIE3hu7kgQW4sIE5nxakgSMOgbmggU8ahbiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1615921230571!5m2!1svi!2s"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      class="iframe"
    ></iframe>
    <!-- first dialog -->
    <architect-dialog :show="loading" title="Your message is being sent...">
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

    <!-- third dialog -->
    <architect-dialog
      :show="!!notify"
      title="Notification"
      @close="clearNotify"
      fixed
    >
      <p>{{ notify }}</p>
    </architect-dialog>

    <!-- contact form -->
    <section class="contact_area2">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="left_contact_details">
              <h1>Contact</h1>
              <h2><span>Viet Nam,</span> Da Nang City</h2>
              <p>
                K55/11 My An Ward, Ngu Hanh Son District<br />
                Da Nang City
              </p>
              <a href="tel:0796812312">(+84) 905 985 987</a>
              <a href="mailto:luonglinham@gmail.com">luonglinham@gmail.com</a>
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
              <form
                class="row contact_us_form js-form"
                @submit.prevent="sendMessage()"
              >
                <div class="form-group col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    v-model="name"
                  />
                </div>
                <div class="form-group col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="number"
                    class="form-control"
                    name="phone"
                    id="phone"
                    rows="1"
                    placeholder="Your phone number"
                    v-model="phone"
                  />
                </div>
                <div class="form-group col-md-12">
                  <textarea
                    class="form-control"
                    name="message"
                    id="message"
                    rows="1"
                    placeholder="Here goes your message"
                    v-model="message"
                  ></textarea>
                </div>
                <div class="warning-error" v-if="formIsInvalid">
                  We're sorry, but something went wrong
                </div>
                <div class="form-group col-md-12">
                  <button
                    type="submit"
                    value="submit"
                    class="order_s_btn form-control"
                  >
                    Send Message <i class="ion-ios-play"></i>
                  </button>
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
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      error: null,
      formIsInvalid: false,
      loading: false,
      notify: "",
    };
  },
  methods: {
    async sendMessage() {
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === "" ||
        this.name === "" ||
        this.phone === ""
      ) {
        this.formIsInvalid = true;
        return;
      }
      this.loading = true;
      const message = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      try {
        await this.$store
          .dispatch("messages/onSendMessage", message)
          .then(() => (this.notify = "Your message is successfully sent !"));
      } catch (err) {
        this.error = "Fail to send. Your email sent messages to us!";
        this.loading = false;
      }
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
      this.loading = false;
    },

    clearError() {
      this.error = null;
    },

    clearNotify() {
      this.notify = null;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
}
button:hover {
  background-color: none;
  color: #a3cc01;
  border: none;
}
.iframe {
  margin-top: 9%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
.warning-error {
  color: red;
}
</style>
