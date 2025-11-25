const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/auth");

// Use Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("FlashPanel Backend Running");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`FlashPanel backend running on port ${PORT}`);
});
