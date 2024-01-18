import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos.js";

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(port);
