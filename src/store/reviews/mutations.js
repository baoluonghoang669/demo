export default {
  SET_REVIEWS: (state, payload) => (state.reviews = payload),

  SET_DETAIL_REVIEW: (state, payload) => (state.detailReview = payload),

  ADD_REVIEW(state, payload) {
    return state.reviews.push(payload);
  },
  DELETE_REVIEW(state, payload) {
    return state.reviews.splice(
      state.reviews.indexOf(
        state.reviews.find((review) => review._id === payload)
      ),
      1
    );
  },

  UPDATE_COMMENT: (state, payload) => (state.detailReview.comment = payload),
  UPDATE_RATING: (state, payload) => (state.detailReview.rating = payload),
  UPDATE_PROJECT: (state, payload) =>
    (state.detailReview.project._id = payload),
};
