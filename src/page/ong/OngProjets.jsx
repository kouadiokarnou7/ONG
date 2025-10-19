import React, { useState } from "react";
import dashboardData from "../../composantjson/ongDashboard.json";
import { FolderKanban, Users, Plus, Calendar, Target } from "lucide-react";
import OngLayout from "./onglayout";
import ModalAjout from '../../composants/modalajout';

export default function OngProjets() {
  const { projects } = dashboardData;
  const [filterStatus, setFilterStatus] = useState("Tous");
  const [isOpen, setIsOpen] = useState(false);
  const [allProjects,setAllProjects]=useState(projects);
   const handleAddProject = (newProject) => {
    setAllProjects([...allProjects, { id: Date.now(), ...newProject }]);
  };

  const filteredProjects =
    filterStatus === "Tous"
      ? projects
      : projects.filter((p) => p.status === filterStatus);

  const getStatusColor = (status) => {
    switch (status) {
      case "En cours":
        return "bg-green-100 text-green-700 border-green-300";
      case "Terminé":
        return "bg-blue-100 text-blue-700 border-blue-300";
      case "En attente":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <OngLayout
      title="Mes Projets"
      subtitle="Gérez et suivez tous vos projets"
      rightActions={
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          <Plus size={20} />
          Nouveau projet
        </button>
      }
    >
      {/* Filtres */}
      <div className="mb-6 flex flex-wrap gap-3">
        {["Tous", "En cours", "Terminé", "En attente"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filterStatus === status
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
          >
            {/* Header du projet */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-blue-100 text-sm">{project.description}</p>
            </div>

            {/* Corps du projet */}
            <div className="p-6 space-y-4">
              {/* Progression des dons */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Objectif de financement
                  </span>
                  <span className="text-sm font-bold text-blue-600">
                    {Math.round((project.donations / project.goal) * 100)}%
                  </span>
                </div>
                <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(project.donations / project.goal) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-gray-600">
                    Collecté: <span className="font-semibold text-gray-800">{project.donations} FCFA</span>
                  </span>
                  <span className="text-gray-600">
                    Objectif: <span className="font-semibold text-gray-800">{project.goal} FCFA</span>
                  </span>
                </div>
              </div>

              {/* Statistiques */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Users className="text-green-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{project.volunteers}</p>
                  <p className="text-xs text-gray-600">Bénévoles</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Target className="text-purple-600" size={20} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{project.beneficiaries}</p>
                  <p className="text-xs text-gray-600">Bénéficiaires</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    <Calendar className="text-orange-600" size={20} />
                  </div>
                  <p className="text-sm font-bold text-gray-800">
                    {new Date(project.endDate).toLocaleDateString("fr-FR", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-xs text-gray-600">Fin prévue</p>
                </div>
              </div>

              {/* Catégorie et dates */}
              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  Début: {new Date(project.startDate).toLocaleDateString("fr-FR")}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4">
                <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Voir détails
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <FolderKanban className="mx-auto text-gray-400 mb-4" size={64} />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Aucun projet trouvé
          </h3>
          <p className="text-gray-500">Aucun projet ne correspond à ce filtre</p>
        </div>
      )}
        <ModalAjout
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAdd={handleAddProject}
      />
    </OngLayout>
  );
}
