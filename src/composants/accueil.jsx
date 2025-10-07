import React from "react";

function Accueil() {
  return (
    <section
      id="accueil"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-12"
    >
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920)",
        }}
      />
      
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-blue-900 opacity-60" />
      
      {/* Contenu au-dessus de l'overlay */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center drop-shadow-2xl">
          Nyaha,
        </h1>
        <p className="text-white text-xl md:text-2xl max-w-4xl text-center mb-12 drop-shadow-lg leading-relaxed">
          La plateforme qui <span className="font-semibold">donne de la visibilité aux ONG</span> et les rapproche des donateurs et bénévoles qui partagent leurs valeurs.
        </p>

        {/* Call to action pour les ONG */}
        <div className="bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl max-w-3xl mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Vous êtes une ONG ?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
            Rejoignez notre communauté et <span className="font-semibold text-blue-600">donnez de la visibilité à vos projets</span>. Connectez-vous avec des personnes prêtes à s'engager pour vos causes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/inscription'}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:scale-105"
            >
              Rejoindre la communauté 
            </button>
            <button 
              onClick={() => window.location.href = '#apropos'}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
            >
              En savoir plus
            </button>
          </div>
        </div>
        
        {/* Section des 3 piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🏢</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Pour les ONG</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Accédez à une communauté de donateurs et bénévoles engagés. Partagez vos projets et trouvez le soutien dont vous avez besoin.
            </p>
            <button 
              onClick={() => window.location.href = '#apropos'}
              className="text-blue-600 font-semibold hover:underline text-lg"
            >
              En savoir plus →
            </button>
          </div>
          
          <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Pour les Donateurs</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Découvrez des ONG vérifiées et soutenez les causes qui vous tiennent à cœur en toute transparence.
            </p>
            <button 
              onClick={() => window.location.href = '#catalogue'}
              className="text-blue-600 font-semibold hover:underline text-lg"
            >
              Voir le catalogue →
            </button>
          </div>
          
          <div className="bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl text-center hover:scale-105 transition-transform">
            <div className="text-5xl mb-4">🤲</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Pour les Bénévoles</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Trouvez des missions de bénévolat qui correspondent à vos compétences et à vos valeurs.
            </p>
            <button 
              onClick={() => window.location.href = '#catalogue'}
              className="text-blue-600 font-semibold hover:underline text-lg"
            >
              Explorer les ONG →
            </button>
          </div>
        </div>

        {/* Section statistiques d'impact */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/30">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-blue-100 text-lg">ONG partenaires</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/30">
            <div className="text-4xl font-bold text-white mb-2">2000+</div>
            <div className="text-blue-100 text-lg">Donateurs actifs</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/30">
            <div className="text-4xl font-bold text-white mb-2">500K€</div>
            <div className="text-blue-100 text-lg">Dons collectés</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;