const express = require("express");
const prperty = express.Router();
const { Property, validate } = require("../model/properties");
const auth = require("../middlewares/authM");

prperty.post("/search/add", auth, async (req, res) => {
  //validate the data
  //send error if any
  console.log("data recieved");
  const { error } = validate(req.body.form);
  if (error)
    return res.send({ setalert: true, message: error.details[0].message });
  console.log("data recieved");
  //saving data

  const c = (await Property.find().count()) + 1;
  const ppdid = "PPD".concat(c);

  const property = new Property({
    ppdid: ppdid,
    views: 0,
    daysleft: 0o5,
    status: "Unsold",
    ...req.body.form,
  });

  let arrayOfobjects = [];

  try {
    const data = await property.save();
    const data3 = await Property.find();
    arrayOfobjects.push(data);
    res.send({ setalert: false, data: data3 });
  } catch (error) {
    res.send({ setalert: true, message: error.message });
  }
});

prperty.post("/all", auth, async (req, res) => {
  try {
    const data = await Property.find();
    res.send({ setalert: false, data: data });
  } catch (error) {
    res.send({ setalert: true, message: error.message });
  }
});

prperty.post("/search", auth, async (req, res) => {
  try {
    const data = await Property.find({ ppdid: req.body.searchItem });
    res.send({ setalert: false, data: data });
  } catch (error) {
    res.send({ setalert: true, message: error.message });
  }
});

module.exports = prperty;
