import React from "react";

function Accueil() {
  return (
    <section
      id="accueil"
      className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-center px-6 py-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-center">
          Bienvenue sur notre plateforme
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl text-center">
          Nous connectons les ONG avec les donateurs et les bénévoles pour maximiser leur impact.
        </p>
      </section>
      
  );
}

export default Accueil;
