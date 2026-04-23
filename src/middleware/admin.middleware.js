
const adminMiddleware = (req, res, next) => {

console.log("ADMIN MIDDLEWARE HIT");
  if (req.user && req.user.role === "admin") {
    return next();
  }
  return res.status(403).json({ message: "Access denied" });
};

module.exports = adminMiddleware;