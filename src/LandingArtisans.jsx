import React from "react";
import { Link } from "react-router-dom";

export default function LandingArtisans() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* 1. HEADER */}
      <header className="w-full p-6 flex justify-between items-center bg-white shadow-sm">
        <div className="font-extrabold text-2xl text-[#122CE4] tracking-tighter">
          NV.
        </div>
        <Link
          to="/"
          className="text-sm font-medium text-gray-500 hover:text-[#122CE4] transition-colors flex items-center gap-2"
        >
          Voir mon portfolio complet <span aria-hidden="true">&rarr;</span>
        </Link>
      </header>

      {/* 2. SECTION HÉROS (Bleu Électrique) */}
      <section className="bg-[#122CE4] text-white py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Création de sites web destinés aux professionnels de
              Nouvelle-Aquitaine!
            </h1>
            <p className="text-xl mb-10 opacity-90 font-light">
              Je m'occupe de la technique de A à Z. Vous vous concentrez sur
              votre métier. Un site clé en main, simple et efficace.
            </p>
            <a
              href="tel:+33638982302"
              className="inline-flex items-center justify-center bg-white text-[#122CE4] font-bold text-lg py-4 px-8 rounded-full shadow-xl hover:scale-105 transition-transform w-full md:w-auto"
            >
              📞 Appeler le 06 38 98 23 02
            </a>
            <p className="mt-4 text-sm opacity-80">
              Devis gratuit. Laissez un SMS si je suis en rendez-vous !
            </p>
          </div>

          <div className="md:w-2/5 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-white opacity-20 rounded-full blur-2xl transform scale-110"></div>
              <img
                src="/nathan-portrait.webp"
                alt="Nathan Vulpiani"
                className="relative w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-2xl"
              />
              <div className="absolute bottom-4 -left-4 bg-white text-gray-900 text-xs font-bold py-2 px-4 rounded-full shadow-lg">
                👋 Indépendant & Local
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION RÉALISATIONS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Ils m'ont fait confiance
          </h2>
          <p className="text-gray-500 mt-2">
            Cliquez sur les projets pour visiter leurs sites web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projet 1 : Quadraré */}
          <a
            href="https://www.quadrare-agencement.fr/" /* Remplacer par la vraie URL */
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="/quadrare.jpg"
                alt="Quadraré Agencement"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg px-2 group-hover:text-[#122CE4] transition-colors">
              Quadraré Agencement
            </h3>
            <p className="text-gray-500 text-sm px-2 pb-2">
              Menuiserie & Agencement
            </p>
          </a>

          {/* Projet 2 : Batiamo */}
          <a
            href="https://batiamo.fr/" /* Remplacer par la vraie URL */
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="/Batiamo.jpg"
                alt="Batiamo"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg px-2 group-hover:text-[#122CE4] transition-colors">
              Batiamo
            </h3>
            <p className="text-gray-500 text-sm px-2 pb-2">
              Rénovation & Construction
            </p>
          </a>

          {/* Projet 3 : Ter'Ferme */}
          <a
            href="https://www.terferme.fr/" /* Remplacer par la vraie URL */
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="overflow-hidden rounded-xl mb-4">
              <img
                src="/terferme.jpg"
                alt="Ter'Ferme"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-bold text-lg px-2 group-hover:text-[#122CE4] transition-colors">
              Ter'Ferme
            </h3>
            <p className="text-gray-500 text-sm px-2 pb-2">Producteur local</p>
          </a>
        </div>
      </section>

      {/* 4. SECTION CONTACT (Nouveau Formulaire) */}
      <section className="py-16 px-6 mb-10">
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Vous préférez m'écrire ?
            </h2>
            <p className="text-gray-500 mt-2">
              Laissez-moi vos coordonnées, je vous rappelle dans la journée.
            </p>
          </div>

          {/* Formulaire compatible Netlify */}
          <form
            name="contact-artisans"
            method="POST"
            data-netlify="true"
            className="space-y-6"
          >
            {/* Champ caché OBLIGATOIRE pour que Netlify avec React fonctionne */}
            <input type="hidden" name="form-name" value="contact-artisans" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#122CE4] focus:border-transparent outline-none transition-all"
                  placeholder="contact@entreprise.fr"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Votre Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#122CE4] focus:border-transparent outline-none transition-all"
                  placeholder="06 00 00 00 00"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message (Optionnel)
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#122CE4] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Parlez-moi brièvement de votre activité et de vos besoins..."
              ></textarea>
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              className="w-full bg-[#122CE4] text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
