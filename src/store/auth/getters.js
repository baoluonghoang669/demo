export default {
  getLanguages: (state) => state.lang,

  user: (state) => state.user,
  token: (state) => state.token,
  isAuth: (state) => !!state.token,
};
