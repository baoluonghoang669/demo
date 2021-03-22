export default {
  setMessages: (state, payload) => (state.messages = payload),

  postMessages(state, payload) {
    return state.messages.push(payload);
  },

  updateContact(state) {
    return !state.messages.isContacted;
  },
};
