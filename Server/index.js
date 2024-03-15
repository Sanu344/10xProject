const mongoose = require("mongoose");
const app = require("./app");
const config = require("config");
if (!config.get("privateKey")) {
  console.error("FATAL ERROR: privateKey is not defined");
  process.exit(1);
}

//connect data then start server
const port = process.env.PORT || 3030;
mongoose
  .connect(
    "mongodb+srv://test:1322001Maajin@cluster0.ione1sb.mongodb.net/RealEstate?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to data base...now ");
    app.listen(port, () => console.log("listening on.. port", port));
  });
