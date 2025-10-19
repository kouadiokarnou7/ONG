import React, { useState } from "react";

export default function ModalAjout({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    datedebut: "",
    datefin: "",
    status: "En cours",
    besoinBenevoles: false,
    nombreBenevoles: "",
    besoinDons: false,
    montantDons: "",
  });

  if (!isOpen) return null; // modal non affiché si fermé

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    alert("✅ Nouveau projet ajouté !");
    setFormData({
      title: "",
      description: "",
      datedebut: "",
      datefin: "",
      status: "En cours",
      besoinBenevoles: false,
      nombreBenevoles: "",
      besoinDons: false,
      montantDons: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-[90%] md:w-[500px]">
        <h2 className="text-xl font-bold mb-4">Créer un nouveau projet</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          {/* === Titre et description === */}
          <input
            type="text"
            name="title"
            placeholder="Titre du projet"
            value={formData.title}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded-md"
            required
          ></textarea>

          {/* === Dates === */}
          <div className="flex gap-2">
            <input
              type="date"
              name="datedebut"
              value={formData.datedebut}
              onChange={handleChange}
              className="border p-2 rounded-md w-1/2"
              required
            />
            <input
              type="date"
              name="datefin"
              value={formData.datefin}
              onChange={handleChange}
              className="border p-2 rounded-md w-1/2"
              required
            />
          </div>

          {/* === Cases à cocher === */}
          <div className="flex flex-col gap-2 mt-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="besoinBenevoles"
                checked={formData.besoinBenevoles}
                onChange={handleChange}
              />
              Ce projet demande des bénévoles
            </label>

            {/* Champ dynamique : nombre de bénévoles */}
            {formData.besoinBenevoles && (
              <input
                type="number"
                name="nombreBenevoles"
                placeholder="Nombre total de bénévoles requis"
                value={formData.nombreBenevoles}
                onChange={handleChange}
                min="1"
                className="border p-2 rounded-md ml-6"
                required
              />
            )}

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="besoinDons"
                checked={formData.besoinDons}
                onChange={handleChange}
              />
              Ce projet accepte les dons
            </label>

            {/* Champ dynamique : montant total des dons */}
            {formData.besoinDons && (
              <input
                type="number"
                name="montantDons"
                placeholder="Montant total souhaité (en FCFA)"
                value={formData.montantDons}
                onChange={handleChange}
                min="1000"
                className="border p-2 rounded-md ml-6"
                required
              />
            )}
          </div>

          {/* === Boutons === */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
