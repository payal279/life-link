import React, { useEffect } from "react";
import "../assets/css/loginpage.css";

const LoginPage = () => {

  useEffect(() => {
    // 🌙 Theme Toggle
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        document.querySelector(".login-page")
          .classList.toggle("dark-mode");
      });
    }

    // ⭐ Card Click Animation
    const cards = document.querySelectorAll(".role-card");

    const handleClick = (e) => {
      e.currentTarget.style.transform = "scale(1.07)";
      setTimeout(() => {
        e.currentTarget.style.transform = "";
      }, 200);
    };

    cards.forEach((card) => card.addEventListener("click", handleClick));

    return () => {
      cards.forEach((card) =>
        card.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <div className="login-page">

      {/* 🌙 Toggle Theme Button */}
      <button id="theme-toggle-btn" title="Toggle Theme">🌓</button>

      <h2>Choose Your Role</h2>

      <div className="roles">

        <div className="role-card">
          <h3>Donor</h3>
          <div className="options">
            <a href="/donor-login">Login</a>
            <a href="/Donor-Register">Register</a>
          </div>
        </div>

        <div className="role-card">
          <h3>Patient</h3>
          <div className="options">
            <a href="/patient-login">Login</a>
            <a href="/Patient-Register">Register</a>
          </div>
        </div>

        <div className="role-card">
          <h3>Hospital</h3>
          <div className="options">
            <a href="/hospital-login">Login</a>
            <a href="/h0ospital-register">Register</a>
          </div>
        </div>

        <div className="role-card">
          <h3>Admin</h3>
          <div className="options">
            <a href="/admin-login">Login</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
