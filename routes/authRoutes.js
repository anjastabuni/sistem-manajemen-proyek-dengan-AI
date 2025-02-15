const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Cek apakah user sudah terdaftar
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email sudah digunakan" });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Buat user baru
    user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.status(201).json({ message: "User berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Cek user
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email tidak ditemukan" });

    // Cek password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Password salah" });

    // Buat token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
