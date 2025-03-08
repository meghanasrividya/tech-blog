// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database"); // Import sequelize instance
const User = require("./models/User");
const Post = require("./models/Post");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express(); // ✅ Move app definition to the top
app.use(express.json());
app.use(cors());

// ✅ Sync database
async function syncDatabase() {
  try {
    await sequelize.sync({ force: false }); // Set force: true only to reset DB
    console.log("✅ Database synchronized!");
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
}

// ✅ Connect to DB on startup
async function connectDatabase() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected...");
  } catch (error) {
    console.error("❌ Error connecting to database:", error.message);
  }
}

// ✅ API Routes
app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.send("✅ Database connected! Welcome to the Tech Blog API!");
  } catch (error) {
    res.status(500).send("❌ Database connection failed: " + error.message);
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await connectDatabase(); // Connect to the database
  await syncDatabase();    // Sync Sequelize models
  if (process.env.NODE_ENV === 'production') {
    console.log(`🚀 Server running on https://your-app-name.onrender.com`);
  } else {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  }
});
