import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FormOng from "../../composants/formONG";
import image1 from "../../assets/image1.jpg";


export default function InscriptionONG() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
    >
      {/* Conteneur principal centré */}
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">
          Inscription ONG
        </h1>

        {/* Conteneur flex pour image à gauche et formulaire à droite */}
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Image à gauche */}
          <div className="flex-shrink-0">
            <img
              src={image1}
              alt="Illustration inscription ONG"
              className="rounded-lg shadow-md max-w-full h-auto md:w-80"
            />
          </div>

          {/* Formulaire à droite */}
          <div className="w-full max-w-md">
            <FormOng />
          </div>
        </div>

        {/* Lien de retour */}
        <div className="text-center mt-8">
          <Link
            to="/inscription"
            className="text-gray-500 hover:text-gray-800 inline-flex items-center"
          >
            ← Retour au choix du rôle
          </Link>
        </div>
      </div>
    </motion.div>
  );
}