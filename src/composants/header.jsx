// src/composants/Header.jsx (ou dans Home.jsx)

import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50 w-full">
      {/* ⚠️ ICI : PAS DE "container mx-auto" — on utilise px-4 pour le padding */}
      <div className="px-4 md:px-7 py-3 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Plateforme ONG</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#accueil" className="hover:text-orange-500">Accueil</a>
          <a href="#catalogue" className="hover:text-orange-500">Catalogue</a>
          <a href="#apropos" className="hover:text-orange-500">À propos</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800 py-4 px-4 space-y-3">
          <a
            href="#accueil"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#catalogue"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Catalogue
          </a>
          <a
            href="#apropos"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>
          <a
            href="#contact"
            className="block hover:text-orange-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;