import React, { useState } from "react";
import { Home, Settings, LogOut, CreditCard, Menu, X } from "lucide-react"; // correction des imports
import { NavLink, useNavigate } from "react-router-dom";

export default function DonateurSidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    if (window.confirm("Voulez-vous vraiment vous déconnecter ?")) {
      navigate("/connexion");
    }
  };

  const menu = [
    { name: "Tableau de bord", path: "/donateur/dashboard", icon: <Home size={20} /> },
    { name: "Mes Dons", path: "/donateur/dons", icon: <CreditCard size={20} /> },
    { name: "Paramètres", path: "/donateur/settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* --- Bouton mobile (menu burger) --- */}
      <div className="md:hidden bg-blue-700 text-white flex justify-between items-center px-4 py-3 shadow">
        <h2 className="text-lg font-bold">Espace Donateur</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition"
          aria-label="Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* --- Sidebar principale --- */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-blue-700 text-white flex flex-col p-4 transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* --- En-tête du menu --- */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Donateur</h2>
          <p className="text-blue-200 text-sm">Espace personnel</p>
        </div>

        {/* --- Liens de navigation --- */}
        <nav className="flex flex-col gap-2 flex-grow">
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // Ferme le menu sur mobile
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold"
                    : "hover:bg-blue-600 text-blue-100"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* --- Bouton de déconnexion --- */}
        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-3 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-semibold transition"
        >
          <LogOut size={20} />
          <span>Déconnexion</span>
        </button>
      </aside>
    </>
  );
}
