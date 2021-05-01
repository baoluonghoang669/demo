export default {
    getMessages: (state) => state.messages,
    checkMessages: (state) => state.messages.length,
    isReadedMessages(state) {
        const result = state.messages.filter(
            (message) => message.isContacted === false
        );
        return result.length;
    },
};