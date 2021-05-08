<template>
  <div>
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
              <h1>{{ $t("menu.contact") }}</h1>
              <h2>
                <span>{{ $t("troc") }}</span> Việt Nam
              </h2>
              <p>
                {{ $t("detail-address") }}
              </p>
              <a href="tel:0796812312">(+84) 905 985 987</a>
              <a href="mailto:luonglinham@gmail.com">luonglinham@gmail.com</a>
              <a
                class="map_btn"
                href="https://www.google.com/maps/place/k55,+11+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+M%E1%BB%B9+An,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.052955,108.2350313,17z/data=!3m1!4b1!4m5!3m4!1s0x314219d7dc514d97:0xa8d71291f45e6850!8m2!3d16.052955!4d108.23722"
                target="_blank"
                >{{ $t("map") }} <i class="ion-chevron-right"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="right_contact_form">
              <h4>{{ $t("send-mess") }}</h4>
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
                    placeholder="Name"
                    v-model="name"
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
                    v-model="email"
                    required
                  />
                </div>
                <div class="form-group col-md-12">
                  <input
                    type="number"
                    class="form-control"
                    name="phone"
                    id="phone"
                    rows="1"
                    placeholder="Phone number"
                    v-model="phone"
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
                    v-model="message"
                    required
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
                    {{ $t("btn-send") }} <i class="ion-ios-play"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        this.error = err.response.data.error || "Fail to send!";
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
.warning-error {
  color: red;
}
</style>
