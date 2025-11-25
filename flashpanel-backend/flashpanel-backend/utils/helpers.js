module.exports = {
    success: (message, data = null) => {
        return { success: true, message, data };
    },

    error: (message) => {
        return { success: false, message };
    }
};
