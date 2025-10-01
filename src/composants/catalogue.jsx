import React from "react"

function Catalogue () {

    const ongList = [
        { name: 'ONG Santé', desc: 'Accès aux soins dans les zones rurales.' },
        { name: 'Éducation Espoir', desc: 'Soutien scolaire pour enfants défavorisés.' },
        { name: 'Environnement Vert', desc: 'Protection de la nature et écologie.' },
      ];
    return(

        <section id="catalogue" className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-center px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Nos ONG</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ongList.map((ong, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{ong.name}</h3>
                <p className="text-gray-700">{ong.desc}</p>
                <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  Voir profil
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Catalogue;