export default {
  SET_CATEGORIES: (state, payload) => (state.categories = payload),

  SET_DETAIL_CATEGORY: (state, payload) => (state.categoriesDetail = payload),

  ADD_CATEGORY(state, payload) {
    return state.categories.push(payload);
  },

  DELETE_CATEGORY(state, payload) {
    // TODO cách viết khác, state.categories = state.categories.filter((category) => category._id !== payload)
    return state.categories.splice(
      state.categories.indexOf(
        state.categories.find((category) => category._id === payload)
      ),
      1
    );
  },

  UPDATE_NAME: (state, payload) => (state.categoriesDetail.name = payload),
  UPDATE_DESCRIPTION: (state, payload) =>
    // TODO nên thay tên payload theo ngữ cảnh, payload=>newDescription chẳng hạn, để biết mutaion nhận input vào là gì, ko bắt buộc
    (state.categoriesDetail.description = payload),
};
