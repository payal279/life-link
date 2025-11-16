import React, { useEffect, useState } from "react";
import "../assets/css/style.css";

const HospitalRegister = () => {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  // Generate Captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  // Validators
  const validateContact = (val) => /^\d{10}$/.test(val);
  const validateNumber = (val) => !isNaN(val) && val >= 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    let errors = [];

    const hospitalContact = form.contact.value;
    const coordinatorContact = form.coordinator_contact.value;
    const beds = form.beds.value;
    const icu = form.icu.value;
    const pass = form.password.value;
    const confPass = form.confirm_password.value;

    const organsSelected = [
      ...form.querySelectorAll('input[name="organs[]"]:checked'),
    ].map((c) => c.value);

    if (!validateContact(hospitalContact))
      errors.push("Hospital contact must be 10 digits");

    if (!validateContact(coordinatorContact))
      errors.push("Coordinator contact must be 10 digits");

    if (!validateNumber(beds)) errors.push("Beds must be a valid number");
    if (!validateNumber(icu)) errors.push("ICU units must be a valid number");

    if (organsSelected.length === 0)
      errors.push("Select at least one Organ Facility");

    if (pass !== confPass) errors.push("Passwords do not match");

    if (captchaInput.toUpperCase() !== captcha)
      errors.push("Captcha incorrect");

    if (errors.length > 0) {
      alert("⚠ Fix the following:\n\n" + errors.join("\n"));
      return;
    }

    alert("✅ Hospital Registration Successful!");

    form.reset();
    setCaptcha(generateCaptcha());
    setCaptchaInput("");
  };

  return (
    <div className="auth-page">
      <div className="auth-card large-card">

        <h2>Hospital Registration</h2>

        <form onSubmit={handleSubmit}>

          {/* Hospital Name */}
          <div className="input-group">
            <label>Hospital Name</label>
            <input type="text" name="hospital_name" required />
          </div>

          {/* Registration ID */}
          <div className="input-group">
            <label>Hospital Registration ID</label>
            <input type="text" name="registration_id" required />
          </div>

          {/* Type */}
          <div className="input-group">
            <label>Hospital Type</label>
            <select name="hospital_type" required>
              <option value="">Select</option>
              <option>Government</option>
              <option>Private</option>
              <option>Trust</option>
            </select>
          </div>

          {/* Address */}
          <div className="input-group">
            <label>Hospital Address</label>
            <textarea name="address" rows="2" required></textarea>
          </div>

          {/* Contact */}
          <div className="input-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="contact"
              placeholder="10-digit number"
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Hospital Email</label>
            <input type="email" name="email" required />
          </div>

          {/* License */}
          <div className="input-group">
            <label>Organ Transplant License Number</label>
            <input type="text" name="license_number" required />
          </div>

          {/* Upload License */}
          <div className="input-group">
            <label>Upload License Document</label>
            <input
              type="file"
              name="license_doc"
              accept=".pdf,.jpg,.png"
              required
            />
          </div>

          {/* Organ Facilities */}
          <div className="input-group">
            <label>Organ Facilities Available</label>

            <div className="checkbox-group">
              {["Heart","Lungs","Liver","Kidneys","Cornea","Pancreas"].map(
                (org) => (
                  <label key={org}>
                    <input type="checkbox" name="organs[]" value={org} />
                    {org}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Beds */}
          <div className="input-group">
            <label>Number of Beds</label>
            <input type="number" name="beds" min="0" required />
          </div>

          {/* ICU */}
          <div className="input-group">
            <label>Number of ICU Units</label>
            <input type="number" name="icu" min="0" required />
          </div>

          {/* Blood Bank */}
          <div className="input-group">
            <label>Blood Bank Available?</label>
            <select name="blood_bank" required>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* Coordinator Name */}
          <div className="input-group">
            <label>Coordinator / Admin Name</label>
            <input type="text" name="coordinator_name" required />
          </div>

          {/* Coordinator Contact */}
          <div className="input-group">
            <label>Coordinator Contact Number</label>
            <input
              type="tel"
              name="coordinator_contact"
              placeholder="10-digit number"
              required
            />
          </div>

          {/* Coordinator Email */}
          <div className="input-group">
            <label>Coordinator Email</label>
            <input type="email" name="coordinator_email" required />
          </div>

          {/* Guidelines Follow */}
          <div className="input-group">
            <label>Follow NOTTO / SOTTO Guidelines?</label>
            <select name="compliance" required>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* LOGIN CREDENTIALS */}
          <h3 className="form-subtitle">Platform Login Credentials</h3>

          <div className="input-group">
            <label>Username</label>
            <input type="text" name="username" required />
          </div>

          <div className="input-group">
            <label>Create Password</label>
            <input type="password" name="password" required />
          </div>

          <div className="input-group">
            <label>Retype Password</label>
            <input type="password" name="confirm_password" required />
          </div>

          {/* CAPTCHA */}
          <div className="input-group">
            <label>
              Captcha: <b>{captcha}</b>
            </label>

            <input
              type="text"
              placeholder="Type the code"
              required
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
            />

            <button
              type="button"
              className="btn small-btn"
              onClick={() => {
                setCaptcha(generateCaptcha());
                setCaptchaInput("");
              }}
            >
              Refresh
            </button>
          </div>

          <button type="submit" className="btn">
            Register Hospital
          </button>
        </form>
      </div>
    </div>
  );
};

export default HospitalRegister;
