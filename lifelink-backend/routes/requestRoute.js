const express = require("express");
const router = express.Router();
const db = require("../db");

// 🧩 Create a new organ request
router.post("/create", (req, res) => {
  const { recipient_id, blood_group, quantity_needed, hospital_name } = req.body;

  if (!recipient_id || !blood_group || !quantity_needed || !hospital_name) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `
    INSERT INTO requests (recipient_id, blood_group, quantity_needed, hospital_name)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [recipient_id, blood_group, quantity_needed, hospital_name], (err, result) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error creating request" });
    }
    res.status(200).json({ message: "Organ request created successfully!" });
  });
});

// 🧾 Get all requests
router.get("/", (req, res) => {
  db.query("SELECT * FROM requests", (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error fetching requests" });
    }
    res.status(200).json(results);
  });
});

module.exports = router;
