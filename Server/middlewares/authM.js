const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.body.token;

  if (!token)
    return res.status(401).send({
      status: false,
      setalert: true,
      message: "Ascess denied you need to login",
    });

  try {
    const decoded = jwt.verify(token, config.get("privateKey"));
    console.log("user ", decoded);
    //req.email = decoded;
    next();
  } catch (ex) {
    res.status(400).send({
      status: false,
      setalert: true,
      message: "Ascess denied you need to login",
    });
  }
};
