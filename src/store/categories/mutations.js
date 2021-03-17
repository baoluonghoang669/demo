export default {
  setCategories: (state, payload) => (state.categories = payload),

  addCategory(state, payload) {
    return state.categories.push(payload);
  },

  deleteCategory(state, payload) {
    return state.categories.splice(
      state.categories.indexOf(
        state.categories.find((category) => category._id === payload)
      ),
      1
    );
  },
};
