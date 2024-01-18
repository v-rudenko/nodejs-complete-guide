import express, {Express, Request, Response} from "express";

import { bob } from "./helper.js";


const port = 3000;


const app = express();

app.get("/", (req, res) => {
  res.send("CABINET STARTING PAGE!!!")
})

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})
