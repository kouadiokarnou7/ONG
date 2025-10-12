import React, { useState, useEffect } from 'react';
import logo from '../assets/logo1.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  // Configuration des couleurs par section
  const sectionColors = {
    accueil: 'bg-blue-700',
    catalogue: 'bg-blue-700',
    apropos: 'bg-blue-700',
    contact: 'bg-blue-700',
  };

  const sectionHoverColors = {
    accueil: 'hover:text-orange-400',
    catalogue: 'hover:text-oange-400',
    apropos: 'hover:text-orange-400',
    contact: 'hover:text-orange-400'
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentBgColor = sectionColors[activeSection] || 'bg-blue-700';
  const currentHoverColor = sectionHoverColors[activeSection] || 'hover:text-blue-200';

  return (
    <header className={`${currentBgColor} text-white shadow-lg sticky top-0 z-50 w-full transition-colors duration-500`}>
      <div className="px-6 md:px-10 py-4 flex justify-between items-center">
        
        {/* Logo + Nom */}
        <a href="#accueil" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-3xl"><img src={logo } alt="salut" /></span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">Nyaha</h1>
        </a>

        {/* Menu Desktop - Centré */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <nav className="flex items-center space-x-6 font-medium">
            <a 
              href="#accueil" 
              className={`${activeSection === 'accueil' ? 'text-orange-400 font-bold border-b-2 border-yellow-300' : ''} ${currentHoverColor} transition-all pb-1`}
            >
              Accueil
            </a>
            <a 
              href="#catalogue" 
              className={`${activeSection === 'catalogue' ? 'text-orange-400 font-bold border-b-2 border-yellow-300' : ''} ${currentHoverColor} transition-all pb-1`}
            >
              partenaires
            </a>
            <a 
              href="#apropos" 
              className={`${activeSection === 'apropos' ? 'text-orange-400 font-bold border-b-2 border-yellow-300' : ''} ${currentHoverColor} transition-all pb-1`}
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className={`${activeSection === 'contact' ? 'text-orange-400 font-bold border-b-2 border-yellow-300' : ''} ${currentHoverColor} transition-all pb-1`}
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Connexion ONG - À droite */}
        <a 
          href="/connexion" 
          className="hidden md:flex items-center space-x-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-red-700 transition-all font-semibold"
        >
          
          <span>Connexion ONG</span>
        </a>

        {/* Bouton Hamburger (Mobile) */}
        <button
          className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-white rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav 
          className="md:hidden py-6 px-6 space-y-4 font-medium bg-black bg-opacity-30 backdrop-blur-sm"
        >
          <a 
            href="#accueil" 
            className={`block ${activeSection === 'accueil' ? 'text-orange-400 font-bold' : ''} ${currentHoverColor} transition-colors py-2`} 
            onClick={() => setIsOpen(false)}
          >
            🏠 Accueil
          </a>
          <a 
            href="#catalogue" 
            className={`block ${activeSection === 'catalogue' ? 'text-orange-400 font-bold' : ''} ${currentHoverColor} transition-colors py-2`} 
            onClick={() => setIsOpen(false)}
          >
            📚 partenaires
          </a>
          <a 
            href="#apropos" 
            className={`block ${activeSection === 'apropos' ? 'text-orange-400 font-bold' : ''} ${currentHoverColor} transition-colors py-2`} 
            onClick={() => setIsOpen(false)}
          >
            ℹ️ À propos
          </a>
          <a 
            href="#contact" 
            className={`block ${activeSection === 'contact' ? 'text-orange-400 font-bold' : ''} ${currentHoverColor} transition-colors py-2`} 
            onClick={() => setIsOpen(false)}
          >
            📞 Contact
          </a>
          
          {/* Connexion ONG Mobile */}
          <div className="pt-4 border-t border-white border-opacity-30">
            <a 
              href="/connexion"
              className="flex items-center justify-center space-x-2 w-full px-5 py-3 border-2 border-white rounded-lg hover:bg-white hover:text-blue-700 transition-all font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <span>🏢</span>
              <span>Connexion ONG</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;