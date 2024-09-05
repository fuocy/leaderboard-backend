const leaderboardService = require("../services/leaderboardService");

const createLeaderboard = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.createLeaderboard(req.body);
    res.status(201).json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getLeaderboardById = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.getLeaderboardById(
      req.params.id
    );
    if (!leaderboard)
      return res.status(404).json({ message: "Leaderboard not found" });
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getLeaderboards = async (req, res) => {
  const { createdBy } = req.query;

  try {
    console.log("Received createdBy parameter:", createdBy);
    const leaderboards = await leaderboardService.getLeaderboards(createdBy);

    return res.status(200).json(leaderboards);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const updateLeaderboard = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.updateLeaderboard(
      req.params.id,
      req.body
    );
    if (!leaderboard)
      return res.status(404).json({ message: "Leaderboard not found" });
    res.status(200).json(leaderboard);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteLeaderboard = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.deleteLeaderboard(
      req.params.id
    );
    if (!leaderboard)
      return res.status(404).json({ message: "Leaderboard not found" });
    res.status(200).json({ message: "Leaderboard deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const generateDummyData = async (req, res) => {
  try {
    const data = await leaderboardService.generateDummyData(req.params.id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createLeaderboard,
  getLeaderboardById,
  updateLeaderboard,
  deleteLeaderboard,
  generateDummyData,
  getLeaderboards,
};
