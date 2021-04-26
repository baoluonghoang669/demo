export default {
    getLanguages: (state) => state.lang,
    user: (state) => state.user,
    token: (state) => state.token,
    resetToken: (state) => state.resetToken,
    isAuth: (state) => !!state.token,
    isAdmin: (state) => state.role,
    resetPassword: (state) => state.resetPassword,

    getListMessages: (state) => state.historyMessages,
    clearListMessages(state) {
        return state.historyMessages.splice(0, state.historyMessages.length);
    }
};