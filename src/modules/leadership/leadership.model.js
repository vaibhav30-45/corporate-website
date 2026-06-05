const mongoose = require("mongoose");

const leadershipSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
    },

    bio: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      default: "",
    },

    order: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Leadership",
  leadershipSchema
);