const express = require("express");
const router = express.Router();
const leaderboardController = require("../controllers/leaderboardController");

router.post("/create", leaderboardController.createLeaderboard);
router.get("/", leaderboardController.getLeaderboards);
router.get("/:id", leaderboardController.getLeaderboardById);
router.put("/:id", leaderboardController.updateLeaderboard);
router.delete("/:id", leaderboardController.deleteLeaderboard);
router.get("/:id/dummy-data", leaderboardController.generateDummyData);

module.exports = router;
