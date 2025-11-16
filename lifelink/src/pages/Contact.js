import React, { useState } from "react";
import "../assets/css/style.css"; // Use your same global CSS

const Contact = () => {

  // Form state handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    alert("📩 Message sent successfully!\nWe will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <header>
        <div className="nav">
          <div className="brand">
            <div className="brand-logo"></div>
            <h1>LifeLink</h1>
          </div>

          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/features">Features</a>
            <a href="/hospitals">Hospitals</a>
            <a href="/Contact" className="active-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Floating Organs */}
      <div className="organs">
        <span className="o1">🫀</span>
        <span className="o2">🫁</span>
        <span className="o3">🧠</span>
        <span className="o4">🦴</span>
      </div>

      {/* Contact Section */}
      <section className="section">
        <h3 className="title">Contact Us</h3>
        <p className="muted">Fill the form below and we will get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="cta">Send Message</button>
        </form>
      </section>

      <footer>
        <p>© 2025 LifeLink. Built with care.</p>
      </footer>
    </>
  );
};

export default Contact;
