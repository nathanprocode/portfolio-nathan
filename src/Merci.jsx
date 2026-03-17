import React from "react";
import { Link } from "react-router-dom";

export default function Merci() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center p-6 font-sans">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-lg w-full border border-gray-100">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Message bien reçu !
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Merci pour votre confiance. Je prends connaissance de votre demande et
          je vous recontacte très rapidement.
        </p>
        <Link
          to="/artisans"
          className="inline-block w-full bg-[#122CE4] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
        >
          Retour à la page d'accueil
        </Link>
      </div>
    </div>
  );
}
