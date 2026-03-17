import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import LandingArtisans from "./LandingArtisans";
import Merci from "./Merci"; // 👈 L'import est ici
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/artisans" element={<LandingArtisans />} />
        <Route path="/merci" element={<Merci />} />
        {/* 👈 La nouvelle route est ici */}
      </Routes>
    </Router>
  );
}
