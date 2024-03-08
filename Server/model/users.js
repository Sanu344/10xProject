const mongoose = require("mongoose");
const joi = require("joi");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
  password: { type: String, required: true, minlength: 5, maxlength: 1024 },
});

const User = new mongoose.model("User", schema);

function validate(body) {
  const schema = joi.object({
    email: joi.string().required().email().min(5).max(255),
    password: joi.string().required().min(5).max(255),
  });
  return schema.validate(body);
}

module.exports = { User, validate };
