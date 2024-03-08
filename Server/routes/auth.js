const express = require("express");
const auth = express.Router();
const { User, validate } = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");

auth.post("/", async (req, res) => {
  //validate data
  //send 400 if not valid
  const { error } = validate(req.body);
  if (error) return res.send(error.details[0].message);

  //check if user is present
  //send 400 if not present
  let user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(400)
      .send({ message: "Invalid User Id or Password", status: false });

  //match password
  //if not matching send  400
  const check = await bcrypt.compare(req.body.password, user.password);

  if (!check)
    return res
      .status(400)
      .send({ message: "Invalid User Id or Password", status: false });

  //success
  const token = jwt.sign({ email: user.email }, config.get("privateKey"));

  //to add list of properties of the user

  res.send({ message: "Login successful", status: true });
});

module.exports = auth;
