const newsService = require("./news.service");

// CREATE
exports.create = async (req, res) => {
  try {
    const news = await newsService.createNews(req.body);
    return res.status(201).json(news);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// PUBLIC
exports.getAll = async (req, res) => {
  const news = await newsService.getAllNews();
  res.json(news);
};

exports.getOne = async (req, res) => {
  const news = await newsService.getNewsBySlug(req.params.slug);
  res.json(news);
};

// ADMIN
exports.getAllAdmin = async (req, res) => {
  const news = await newsService.getAllNewsAdmin();
  res.json(news);
};

// UPDATE
exports.update = async (req, res) => {
  const news = await newsService.updateNews(req.params.id, req.body);
  res.json(news);
};

// DELETE
exports.remove = async (req, res) => {
  await newsService.deleteNews(req.params.id);
  res.json({ message: "Deleted" });
};