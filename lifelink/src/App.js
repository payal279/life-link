import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/loginpage";

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<FrontPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

      </Routes>
    </Router>
  );
}

export default App;


