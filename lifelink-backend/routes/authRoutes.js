const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

// 🧩 Register Donor API
router.post("/register", async (req, res) => {
  try {
    const {
      full_name,
      age,
      gender,
      blood_group,
      contact_number,
      email,
      medical_history,
      organs,
      username,
      password,
    } =req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `
      INSERT INTO donors (fullName, age, gender, bloodGroup, contact, email, medicalHistory, organs, username, passwordHash)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        full_name,
        age,
        gender,
        blood_group,
        contact_number,
        email,
        medical_history,
        organs,
        username,
        hashedPassword,
      ],
      (err, result) => {
        if (err) {
          console.error("❌ MySQL Error:", err);
          res.status(500).json({ message: "Error registering donor" });
        } else {
          console.log("✅ Donor inserted successfully!");
          res.status(200).json({ message: "Donor registered successfully!" });
        }
      }
    );
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


// 🔐 Login API
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM donors WHERE username = ?";
  db.query(sql, [username], async (err, results) => {
    if (err) {
      console.error("❌ Database error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const donor = results[0];
    const validPassword = await bcrypt.compare(password, donor.passwordHash);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    delete donor.passwordHash; // remove password before sending back
    res.status(200).json({ message: "Login successful!", donor });
  });
});

module.exports = router;

