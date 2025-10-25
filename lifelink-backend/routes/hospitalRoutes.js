const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../db");

// 🏥 Register Hospital
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, contact, address, city, state } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO hospitals (name, email, passwordHash, contact, address, city, state)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, email, hashedPassword, contact, address, city, state], (err, result) => {
      if (err) {
        console.error("❌ MySQL Error:", err);
        return res.status(500).json({ message: "Error registering hospital" });
      }
      res.status(200).json({ message: "Hospital registered successfully!" });
    });
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// 🏥 Login Hospital
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM hospitals WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const hospital = results[0];
    const validPassword = await bcrypt.compare(password, hospital.passwordHash);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful!",
      hospital: {
        id: hospital.id,
        name: hospital.name,
        email: hospital.email,
        city: hospital.city,
        state: hospital.state
      }
    });
  });
});

module.exports = router;
