const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./userRoutes.js");
dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`HEY THIS PORT IS ${PORT}`);
});

app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`HEY THIS PORT IS ${PORT}`));
