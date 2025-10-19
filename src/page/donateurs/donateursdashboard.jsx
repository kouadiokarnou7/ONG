

import React, { useEffect, useState } from "react";

import DonateurLayout from "./donateurlayout";
import data from "../../composantjson/donateurDashboard.json";
import { p } from "framer-motion/client";
export default function DonateursDashboard() {
    const [donateur, setDonateur] = useState({});
    const [projets, setProjets] = useState([]);
    const [stats, setStats] = useState({});

    useEffect(() => {
        setDonateur(data.donateur);
        setProjets(data.projetsOng);
        setStats(data.statistiques);
    }, []);

    return (
        <DonateurLayout>
            <div className="space-y-10">
                <h2 className="text-2xl font-bold text-blue-800">Tableau de bord</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* --- Carte Statistique --- */}
                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Total des dons</h3>
                        <p className="text-3xl font-bold text-green-600">
                            {stats.totalDons ? `${stats.totalDons} FCFA` : "0 FCFA"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Depuis la création de votre compte</p>
                    </div>

                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Projets soutenus</h3>
                        <p className="text-3xl font-bold text-blue-600">
                            {stats.projetsSoutenus || 0}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Projets auxquels vous avez contribué</p>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-4 text-gray-700">Dons mensuels</h3>

                        <p className="text-3xl font-bold text-purple-600">

                            {stats.donsMensuels ? `${stats.donsMensuels} FCFA` : "0 FCFA"}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Moyenne des dons par mois</p>
                    </div>
                </div>
                {/* --- Liste des projets --- */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-700">Projets des ONG</h3>
                    {data.donateurs[0].projets.length === 0 ? (
                        <p className="text-gray-500">Aucun projet disponible pour le moment.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            { data.donateurs[0].projets.map((projet) => (
                                <div
                                    key={projet.id}
                                    className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
                                >
                                    <img
                                        src={projet.image || "https://via.placeholder.com/400x200"}
                                        alt={projet.titre}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-md text-gray-500">{projet.nom}</h3>

                                        <h2 className="text-lg font-semibold text-blue-700">{projet.projet}</h2>
                                        <p className="text-sm text-gray-600">{projet.description}</p>
                                        <p className="text-sm text-gray-500">
                                            📍 {projet.lieu} — {projet.status
                                                    ? projet.status : "Statut inconnu"}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Compétences : {projet.competencesRequises
                                                    ? projet.competencesRequises : "Aucune compétence requise"}
                                        </p>
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