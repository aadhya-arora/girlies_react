const express = require("express");
const path = require("path");
const dbconnection = require("./mongodb");
const cors = require("cors");
const dbconnection1 = require("./mongodb1");
const dbconnection2 = require("./mongodb2");
const dbconnection3 = require("./mongodb3");
const dbconnection4 = require("./mongodb4");
const dbconnection5 = require("./mongodb5");
const { ObjectId } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../build/index.html"));
});

app.post("/submit", async (req, res) => {
  console.log(" Incoming signup data:", req.body);

  const { name, email, phone, password, sign_as } = req.body;

  if (!name || !email || !phone || !password || !sign_as) {
    console.log("❌ Missing fields");
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const collection = await dbconnection();
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      console.log(" User already exists:", email);
      return res.status(400).json({ message: "User already exists." });
    }

    await collection.insertOne({ name, email, phone, password, sign_as });
    console.log("User signed up:", email);
    res.status(200).json({ message: "Signup successful.", redirect: "/login" });
  } catch (error) {
    console.error(" Signup error:", error);
    res.status(500).json({ message: "An error occurred during signup." });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", { username, password });

  try {
    const collection = await dbconnection();
    const user = await collection.findOne({ name: username, password });

    console.log("User found:", user);

    // Update this part of your /login route
    if (user) {
      res
        .status(200)
        .json({ message: "Login successful", sign_as: user.sign_as });
    } else {
      res.status(401).json({ message: "Incorrect username or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
});

app.post("/submit-review", async (req, res) => {
  console.log("Incoming review data:", req.body);

  const { fullname, review, improvement, rating } = req.body;

  if (!fullname || !review || !improvement || !rating) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const collection = await dbconnection1(); // connect to mongodb1
    await collection.insertOne({
      fullname,
      review,
      improvement,
      rating,
      createdAt: new Date(),
    });

    console.log("Review submitted:", fullname);
    res.status(200).json({ message: "Thank you for your review!" });
  } catch (error) {
    console.error("Error submitting review:", error);
    res
      .status(500)
      .json({ message: "An error occurred while submitting the review." });
  }
});

app.post("/cart/add", async (req, res) => {
  const item = req.body;

  try {
    const collection = await dbconnection2();
    await collection.insertOne(item);
    res.status(200).json({ message: "Item added to cart in DB" });
  } catch (err) {
    console.error("Error adding item:", err);
    res.status(500).json({ message: "Failed to add item" });
  }
});

app.post("/cart/remove", async (req, res) => {
  const { name, price } = req.body; // Use unique fields

  try {
    const collection = await dbconnection2();
    await collection.deleteOne({ name, price }); // Adjust criteria as needed
    res.status(200).json({ message: "Item removed from DB" });
  } catch (err) {
    console.error("Error removing item:", err);
    res.status(500).json({ message: "Failed to remove item" });
  }
});

app.post("/save-address", async (req, res) => {
  const addressData = req.body;

  const { name, mobile, house, area, landmark, city, pin, state } = addressData;

  if (!name || !mobile || !house || !area || !city || !pin || !state) {
    return res
      .status(400)
      .json({ message: "Missing required address fields." });
  }

  try {
    const collection = await dbconnection3();
    await collection.insertOne({
      name,
      mobile,
      house,
      area,
      landmark,
      city,
      pin,
      state,
      createdAt: new Date(),
    });

    console.log("Address saved for:", name);
    res.status(200).json({ message: "Address saved successfully." });
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ message: "Failed to save address." });
  }
});

app.post("/place-order", async (req, res) => {
  const { items, total, paymentMethod } = req.body;

  if (!items || !total || !paymentMethod) {
    return res.status(400).json({ message: "Missing order details." });
  }

  try {
    const collection = await dbconnection4(); // 👈 this saves to dbconnection4
    await collection.insertOne({
      items,
      total,
      paymentMethod,
      createdAt: new Date(),
    });

    console.log("✅ Order saved:", items);
    res.status(200).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ message: "Failed to place order." });
  }
});

app.get("/orders-data", async (req, res) => {
  try {
    const collection = await dbconnection4();
    const orders = await collection.find({}).toArray();
    res.json({ orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Failed to load orders" });
  }
});

app.post("/mark-delivered", async (req, res) => {
  const { orderId } = req.body;
  console.log("👉 Received orderId:", orderId);

  if (!orderId) {
    console.log("❌ Missing order ID.");
    return res.status(400).json({ message: "Missing order ID." });
  }

  try {
    const pendingCollection = await dbconnection4();
    const deliveredCollection = await dbconnection5();

    const order = await pendingCollection.findOne({
      _id: new ObjectId(orderId),
    });
    console.log("🔍 Order fetched from dbconnection4:", order);

    if (!order) {
      console.log("❌ Order not found.");
      return res.status(404).json({ message: "Order not found." });
    }

    const insertResult = await deliveredCollection.insertOne(order);
    console.log(
      "✅ Order inserted into dbconnection5:",
      insertResult.insertedId
    );

    const deleteResult = await pendingCollection.deleteOne({
      _id: new ObjectId(orderId),
    });
    console.log(
      "🗑️ Order deleted from dbconnection4:",
      deleteResult.deletedCount
    );

    res.status(200).json({ message: "Order marked as delivered." });
  } catch (err) {
    console.error("🔥 Delivery update error:", err);
    res.status(500).json({ message: "Failed to update delivery status." });
  }
});

const PORT = 5100;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
