const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");

//middlewares
app.use(express.json());
//middlewares
app.use("/api/auth", auth);
app.use("/api/users/", users);
module.exports = app;
