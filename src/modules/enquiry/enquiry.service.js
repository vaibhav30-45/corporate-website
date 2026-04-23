const Enquiry = require("./enquiry.model");

// CREATE
const createEnquiry = async (data) => {
  if (!data.name || !data.email || !data.message) {
    throw new Error("Missing required fields");
  }

  return await Enquiry.create(data);
};

// GET ALL (ADMIN)
const getAllEnquiries = async () => {
  return await Enquiry.find().sort({ createdAt: -1 });
};

// UPDATE STATUS
const updateEnquiry = async (id, data) => {
  return await Enquiry.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
const deleteEnquiry = async (id) => {
  return await Enquiry.findByIdAndDelete(id);
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
  updateEnquiry,
  deleteEnquiry
};