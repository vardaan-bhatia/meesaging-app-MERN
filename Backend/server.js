const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send(`HEY THIS PORT IS ${PORT}`);
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const iddata = chats.find((c) => c._id === req.params.id);
  res.send(iddata);
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`HEY THIS PORT IS ${PORT}`));
