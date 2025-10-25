const express = require("express");
const router = express.Router();
const db = require("../db");

// 🧾 GET all donors
router.get("/", (req, res) => {
  const sql = "SELECT id, fullName, age, gender, bloodGroup, contact, email, organs, createdAt FROM donors";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ message: "Error fetching donors" });
    }

    res.status(200).json({
      message: "Donors fetched successfully!",
      donors: results
    });
  });
});

// 🩸 POST (register new donor)
router.post("/register", (req, res) => {
  const {
    fullName,
    age,
    gender,
    bloodGroup,
    contact,
    email,
    medicalHistory,
    organs,
    username,
    password
  } = req.body;

  if (!fullName || !age || !gender || !bloodGroup || !contact || !email || !organs || !username || !password) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  const sql = `
    INSERT INTO donors (fullName, age, gender, bloodGroup, contact, email, medicalHistory, organs, username, password)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [fullName, age, gender, bloodGroup, contact, email, medicalHistory, organs, username, password], (err, result) => {
    if (err) {
      console.error("❌ Error inserting donor:", err);
      return res.status(500).json({ message: "Error saving donor details." });
    }

    res.status(201).json({ message: "Donor registered successfully!", donorId: result.insertId });
  });
});

module.exports = router;
