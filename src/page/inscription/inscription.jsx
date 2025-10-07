import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Building2, Heart, Users } from "lucide-react";

export default function Inscription() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-10 px-4">
      <div className="max-w-5xl w-full">
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-indigo-900">
          Rejoignez-nous
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Choisissez votre profil pour commencer l'inscription
        </p>

        {/* Grille de cartes avec images */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Carte ONG */}
          <Link
            to="ong"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Building2 className="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-3">
                Je suis une ONG
              </h2>
              <p className="text-gray-600 mb-4">
                Créez le profil de votre organisation et publiez vos projets pour recevoir des dons et recruter des bénévoles.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                S'inscrire <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Carte Donateur */}
          <Link
            to="donateur"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <Heart className="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-700 mb-3">
                Je suis un Donateur
              </h2>
              <p className="text-gray-600 mb-4">
                Soutenez les causes qui vous tiennent à cœur en faisant des dons sécurisés aux ONG de votre choix.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                S'inscrire <span className="ml-2">→</span>
              </div>
            </div>
          </Link>

          {/* Carte Bénévole */}
          <Link
            to="benevole"
            className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <Users className="w-24 h-24 text-white opacity-90 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-3">
                Je suis un Bénévole
              </h2>
              <p className="text-gray-600 mb-4">
                Donnez de votre temps et compétences pour aider les ONG dans leurs missions et projets.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                S'inscrire <span className="ml-2">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Section connexion */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Vous avez déjà un compte ?{" "}
            <Link
              to="/connexion"
              className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
            >
              Se connecter
            </Link>
          </p>
          <p className="text-gray-600">
             <Link
              to="/"
              className="text-indigo-600 font-semibold hover:text-indigo-800 hover:underline"
            >
              ← Retour à l'accueil
            </Link>
          </p>
        </div>
      </div>

      {/* 🔽 Ici s’affichera le contenu des sous-pages ONG, Donateur, Bénévole */}
      <div className="w-full mt-12">
        <Outlet />
      </div>
    </div>
  );
}
