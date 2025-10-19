import React, { useState } from "react";
import dashboardData from "../../composantjson/ongDashboard.json";
import { DollarSign, Download, Filter, Search } from "lucide-react";
import OngLayout from "./onglayout";

export default function OngDons() {
  const { donations } = dashboardData;
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Tous");

  // Calculer les statistiques
  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);
  const monthlyDonations = donations.filter((d) => d.type === "Mensuel");
  const oneTimeDonations = donations.filter((d) => d.type === "Ponctuel");

  // Filtrer les dons
  const filteredDonations = donations.filter((d) => {
    const matchesSearch =
      d.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "Tous" || d.type === filterType;
    return matchesSearch && matchesType;
  });

  const rightActions = (
    <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md">
      <Download size={20} />
      Exporter
    </button>
  );

  return (
    <OngLayout title="Dons Reçus" subtitle="Suivez tous les dons reçus pour vos projets" rightActions={rightActions}>
      {/* Statistiques des dons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Total des dons</h3>
            <DollarSign size={32} className="opacity-80" />
          </div>
          <p className="text-4xl font-bold">{totalAmount} FCFA</p>
          <p className="text-green-100 text-sm mt-2">{donations.length} transactions</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Dons mensuels</h3>
            <DollarSign size={32} className="opacity-80" />
          </div>
          <p className="text-4xl font-bold">{monthlyDonations.length}</p>
          <p className="text-blue-100 text-sm mt-2">
            {monthlyDonations.reduce((sum, d) => sum + d.amount, 0)} FCFA / mois
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Dons ponctuels</h3>
            <DollarSign size={32} className="opacity-80" />
          </div>
          <p className="text-4xl font-bold">{oneTimeDonations.length}</p>
          <p className="text-purple-100 text-sm mt-2">
            {oneTimeDonations.reduce((sum, d) => sum + d.amount, 0)} FCFA total
          </p>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Barre de recherche */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par donateur ou projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filtre par type */}
          <div className="flex gap-2">
            {["Tous", "Mensuel", "Ponctuel"].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-3 rounded-lg font-medium transition-all ${
                  filterType === type
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Liste des dons */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Donateur</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Projet</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Montant</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredDonations.map((donation) => (
                <tr key={donation.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">
                          {donation.donorName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{donation.donorName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-800">{donation.projectTitle}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-lg font-bold text-green-600">{donation.amount} FCFA</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        donation.type === "Mensuel"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {donation.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-gray-600">
                      {new Date(donation.date).toLocaleDateString("fr-FR")}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {donation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDonations.length === 0 && (
          <div className="text-center py-12">
            <DollarSign className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucun don trouvé</h3>
            <p className="text-gray-500">Aucun don ne correspond à votre recherche</p>
          </div>
        )}
      </div>
    </OngLayout>
  );
}
