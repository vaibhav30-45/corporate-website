const enquiryService = require("./enquiry.service");

// CREATE (PUBLIC)
exports.create = async (req, res) => {
  try {
    const enquiry = await enquiryService.createEnquiry(req.body);
    return res.status(201).json(enquiry);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// GET ALL (ADMIN)
exports.getAll = async (req, res) => {
  try {
    const enquiries = await enquiryService.getAllEnquiries();
    return res.json(enquiries);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE (mark as read)
exports.update = async (req, res) => {
  try {
    const enquiry = await enquiryService.updateEnquiry(req.params.id, req.body);
    return res.json(enquiry);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await enquiryService.deleteEnquiry(req.params.id);
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};