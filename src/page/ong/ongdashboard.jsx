import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardData from "../../composantjson/ongDashboard.json";
import { Menu, X, LayoutDashboard, FolderKanban, DollarSign, Users, Settings, TrendingUp } from "lucide-react";

export default function OngDashboard() {
  const { ong, stats, projects, volunteers, donations, sidebarMenu } = dashboardData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Vous pouvez ajouter ici la logique de déconnexion (clear token, etc.)
    navigate("/connexion");
  };

  // Calculer les statistiques récentes
  const recentDonations = donations.slice(-5).reverse();
  const activeProjects = projects.filter(p => p.status === "En cours");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:flex`}
      >
        {/* Logo et nom ONG */}
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

        {/* Menu de navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {sidebarMenu.map((item, i) => {
            const Icon = {
              LayoutDashboard,
              FolderKanban,
              DollarSign,
              Users,
              Settings
            }[item.icon] || LayoutDashboard;

            return (
              <a
                key={i}
                href={item.link}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  i === 0
                    ? "bg-blue-600 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700 hover:text-blue-600"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.title}</span>
              </a>
            );
          })}
        </nav>

        {/* Bouton de déconnexion */}
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
        <header className="bg-white shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Tableau de bord
              </h1>
              <p className="text-gray-600 mt-1">
                Bienvenue sur votre espace de gestion
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="text-sm text-gray-600">Dernière connexion</p>
                <p className="text-sm font-semibold text-gray-800">
                  {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-4 md:p-8 flex-1 space-y-8">
          {/* Informations ONG */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-2">{ong.name}</h2>
            <p className="text-blue-100 mb-4">{ong.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-blue-200">Mission</p>
                <p className="font-medium">{ong.mission}</p>
              </div>
              <div className="text-right">
                <p className="text-blue-200">Fondée en</p>
                <p className="font-medium text-2xl">{ong.founded}</p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp className="text-blue-600" />
              Statistiques globales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Dons</p>
                    <p className="text-2xl font-bold text-blue-600 mt-1">
                      {stats.totalDonations} €
                    </p>
                  </div>
                  <DollarSign className="text-blue-600 opacity-20" size={40} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Bénévoles</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">
                      {stats.totalVolunteers}
                    </p>
                  </div>
                  <Users className="text-green-600 opacity-20" size={40} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-yellow-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Projets actifs</p>
                    <p className="text-2xl font-bold text-yellow-600 mt-1">
                      {stats.activeProjects}
                    </p>
                  </div>
                  <FolderKanban className="text-yellow-600 opacity-20" size={40} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-purple-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Projets terminés</p>
                    <p className="text-2xl font-bold text-purple-600 mt-1">
                      {stats.completedProjects}
                    </p>
                  </div>
                  <FolderKanban className="text-purple-600 opacity-20" size={40} />
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-600">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Bénéficiaires</p>
                    <p className="text-2xl font-bold text-red-600 mt-1">
                      {stats.beneficiaries}
                    </p>
                  </div>
                  <Users className="text-red-600 opacity-20" size={40} />
                </div>
              </div>
            </div>
          </div>

          {/* Projets actifs et dons récents */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Projets actifs */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FolderKanban className="text-blue-600" size={20} />
                Projets actifs
              </h2>
              <div className="space-y-3">
                {activeProjects.map((p) => (
                  <div
                    key={p.id}
                    className="border-l-4 border-blue-600 bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800">{p.title}</h3>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                        {p.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{p.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-gray-600">Collecté: </span>
                        <span className="font-semibold text-blue-600">
                          {p.donations} € / {p.goal} €
                        </span>
                      </div>
                      <div className="text-gray-600">
                        {p.volunteers} bénévoles
                      </div>
                    </div>
                    {/* Barre de progression */}
                    <div className="mt-3 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(p.donations / p.goal) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/ong/projets"
                className="mt-4 block text-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Voir tous les projets →
              </a>
            </div>

            {/* Dons récents */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="text-green-600" size={20} />
                Dons récents
              </h2>
              <div className="space-y-3">
                {recentDonations.map((d) => (
                  <div
                    key={d.id}
                    className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">{d.donorName}</p>
                      <p className="text-sm text-gray-600">{d.projectTitle}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(d.date).toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">
                        {d.amount} €
                      </p>
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                        {d.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="/ong/dons"
                className="mt-4 block text-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Voir tous les dons →
              </a>
            </div>
          </div>

          {/* Bénévoles actifs */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="text-green-600" size={20} />
              Bénévoles actifs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {volunteers.map((v) => (
                <div
                  key={v.id}
                  className="border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">
                        {v.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{v.name}</h3>
                      <p className="text-sm text-gray-600">{v.hours} heures</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {v.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="/ong/benevoles"
              className="mt-4 block text-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Voir tous les bénévoles →
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
