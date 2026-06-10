const Leadership = require("../leadership/leadership.model");

// Create Member
exports.createMember = async (req, res) => {
  
  try {
    const member = await Leadership.create(req.body);

    res.status(201).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Members
exports.getMembers = async (req, res) => {
  try {
    const members = await Leadership.find()
      .sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: members,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Member
exports.getMember = async (req, res) => {
  try {
    const member = await Leadership.findById(
      req.params.id
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: "Member not found",
      });
    }

    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Member
exports.updateMember = async (req, res) => {
  try {
    const member =
      await Leadership.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    res.status(200).json({
      success: true,
      data: member,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const result = await uploadToCloudinary(
      req.file.buffer
    );

    return res.status(200).json({
      imageUrl: result.secure_url,
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Member
exports.deleteMember = async (req, res) => {
  try {
    await Leadership.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message: "Member deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};