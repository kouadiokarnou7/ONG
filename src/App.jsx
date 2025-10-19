import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Connexion from './page/connexion';
import Inscription from './page/inscription/inscription';
import InscriptionONG from './page/inscription/InscriptionONG';

import InscriptionDon from './page/inscription/inscriptiondon';
import InscriptionBen from './page/inscription/inscriptionben';
import OngDashboard from './page/ong/ongdashboard';
import OngProjets from './page/ong/OngProjets';
import OngDons from './page/ong/OngDons';
import OngBenevoles from './page/ong/OngBenevoles';
import OngSettings from './page/ong/OngSettings';

import  BenevoleSettings from './page/benevoles/BenevoleSettings';
import BenevoleDashboard from './page/benevoles/BenevoleDashboard';
import BenevoleStats from './page/benevoles/BenevoleStats';

import Donateursdasboard from './page/donateurs/donateursdashboard';
import Don from './page/donateurs/don';
import Setting from './page/donateurs/setting';
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
        
        {/* Routes  pour les parties ONG  */}
        <Route path="/ong/dashboard" element={<OngDashboard />} />
        <Route path="/ong/projets" element={<OngProjets />} />
        <Route path="/ong/dons" element={<OngDons />} />
        <Route path="/ong/benevoles" element={<OngBenevoles />} />
        <Route path="/ong/settings" element={<OngSettings />} />

        {/* Routes  pour la partie Bénévole  */}
        <Route path="/benevole/dashboard" element={<BenevoleDashboard />} />
        <Route path="/benevole/stats" element={<BenevoleStats />} />
        <Route path="/benevole/settings" element={<BenevoleSettings />} />
        {/* Routes pour la partie  Donateurs */ }
        <Route path="/donateur/dashboard" element={<Donateursdasboard />} />
        <Route path="/donateur/dons" element={<Don />} />
        <Route path="/donateur/setting" element={<Setting />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
