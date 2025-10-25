const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcryptjs");

/* ============================
   ✅ ADMIN REGISTER
============================ */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'admin')";

    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("❌ MySQL Error:", err.sqlMessage || err);
        return res.status(500).json({ message: "Database error", error: err.sqlMessage });
      }
      res.status(200).json({ message: "✅ Admin registered successfully!" });
    });
  } catch (err) {
    console.error("❌ Server Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* ============================
   ✅ ADMIN LOGIN
============================ */
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ? AND role = 'admin'";

  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const admin = results[0];
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "✅ Admin login successful!",
      admin: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  });
});

/* ============================
   🧾 ADMIN DATA ROUTES
============================ */

// 🧩 1. View all donors
router.get("/donors", (req, res) => {
  const sql = "SELECT * FROM donors ORDER BY createdAt DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error fetching donors" });
    }
    res.status(200).json(results);
  });
});

// 🧩 2. View all patients
router.get("/patients", (req, res) => {
  const sql = "SELECT * FROM patients ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error fetching patients" });
    }
    res.status(200).json(results);
  });
});

// 🧩 3. View all requests
router.get("/requests", (req, res) => {
  const sql = "SELECT * FROM requests ORDER BY request_date DESC";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error fetching requests" });
    }
    res.status(200).json(results);
  });
});

// 🧩 4. Approve or fulfill request
router.put("/requests/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // "approved" or "fulfilled"
  const sql = "UPDATE requests SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err, result) => {
    if (err) {
      console.error("❌ MySQL Error:", err);
      return res.status(500).json({ message: "Error updating request status" });
    }
    res.status(200).json({ message: `Request ${status} successfully!` });
  });
});

module.exports = router;
