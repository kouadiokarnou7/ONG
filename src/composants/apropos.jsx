import React from "react";

export default function Apropos() {
  return (
    <section
      id="apropos"
      className="bg-blue-50 w-full min-h-screen flex flex-col justify-center items-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center hover:underline">
        À propos
      </h2>
      <p className="text-gray-700 text-base md:text-lg max-w-3xl text-center">
        Notre mission est de donner de la visibilité aux ONG et faciliter la connexion avec les donateurs et bénévoles.
      </p>
    </section>
  );
}
