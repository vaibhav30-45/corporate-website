const express = require("express");
const router = express.Router();

const controller = require("./blog.controller");
const authMiddleware = require("../../middleware/auth.middleware");
const adminMiddleware = require("../../middleware/admin.middleware");

// ADMIN
router.post("/", authMiddleware, adminMiddleware, controller.create);
router.put("/:id", authMiddleware, adminMiddleware, controller.update);
router.delete("/:id", authMiddleware, adminMiddleware, controller.remove);
router.get("/admin/all", authMiddleware, adminMiddleware, controller.getAllAdmin);

// PUBLIC
router.get("/", controller.getAll);
router.get("/:slug", controller.getOne);

module.exports = router;