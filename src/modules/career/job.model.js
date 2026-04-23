const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  location: String,
  experience: String,
  type: String, // full-time / part-time
  description: String,

  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open"
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);