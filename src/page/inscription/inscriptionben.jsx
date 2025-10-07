import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import image from "../../assets/image3.jpg";

export default function InscriptionBen() {
    // États pour gérer l'affichage des mots de passe
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Fonctions pour basculer l'affichage
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-10 px-4">
            <div className="max-w-6xl w-full">
                <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">
                    Inscription Bénévoles
                </h1>
                
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Image */}
                    <div className="flex-1 max-w-md">
                        <img
                            src={image}
                            alt="Image d'inscription bénévole"
                            className="rounded-lg shadow-md w-full h-auto object-cover"
                        />
                    </div>

                    {/* Formulaire */}
                    <div className="flex-1 max-w-md">
                        <form className="w-full bg-white p-6 rounded-xl shadow-md space-y-4">
                            <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">
                                Inscription Bénévoles
                            </h2>

                            <div>
                                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom complet
                                </label>
                                <input 
                                    type="text" 
                                    id="nom" 
                                    placeholder="Votre nom complet" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Adresse e-mail
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="votre@email.com" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
                                />
                            </div>

                            {/* Champ Mot de passe */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="Votre mot de passe"
                                        className="w-full p-3 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Champ Confirmer Mot de passe */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirmer le mot de passe
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="confirm-password"
                                        placeholder="Confirmer votre mot de passe"
                                        className="w-full p-3 border border-gray-300 rounded-lg pr-10 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    />
                                    <button
                                        type="button"
                                        onClick={toggleConfirmPasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input 
                                    type="checkbox" 
                                    id="conditions"
                                    className="h-5 w-5 text-green-600 rounded focus:ring-green-500" 
                                />
                                <label htmlFor="conditions" className="ml-2 text-gray-700 text-sm">
                                    J'accepte les conditions d'utilisation
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition font-medium"
                            >
                                S'inscrire
                            </button>
                        </form>

                        {/* Lien de retour */}
                        <div className="text-center mt-6">
                            <Link 
                                to="/inscription" 
                                className="text-gray-500 hover:text-gray-800 inline-flex items-center transition"
                            >
                                ← Retour au choix du rôle
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}