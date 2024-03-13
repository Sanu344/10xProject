const express = require("express");
const users = express.Router();
const { User, validate } = require("../model/users");
const bcrypt = require("bcrypt");

users.post("/reg/", async (req, res) => {
  //validate data
  //send 400 if not valid
  const { error } = validate(req.body);
  if (error)
    return res.send({
      setalert: true,
      message: error.details[0].message,
      status: false,
    });

  //check if user already present
  //send 400 if already present
  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send({
      setalert: true,
      message: "User already registered",
      status: false,
    });

  //save the user in data base

  //hashing password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(req.body.password, salt);

  user = new User({ email: req.body.email, password: hashed });

  try {
    const data = await user.save();
    res.send({
      setalert: true,
      message: "Registered successfully",
      status: true,
    });
  } catch (ex) {
    res.send({ setalert: true, message: ex.message, status: false });
  }
});

module.exports = users;
