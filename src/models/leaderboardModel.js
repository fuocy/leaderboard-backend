const mongoose = require("mongoose");

const MetricSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["text", "number"] },
});

const LeaderboardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  metrics: [MetricSchema],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Leaderboard", LeaderboardSchema);
