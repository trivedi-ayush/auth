const jwt = require("jsonwebtoken");

const generateToken = (id, type = "access") => {
  const expiresIn = type === "access" ? "15m" : "7d";
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

module.exports = generateToken;
