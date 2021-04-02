export default {
  SET_LANGUAGES: (state, payload) => (state.lang = payload),

  SET_TOKEN: (state, payload) => {
    // TODO sao lại có role ở đây nhỉ, a nghĩ bỏ xuống chỗ state.user thì hợp lí hơn, với tên method sẽ đúng với nội dung của nó hơn
    state.token = payload.token;
    state.role = payload.role;
  },

  SET_USER: (state, payload) => (state.user = payload),

  SET_PROFILE_USER(state, payload) {
    // TODO sao không set state.user=payload, return ở đây làm chi
    return (
      (state.user.name = payload.name),
      (state.user.email = payload.email),
      (state.user.phone = payload.phone),
      (state.user.address = payload.address),
      (state.user.birthday = payload.birthday),
      (state.user.city = payload.city),
      (state.user.country = payload.country)
    );
  },

  SET_RESET_TOKEN: (state, payload) => (state.setResetToken = payload),

  SET_RESET_PASSWORD: (state, payload) => (state.resetPassword = payload),

  //TODO không cần thiết, UPDATE_USER(state, payload)=>state = (...state.user, ...payload)
  UPDATE_NAME: (state, payload) => (state.user.name = payload),
  UPDATE_EMAIL: (state, payload) => (state.user.email = payload),
  UPDATE_PHONE: (state, payload) => (state.user.phone = payload),
  UPDATE_ADDRESS: (state, payload) => (state.user.address = payload),
  UPDATE_BIRTHDAY: (state, payload) => (state.user.birthday = payload),
  UPDATE_CITY: (state, payload) => (state.user.city = payload),
  UPDATE_COUNTRY: (state, payload) => (state.user.country = payload),
  UPDATE_AVATAR: (state, payload) => (state.user.avatar = payload),
};
