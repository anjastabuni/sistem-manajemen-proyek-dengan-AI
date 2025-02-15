const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
  estimatedCompletion: Date, // Nanti AI akan mengisi ini
});

module.exports = mongoose.model("Project", projectSchema);
