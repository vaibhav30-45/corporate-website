
const express = require("express");
const router = express.Router();


router.use("/auth", require("../modules/auth/auth.routes"));
router.use("/blog", require("../modules/blog/blog.routes"));
router.use("/enquiry", require("../modules/enquiry/enquiry.routes"));
router.use("/career", require("../modules/career/career.routes"));
router.use("/news", require("../modules/news/news.routes"));
router.use("/leadership", require("../modules/leadership/leadership.routes"));
module.exports = router;