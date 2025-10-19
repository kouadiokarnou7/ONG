import React, { useEffect, useState } from "react";
import DonateurLayout from "./donateurlayout";
import data from "../../composantjson/donateurDashboard.json";
import { Bell, Lock, User } from "lucide-react";

export default function Setting() {
  const [donateur, setDonateur] = useState({});
  const [profil, setProfil] = useState({});
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
  });

  useEffect(() => {
    // 
    if (data.donateurs && data.donateurs.length > 0) {
      setDonateur(data.donateurs[0]);
    }
    setProfil(data.profil || {});
  }, []);

  const handleChange = (e) => {
    setDonateur({ ...donateur, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Modifications enregistrées !");
  };

  return (
    <DonateurLayout>
      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-blue-800">Paramètres du compte</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-2xl p-6 md:col-span-2">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <User className="text-blue-600" /> Informations personnelles
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nom" className="block text-gray-700 text-sm font-bold mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={donateur.nom || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez votre nom"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="prenom" className="block text-gray-700 text-sm font-bold mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={donateur.prenom || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Entrez votre prénom"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={donateur.email || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="exemple@email.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="telephone" className="block text-gray-700 text-sm font-bold mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={donateur.telephone || ""}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="+225 07 00 00 00"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                Sauvegarder les changements
              </button>
            </form>
          </div>

          <div className="bg-white shadow rounded-2xl p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
              <Lock className="text-blue-600" /> Sécurité
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="ancienMotDePasse" className="block text-gray-700 text-sm font-bold mb-2">
                  Ancien mot de passe
                </label>
                <input
                  type="password"
                  id="ancienMotDePasse"
                  name="ancienMotDePasse"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="nouveauMotDePasse" className="block text-gray-700 text-sm font-bold mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="nouveauMotDePasse"
                  name="nouveauMotDePasse"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
              >
                Mettre à jour
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white shadow rounded-2xl p-6 md:col-span-3">
          <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <Bell className="text-blue-600" /> Préférences de notification
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() =>
                  setNotifications({ ...notifications, email: !notifications.email })
                }
              />
              <span>Recevoir des notifications par e-mail</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={() =>
                  setNotifications({ ...notifications, sms: !notifications.sms })
                }
              />
              <span>Recevoir des notifications par SMS</span>
            </label>
          </div>
        </div>
      </div>
    </DonateurLayout>
  );
}
