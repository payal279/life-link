import React from "react";
import "../assets/css/style.css";

export default function AdminLogin() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h2>Admin Login</h2>

        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>

          <button type="submit" className="btn">
            Login
          </button>
        </form>

        <div className="extra-links">
          <button className="link-btn">Forgot Password?</button>
        </div>

      </div>
    </div>
  );
}
