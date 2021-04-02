export default {
  SET_MESSAGES: (state, payload) => (state.messages = payload),

  ADD_MESSAGE(state, payload) {
    return state.messages.push(payload);
  },

  UPDATE_CONTACT_MESSAGE(state) {
    return !state.messages.isContacted;
  },
};
