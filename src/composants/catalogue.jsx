import React, { useState } from "react";
import onglist from "../composantjson/catalogue.json";

// Page catalogue: on enlève la description sur la carte.
// Le bouton "En savoir +" ouvre un modal avec plus d'informations.
function Catalogue() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOng, setSelectedOng] = useState(null);

  // ONG mises en avant (6 max)
  const visibleOngs = onglist.slice(0, 6);

  // Si recherche, on filtre sur toute la liste
  const filteredOngs = searchTerm
    ? onglist.filter(
        (ong) =>
          ong.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          ong.cause.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : visibleOngs;

  return (
    <section
      id="catalogue"
      className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-center px-6 py-12"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10 hover:underline">
          Nos ONG partenaires
        </h2>

        {/* Barre de recherche */}
        <div className="text-center mb-12">
          <input
            type="text"
            placeholder="Rechercher une ONG..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Résultats filtrés */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredOngs.length > 0 ? (
            filteredOngs.map((ong) => (
              <div
                key={ong.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition overflow-hidden flex flex-col"
              >
                {/* Image ONG */}
                <img
                  src={ong.image}
                  alt={ong.name}
                  className="w-full h-48 object-cover"
                />

                {/* Contenu ONG (sans description/cause) */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{ong.name}</h3>
                  <h5 className="text-xl font-semibold text-gray-800"> {ong.desc} </h5>

                  {/* Boutons */}
                  <div className="mt-auto flex flex-wrap gap-3">
                    {/* "En savoir +" toujours présent */}
                    <button
                      onClick={() => setSelectedOng(ong)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      En savoir +
                    </button>

                    {/* Don */}
                    {ong.besoin && ong.besoin.includes("dons") ? (
                      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                        Faire un don
                      </button>
                    ) : (
                      <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">
                        Faire un don
                      </button>
                    )}

                    {/* Bénévolat */}
                    {ong.besoin && ong.besoin.includes("bénévoles") ? (
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        S'engager
                      </button>
                    ) : (
                      <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed">
                        S'engager
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Aucune ONG trouvée.</p>
          )}
        </div>
      </div>

      {/* Modal d'information détaillée */}
      {selectedOng && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setSelectedOng(null)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedOng.image}
                alt={selectedOng.name}
                className="w-full h-56 object-cover"
              />
              <button
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow"
                aria-label="Fermer"
                onClick={() => setSelectedOng(null)}
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedOng.name}</h3>
              <p className="text-gray-700">{selectedOng.desc}</p>
              <p className="text-gray-600 italic">{selectedOng.cause}</p>

              {selectedOng.besoin?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Besoins</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedOng.besoin.map((b, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-2 flex gap-3">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setSelectedOng(null)}
                >
                  Fermer
                </button>

                {selectedOng.besoin?.includes("dons") && (
                  <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                    Faire un don
                  </button>
                )}
                {selectedOng.besoin?.includes("bénévoles") && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                    S'engager
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Catalogue;
