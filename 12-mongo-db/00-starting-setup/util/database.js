const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    // "mongodb+srv://student:q1w2e3r4@cluster0.3rbvq8m.mongodb.net/shop?retryWrites=true"
    "mongodb+srv://student:q1w2e3r4@cluster0.3rbvq8m.mongodb.net/"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db("shop");
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

