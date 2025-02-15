const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const authMiddleware = require("../middleware/authMiddleware");
const { predictProjectDuration } = require("../ai/openaiEstimator");

// Tambah Proyek & Estimasi Durasi dengan OpenAI
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { name, description, startDate, status } = req.body;

    // Prediksi durasi proyek dengan OpenAI
    const estimatedDays = await predictProjectDuration(description);
    const estimatedCompletion = new Date(startDate);
    estimatedCompletion.setDate(estimatedCompletion.getDate() + estimatedDays);

    // Simpan proyek ke database
    const project = new Project({ name, description, startDate, status, estimatedCompletion });

    res.status(201).json({ project, estimatedDays });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
