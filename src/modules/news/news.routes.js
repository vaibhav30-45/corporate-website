const express = require("express");
const router = express.Router();

const controller = require("./news.controller");
const auth = require("../../middleware/auth.middleware");
const admin = require("../../middleware/admin.middleware");

/*
========================
      ADMIN FIRST
========================
*/

router.post("/", auth, admin, controller.create);
router.put("/:id", auth, admin, controller.update);
router.delete("/:id", auth, admin, controller.remove);
router.get("/admin/all", auth, admin, controller.getAllAdmin);

/*
========================
      PUBLIC
========================
*/

router.get("/", controller.getAll);

/*
========================
      DYNAMIC LAST
========================
*/

router.get("/:slug", controller.getOne);

module.exports = router;