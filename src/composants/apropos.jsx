import React from "react";
import logo4 from "../assets/images.jpg"; // remplace par le chemin de ton image

export default function Apropos() {
  return (
    <section
      id="apropos"
      className="bg-gradient-to-br from-blue-50 to-purple-50 w-full flex flex-col md:flex-row justify-between items-start px-6 py-20 gap-12"
    >
      {/* Partie texte à gauche */}
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          À propos de Nyaha
        </h2>
        <p className="text-xl text-blue-600 mb-8">
          Ensemble, donnons de la visibilité aux causes qui comptent
        </p>

        {/* Accordéons */}
        <details className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <summary className="text-2xl font-bold text-blue-900 cursor-pointer flex items-center">
            🎯 Notre Mission (clicker )
          </summary>
          <div className="mt-4 text-gray-700 text-lg leading-relaxed">
            <p className="mb-2">
              Nyaha est née d'un constat simple : <span className="font-semibold text-blue-600">de nombreuses ONG manquent de visibilité</span>, 
              tandis que des milliers de personnes souhaitent s'engager mais ne savent pas par où commencer.
            </p>
            <p>
              Notre plateforme crée le pont entre ces deux mondes en offrant aux ONG un espace pour présenter leurs projets 
              et en permettant aux donateurs et bénévoles de découvrir des causes qui leur tiennent à cœur.
            </p>
          </div>
        </details>

        <details className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <summary className="text-2xl font-bold text-blue-900 cursor-pointer flex items-center">
            💡 Nos Valeurs (clicker )
          </summary>
          <div className="mt-4 text-gray-700 text-lg grid grid-cols-1 gap-4">
            <div>
              <h4 className="font-bold text-blue-900 mb-1">🔍 Transparence</h4>
              <p>Nous vérifions chaque ONG et assurons une transparence totale sur l'utilisation des dons.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">🤝 Accessibilité</h4>
              <p>Une plateforme simple et intuitive pour que chacun puisse facilement s'engager.</p>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 mb-1">💪 Impact</h4>
              <p>Chaque action compte. Nous mesurons et partageons l'impact réel de chaque contribution.</p>
            </div>
          </div>
        </details>
      </div>

      {/* Image fixe à droite */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={logo4} // remplace par ton image
          alt="Enfants en détresse"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>
    </section>
  );
}
