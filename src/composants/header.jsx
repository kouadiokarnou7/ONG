function Header() {
    return (
      <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Plateforme ONG</h1>
          <nav className="space-x-6">
            <a href="#accueil" className="hover:text-orange-500">Accueil</a>
            <a href="#catalogue" className="hover:text-orange-500">Catalogue</a>
            <a href="#apropos" className="hover:text-orange-500">À propos</a>
            <a href="#contact" className="hover:text-orange-500">Contact</a>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  