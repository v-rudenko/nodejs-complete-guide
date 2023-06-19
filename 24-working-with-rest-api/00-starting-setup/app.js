import express from "express";

import bodyParser from "body-parser";

import FeedRoutes from "./routes/feed";
// const FeedRoutes = require("./routes/feed")

const app = express();

app.use(bodyParser.json());

app.use("/feed", FeedRoutes);

app.listen(8080);