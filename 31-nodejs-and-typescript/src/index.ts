import express, { Express, Request, Response } from "express";

import todosRoutes from "./routes/todos.js";

const port = 3000;

const app = express();

app.use(todosRoutes);

app.listen(port);
