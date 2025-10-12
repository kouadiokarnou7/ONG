import React, { useEffect, useState } from "react";
import BenevoleLayout from "./BenevoleLayout";
import data from "../../composantjson/benevoleDashboard.json";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from "recharts";

export default function BenevoleStats() {
  const [stats, setStats] = useState({});
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    setStats(data.statistiques);
    setProjets(data.projetsOng);
  }, []);

  // --- Données pour graphique barres (projets en cours / à venir) ---
  const projetsData = [
    { name: "En cours", value: stats.projetsEnCours || 0 },
    { name: "À venir", value: stats.projetsAvenir || 0 },
  ];

  // --- Données pour camembert (répartition heures de bénévolat) ---
  const pieData = [
    { name: "Heures bénévole", value: stats.heuresBenevolat || 0 },
    { name: "Reste", value: Math.max(0, 200 - (stats.heuresBenevolat || 0)) }, // exemple max 200h
  ];

  const COLORS = ["#1D4ED8", "#93C5FD"];

  return (
    <BenevoleLayout>
      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-blue-800">Statistiques</h2>

        {/* --- Graphique Barres --- */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Projets</h3>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={projetsData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#1D4ED8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Graphique Camembert --- */}
        <div className="bg-white shadow rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <h3 className="text-lg font-semibold text-gray-700">Heures de bénévolat</h3>
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#1D4ED8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Liste projets avec statut --- */}
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Projets disponibles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projets.map((p) => (
              <div
                key={p.id}
                className="border p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-blue-700">{p.projet}</h4>
                <p className="text-sm text-gray-600">{p.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BenevoleLayout>
  );
}
