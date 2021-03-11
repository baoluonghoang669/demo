export default {
  setLanguages: (state, payload) => (state.lang = payload),

  setToken: (state, payload) => {
    state.token = payload.token;
  },

  setUser: (state, payload) => state.user = payload
};
