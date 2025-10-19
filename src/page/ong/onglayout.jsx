import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import dashboardData from "../../composantjson/ongDashboard.json";
import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  DollarSign,
  Users,
  Settings,
} from "lucide-react";


export default function OngLayout({ title, subtitle, rightActions, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { ong, sidebarMenu } = dashboardData;

  const iconMap = {
    LayoutDashboard,
    FolderKanban,
    DollarSign,
    Users,
    Settings,
  };

  const handleLogout = () => {
    navigate("/connexion");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:flex`}
      >
        <div className="flex items-center gap-3 mb-8 pb-6 border-b">
          <img
            src={ong.logo}
            alt={ong.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold text-gray-800">{ong.name}</h2>
            <p className="text-xs text-gray-500">Dashboard ONG</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {sidebarMenu.map((item, i) => {
            const Icon = iconMap[item.icon] || LayoutDashboard;
            return (
              <NavLink
                key={i}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "hover:bg-gray-100 text-gray-700 hover:text-blue-600"
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </NavLink>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-6 w-full py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium"
        >
          Déconnexion
        </button>
      </aside>

      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Bouton menu mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        {(title || subtitle || rightActions) && (
          <header className="bg-white shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                {title && (
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h1>
                )}
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
              </div>
              {rightActions && <div className="flex items-center gap-4">{rightActions}</div>}
            </div>
          </header>
        )}

        {/* Slot pour le contenu des pages */}
        <main className="p-4 md:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
}
