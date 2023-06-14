const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
  console.log("This always runs");
  next();
})

app.use("/add-product",(req, res, next) => {
  console.log("In another the middleware!");
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use("/",(req, res, next) => {
  console.log("In another the middleware!");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3300)