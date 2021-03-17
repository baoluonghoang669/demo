export default {
  setReviews: (state, payload) => (state.reviews = payload),

  setDetailReview: (state, payload) => (state.detailReview = payload),

  addReview(state, payload) {
    return state.reviews.push(payload);
  },
  deleteReview(state, payload) {
    return state.reviews.splice(
      state.reviews.indexOf(
        state.reviews.find((review) => review._id === payload)
      ),
      1
    );
  },

  updateComment: (state, payload) => (state.detailReview.comment = payload),

  updateRating: (state, payload) => (state.detailReview.rating = payload),

  updateProject: (state, payload) => (state.detailReview.project._id = payload),
};
