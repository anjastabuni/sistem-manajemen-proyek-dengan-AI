const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Akses ditolak, token tidak tersedia" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: "Token tidak valid" });
  }
};
