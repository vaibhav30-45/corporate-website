const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (email, password) => {
  // hardcoded admin
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD_HASH = "$2b$10$r.Ox6S7V3o6KpHHU.lJFp.CGqqjQ7EWe2FHSs/LNdaJxzSLIvy.P6";

  if (email !== ADMIN_EMAIL) {
    throw new Error("Invalid email");
  }

  const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  // ADD ROLE HERE
  const token = jwt.sign(
    {
      email: ADMIN_EMAIL,
      role: "admin"   // THIS IS THE FIX
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { token };
};