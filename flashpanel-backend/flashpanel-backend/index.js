// FlashPanel backend starter API
// Simple Express server

const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    status: "FlashPanel backend running!",
    version: "1.0.0"
  });
});

// Start server
app.listen(3001, () => {
  console.log("FlashPanel backend running on port 3001");
});
