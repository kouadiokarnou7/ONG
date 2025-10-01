import React, { useState, useEffect } from 'react';
import logo1 from '../assets/logo1.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Configuration des couleurs par section
  const sectionColors = {
    accueil: 'bg-blue-700',
    catalogue: 'bg-blue-700',
    apropos: 'bg-blue-700',
    contact: 'bg-blue-700'
  };

  const sectionHoverColors = {
    accueil: 'hover:text-orange-800',
    catalogue: 'hover:text-yellow-800',
    apropos: 'hover:text-pink-800',
    contact: 'hover:text-blue-800'
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const currentBgColor = sectionColors[activeSection] || 'bg-blue-900';
  const currentHoverColor = sectionHoverColors[activeSection] || 'hover:text-orange-400';

  return (
    <header className={`${currentBgColor} text-white shadow-md sticky top-0 z-50 w-full transition-colors duration-500`}>
      <div className="px-6 md:px-10 py-3 flex justify-between items-center">
        
        {/* Logo + Nom */}
        <a href="#accueil" className="flex items-center space-x-2">
          <img src={logo1} alt="Logo Nyaha" className="w-10 h-10 rounded-xl" />
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">Nyaha</h1>
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a 
            href="#accueil" 
            className={`${activeSection === 'accueil' ? 'text-orange-300 font-bold' : ''} ${currentHoverColor} transition-colors`}
          >
            Accueil
          </a>
          <a 
            href="#catalogue" 
            className={`${activeSection === 'catalogue' ? 'text-orange-300 font-bold' : ''} ${currentHoverColor} transition-colors`}
          >
            Catalogue
          </a>
          <a 
            href="#apropos" 
            className={`${activeSection === 'apropos' ? 'text-orange-300 font-bold' : ''} ${currentHoverColor} transition-colors`}
          >
            À propos
          </a>
          <a 
            href="#contact" 
            className={`${activeSection === 'contact' ? 'text-orange-300 font-bold' : ''} ${currentHoverColor} transition-colors`}
          >
            Contact
          </a>
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
        <nav 
          className={`md:hidden py-4 px-6 space-y-4 font-medium transition-all duration-300`}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          <a 
            href="#accueil" 
            className={`block ${activeSection === 'accueil' ? 'text-yellow-300 font-bold' : ''} ${currentHoverColor}`} 
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>
          <a 
            href="#catalogue" 
            className={`block ${activeSection === 'catalogue' ? 'text-yellow-300 font-bold' : ''} ${currentHoverColor}`} 
            onClick={() => setIsOpen(false)}
          >
            Catalogue
          </a>
          <a 
            href="#apropos" 
            className={`block ${activeSection === 'apropos' ? 'text-yellow-300 font-bold' : ''} ${currentHoverColor}`} 
            onClick={() => setIsOpen(false)}
          >
            À propos
          </a>
          <a 
            href="#contact" 
            className={`block ${activeSection === 'contact' ? 'text-yellow-300 font-bold' : ''} ${currentHoverColor}`} 
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