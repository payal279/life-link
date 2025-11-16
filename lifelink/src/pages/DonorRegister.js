import React, { useEffect, useState } from "react";
import "../assets/css/style.css";

const DonorRegister = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    blood: "",
    contact: "",
    email: "",
    history: "",
    username: "",
    password: "",
    confirmPassword: "",
    otherOrgan: "",
  });

  const [organs, setOrgans] = useState([]);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate Captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Checkbox
  const handleOrganChange = (value, checked) => {
    if (checked) {
      setOrgans([...organs, value]);
    } else {
      setOrgans(organs.filter((o) => o !== value));
    }
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (form.age < 18) errors.push("Age must be 18 or above");
    if (!/^\d{10}$/.test(form.contact)) errors.push("Contact must be 10 digits");
    if (form.password !== form.confirmPassword)
      errors.push("Passwords do not match");
    if (captchaInput.toUpperCase() !== captcha)
      errors.push("Captcha incorrect");
    if (organs.length === 0)
      errors.push("Select at least one organ");

    if (errors.length > 0) {
      alert("⚠ Fix these:\n" + errors.join("\n"));
      return;
    }

    alert("✅ Donor Registered Successfully!");
  };

  return (
    <div className="auth-page">

      <div className="auth-card large-card">
        <h2>Donor Registration Form</h2>

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="input-group">
            <label>Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} min="18" required />
          </div>

          {/* Gender */}
          <div className="input-group">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange} required>
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Blood Group */}
          <div className="input-group">
            <label>Blood Group</label>
            <select name="blood" value={form.blood} onChange={handleChange} required>
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
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="10-digit number"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          {/* Medical History */}
          <div className="input-group">
            <label>Medical History</label>
            <textarea
              name="history"
              rows="3"
              value={form.history}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Organs */}
          <div className="input-group">
            <label>Organs You Wish to Donate</label>
            <div className="checkbox-group">
              {["Heart", "Lungs", "Liver", "Kidneys", "Cornea", "Pancreas"].map((org) => (
                <label key={org}>
                  <input
                    type="checkbox"
                    onChange={(e) => handleOrganChange(org, e.target.checked)}
                  />
                  {org}
                </label>
              ))}
            </div>

            {/* Other */}
            <div className="input-group">
              <label>Other (if any)</label>
              <input
                name="otherOrgan"
                value={form.otherOrgan}
                onChange={handleChange}
                placeholder="Please specify"
              />
            </div>
          </div>

          {/* Login Credentials Title */}
          <h3 className="form-subtitle">Platform Login Credentials</h3>

          <div className="input-group">
            <label>Username</label>
            <input name="username" value={form.username} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Create Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Retype Password</label>
            <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} required />
          </div>

          {/* Captcha */}
          <div className="input-group">
            <label>Captcha: <b>{captcha}</b></label>
            <input
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Type the code"
              required
            />
            <button type="button" className="btn small-btn" onClick={generateCaptcha}>
              Refresh
            </button>
          </div>

          {/* Submit */}
          <button type="submit" className="btn">Register as Donor</button>
        </form>
      </div>

    </div>
  );
};

export default DonorRegister;
