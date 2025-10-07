import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Connexion from './page/connexion';
import Inscription from './page/inscription/inscription';
import InscriptionONG from './page/inscription/InscriptionONG';
//import InscriptionBenevole from './page/inscription/InscriptionBenevole';
import InscriptionDon from './page/inscription/inscriptiondon';
import InscriptionBen from './page/inscription/inscriptionben';
import OngDashboard from './page/ong/ongdashboard';
import OngProjets from './page/ong/OngProjets';
import OngDons from './page/ong/OngDons';
import OngBenevoles from './page/ong/OngBenevoles';
import OngSettings from './page/ong/OngSettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />

        
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/inscription/ong" element={<InscriptionONG />} />

        <Route path="/inscription/donateur" element={<InscriptionDon />} />
        <Route path="/inscription/benevole" element={<InscriptionBen />} />
        
        {/* Routes ONG Dashboard */}
        <Route path="/ong/dashboard" element={<OngDashboard />} />
        <Route path="/ong/projets" element={<OngProjets />} />
        <Route path="/ong/dons" element={<OngDons />} />
        <Route path="/ong/benevoles" element={<OngBenevoles />} />
        <Route path="/ong/settings" element={<OngSettings />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
