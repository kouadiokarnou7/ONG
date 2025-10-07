import React, { useState } from "react";
import { Upload, X, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormOng() {
  const navigate = useNavigate();
  const [logoPreview, setLogoPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    customDomain: "",
    email: "",
    location: "",
    description: "",
    mission: "",
    creationDate: "", // <-- Nouveau champ ajouté
  });
  const [step, setStep] = useState(1);

  // Password state
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => setLogoPreview(null);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    const finalDomain =
      formData.domain === "autre" ? formData.customDomain : formData.domain;

    const submission = { ...formData, domain: finalDomain };
    console.log("Données du formulaire:", submission);
    alert("Inscription envoyée !");
    navigate("/ong/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg overflow-hidden relative"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Inscription ONG</h2>
        <p className="text-gray-600 text-sm">
          Rejoignez notre plateforme et partagez votre mission
        </p>
      </div>

      {/* Step 1 */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          step === 1
            ? "opacity-100 translate-x-0 relative"
            : "opacity-0 -translate-x-full absolute top-0 left-0 w-full pointer-events-none"
        }`}
      >
        {/* Logo Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Logo de l'ONG <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            {logoPreview ? (
              <div className="relative">
                <img
                  src={logoPreview}
                  alt="Logo preview"
                  className="w-24 h-24 object-cover rounded-lg border-2 border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeLogo}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <label className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                <Upload size={24} className="text-gray-400" />
                <span className="text-xs text-gray-500 mt-1">Ajouter</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </label>
            )}
            <div className="flex-1">
              <p className="text-sm text-gray-600">Format: JPG, PNG (max 2MB)</p>
              <p className="text-xs text-gray-500">
                Votre logo sera visible sur votre profil public
              </p>
            </div>
          </div>
        </div>

        {/* Informations de base */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Nom de l'ONG <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Respire Libre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Domaine d'activité <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.domain}
              onChange={(e) =>
                setFormData({ ...formData, domain: e.target.value, customDomain: "" })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Sélectionner...</option>
              <option value="sante">Santé</option>
              <option value="education">Éducation</option>
              <option value="environnement">Environnement</option>
              <option value="droits-humains">Droits Humains</option>
              <option value="aide-humanitaire">Aide Humanitaire</option>
              <option value="developpement">Développement</option>
              <option value="autre">Autre</option>
            </select>
            {formData.domain === "autre" && (
              <input
                type="text"
                placeholder="Précisez le domaine d'activité"
                value={formData.customDomain}
                onChange={(e) =>
                  setFormData({ ...formData, customDomain: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2"
                required
              />
            )}
          </div>
        </div>

        {/* Deuxième ligne : Email, Localisation, Date de création */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Adresse e-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="contact@ong.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Localisation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Pays / Ville"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* Nouveau champ : Date de création */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Date de création <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={formData.creationDate}
              onChange={(e) =>
                setFormData({ ...formData, creationDate: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Step 2 */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          step === 2
            ? "opacity-100 translate-x-0 relative"
            : "opacity-0 translate-x-full absolute top-0 left-0 w-full pointer-events-none"
        }`}
      >
        {/* Description courte */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description courte <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Ex: Une ONG dédiée à la lutte contre les maladies respiratoires."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-20"
            maxLength={200}
            required
          />
          <p className="text-xs text-gray-500">
            Maximum 200 caractères - {formData.description.length}/200
          </p>
        </div>

        {/* Mission / Cause */}
        <div className="space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Mission / Cause <span className="text-red-500">*</span>
          </label>
          <textarea
            placeholder="Ex: Améliorer la qualité de vie des personnes atteintes de maladies respiratoires..."
            value={formData.mission}
            onChange={(e) => setFormData({ ...formData, mission: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
            required
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition"
          >
            Précédent
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Suivant
          </button>
        </div>
      </div>

      {/* Step 3 */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          step === 3
            ? "opacity-100 translate-x-0 relative"
            : "opacity-0 translate-x-full absolute top-0 left-0 w-full pointer-events-none"
        }`}
      >
        <div className="space-y-4 mt-2">
          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Entrez le mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-9 text-gray-500"
              aria-label="Afficher/masquer le mot de passe"
            >
              {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="space-y-2 relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirmation du mot de passe <span className="text-red-500">*</span>
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirmez le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              minLength={6}
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute right-3 top-9 text-gray-500"
              aria-label="Afficher/masquer la confirmation"
            >
              {confirmPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handlePrev}
            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition"
          >
            Précédent
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            S'inscrire
          </button>
        </div>
      </div>
    </form>
  );
}