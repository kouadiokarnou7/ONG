import React from 'react';

import Header from '../composants/header';
import Accueil from '../composants/accueil';
import Catalogue from '../composants/catalogue';
import Apropos from '../composants/apropos';
import Contact from '../composants/contact';
import Footer from '../composants/footer';

const Home = () => {
  return (
    <div className="bg-white min-h-screen  flex flex-col">
      {/* Header fixé en haut */}
      <Header />

      {/* Contenu principal */}
      <main className="flex-1">
        <Accueil />
        <Catalogue />
        <Apropos />
        <Contact />
      </main>

      {/* Footer collé en bas */}
      <Footer />
    </div>
  );
};

export default Home;
