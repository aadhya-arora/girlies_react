const { MongoClient } = require("mongodb");
const database = "girlies";
const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function dbconnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(database);
    return db.collection("subscribed");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = dbconnection;
