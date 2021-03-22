import axios from "axios";

export default {
  async fetchAllMessage({ commit }) {
    const url = process.env.VUE_APP_GET_MESSAGES;

    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("setMessages", responseData);
  },

  async onSendMessage({ commit }, payload) {
    const url = process.env.VUE_APP_GET_MESSAGES;

    const message = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
    };

    const response = await axios.post(url, message, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const responseData = response.data.data;
    if (responseData.success === false) {
      //error
    }

    commit("postMessages", message);
  },

  async updateMessage({ commit }, payload) {
    const url = `${process.env.VUE_APP_GET_MESSAGES}/${payload}`;

    const message = {
      isContacted: !payload.isContacted,
    };

    const response = await axios.put(url, message, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    if (response.success === false) {
      //error
    }

    commit("updateContact", message);
  },
};
