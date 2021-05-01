<template>
  <nav
    class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent"
  >
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle">
          <button type="button" class="navbar-toggler">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <router-link class="navbar-brand" to="/">Troc Design</router-link>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="navbar-nav">
          <li class="nav-item btn-rotate dropdown">
            <div class="notify">
              <i class="far fa-bell" plain @click="open"></i>
              <p class="notification-messages">{{ isReadedMessages }}</p>
            </div>
          </li>
          <li class="nav-item">
            <architect-button link class="nav-link btn-rotate" :name="'Home'">
              <i class="fas fa-home"></i>
            </architect-button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { h } from "vue";
import ArchitectButton from "../../common/ArchitectButton.vue";
export default {
  components: { ArchitectButton },
  created() {
    this.fetchAllMessage();
  },
  computed: {
    isReadedMessages() {
      return this.$store.getters["messages/isReadedMessages"];
    },
  },
  methods: {
    async fetchAllMessage() {
      try {
        await this.$store.dispatch("messages/fetchAllMessage");
      } catch (err) {
        this.error = err;
      }
    },
    open() {
      this.$notify({
        title: "Notification",
        message: h(
          "i",
          { style: "color: teal" },
          `You just received ${this.isReadedMessages} new messages`
        ),
      });
    },
  },
};
</script>
<style scoped>
.navbar.navbar-transparent {
  background-color: #263a4f !important;
}

a,
.fa-home {
  color: #fff !important;
}

.fa-home:hover {
  transform: scale(0.9);
}

.input-group::placeholder {
  color: #fff !important;
}

.navbar-wrapper {
  transform: translateX(257px);
}

.fa-search {
  color: #fff !important;
  transform: translateX(5px);
  cursor: pointer;
}

.fa-search:hover {
  color: #a3cc01 !important;
}

.fa-bell {
  transform: translateY(6px);
  color: #fff;
}

.notify {
  cursor: pointer;
}

.notify:hover {
  transform: scale(0.9);
}

.notification-messages {
  color: #fff;
  font-weight: bold;
  padding: 0 3px;
  border: 1px solid red;
  background-color: red;
  border-radius: 50%;
}
</style>
