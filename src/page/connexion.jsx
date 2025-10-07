import { useState } from 'react';
import logo4 from '../assets/logo1.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
        {/* Logo & Titre */}
        <div className="bg-blue-600 py-6 flex flex-col items-center">
          <img
            src={logo4}
            alt="Logo"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-3"
          />
          <h1 className="text-2xl font-bold text-white">Connexion</h1>
        </div>

        {/* Formulaire */}
        <div className="p-6">
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-blue-600"
                  aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* Bouton de connexion */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              Se connecter
            </button>
          </form>

          {/* Lien d'inscription */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Pas encore inscrit ?{' '}
              <a href="/inscription" className="text-orange-500 font-medium hover:text-orange-600 underline">
                S'inscrire sur la plateforme
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}