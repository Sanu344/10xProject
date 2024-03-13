const mongoose = require("mongoose");
const app = require("./app");

//connect data then start server
const port = process.env.PORT || 3030;
mongoose.connect("mongodb://localhost/RealEstate").then(() => {
  console.log("connected to data base...now connecting to server");
  app.listen(port, () => console.log("connected to.. port", port));
});
