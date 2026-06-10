const express = require("express");
const router = express.Router();

const {
  createMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
  uploadImage,
} = require("./leadership.controller");

const upload = require("../../middleware/upload.middleware");

// router.post(
//   "/upload-image",
//   upload.single("image"),
//   (req, res) => {
//     res.json({
//       success: true,
//       imageUrl: `/uploads/${req.file.filename}`,
//     });
//   }
// );
router.post(
  "/upload-image",
  upload.single("image"),
  uploadImage
);

router.get("/admin/all", getMembers);
router.post("/", createMember);
router.get("/", getMembers);
router.get("/:id", getMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

module.exports = router;