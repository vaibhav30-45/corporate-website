const authService = require("./auth.service");

exports.login = async (req, res) => {
  try {
    const data = await authService.login(req.body.email, req.body.password);
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};