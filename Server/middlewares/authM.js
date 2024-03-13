const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  const token = req.token;
  if (!token)
    return res
      .status(401)
      .send({ setalert: true, message: "Ascess denied you need to login" });

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.email = decoded;
    next();
  } catch (ex) {
    res
      .status(400)
      .send({ setalert: true, message: "Ascess denied you need to login" });
  }
};
