// src/composants/Header.jsx
import React, { useState } from 'react';
import logo1 from '../assets/logo1.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div className="px-6 md:px-10 py-3 flex justify-between items-center">
        
        {/* Logo + Nom */}
        <a href="#accueil" className="flex items-center space-x-2">
          <img src={logo1} alt="Logo Nyaha" className="w-10 h-10 rounded-xl" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">Nyaha</h1>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#accueil" className="hover:text-orange-400 transition">Accueil</a>
          <a href="#catalogue" className="hover:text-orange-400 transition">Catalogue</a>
          <a href="#apropos" className="hover:text-orange-400 transition">À propos</a>
          <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
        </nav>

        {/* Bouton Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-blue-800 py-4 px-6 space-y-4 font-medium animate-fade-in-down">
          <a href="#accueil" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="#catalogue" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Catalogue</a>
          <a href="#apropos" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>À propos</a>
          <a href="#contact" className="block hover:text-orange-400" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
