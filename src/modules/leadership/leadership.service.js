const Leadership = require("./leadership.model");

// CREATE
const createMember = async (data) => {
  if (!data.name || !data.position) {
    throw new Error("Name and Position are required");
  }

  return await Leadership.create(data);
};

// PUBLIC
const getAllMembers = async () => {
  return await Leadership.find({
    status: "active",
  }).sort({ order: 1 });
};

// ADMIN
const getAllMembersAdmin = async () => {
  return await Leadership.find().sort({ order: 1 });
};

// GET ONE
const getMemberById = async (id) => {
  return await Leadership.findById(id);
};

// UPDATE
const updateMember = async (id, data) => {
  return await Leadership.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );
};

// DELETE
const deleteMember = async (id) => {
  return await Leadership.findByIdAndDelete(id);
};

module.exports = {
  createMember,
  getAllMembers,
  getAllMembersAdmin,
  getMemberById,
  updateMember,
  deleteMember,
};