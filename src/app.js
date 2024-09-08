const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./utils/database");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const cors = require("cors");
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// app.options("*", cors());

// Routes
app.use("/api/leaderboards", leaderboardRoutes);
app.options("*", cors());
module.exports = app;
