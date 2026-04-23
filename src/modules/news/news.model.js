const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },

  summary: String, // short text
  content: String,

  image: String,

  category: String,

  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft"
  },

  publishedAt: Date,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// auto update
newsSchema.pre("save", function () {
  this.updatedAt = Date.now();
});

module.exports = mongoose.model("News", newsSchema);