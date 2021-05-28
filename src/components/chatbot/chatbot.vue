<template>
  <teleport to="body">
    <button class="btn-open-chatbot" @click="onOpen" v-if="!show">
      <i class="fas fa-comment-dots"></i>
    </button>
    <transition name="fade">
      <div class="form-chatbot" open v-if="show">
        <div class="title-chatbot">
          <h3 class="text-center">Architecture ChatBot</h3>
          <p class="fas fa-hide" @click="onHide">_</p>
          <el-popover
            class="mockup"
            placement="top"
            :width="431"
            v-model:visible="visible"
          >
            <b>{{ $t('end-chat') }}</b>
            <p>
              {{ $t('text-end-chat') }}
            </p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible = false">{{
                $t('cancel')
              }}</el-button>
              <el-button type="primary" size="mini" @click="onClose">{{
                $t('confirm')
              }}</el-button>
            </div>
            <template #reference>
              <i class="fas fa-times" @click="visible"></i>
            </template>
          </el-popover>
        </div>

        <div class="messaging">
          <div class="inbox_msg">
            <div class="mesgs">
              <div class="msg_history" ref="chatbox">
                <div class="incoming_msg">
                  <div class="incoming_msg_img">
                    <img
                      src="https://ptetutorials.com/images/user-profile.png"
                      alt="sunil"
                    />
                  </div>
                  <div class="received_msg">
                    <div class="received_withd_msg">
                      <p>{{ $t('help-you') }}</p>
                      <span class="time_date"> {{ timestamp }} AM | Today</span>
                    </div>
                  </div>
                </div>
                <div class="flex-messages">
                  <div class="msg_request" v-if="clearData === false">
                    <div
                      v-for="msgData in form"
                      :key="msgData.id"
                      :class="[msgData.sender === 'bot' ? 'isBot' : 'isUser']"
                    >
                      <div
                        class="incoming_msg_img"
                        v-if="msgData.sender === 'bot'"
                      >
                        <img
                          src="https://ptetutorials.com/images/user-profile.png"
                          alt="sunil"
                        />
                      </div>
                      <div v-if="msgData.msg !== ''">
                        <p v-if="msgData.msg.includes('http')">
                          {{
                            msgData.msg.slice(0, msgData.msg.indexOf(':') + 1)
                          }}

                          <a
                            :href="
                              msgData.msg.slice(
                                msgData.msg.indexOf(':') + 1,
                                msgData.msg.length
                              )
                            "
                            >{{
                              msgData.msg.slice(
                                msgData.msg.indexOf(':') + 1,
                                msgData.msg.length
                              )
                            }}</a
                          >
                        </p>
                        <p v-else>
                          {{ msgData.msg }}
                        </p>
                        <span class="time_date"> {{ timestamp }} | Today</span>
                      </div>
                    </div>
                  </div>
                  <div v-else></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="type_msg">
          <input
            type="msg"
            name="msg"
            v-model="form.msg"
            class="write_msg"
            placeholder="Type a message"
            @keyup.enter="onSubmit"
          />
          <button class="msg_send_btn" type="submit">
            <i
              class="fa fa-paper-plane-o"
              aria-hidden="true"
              @click="onSubmit"
            ></i>
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isSend: false,
      isDelete: false,
      form: [
        {
          msg: '',
        },
      ],
      err: null,
      timestamp: '',
      clearData: false,
      loading: false,
      visible: false,
    };
  },
  computed: {
    messages() {
      return this.$store.getters['auth/getListMessages'];
    },
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  methods: {
    //bugs
    onOpen() {
      this.show = true;
    },
    tryClose() {
      this.show = false;
    },
    onHide() {
      this.show = false;
    },
    onClose() {
      this.visible = false;
      this.show = false;
      this.form = this.$store.getters['auth/clearListMessages'];
      this.clearData = true;
      // debugs
      // window.location.reload();
    },

    getNow() {
      const today = new Date();
      const date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
      const time = today.getHours() + ':' + today.getMinutes();
      const dateTime = date + ' ' + time;
      this.timestamp = dateTime;
    },

    async onSubmit() {
      const chatboxEl = this.$refs.chatbox;
      if (this.form.msg === '') {
        return;
      }
      let data = new FormData();
      data.append('msg', this.form.msg);
      this.isSend = true;
      this.loading = true;
      this.form.push({ msg: this.form.msg });
      try {
        const msgRes = await this.$store.dispatch('auth/onSendChat', data);
        this.form.push({ msg: msgRes, sender: 'bot' });
        this.form.msg = '';
        chatboxEl.scrollTo(0, chatboxEl.scrollHeight);
      } catch (error) {
        this.err = error;
      }
      this.loading = false;
    },
  },
};
</script>
<style scoped>
.flex_messages {
  display: flex;
  flex-direction: column;
}
.msg_request {
  display: block;
}
.msg_response {
  display: block;
}

.header-chatbot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.form-chatbot {
  border-radius: 3%;
  display: block;
  border: none;
  width: 450px;
  position: fixed;
  right: 2%;
  bottom: 2%;
  z-index: 2000;
  height: 500px;
  background-color: #263a4f;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/**/
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  /* border-top: 1px solid #c4c4c4;s */
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}
.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
}
.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  float: left;
  padding: 2px 0px 0 0px;
  width: 100%;
}

.sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  float: right;
  width: 46%;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #fff;
  bottom: 0;
  position: absolute;
  width: 100%;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 4px;
  top: 2px;
  width: 33px;
  outline: none;
}
.msg_send_btn:hover {
  transform: scale(0.9);
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  overflow: auto;
  height: 372px;
  padding: 0 20px;
}

.write_msg {
  width: 90%;
  padding: 8px 5px;
  outline: none;
  border: none;
  background-color: rgb(228, 231, 235);
}

.msg_request {
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-end;
}

.isBot {
  display: flex;
  align-self: flex-start;
}

.isBot > div > p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0 8px;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.isBot > div > a {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0 8px;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.isUser > div > p {
  background: #a3cc01 none repeat scroll 0 0;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.fa-times {
  position: absolute;
  top: 4%;
  right: 3%;
  color: white;
  cursor: pointer;
}

.text-center {
  color: #fff;
  padding: 10px 0;
}

.fa-hide {
  position: absolute;
  top: 2%;
  right: 8%;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}

.fa-hide:hover,
.fa-times:hover {
  transform: scale(0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.title-chatbot {
  background-color: #a3cc01;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
}
/* btn-chatbot*/
.btn-open-chatbot {
  right: 3%;
  position: fixed;
  z-index: 9999;
  bottom: 4%;
  border-radius: 50%;
  padding: 12px;
  background-color: #a3cc01;
  border: none;
  outline: none;
  color: #fff;
}
.btn-open-chatbot:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}

.form-delete {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #a3cc01;
  height: 200px;
  width: 200px;
}

.el-popper {
  z-index: 9999;
  position: absolute;
  right: 0;
}
</style>
