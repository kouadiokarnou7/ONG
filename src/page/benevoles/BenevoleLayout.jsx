import React from "react";
import BenevoleSidebar from "../../composants/BenevoleSidebar";
import data from "../../composantjson/benevoleDashboard.json";
import { Bell } from "lucide-react";
import logo1 from "../../assets/logo1.png";

export default function BenevoleLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 md:flex">
      {/* --- Sidebar et barre mobile (le composant gère déjà le responsive) --- */}
      <BenevoleSidebar />

      {/* --- Contenu principal --- */}
      <div className="flex-1 flex flex-col">
        {/* --- Header --- */}
        <header className="bg-white shadow p-3 sm:p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Avatar / Logo */}
            <img
              src={data.benevole.avatar || ""}
              alt={`${data.benevole.nom} ${data.benevole.prenom}`}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-base sm:text-lg font-bold text-gray-800">
                👋  {data.benevole.nom} {data.benevole.prenom}
              </p>
              <p className="text-xs sm:text-sm text-gray-500">Espace bénévoles</p>
            </div>
          </div>

          {/* --- Notifications et email --- */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Email */}
            <p className="font-medium text-gray-800 text-sm sm:text-base break-all sm:break-normal">
              {data.benevole.email}
            </p>

            {/* Notifications */}
            <button className="relative">
              <Bell size={24} className="text-gray-600 hover:text-blue-600 transition" />
              {/* Badge de notification */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
          </div>
        </header>

        {/* --- Zone de contenu dynamique --- */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
