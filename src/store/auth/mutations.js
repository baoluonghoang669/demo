export default {
  setLanguages: (state, payload) => (state.lang = payload),

  setToken: (state, payload) => {
    state.token = payload.token;
    state.role = payload.role;
  },

  setUser: (state, payload) => (state.user = payload),

  setResetToken: (state, payload) => (state.setResetToken = payload),

  setResetPassword: (state, payload) => (state.resetPassword = payload),

  //update form profile
  updateName: (state, payload) => (state.user.name = payload),
  updateEmail: (state, payload) => (state.user.email = payload),
  updatePhone: (state, payload) => (state.user.phone = payload),
  updateAddress: (state, payload) => (state.user.address = payload),
  updateBirthday: (state, payload) => (state.user.birthday = payload),
  updateCity: (state, payload) => (state.user.city = payload),
  updateCountry: (state, payload) => (state.user.country = payload),
};
