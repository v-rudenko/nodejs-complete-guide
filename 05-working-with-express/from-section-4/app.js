const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.send("<h1>Page not found</h1>");
  res.statusCode = 404;
  res.send("<h1>Page not found</h1>");
  // res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
