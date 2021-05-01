export default {
    SET_USERS: (state, payload) => (state.users = payload),

    SET_DETAIL_USER: (state, payload) => (state.detailUser = payload),

    ADD_USER: (state, payload) => state.users.push(payload),

    DELETE_USER(state, payload) {
        return state.users.splice(
            state.users.indexOf(state.users.find((user) => user._id === payload)),
            1
        );
    },

    GET_CITY: (state, payload) => (state.cities = payload),
    GET_PROVINCES: (state, payload) => (state.provinces = payload),

    //update form user
    UPDATE_NAME: (state, payload) => (state.detailUser.name = payload),
    UPDATE_EMAIL: (state, payload) => (state.detailUser.email = payload),
    UPDATE_PHONE: (state, payload) => (state.detailUser.phone = payload),
    UPDATE_ADDRESS: (state, payload) => (state.detailUser.address = payload),
    UPDATE_BIRTHDAY: (state, payload) => (state.detailUser.birthday = payload),
    UPDATE_CITY: (state, payload) => (state.detailUser.city = payload),
    UPDATE_PROVINCE: (state, payload) => (state.detailUser.province = payload),
    UPDATE_ROLE: (state, payload) => (state.detailUser.role = payload),
    //Search
    SET_DATA_USER(state, data) {
        return (state.users = Object.freeze(data));
    },
};