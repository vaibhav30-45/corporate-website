const Blog = require("./blog.model");

// CREATE
const createBlog = async (data) => {
  if (!data.title || !data.slug || !data.author || !data.bannerImage || !data.category) {
    throw new Error("Missing required fields");
  }

  const existing = await Blog.findOne({ slug: data.slug });
  if (existing) {
    throw new Error("Slug already exists");
  }

  return await Blog.create(data);
};

// PUBLIC
const getAllBlogs = async () => {
  return await Blog.find({ status: "published" }).sort({ createdAt: -1 });
};

// ADMIN
const getAllBlogsAdmin = async () => {
  return await Blog.find().sort({ createdAt: -1 });
};

// GET ONE
const getBlogBySlug = async (slug) => {
  return await Blog.findOne({ slug, status: "published" });
};

// UPDATE
const updateBlog = async (id, data) => {
  data.updatedAt = Date.now();
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
const deleteBlog = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

module.exports = {
  createBlog,
  getAllBlogs,
  getAllBlogsAdmin,
  getBlogBySlug,
  updateBlog,
  deleteBlog
};