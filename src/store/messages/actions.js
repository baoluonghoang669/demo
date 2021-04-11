import http from "../../helpers/http";

export default {
  //Fetch all messsages
  async fetchAllMessage({ commit }) {
    const response = await http.get("messages");
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("SET_MESSAGES", responseData);
  },

  //Send a messsage
  async onSendMessage({ commit }, payload) {
    const message = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      message: payload.message,
    };

    const response = await http.post("messages", message);
    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("ADD_MESSAGE", message);
  },

  //Update a messsage
  async updateMessage({ commit }, payload) {
    const message = {
      isContacted: !payload.isContacted,
    };

    const response = await http.put(`messages/${payload}`, message);

    const responseData = response.data.data;
    if (responseData.success === false) {
      return;
    }

    commit("UPDATE_CONTACT_MESSAGE", message);
  },
};
