const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  return res.send("<h1>Users List:</h1><ul><li>Roman Shukhevych</li><li>Vasyl Ivakhiv</li><li>Dmytro Klyachkivsky</li><li>Vasyl Kuk</li></ul>");
});

// app.use("/", (req, res, next) => {
//   console.log("First function!");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("Second function!");
//   next();
// });

app.use("/", (req, res, next) => {
  return res.send('<h1 style="text-align: center">Welcome to "/" page!</h1>');
});




app.listen(3000);
