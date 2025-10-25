const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const donorRoutes = require("./routes/donorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const requestRoutes = require("./routes/requestRoute");
const hospitalRoutes = require("./routes/hospitalRoutes");
const adminRoutes = require("./routes/adminRoutes");





dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Use routes
app.use("/api/auth", authRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/admin", adminRoutes);




// ✅ Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
});
