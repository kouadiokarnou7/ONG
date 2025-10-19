import React from "react";
import dashboardData from "../../composantjson/ongDashboard.json";
import { DollarSign, Users, TrendingUp, FolderKanban } from "lucide-react";
import OngLayout from "./onglayout";

export default function OngDashboard() {
  const { ong, stats, projects, volunteers, donations } = dashboardData;

  // Calculer les statistiques récentes
  const recentDonations = donations.slice(-5).reverse();
  const activeProjects = projects.filter((p) => p.status === "En cours");

  const rightHeader = (
    <div className="flex items-center gap-4">
      <div className="text-right hidden md:block">
        <p className="text-sm text-gray-600">Dernière connexion</p>
        <p className="text-sm font-semibold text-gray-800">
          {new Date().toLocaleDateString("fr-FR")}
        </p>
      </div>
    </div>
  );

  return (
    <OngLayout
      title="Tableau de bord"
      subtitle="Bienvenue sur votre espace de gestion"
      rightActions={rightHeader}
    >
      <div className="space-y-8">
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
                    {stats.totalDonations} FCFA
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
                        {p.donations} FCFA / {p.goal} FCFA
                      </span>
                    </div>
                    <div className="text-gray-600">{p.volunteers} bénévoles</div>
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
                      {new Date(d.date).toLocaleDateString("fr-FR")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">{d.amount} FCFA</p>
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
      </div>
    </OngLayout>
  );
}
