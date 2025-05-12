const { MongoClient } = require("mongodb");
const database = "girlies";
const url = "mongodb://127.0.0.1:27017"; // MongoDB connection string

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function dbconnection() {
  try {
    // Attempt to connect to the MongoDB server
    await client.connect();
    console.log("Connected to MongoDB");

    // Return the specific collection for user data
    const db = client.db(database);
    return db.collection("cart-items");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Propagate the error
  }
}

module.exports = dbconnection;
