// const jwt = require("jsonwebtoken");

// exports.login = async (email, password) => {
//   console.log("EMAIL:", email);
//   console.log("PASSWORD:", password);

//   const token = jwt.sign(
//     {
//       email,
//       role: "admin",
//     },
//     process.env.JWT_SECRET || "supersecretkey",
//     {
//       expiresIn: "1d",
//     }
//   );

//   return { token };
// };
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// exports.login = async (email, password) => {
//   // hardcoded admin
//   const ADMIN_EMAIL = "admin@gmail.com";
//   const ADMIN_PASSWORD_HASH = "$2b$10$r.Ox6S7V3o6KpHHU.lJFp.CGqqjQ7EWe2FHSs/LNdaJxzSLIvy.P6";

//   if (email !== ADMIN_EMAIL) {
//     throw new Error("Invalid email");
//   }

//   const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

//   if (!isMatch) {
//     throw new Error("Invalid password");
//   }

//   // ADD ROLE HERE
//   const token = jwt.sign(
//     {
//       email: ADMIN_EMAIL,
//       role: "admin"   // THIS IS THE FIX
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );

//   return { token };
// };
// exports.login = async (email, password) => {
//   console.log("EMAIL:", email);
//   console.log("PASSWORD:", password);

//   const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);

//   console.log("MATCH:", isMatch);

//   if (!isMatch) {
//     throw new Error("Invalid password");
//   }

//   // ...
// };
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.login = async (email, password) => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
  const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD;

  console.log("EMAIL:", email);

  if (email !== ADMIN_EMAIL) {
    throw new Error("Invalid email");
  }

  const isMatch = await bcrypt.compare(
    password,
    ADMIN_PASSWORD_HASH
  );

  console.log("MATCH:", isMatch);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign(
    {
      email: ADMIN_EMAIL,
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  return { token };
};