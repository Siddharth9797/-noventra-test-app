const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: "online",
    app: "Noventra Test App",
    message: "Deployment successful 🚀"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Test app running on port ${PORT}`);
});
