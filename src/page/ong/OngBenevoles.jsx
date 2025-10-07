import React, { useState } from "react";
import dashboardData from "../../composantjson/ongDashboard.json";
import { Menu, X, LayoutDashboard, FolderKanban, DollarSign, Users, Settings, Plus, Mail, Phone, Clock, Award } from "lucide-react";
 import { Navigate } from "react-router-dom";

export default function OngBenevoles() {
  const { ong, volunteers, projects, sidebarMenu } = dashboardData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  // Calculer les statistiques
  const totalHours = volunteers.reduce((sum, v) => sum + v.hours, 0);
  const averageHours = Math.round(totalHours / volunteers.length);

  // Fonction pour obtenir les projets d'un bénévole
  const getVolunteerProjects = (volunteerProjects) => {
    return projects.filter(p => volunteerProjects.includes(p.id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:relative md:flex`}
      >
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
                  i === 3
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

        <button onClick={()=> Navigate('/')} className="mt-6 w-full py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
          Déconnexion
        </button>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

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
        <header className="bg-white shadow-sm p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Bénévoles
              </h1>
              <p className="text-gray-600 mt-1">
                Gérez votre équipe de bénévoles
              </p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md">
              <Plus size={20} />
              Ajouter un bénévole
            </button>
          </div>
        </header>

        <main className="p-4 md:p-8 flex-1">
          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Total Bénévoles</h3>
                <Users size={32} className="opacity-80" />
              </div>
              <p className="text-4xl font-bold">{volunteers.length}</p>
              <p className="text-green-100 text-sm mt-2">Actifs dans l'organisation</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Heures totales</h3>
                <Clock size={32} className="opacity-80" />
              </div>
              <p className="text-4xl font-bold">{totalHours}h</p>
              <p className="text-blue-100 text-sm mt-2">Temps de bénévolat cumulé</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Moyenne</h3>
                <Award size={32} className="opacity-80" />
              </div>
              <p className="text-4xl font-bold">{averageHours}h</p>
              <p className="text-purple-100 text-sm mt-2">Par bénévole</p>
            </div>
          </div>

          {/* Liste des bénévoles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {volunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                onClick={() => setSelectedVolunteer(volunteer)}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-2xl">
                        {volunteer.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{volunteer.name}</h3>
                      <p className="text-green-100 text-sm">
                        Membre depuis {new Date(volunteer.joinDate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corps */}
                <div className="p-6 space-y-4">
                  {/* Heures */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock className="text-blue-600" size={20} />
                      <span className="text-gray-700 font-medium">Heures</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{volunteer.hours}h</span>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail size={16} className="text-gray-400" />
                      <span>{volunteer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone size={16} className="text-gray-400" />
                      <span>{volunteer.phone}</span>
                    </div>
                  </div>

                  {/* Compétences */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Compétences</p>
                    <div className="flex flex-wrap gap-2">
                      {volunteer.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Projets */}
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Projets ({volunteer.projects.length})
                    </p>
                    <div className="space-y-1">
                      {getVolunteerProjects(volunteer.projects).map((project) => (
                        <div
                          key={project.id}
                          className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-700"
                        >
                          • {project.title}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-4 border-t">
                    <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Contacter
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                      Modifier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Modal détails bénévole */}
      {selectedVolunteer && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVolunteer(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Profil du bénévole</h2>
                <button
                  onClick={() => setSelectedVolunteer(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-3xl">
                    {selectedVolunteer.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedVolunteer.name}</h3>
                  <p className="text-green-100">
                    Membre depuis {new Date(selectedVolunteer.joinDate).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Heures totales</p>
                  <p className="text-3xl font-bold text-blue-600">{selectedVolunteer.hours}h</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Projets actifs</p>
                  <p className="text-3xl font-bold text-green-600">{selectedVolunteer.projects.length}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Informations de contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="text-gray-400" size={20} />
                    <span className="text-gray-700">{selectedVolunteer.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone className="text-gray-400" size={20} />
                    <span className="text-gray-700">{selectedVolunteer.phone}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Compétences</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedVolunteer.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Projets assignés</h4>
                <div className="space-y-2">
                  {getVolunteerProjects(selectedVolunteer.projects).map((project) => (
                    <div
                      key={project.id}
                      className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800">{project.title}</p>
                          <p className="text-sm text-gray-600">{project.category}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "En cours"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
