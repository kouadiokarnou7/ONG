
import React from 'react';

import Header from '../composants/header';
import Accueil from '../composants/accueil';
import Catalogue from '../composants/catalogue';
import Apropos from '../composants/apropos';
 import Contact from '../composants/contact';
 import Footer from '../composants/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Accueil />
      <Catalogue />
      <Apropos />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
