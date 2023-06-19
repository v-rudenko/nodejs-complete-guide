import express from "express";

import bodyParser from "body-parser";

import FeedRoutes from "./routes/feed";
// const FeedRoutes = require("./routes/feed")

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", FeedRoutes);

app.listen(8080);