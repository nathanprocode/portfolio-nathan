import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import LandingArtisans from "./LandingArtisans";
import "./styles.css"; // Assure-toi que ton fichier CSS global est bien importé ici

export default function App() {
  return (
    <Router>
      <Routes>
        {/* L'URL normale "vulpianinathan.fr" affiche ton portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* L'URL "vulpianinathan.fr/artisans" affiche la page de vente */}
        <Route path="/artisans" element={<LandingArtisans />} />
      </Routes>
    </Router>
  );
}
