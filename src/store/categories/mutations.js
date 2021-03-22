export default {
  setCategories: (state, payload) => (state.categories = payload),

  setCategoriesDetail: (state, payload) => (state.categoriesDetail = payload),

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

  //update form categories
  updateName: (state, payload) => (state.categoriesDetail.name = payload),
  updateDescription: (state, payload) =>
    (state.categoriesDetail.description = payload),
};
