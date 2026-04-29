const express = require("express");
const router = express.Router();

const controller = require("./career.controller");
const auth = require("../../middleware/auth.middleware");
const admin = require("../../middleware/admin.middleware");
const upload = require("../../middleware/upload.middleware");

/*
========================
      PUBLIC
========================
*/

router.get("/", controller.getJobs);
router.get("/:slug", controller.getJob);

// APPLY
router.post("/apply", upload.single("resume"), controller.apply);

/*
========================
      ADMIN
========================
*/

router.post("/", auth, admin, controller.createJob);
router.put("/:id", auth, admin, controller.updateJob);
router.delete("/:id", auth, admin, controller.deleteJob);
router.get("/admin/all", auth, admin, controller.getJobsAdmin);
router.get("/admin/applications", auth, admin, controller.getApplications);
router.get("/admin/applications/count", auth, admin, controller.getApplicationsCountByJob);

module.exports = router;