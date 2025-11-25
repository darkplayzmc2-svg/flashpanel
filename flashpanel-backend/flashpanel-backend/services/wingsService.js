const axios = require("axios");

module.exports = {
    testConnection: async () => {
        try {
            const res = await axios.get("http://localhost:8080", {
                timeout: 2000
            });
            return { success: true, message: "Wings is online" };
        } catch (err) {
            return { success: false, message: "Wings is offline" };
        }
    }
};
