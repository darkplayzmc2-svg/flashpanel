const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const authRoute = require("./routes/auth");
app.use("/api/auth", authRoute);

// Test API route
app.get("/", (req, res) => {
    res.send("FlashPanel Backend Running");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`FlashPanel backend running on port ${PORT}`);
});
