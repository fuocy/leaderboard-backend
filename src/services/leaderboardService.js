const Leaderboard = require("../models/leaderboardModel");

// Function to create a new leaderboard
const createLeaderboard = async (data) => {
  const { name, metrics, createdBy } = data;
  const leaderboard = new Leaderboard({
    name,
    metrics,
    createdBy,
  });
  await leaderboard.save();
  return leaderboard;
};

// Function to get all leaderboards
const getAllLeaderboards = async () => {
  return await Leaderboard.find({});
};

// Function to get a single leaderboard by ID
const getLeaderboardById = async (id) => {
  return await Leaderboard.findById(id);
};

const getLeaderboards = async (createdBy) => {
  console.log(createdBy);
  try {
    let query = {};
    if (createdBy) {
      query = { createdBy };
    }

    const leaderboards = await Leaderboard.find(query);
    return leaderboards;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateLeaderboard = async (id, data) => {
  return await Leaderboard.findByIdAndUpdate(id, data, { new: true });
};

const deleteLeaderboard = async (id) => {
  return await Leaderboard.findByIdAndDelete(id);
};

// Function to generate random text
const generateDummyText = () => {
  const texts = [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Sit",
    "Amet",
    "Consectetur",
    "Adipiscing",
    "Elit",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

// Function to generate random number
const generateDummyNumber = () => {
  return Math.floor(Math.random() * 100);
};

// Function to generate dummy data based on metric type
const generateDummyDataForMetric = (metric) => {
  if (metric.type === "text") {
    return generateDummyText();
  } else if (metric.type === "number") {
    return generateDummyNumber();
  }
  return null;
};

// Function to generate dummy data for a leaderboard
const generateDummyData = async (id) => {
  const leaderboard = await Leaderboard.findById(id);
  if (!leaderboard) throw new Error("Leaderboard not found");

  const dummyPlayers = [];
  for (let i = 1; i <= 10; i++) {
    let playerMetrics = leaderboard.metrics.map((metric) => ({
      name: metric.name,
      value: generateDummyDataForMetric(metric),
    }));
    dummyPlayers.push({
      player: `Player ${i}`,
      metrics: playerMetrics,
    });
  }
  return dummyPlayers;
};

module.exports = {
  createLeaderboard,
  getAllLeaderboards,
  getLeaderboardById,
  updateLeaderboard,
  deleteLeaderboard,
  getLeaderboards,
  generateDummyData,
};
