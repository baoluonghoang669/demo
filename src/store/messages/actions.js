import axios from "axios";
export default {
  async onSendMessage({ commit }, payload) {
    const url = process.env.VUE_APP_GET_MESSAGES;

    const message = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
    };

    const response = await axios.post(url, message);
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setMessages", message);
  },
};
