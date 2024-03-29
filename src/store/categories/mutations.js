export default {
    SET_CATEGORIES: (state, payload) => (state.categories = payload),

    SET_DETAIL_CATEGORY: (state, payload) => (state.categoriesDetail = payload),

    ADD_CATEGORY(state, payload) {
        return state.categories.push(payload);
    },

    DELETE_CATEGORY(state, payload) {
        return state.categories.splice(
            state.categories.indexOf(
                state.categories.find((category) => category._id === payload)
            ),
            1
        );
    },

    UPDATE_NAME: (state, payload) => (state.categoriesDetail.name = payload),
    UPDATE_DESCRIPTION: (state, payload) =>
        (state.categoriesDetail.description = payload),

    //Search
    SET_DATA_CATEGORY(state, data) {
        return (state.categories = Object.freeze(data))
    }
};