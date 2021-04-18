<template>
  <teleport to="body">
    <!-- <button class="cc" @click="onOpen">button</button> -->
    <transition name="dialog">
      <div class="form-chatbot" open v-if="show">
        <div class="col-md-10 mr-auto ml-auto">
          <div class="header-chatbot">
            <h3>Architecture ChatBot</h3>
            <i class="fas fa-times" @click="onClose"></i>
          </div>
          <form @submit.prevent="onSubmit()">
            <div id="chatbox">
              <div class="col-md-8 ml-auto mr-auto">
                <p class="botText"><span>Hi! I'm Your bot.</span></p>
              </div>
            </div>
            <div id="userInput" class="row">
              <div class="col-md-10">
                <input
                  id="text"
                  type="text"
                  name="msg"
                  v-model="tester"
                  placeholder="Message"
                  class="form-control"
                />
                <button type="submit" id="send" class="btn btn-warning">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      tester: null,
    };
  },
  created() {
    console.log(axios.get("http://localhost:5000/get"));
  },
  methods: {
    onOpen() {
      this.show = true;
    },
    tryClose() {
      this.show = false;
    },
    onClose() {
      this.show = false;
    },
    onSubmit() {
      console.log(axios.post("http://localhost:5000/get", this.tester));
    },
  },
};
</script>
<style scoped>
.cc {
  right: 3%;
  position: fixed;
  z-index: 9999;
  bottom: 0;
}
.header-chatbot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-chatbot {
  display: block;
  border: none;
  width: 30%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99999;
  height: 400px;
  background-color: #263a4f;
}
</style>
