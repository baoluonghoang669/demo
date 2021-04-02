<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="card-title">Notifications</h5>
            <p class="card-category">
              All messages from users . Please checkout the data and your email.
            </p>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="card card-plain">
                  <div class="card-header">
                    <h5 class="card-title">Notifications</h5>
                  </div>
                  <div class="card-body">
                    <div
                      class="alert alert-primary alert-dismissible fade show"
                      v-for="message in messages"
                      :key="message._id"
                    >
                      <div>
                        <span
                          ><b>
                            {{ message.email }} -
                            <a href="tel:+0902985987">{{ message.phone }}</a>
                            - </b
                          >{{ message.message }}</span
                        >
                        <div><b>Send time: </b> {{ message.createdAt }}</div>
                      </div>
                      <form>
                        <div v-if="message.isContacted === true">
                          <b>IsContact: </b> <i class="fas fa-check"></i>
                        </div>
                        <div v-else>
                          <b>IsContact: </b>
                          <i
                            class="fas fa-times"
                            @click="updateMessage(message._id)"
                          ></i>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      error: null,
    };
  },
  created() {
    this.fetchAllMessage();
  },
  computed: {
    messages: {
      get() {
        return this.$store.getters["messages/getMessages"];
      },
      set(value) {
        this.$store.commit("messages/UPDATE_CONTACT_MESSAGE", value);
      },
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

    async updateMessage(id) {
      try {
        await this.$store
          .dispatch("messages/updateMessage", id)
          .then(() => window.location.reload());
      } catch (err) {
        this.error = err;
      }
    },
  },
};
</script>
<style scoped>
@import "../../../public/css/dashboard/paper-dashboard.css";
@import "../../../public/css/dashboard/bootstrap.min.css";
.fas {
  cursor: pointer;
}
.show {
  display: flex;
  justify-content: space-between;
}
.sidebar,
.sidebar-wrapper {
  background-color: #263a4f !important;
}

.sidebar:after {
  background-color: #263a4f !important;
}

.sidebar .sidebar-wrapper {
  width: 259px;
}

.btn-primary {
  background-color: #263a4f !important;
  width: 200px;
  margin: 0 15px;
  border: none;
}

.btn-primary:hover {
  background-color: #a3cc01 !important;
  transition: 0.3s all ease;
}
</style>
