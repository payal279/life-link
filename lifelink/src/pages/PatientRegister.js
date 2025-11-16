import React, { useState, useEffect } from "react";
import "../assets/css/style.css"; // your CSS file

const PatientRegister = () => {
  const [captcha, setCaptcha] = useState("");

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    blood: "",
    contact: "",
    email: "",
    address: "",
    disease: "",
    requiredOrgan: "",
    otherOrgan: "",
    requirementDetails: "",
    hospital: "",
    username: "",
    password: "",
    confirmPassword: "",
    captchaInput: "",
  });

  // Generate Captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Input Handler
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  // SUBMIT — WITH BACKEND API CONNECTED
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    if (form.age <= 0) errors.push("Enter a valid age");
    if (!/^\d{10}$/.test(form.contact)) errors.push("Contact must be 10 digits");
    if (form.password !== form.confirmPassword)
      errors.push("Passwords do not match");
    if (form.captchaInput.toUpperCase() !== captcha)
      errors.push("Captcha incorrect");

    if (!form.requiredOrgan) errors.push("Select an organ");
    if (form.requiredOrgan === "Other" && !form.otherOrgan.trim())
      errors.push("Specify the organ");

    if (errors.length > 0) {
      alert("⚠ Fix these issues:\n\n" + errors.join("\n"));
      return;
    }

    // FINAL DATA to SEND
    const patientData = {
      fullName: form.name,
      age: form.age,
      gender: form.gender,
      bloodGroup: form.blood,
      contact: form.contact,
      email: form.email,
      address: form.address,
      medicalCondition: form.disease,
      requiredOrgan:
        form.requiredOrgan === "Other" ? form.otherOrgan : form.requiredOrgan,
      requirementDetails: form.requirementDetails,
      preferredHospital: form.hospital,
      username: form.username,
      password: form.password,
    };

    try {
      const res = await fetch("http://localhost:5000/api/patients/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patientData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Patient Registered Successfully!");
        generateCaptcha();
      } else {
        alert("❌ Registration Failed: " + data.message);
      }
    } catch (err) {
      alert("❌ Backend Server Not Responding");
      console.error(err);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card large-card">
        <h2>Patient Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input id="name" required value={form.name} onChange={handleChange} />
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age</label>
            <input
              id="age"
              type="number"
              min="0"
              required
              value={form.age}
              onChange={handleChange}
            />
          </div>

          {/* Gender */}
          <div className="input-group">
            <label>Gender</label>
            <select id="gender" required value={form.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Blood */}
          <div className="input-group">
            <label>Blood Group</label>
            <select id="blood" required value={form.blood} onChange={handleChange}>
              <option value="">Select</option>
              <option>A+</option><option>A-</option>
              <option>B+</option><option>B-</option>
              <option>O+</option><option>O-</option>
              <option>AB+</option><option>AB-</option>
            </select>
          </div>

          {/* Contact */}
          <div className="input-group">
            <label>Contact Number</label>
            <input
              id="contact"
              placeholder="10-digit number"
              required
              value={form.contact}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="input-group">
            <label>Address</label>
            <textarea
              id="address"
              rows="2"
              required
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* Medical Condition */}
          <div className="input-group">
            <label>Medical Condition</label>
            <textarea
              id="disease"
              rows="3"
              required
              value={form.disease}
              onChange={handleChange}
            />
          </div>

          {/* Organ Required */}
          <div className="input-group">
            <label>Organ Required</label>
            <select
              id="requiredOrgan"
              required
              value={form.requiredOrgan}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Heart</option>
              <option>Lungs</option>
              <option>Liver</option>
              <option>Kidneys</option>
              <option>Cornea</option>
              <option>Pancreas</option>
              <option value="Other">Other</option>
            </select>

            {form.requiredOrgan === "Other" && (
              <input
                id="otherOrgan"
                placeholder="Specify organ"
                required
                value={form.otherOrgan}
                onChange={handleChange}
                style={{ marginTop: "7px" }}
              />
            )}
          </div>

          {/* Requirement Details */}
          <div className="input-group">
            <label>Requirement Details</label>
            <textarea
              id="requirementDetails"
              value={form.requirementDetails}
              onChange={handleChange}
            />
          </div>

          {/* Hospital */}
          <div className="input-group">
            <label>Preferred Hospital</label>
            <input
              id="hospital"
              required
              value={form.hospital}
              onChange={handleChange}
            />
          </div>

          {/* Credentials */}
          <h3 className="form-subtitle">Platform Login Credentials</h3>

          <div className="input-group">
            <label>Username</label>
            <input id="username" required value={form.username} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Retype Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Captcha */}
          <div className="input-group">
            <label>
              Captcha: <b>{captcha}</b>
            </label>
            <input
              id="captchaInput"
              required
              value={form.captchaInput}
              onChange={handleChange}
            />
            <button type="button" className="btn small-btn" onClick={generateCaptcha}>
              Refresh
            </button>
          </div>

          <button type="submit" className="btn">
            Register Patient
          </button>

        </form>
      </div>
    </div>
  );
};

export default PatientRegister;

