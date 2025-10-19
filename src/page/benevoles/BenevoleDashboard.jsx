import React, { useEffect, useState } from "react";
import BenevoleLayout from "./BenevoleLayout";
import data from "../../composantjson/benevoleDashboard.json";
import { p } from "framer-motion/client";

export default function BenevoleDashboard() {
 
  const [benevole, setBenevole] = useState({});
  const [projets, setProjets] = useState([]);
  const [stats, setStats] = useState({});
  const [modalProjet, setModalProjet] = useState(null);
  const [modalDetails, setModalDetails] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("tous");
  const [cvFile, setCvFile] = useState(null); // ← Nouvel état
  const [messageCandidature, setMessageCandidature] = useState(""); // ← Nouvel état

 
  useEffect(() => {
    setBenevole(data.benevole);
    setProjets(data.projetsOng);
    setStats(data.statistiques);
  }, []);

 
  const handlePostuler = (projet) => {
    const hasSpecificSkills = projet.competencesRequises && 
      projet.competencesRequises.toLowerCase() !== "pas de compétences particulières";
    
    if (hasSpecificSkills) {
      setModalProjet(projet);
      // Réinitialiser les champs à l'ouverture
      setCvFile(null);
      setMessageCandidature("");
    } else {
      alert("Votre candidature a été enregistrée !");
    }
  };

  const handleDetails = (projet) => {
    setModalDetails(projet);
 
  };

  const handleConfirmCandidature = () => {
    if (!cvFile) {
      alert("Veuillez téléverser votre CV pour postuler à ce projet.");
      return;
    }

 

    alert("Votre candidature avec CV a été enregistrée !");
    setModalProjet(null);
    setCvFile(null);
    setMessageCandidature("");
  };


  const filteredProjets = projets.filter((projet) => {
    const searchLower = search.toLowerCase();
    const searchMatch =
      projet.nom.toLowerCase().includes(searchLower) ||
      projet.projet.toLowerCase().includes(searchLower);

    const noSkillsRequired = projet.competencesRequises.toLowerCase() === "pas de compétences particulières";
    const filterMatch =
      filter === "tous" ||
      (filter === "sansCompetence" && noSkillsRequired) ||
      (filter === "avecCompetence" && !noSkillsRequired);

    return searchMatch && filterMatch;
  });


  const ModalDetails = () => {
    if (!modalDetails) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
          <h3 className="text-lg font-bold text-blue-700 mb-2">
            {modalDetails.nom}
          </h3>
          <h4 className="text-md font-semibold text-gray-700 mb-4">
            {modalDetails.projet}
          </h4>
          <p className="text-gray-600 mb-2">{modalDetails.description}</p>
          <p className="text-gray-500 mb-2">📍 {modalDetails.lieu}</p>
          <p className="text-gray-500 mb-4">
            Compétences requises : {modalDetails.competencesRequises}
          </p>
          <div className="flex justify-end">
            <button
              onClick={() => setModalDetails(null)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ==================== Composant Modal Candidature ====================
  const ModalCandidature = () => {
    if (!modalProjet) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg">
          <h3 className="text-lg font-bold text-blue-700 mb-4">
            {modalProjet.projet}
          </h3>
          <p className="mb-4">
            Ce projet requiert les compétences suivantes :{" "}
            <span className="font-semibold">{modalProjet.competencesRequises}</span>
          </p>

          <textarea
            value={messageCandidature}
            onChange={(e) => setMessageCandidature(e.target.value)}
            placeholder="Décrivez votre expérience ou compétences..."
            className="w-full border px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
          />

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Téléverser votre CV (PDF ou Word)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCvFile(e.target.files?.[0] || null)}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {cvFile && (
              <p className="text-sm text-green-600 mt-1">
                ✅ Fichier sélectionné : {cvFile.name}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => {
                setModalProjet(null);
                setCvFile(null);
                setMessageCandidature("");
              }}
              className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
            >
              Annuler
            </button>
            <button
              onClick={handleConfirmCandidature}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    );
  };


  const ProjetCard = ({ projet }) => (
    <div className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col">
      <div className="p-4 space-y-2 flex-1">
        <img 
          src={projet.image} 
          alt={projet.nom} 
          className="w-full h-48 object-cover rounded-2xl" 
        />
        <h3 className="text-md text-gray-500">{projet.nom}</h3>
        <h2 className="text-lg font-semibold text-blue-700">{projet.projet}</h2>
        <p className="text-sm text-gray-600">{projet.description}</p>
        <p className="text-sm text-gray-500">
          📍 {projet.lieu} — {projet.status}
        </p>
        <p> date de début : {projet.dateDebut}</p>
        <p> date de fin : {projet.dateFin}</p>
        <p>nombre de benevole : {projet.besoinBenevoles}</p>
        <p className="text-sm text-gray-500">
          Compétences : {projet.competencesRequises}
        </p>
      </div>
      <div className="flex gap-2 p-4">
        <button
          onClick={() => handleDetails(projet)}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-xl transition"
        >
          En savoir +
        </button>
        <button
          onClick={() => handlePostuler(projet)}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-xl transition"
        >
          Postuler
        </button>
      </div>
    </div>
  );

  
  return (
    <BenevoleLayout>
      <div className="space-y-6">
        {/* Barre de recherche et filtres */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Rechercher un projet ou une ONG..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="tous">Tous les projets</option>
            <option value="sansCompetence">Sans compétences particulières</option>
            <option value="avecCompetence">Avec compétences requises</option>
          </select>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjets.map((projet) => (
            <ProjetCard key={projet.id} projet={projet} />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProjets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Aucun projet trouvé pour votre recherche
            </p>
          </div>
        )}
      </div>

      {/* Modals */}
      <ModalDetails />
      <ModalCandidature />
    </BenevoleLayout>
  );
}