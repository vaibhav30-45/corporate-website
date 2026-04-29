// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     const uniqueName = Date.now() + path.extname(file.originalname);
//     cb(null, uniqueName);
//   }
// });

// // 👇 ERROR SAFE MULTER
// const upload = multer({
//   storage,
//   limits: { fileSize: 5 * 1024 * 1024 } // 5MB
// });

// module.exports = upload;

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 🔥 correct absolute path
const uploadsPath = path.join(__dirname, "..", "..", "uploads");

// 🔥 auto create folder
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath); // ✅ VARIABLE use karo (string nahi)
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;