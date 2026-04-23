const express = require("express");
const router = express.Router();

const controller = require("./enquiry.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const adminMiddleware = require("../../middleware/admin.middleware");

/*
========================
      PUBLIC
========================
*/

// Submit enquiry
router.post("/", controller.create);

/*
========================
      ADMIN
========================
*/

// Get all enquiries
router.get("/", authMiddleware, adminMiddleware, controller.getAll);

// Update (mark read)
router.put("/:id", authMiddleware, adminMiddleware, controller.update);

// Delete
router.delete("/:id", authMiddleware, adminMiddleware, controller.remove);

module.exports = router;