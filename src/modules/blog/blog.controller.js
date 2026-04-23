const blogService = require("./blog.service");

// CREATE
exports.create = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const blog = await blogService.createBlog(req.body);

    return res.status(201).json(blog);
  } catch (err) {
    console.log("CREATE ERROR:", err.message);

    return res.status(400).json({
      error: err.message
    });
  }
};

// PUBLIC
exports.getAll = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs();
    return res.json(blogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// ADMIN
exports.getAllAdmin = async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogsAdmin();
    return res.json(blogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// GET ONE
exports.getOne = async (req, res) => {
  try {
    const blog = await blogService.getBlogBySlug(req.params.slug);
    if (!blog) return res.status(404).json({ message: "Not found" });

    return res.json(blog);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    return res.json(blog);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await blogService.deleteBlog(req.params.id);
    return res.json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};