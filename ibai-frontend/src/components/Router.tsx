import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Actualites from './pages/actualite/Actualites';
import NotFound from './pages/NotFound';
import ActualiteDetail from './pages/actualite/ActualiteDetail';
import Agendas from './pages/agenda/Agendas';
import UnitePedagogiques from './pages/unite/UnitePedagogique';
import UnitePedagogiqueDetails from './pages/unite/UnitePedagogiqueDetails';
import FormationDetails from './pages/formations/FormationDetails';
import Contenu from './pages/contenu/Contenu';



const Router: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualites" element={<Actualites />} />
        <Route path="/actualite/:id/:titre" element={<ActualiteDetail />} />
        <Route path="/formation/:id/:nom" element={<FormationDetails />} />
        <Route path="/unite-pedagogique" element={<UnitePedagogiques />} />
        <Route path="/unite-pedagogique/:id/:titre" element={<UnitePedagogiqueDetails />} />
        <Route path="/agendas" element={<Agendas />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/institut" element={<Contenu />} />
        <Route path="/institut/a-propos/presentation-ibai" element={<Contenu />} />
        <Route path="/institut/a-propos/mot-du-directeur" element={<Contenu />} />
        <Route path="/institut/a-propos/organisation-et-contact" element={<Contenu />} />
        <Route path="/vie-etudiante" element={<Contenu />} />
        <Route path="/vie-etudiante/information/informations-et-demarches-administratives" element={<Contenu />} />
        <Route path="/vie-etudiante/representation-ibai/election-delegues-de-niveaux" element={<Contenu />} />
        <Route path="/vie-etudiante/representation-ibai/election-bureau-clubs-associations" element={<Contenu />} />
        <Route path="/vie-etudiante/representation-ibai/election-bureau-association-etudiants" element={<Contenu />} />
        <Route path="/vie-etudiante/representation-ibai/conseil-discipline" element={<Contenu />} />
        <Route path="/vie-etudiante/representation-ibai/conseil-institut" element={<Contenu />} />
        <Route path="/vie-etudiante/sante-et-securite/centre-medico-social" element={<Contenu />} />
        <Route path="/vie-etudiante/sante-et-securite/bon-reflexes" element={<Contenu />} />
        <Route path="/vie-etudiante/sante-et-securite/bourses-et-aide-sociale" element={<Contenu />} />
        <Route path="/vie-etudiante/sante-et-securite/bourse-excellence" element={<Contenu />} />
        <Route path="/vie-etudiante/sante-et-securite/programme-workstudy" element={<Contenu />} />
        <Route path="/vie-etudiante/offres-et-activites/vie-associatives" element={<Contenu />} />
        <Route path="/vie-etudiante/offres-et-activites/activites-sportives-culturelles" element={<Contenu />} />
        <Route path="/vie-etudiante/guides-pratiques/prospectus" element={<Contenu />} />
        <Route path="/formations" element={<Contenu />} />
        <Route path="/formations/inital/presentation-tronc-commun" element={<Contenu />} />
        <Route path="/formations/inital/mentions-parcours" element={<Contenu />} />
        <Route path="/formations/inital/evaluations" element={<Contenu />} />
        <Route path="/formations/inital/diplomes" element={<Contenu />} />
        <Route path="/formations/continue-et-distance/presentation-tronc-commun" element={<Contenu />} />
        <Route path="/formations/continue-et-distance/mentions-parcours" element={<Contenu />} />
        <Route path="/formations/continue-et-distance/evaluations" element={<Contenu />} />
        <Route path="/formations/continue-et-distance/diplomes" element={<Contenu />} />
        <Route path="/formations/3e-cycle/presentation" element={<Contenu />} />
        <Route path="/admission" element={<Contenu />} />
        <Route path="/admission/concours-premiere-annee" element={<Contenu />} />
        <Route path="/admission/concours-troisieme-annee" element={<Contenu />} />
        <Route path="/admission/etudes-dossier" element={<Contenu />} />
        <Route path="/admission/appel-candidatures-3e-cycle" element={<Contenu />} />

      </Routes>
    </HashRouter>
  );
};

export default Router;