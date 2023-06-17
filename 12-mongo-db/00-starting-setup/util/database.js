const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://student:q1w2e3r4@cluster0.3rbvq8m.mongodb.net/"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client)
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;