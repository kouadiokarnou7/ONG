import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import image from "../../assets/image1.png";

export default function Inscriptiondon() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    nomcomplet: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    
    if (!acceptTerms) {
      alert("Veuillez accepter les conditions d'utilisation");
      return;
    }
    const submit= {...formData};
    console.log ("Formulaire soumis :", submit);
    console.log("Inscription donateur:", formData);
    alert("Inscription réussie !");
    navigate("/donateur/dashboard");

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
        
        {/* Image */}
        <div className="hidden md:block">
          <img
            src={image}
            alt="Illustration inscription donateur"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Formulaire */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          {/* Header */}
          <div className="text-center md:text-left mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
              Inscription Donateur
            </h1>
            <p className="text-gray-600">
              Rejoignez-nous pour faire la différence
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nom complet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Entrez votre nom complet"
                value={formData.nomcomplet}
                onChange={(e) =>
                  setFormData({ ...formData, nomcplet: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Adresse e-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-gray-700">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Minimum 8 caractères"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="space-y-2 relative">
              <label className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe <span className="text-red-500">*</span>
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmez votre mot de passe"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Conditions */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                J'accepte les{" "}
                <a href="#" className="text-green-600 hover:underline font-medium">
                  conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a href="#" className="text-green-600 hover:underline font-medium">
                  politique de confidentialité
                </a>
              </label>
            </div>

            {/* Bouton */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              S'inscrire
            </button>
          </div>

          {/* Retour */}
          <div className="text-center mt-4">
            <Link
              to="/inscription"
              className="text-gray-600 hover:text-gray-800 inline-flex items-center gap-2 transition"
            >
              <ArrowLeft size={20} />
              Retour au choix du rôle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
