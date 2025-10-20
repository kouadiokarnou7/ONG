

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DonateurLayout from "./donateurlayout";
import data from "../../composantjson/donateurDashboard.json";
export default function DonateursDashboard() {
    const [donateur, setDonateur] = useState({});
    const [projets, setProjets] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        setDonateur(data.donateurs?.[0] || {});
        setProjets(data.donateurs?.[0]?.projets || []);
        setStats(data.statistiques || {});
    }, []);

    return (
        <DonateurLayout>
            <div className="space-y-10">
                <h2 className="text-2xl font-bold text-blue-800">Tableau de bord</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* --- Carte Statistique --- */}
                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Montant total collecté</h3>
                        <p className="text-3xl font-bold text-green-600">
                            {stats.montantTotalCollecte ? `${stats.montantTotalCollecte} FCFA` : "0 FCFA"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Cumul sur la plateforme</p>
                    </div>

                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Projets en cours</h3>
                        <p className="text-3xl font-bold text-blue-600">
                            {stats.projetsEnCours || 0}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Actuellement ouverts</p>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Projets terminés</h3>

                        <p className="text-3xl font-bold text-purple-600">

                            {stats.projetsTermines || 0}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Clôturés avec succès</p>
                    </div>
                </div>
                {/* --- Liste des projets --- */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700">Projets des ONG</h3>
                    {projets.length === 0 ? (
                        <p className="text-gray-500">Aucun projet disponible pour le moment.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            { projets.map((projet) => (
                                <div
                                    key={projet.id}
                                    className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
                                >
                                    <img
                                        src={projet.image || "https://via.placeholder.com/400x200"}
                                        alt={projet.nom}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-lg font-semibold text-blue-700">{projet.nom}</h3>
                                        <p className="text-sm text-gray-600">{projet.description}</p>
                                        <p className="text-sm text-gray-500">Statut: {projet.status || "Inconnu"}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 my-2">
                                          <div
                                            className="bg-blue-600 h-2 rounded-full"
                                            style={{ width: `${Math.min(100, Math.round((projet.montantCollecte / projet.montantObjectif) * 100))}%` }}
                                          ></div>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                          {projet.montantCollecte} / {projet.montantObjectif} {projet.paiement?.devise || ""}
                                        </p>
                                        <p className="text-xs text-gray-500">Du {projet.dateDebut} au {projet.dateFin}</p>
                                        <div className="pt-2">
                                          <Link
                                            to={`/donateur/dons?projectId=${projet.id}`}
                                            className="inline-block w-full bg-blue-600 text-white hover:bg-blue-700 py-2 px-3 rounded-lg text-center font-semibold transition"
                                          >
                                            Faire un don
                                          </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </DonateurLayout>
    );
}