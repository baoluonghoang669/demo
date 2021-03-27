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

    <!--=============== Contact Form =================-->
    <contact-form></contact-form>

    <architect-advertise-label class="container"></architect-advertise-label>
  </div>
</template>
<script>
import ContactForm from "../components/auth/ContactForm.vue";
export default {
  components: { ContactForm },
};
</script>

<style scoped>
.iframe {
  margin-top: 9%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
