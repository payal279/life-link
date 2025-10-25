const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const db = require("../db");

// ✅ Register Patient
router.post("/register", async (req, res) => {
  try {
    const {
      fullName,
      age,
      gender,
      bloodGroup,
      contact,
      email,
      medicalCondition,
      requiredOrgan,
      username,
      password,
    } = req.body;

    console.log("📩 Incoming patient data:", req.body);

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO patients 
      (fullName, age, gender, bloodGroup, contact, email, medicalCondition, requiredOrgan, username, passwordHash)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(
      sql,
      [
        fullName,
        age,
        gender,
        bloodGroup,
        contact,
        email,
        medicalCondition,
        requiredOrgan,
        username,
        hashedPassword,
      ],
      (err, result) => {
        if (err) {
          console.error("❌ MySQL Error:", err);
          res.status(500).json({ message: "Error registering patient" });
        } else {
          res.status(200).json({ message: "Patient registered successfully!" });
        }
      }
    );
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
// ✅ Patient Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // check if patient exists
    const sql = "SELECT * FROM patients WHERE username = ?";
    db.query(sql, [username], async (err, results) => {
      if (err) {
        console.error("❌ MySQL Error:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (results.length === 0) {
        return res.status(404).json({ message: "Patient not found" });
      }

      const patient = results[0];

      // compare passwords
      const isMatch = await bcrypt.compare(password, patient.passwordHash);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }

      // ✅ success response
      res.status(200).json({
        message: "Login successful!",
        patient: {
          id: patient.id,
          fullName: patient.fullName,
          email: patient.email,
          requiredOrgan: patient.requiredOrgan,
        },
      });
    });
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
