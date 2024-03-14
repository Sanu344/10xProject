const express = require("express");
const app = express();
const users = require("./routes/users");
const auth = require("./routes/auth");
const prperty = require("./routes/property");
const cors = require("cors");
//middlewares

app.use(express.json({ limit: "50mb" }));
app.use(cors());

//middlewares
app.use("/prop/", prperty);
app.use("/api/auth/", auth);
app.use("/api/users/", users);
module.exports = app;
