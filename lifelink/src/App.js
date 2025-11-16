import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/loginpage";
import DonorLogin from "./pages/DonorLogin";
import DonorRegister from "./pages/DonorRegister";
import HospitalLogin from "./pages/HospitalLogin";
import HospitalRegister from "./pages/HospitalRegister";
import PatientRegister from "./pages/PatientRegister";
import PatientLogin from "./pages/PatientLogin";


import Contact from "./pages/Contact";   // ✅ Correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donor-login" element={<DonorLogin />} />
        <Route path="/donor-register" element={<DonorRegister />} />
        <Route path="/hospital-login" element={<HospitalLogin />} />
        <Route path="/hospital-register" element={<HospitalRegister />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/contact" element={<Contact />} />   {/* ✅ FIXED */}
      </Routes>
    </Router>
  );
}

export default App;
