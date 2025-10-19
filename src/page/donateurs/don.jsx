import React, { useEffect, useState } from "react";
import DonateurLayout from "./donateurlayout";
import data from "../../composantjson/donateurDashboard.json";

export default function Don() {
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
                <h2 className="text-2xl font-bold text-blue-800">Faire un don</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Choisissez un montant à donner
                        </h3>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-6 md:col-span-2">
                        <form action={data.donateur?.paiement?.apiExterne} method="POST">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                    Montant ({data.donateur?.paiement?.devise || "XOF"})
                                </label>
                                <input  
                                    type="number"
                                    name="amount"
                                    id="amount"
                                    min="1"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Entrez le montant"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="project">
                                    Projet
                                </label>
                                <select
                                    name="project"
                                    id="project"
                                    required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Sélectionnez un projet</option>
                                    {data.donateurs[0].projets.map((projet) => (
                                        <option key={projet.id} value={projet.id}>
                                            {projet.projet} - {projet.ong}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <input type="hidden" name="currency" value={data.donateur?.paiement?.devise || "XOF"} />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 rounded-xl transition font-semibold"
                            >
                                Faire un don
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DonateurLayout>
    );
}