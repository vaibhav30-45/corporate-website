const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  bannerImage: { type: String, required: true },
  tags: [{ type: String }],
  category: { type: String, required: true },
  content: { type: String },

  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft"
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// ✅ FIXED HOOK
blogSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

module.exports = mongoose.model("Blog", blogSchema);