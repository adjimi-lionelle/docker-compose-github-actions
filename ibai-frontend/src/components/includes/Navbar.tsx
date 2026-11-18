import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UnitePedagogique } from '../../interfaces/UnitePedagogiqueInterface';
import { UnitePedagogiqueService } from '../../services/UnitePedagogiqueService';
import { UniteRecherche } from '../../interfaces/UniteRechercheInterface';
import { UniteRechercheService } from '../../services/UniteRechercheService';


const Navbar: React.FC = () => {
  const [unitePedagogiques, setUnitePedagogiques] = useState<UnitePedagogique[]>([]);
  const [uniteRecherches, setUniteRecherches] = useState<UniteRecherche[]>([]);
  useEffect(() => {
    fetchUnitePedegogiques();
    fetchUniteRecherches();
  }, []);
  const fetchUnitePedegogiques = async () => {
    const result = await UnitePedagogiqueService.getAllUnitesPedagogiques();
    setUnitePedagogiques(result.data);
  };

  const fetchUniteRecherches = async () => {
    const result = await UniteRechercheService.getAllUnitesRecherche();
    setUniteRecherches(result.data);
  };

  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-right">
              <p className="num">
                <Link to="/actualites">Actualités</Link>
              </p>
              <p className="num">
                <Link to="/agendas">Agendas</Link>
              </p>
              <p className="num">
                <a href="https://webmail.example.com" target="_blank" rel="noopener noreferrer">Webmail</a>
              </p>
              <p className="num">
                <Link to="/bibliotheque">Bibliothèque</Link>
              </p>
              <p className="num">
                <Link to="/alumni">Alumni</Link>
              </p>
              <ul className="fh5co-social">
                <li>
                  <a href="https://x.com/univGaroua" target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-twitter" style={{ fontSize: "1.5rem"}}></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/ibaiUGa" target="_blank" rel="noopener noreferrer">
                    <i className="pi pi-facebook" style={{ fontSize: "1.5rem"}}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="top-menu">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <div id="logo">
                <Link to="/">
                  <img src="/images/logo_ibai.png" alt="logo IBAI" className="img-responsive" />
                </Link>
              </div>
            </div>
            <div className="col-xs-10 text-right menu-1">
              <ul>
                <li className="active has-dropdown">
                  <Link to="/institut">Institut</Link>
                  <ul className="dropdown">
                    <li>À propos
                    </li>
                    <li>
                      <Link to="/institut/a-propos/presentation-ibai">Présentation de l'IBAI</Link>
                    </li>
                    <li>
                      <Link to="/institut/a-propos/mot-du-directeur">Mot du Directeur</Link>
                    </li>
                    <li>
                      <Link to="/institut/a-propos/organisation-et-contact">Organisation et contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="/vie-etudiante">Vie de l'étudiant</Link>
                  <ul className="dropdown">
                    <li>Information</li>
                    <li>
                      <Link to="/vie-etudiante/information/informations-et-demarches-administratives">Informations et démarches administratives</Link>
                    </li>
                    <li>Représentation des Etudiants aux instances de l'IBAI</li>
                    <li>
                      <Link to="/vie-etudiante/representation-ibai/election-delegues-de-niveaux">Election délégues de niveaux</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/representation-ibai/election-bureau-clubs-associations">Election du bureau des clubs et associations</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/representation-ibai/election-bureau-association-etudiants">Election du Bureau de l'association des étudiants de l'IBAI</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/representation-ibai/conseil-discipline">Conseil de discipline</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/representation-ibai/conseil-institut">Conseil d'institut</Link>
                    </li>
                    <li>Santé et sécurité</li>
                    <li>
                      <Link to="/vie-etudiante/sante-et-securite/centre-medico-social">Le Centre Médico-Social (CMS)</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/sante-et-securite/bon-reflexes">Bon reflexes</Link>
                    </li>

                    <li>
                      <Link to="/vie-etudiante/sante-et-securite/bourses-et-aide-sociale">Bourses et aide sociale</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/sante-et-securite/bourse-excellence">Bourse de l'excellence</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/sante-et-securite/programme-workstudy">Programme WorkStudy</Link>
                    </li>

                    <li>Les offres et activités</li>
                    <li>
                      <Link to="/vie-etudiante/offres-et-activites/vie-associatives">Vie associatives</Link>
                    </li>
                    <li>
                      <Link to="/vie-etudiante/offres-et-activites/activites-sportives-culturelles">Activités sportives et culturel</Link>
                    </li>

                    <li>Guides pratiques</li>
                    <li>
                      <Link to="/vie-etudiante/guides-pratiques/prospectus">Prospectus</Link>
                    </li>

                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="/formations">Formations</Link>
                  <ul className="dropdown">
                    <li>Formation Initial</li>
                    <li><Link to="/formations/inital/presentation-tronc-commun">Présentation et Tronc commun</Link></li>
                    <li><Link to="/formations/inital/mentions-parcours">Mentions et parcours</Link></li>
                    <li><Link to="/formations/inital/evaluations">Evaluations</Link></li>
                    <li><Link to="/formations/inital/diplomes">Diplômes</Link></li>

                    <li>Formation continue et à distance</li>
                    <li><Link to="/formations/continue-et-distance/presentation-tronc-commun">Présentation et Tronc commun</Link></li>
                    <li><Link to="/formations/continue-et-distance/mentions-parcours">Mentions et parcours</Link></li>
                    <li><Link to="/formations/continue-et-distance/evaluations">Evaluations</Link></li>
                    <li><Link to="/formations/continue-et-distance/diplomes">Diplômes</Link></li>

                    <li>3e cycle</li>
                    <li><Link to="/formations/3e-cycle/presentation">Présentation</Link></li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="/unite-pedagogique">Unités</Link>
                  <ul className="dropdown">
                    <li>Unité pédagogiques</li>
                    {unitePedagogiques.map((unitp) => (
                      <li><Link to={`/unite-pedagogique/${unitp.id}/${encodeURIComponent(unitp.nom)}`}>{unitp.nom} ({unitp.sigle})</Link></li>
                    ))}

                    <li>Unité de recherche</li>
                    {uniteRecherches.map((unitr) => (
                      <li><Link to={`/unite-pedagogique/${unitr.id}/${encodeURIComponent(unitr.nom)}`}>{unitr.nom} ({unitr.sigle})</Link></li>
                    ))}
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="/conservatoire">Conservatoire</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/conservatoire/galerie">Galerie d'art</Link>
                    </li>
                    <li>
                      <Link to="/conservatoire/artistes">Nos artistes</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="/admission">Admission</Link>
                  <ul className="dropdown">
                    <li>Formation Initial</li>
                    <li><Link to="/admission/concours-premiere-annee">Concours d'entrée en première année</Link></li>
                    <li><Link to="/admission/concours-troisieme-annee">Cours d'entrée en troisième année</Link></li>

                    <li>Formation continue et à distance</li>
                    <li><Link to="/admission/etudes-dossier">Etudes de dossier</Link></li>

                    <li>3e cycle</li>
                    <li><Link to="/admission/appel-candidatures-3e-cycle">Appel à candidatures</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;