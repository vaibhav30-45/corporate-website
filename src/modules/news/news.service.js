const News = require("./news.model");

// CREATE
const createNews = async (data) => {
  if (!data.title || !data.slug) {
    throw new Error("Missing required fields");
  }

  const existing = await News.findOne({ slug: data.slug });
  if (existing) {
    throw new Error("Slug already exists");
  }

  if (data.status === "published") {
    data.publishedAt = new Date();
  }

  return await News.create(data);
};

// PUBLIC
const getAllNews = async () => {
  return await News.find({ status: "published" }).sort({ publishedAt: -1 });
};

const getNewsBySlug = async (slug) => {
  return await News.findOne({ slug, status: "published" });
};

// ADMIN
const getAllNewsAdmin = async () => {
  return await News.find().sort({ createdAt: -1 });
};

// UPDATE
const updateNews = async (id, data) => {
  data.updatedAt = Date.now();

  if (data.status === "published") {
    data.publishedAt = new Date();
  }

  return await News.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
const deleteNews = async (id) => {
  return await News.findByIdAndDelete(id);
};

module.exports = {
  createNews,
  getAllNews,
  getNewsBySlug,
  getAllNewsAdmin,
  updateNews,
  deleteNews
};