import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import DonateurLayout from "./donateurlayout";
import data from "../../composantjson/donateurDashboard.json";

export default function Don() {
    const [donateur, setDonateur] = useState({});
    const [projets, setProjets] = useState([]);
    const [stats, setStats] = useState({});
    const location = useLocation();

    const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
    const initialProjectId = query.get("projectId") || "";
    const [selectedId, setSelectedId] = useState(initialProjectId);

    useEffect(() => {
        const d = data.donateurs?.[0] || {};
        const p = d.projets || [];
        setDonateur(d);
        setProjets(p);
        setStats(data.statistiques || {});
    }, []);

    const selectedProject = useMemo(() => {
        return projets.find((pr) => String(pr.id) === String(selectedId));
    }, [projets, selectedId]);

    return (
        <DonateurLayout>
            <div className="space-y-10">
                <h2 className="text-2xl font-bold text-blue-800">Faire un don</h2>
                <p className="text-sm text-gray-600">Choisissez un projet et un montant. Le paiement est redirigé vers le fournisseur associé au projet.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-3">
                        <h3 className="text-lg font-semibold mb-4">
                            Choisissez un montant à donner
                        </h3>
                    </div>
                    <div className="bg-white shadow rounded-2xl p-6 md:col-span-2">
                        <form
                          action={selectedProject?.paiement?.apiExterne || "#"}
                          method="POST"
                          onSubmit={(e) => {
                            if (!selectedProject || !selectedProject.paiement?.apiExterne) {
                              e.preventDefault();
                              alert("Veuillez sélectionner un projet valide.");
                              return;
                            }
                            // Sécuriser côté backend dans un vrai projet
                            e.currentTarget.action = selectedProject.paiement.apiExterne;
                          }}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                    Montant ({selectedProject?.paiement?.devise || "devise"})
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
                                    value={selectedId}
                                    onChange={(e) => setSelectedId(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Sélectionnez un projet</option>
                                    {projets.map((projet) => (
                                        <option key={projet.id} value={projet.id}>
                                            {projet.nom} ({projet.paiement?.fournisseur || ""})
                                        </option>
                                    ))}
                                </select>
                                {selectedProject && (
                                  <p className="mt-2 text-xs text-gray-500">Fournisseur: {selectedProject.paiement?.fournisseur} — Devise: {selectedProject.paiement?.devise}</p>
                                )}
                            </div>
                            {/* Champs cachés additionnels pour passer des infos utiles (non sécurisés, à adapter côté backend) */}
                            <input type="hidden" name="project_id" value={selectedProject?.id || ""} />
                            <input type="hidden" name="project_name" value={selectedProject?.nom || ""} />
                            <input type="hidden" name="description" value={selectedProject?.paiement?.description || ""} />
                            <input type="hidden" name="currency" value={selectedProject?.paiement?.devise || "XOF"} />
                            <input type="hidden" name="return_url" value={selectedProject?.paiement?.urlRetour || ""} />
                            <input type="hidden" name="cancel_url" value={selectedProject?.paiement?.urlAnnulation || ""} />
                            {/* Dans un vrai flow, les clés publiques/ids se passent côté backend */}

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white hover:bg-blue-700 py-3 px-4 rounded-xl transition font-semibold"
                            >
                                Continuer vers le paiement
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </DonateurLayout>
    );
}
