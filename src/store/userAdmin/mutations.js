export default {
  setUsers: (state, payload) => (state.users = payload),

  setDetailUser: (state, payload) => (state.detailUser = payload),

  addUser: (state, payload) => state.users.push(payload),

  deleteUser(state, payload) {
    return state.users.splice(
      state.users.indexOf(state.users.find((user) => user._id === payload)),
      1
    );
  },

  //update form user
  updateName: (state, payload) => (state.detailUser.name = payload),
  updateEmail: (state, payload) => (state.detailUser.email = payload),
  updatePhone: (state, payload) => (state.detailUser.phone = payload),
  updateAddress: (state, payload) => (state.detailUser.address = payload),
  updateBirthday: (state, payload) => (state.detailUser.birthday = payload),
  updateCity: (state, payload) => (state.detailUser.city = payload),
  updateCountry: (state, payload) => (state.detailUser.country = payload),
};
