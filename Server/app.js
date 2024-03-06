const express = require("express");
const app = express();

//middlewares
app.use(express.json());
//middlewares

app.get("/test/", async (req, res) => {
  res.send({ message: "server working" });
});
module.exports = app;
