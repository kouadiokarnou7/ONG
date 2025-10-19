import React, { useState } from "react";
import dashboardData from "../../composantjson/ongDashboard.json";
import { Save, Upload, Lock, Bell, Globe } from "lucide-react";
import OngLayout from "./onglayout";

export default function OngSettings() {
  const { ong } = dashboardData;
  const [activeTab, setActiveTab] = useState("general");

  // États pour les formulaires
  const [generalInfo, setGeneralInfo] = useState({
    name: ong.name,
    email: ong.email,
    phone: ong.phone,
    address: ong.address,
    description: ong.description,
    mission: ong.mission,
  });

  const [notifications, setNotifications] = useState({
    emailDonations: true,
    emailProjects: true,
    emailVolunteers: false,
    smsAlerts: false,
  });

  const tabs = [
    { id: "general", label: "Informations générales", icon: Globe },
    { id: "security", label: "Sécurité", icon: Lock },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <OngLayout title="Paramètres" subtitle="Gérez les paramètres de votre organisation">
      {/* Onglets */}
      <div className="bg-white rounded-xl shadow-md mb-6">
        <div className="flex border-b overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Contenu des onglets */}
      <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
        {/* Informations générales */}
        {activeTab === "general" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Informations de l'organisation
              </h2>

              {/* Logo */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo de l'organisation
                </label>
                <div className="flex items-center gap-4">
                  <img
                    src={ong.logo}
                    alt={ong.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                  />
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Upload size={20} />
                    Changer le logo
                  </button>
                </div>
              </div>

              {/* Formulaire */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'organisation
                  </label>
                  <input
                    type="text"
                    value={generalInfo.name}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={generalInfo.email}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={generalInfo.phone}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    value={generalInfo.address}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, address: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={generalInfo.description}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mission
                  </label>
                  <textarea
                    value={generalInfo.mission}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, mission: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  <Save size={20} />
                  Enregistrer les modifications
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sécurité */}
        {activeTab === "security" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Sécurité du compte</h2>
              <div className="space-y-6">
                {/* Changer le mot de passe */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Changer le mot de passe</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mot de passe actuel</label>
                      <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nouveau mot de passe</label>
                      <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirmer le nouveau mot de passe</label>
                      <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Mettre à jour le mot de passe</button>
                  </div>
                </div>

                {/* Authentification à deux facteurs */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Authentification à deux facteurs</h3>
                      <p className="text-sm text-gray-600 mt-1">Ajoutez une couche de sécurité supplémentaire</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>

                {/* Sessions actives */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Sessions actives</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Windows - Chrome</p>
                        <p className="text-sm text-gray-600">Abidjan, Côte d'Ivoire • Actif maintenant</p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Actuel</span>
                    </div>
                  </div>
                  <button className="mt-4 text-red-600 hover:text-red-700 font-medium text-sm">Déconnecter toutes les autres sessions</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {activeTab === "notifications" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Préférences de notification</h2>
              <div className="space-y-4">
                {/* Email notifications */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Notifications par email</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Nouveaux dons</p>
                        <p className="text-sm text-gray-600">Recevoir un email pour chaque nouveau don</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.emailDonations}
                          onChange={(e) => setNotifications({ ...notifications, emailDonations: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Mises à jour de projets</p>
                        <p className="text-sm text-gray-600">Notifications sur l'avancement des projets</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.emailProjects}
                          onChange={(e) => setNotifications({ ...notifications, emailProjects: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Nouveaux bénévoles</p>
                        <p className="text-sm text-gray-600">Notification lors de l'inscription d'un bénévole</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.emailVolunteers}
                          onChange={(e) => setNotifications({ ...notifications, emailVolunteers: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* SMS notifications */}
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Notifications SMS</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">Alertes urgentes</p>
                        <p className="text-sm text-gray-600">Recevoir des SMS pour les alertes importantes</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={notifications.smsAlerts}
                          onChange={(e) => setNotifications({ ...notifications, smsAlerts: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                  <Save size={20} />
                  Enregistrer les préférences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </OngLayout>
  );
}
