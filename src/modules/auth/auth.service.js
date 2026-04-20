const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (email, password) => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email !== adminEmail) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, adminPassword);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return {
    email,
    token,
  };
};