const express = require("express");
const path = require("path");
const dbconnection = require("./mongodb");
const cors = require("cors");

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

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ message: "Incorrect username or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
});

const PORT = 5100;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
