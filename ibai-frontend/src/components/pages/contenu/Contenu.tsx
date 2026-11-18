import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import getPageIdByPathname from '../../utils/getPageIdByPathname';
import { useLocation } from 'react-router-dom';
import { ContenuService } from '../../../services/ContenuService';
import type { Contenu } from '../../../interfaces/ContenuInterface';
import Header2 from '../../includes/Header2';
import ContenuPage from '../../includes/ContenuPage';
import Spinner from '../../utils/Spinner';

const Contenu: React.FC = () => {
  const location = useLocation();
  const pageId = getPageIdByPathname(location.pathname);
  const [contenu, setContenu] = useState<Contenu>();
  const [menuItems, setMenuItems] = useState<{ id: number; nom: string; link: string }[]>([]);

  const pageName = location.pathname
  .split('/')[1] // Récupère uniquement la première partie après le premier "/"
  ?.split('-') // Sépare les mots s'il y a des tirets
  .join(' ') // Remplace les tirets par des espaces
  .toLocaleLowerCase() || 'ACCEUIL'; // Par défaut, afficher "HOME" si l'URL est vide

  

  useEffect(() => {
    fetchContenu();
    updateMenuItems();
  }, [pageId, pageName]);

  const fetchContenu = async () => {
    if (pageId === null) {
      console.error("Page ID is null");
      return
    }
    const result = await ContenuService.getContenu(pageId);
    setContenu(result);
  };

  const updateMenuItems = async () => {
    setMenuItems([]);

    if(pageName === "institut") {
      setMenuItems([
        { id: 0, nom: 'À propos', link: '#' },
        { id: 3, nom: 'Présentation de l\'IBAI', link: '/institut/a-propos/presentation-ibai' },
        { id: 1, nom: 'Mot du Directeur', link: '/institut/a-propos/mot-du-directeur' },
        { id: 4, nom: 'Organisation et contact', link: '/institut/a-propos/organisation-et-contact' },
      ]);
    }
    else if(pageName === "vie etudiante") {
      setMenuItems([
        { id: 0, nom: 'Information', link: '#' },
        { id: 6, nom: 'Informations et démarches administrative', link: '/vie-etudiante/information/informations-et-demarches-administratives' },
        { id: 0, nom: 'Représentation des Etudiants aux instances de l\'IBAI', link: '#' },
        { id: 7, nom: 'Election délégues de niveaux', link: '/vie-etudiante/representation-ibai/election-delegues-de-niveaux' },
        { id: 8, nom: 'Election du bureau des clubs et associations', link: '/vie-etudiante/representation-ibai/election-bureau-clubs-associations' },
        { id: 9, nom: 'Election du Bureau de l\'association des étudiants de l\'IBAI', link: '/vie-etudiante/representation-ibai/election-bureau-association-etudiants' },
        { id: 10, nom: 'Conseil de discipline', link: '/vie-etudiante/representation-ibai/conseil-discipline' },
        { id: 11, nom: 'Conseil d\'institut', link: '/vie-etudiante/representation-ibai/conseil-institut' },
        { id: 0, nom: 'Santé et sécurité', link: '#' },
        { id: 12, nom: 'Le Centre Médico-Social (CMS)', link: '/vie-etudiante/sante-et-securite/centre-medico-social' },
        { id: 13, nom: 'Bon reflexes', link: '/vie-etudiante/sante-et-securite/bon-reflexes' },
        { id: 14, nom: 'Bourses et aide sociale', link: '/vie-etudiante/sante-et-securite/bourses-et-aide-sociale' },
        { id: 15, nom: 'Bourse de l\'excellence', link: '/vie-etudiante/sante-et-securite/bourse-excellence' },
        { id: 16, nom: 'Programme WorkStudy', link: '/vie-etudiante/sante-et-securite/programme-workstudy' },
        { id: 0, nom: 'Les offres et activités', link: '#' },
        { id: 17, nom: 'Vie associatives', link: '/vie-etudiante/offres-et-activites/vie-associatives' },
        { id: 18, nom: 'Activités sportives et culturel', link: '/vie-etudiante/offres-et-activites/activites-sportives-culturelles' },
        { id: 0, nom: 'Guides pratiques', link: '#' },
        { id: 19, nom: 'Prospectus', link: '/vie-etudiante/guides-pratiques/prospectus' },
      ]);
    }
    else if(pageName === "formations") {
      setMenuItems([
        { id: 0, nom: 'Formation Initial', link: '#' },
        { id: 20, nom: 'Présentation et Tronc commun', link: '/formations/inital/presentation-tronc-commun' },
        { id: 21, nom: 'Mentions et parcours', link: '/formations/inital/mentions-parcours' },
        { id: 22, nom: 'Evaluations', link: '/formations/inital/evaluations' },
        { id: 23, nom: 'Diplômes', link: '/formations/inital/diplomes' },
        { id: 0, nom: 'Formation continue et à distance', link: '#' },
        { id: 24, nom: 'Présentation et Tronc commun', link: '/formations/continue-et-distance/presentation-tronc-commun' },
        { id: 25, nom: 'Mentions et parcours', link: '/formations/continue-et-distance/mentions-parcours' },
        { id: 26, nom: 'Evaluations', link: '/formations/continue-et-distance/evaluations' },
        { id: 27, nom: 'Diplômes', link: '/formations/continue-et-distance/diplomes' },
        { id: 0, nom: '3e cycle', link: '#' },
        { id: 28, nom: 'Présentation', link: '/formations/3e-cycle/presentation' },
      ]);
    }
    else if(pageName === "admission") {
      setMenuItems([
        { id: 0, nom: 'Formation Initial', link: '#' },
        { id: 29, nom: 'Concours d\'entrée en première année', link: '/admission/concours-premiere-annee' },
        { id: 30, nom: 'Cours d\'entrée en troisième année', link: '/admission/concours-troisieme-annee' },
        { id: 0, nom: 'Formation continue et à distance', link: '#' },
        { id: 31, nom: 'Etudes de dossier', link: '/admission/etudes-dossier' },
        { id: 0, nom: '3e cycle', link: '#' },
        { id: 32, nom: 'Appel à candidatures', link: '/admission/appel-candidatures-3e-cycle' },
      ]);
    }
    else {
      setMenuItems([]); // Réinitialisez la liste si aucune condition n'est remplie
    }
  }

  if (!contenu) {
    return <Spinner />; // Utilisez le composant Spinner ici
  }

  const cleanFileName = (fileName: string) => {
    return fileName.replace(/-\w{12,}\./, '.'); // Supprime UUID avant l'extension
  };


  return (
    <div>
      <Navbar />
      <Header2 />
      <div className="container">
        <div className="row py-3">
          <h2>{contenu.title}</h2>

          <div className="col-md-5 animate-box d-flex pb-3 pl-0">
            <div className="col-md-12 pl-0 pb-3">
              <img className="img-responsive me-3 mb-2"
                src={contenu.image1Thumbnail || "/images/default.jpg"}
                alt={contenu.title}
                style={{ maxWidth: "100%", height: "auto", paddingLeft: "0px" }}
              />
              <ContenuPage key={menuItems.length} currentId={contenu.id ?? 0} items={menuItems} /> <br />
            </div>
          </div>
          <div className="flex-grow-1">
            <div className="text-justify" dangerouslySetInnerHTML={{ __html: contenu.contenu1 ?? "" }} />
          </div>

        </div>
        <div className="row animate-box py-3 fh5co-heading">
          <div className="fh5co-blog animate-box d-flex py-3">
            {/* Image à gauche, prenant 50% de l'espace */}

            {contenu.image2Thumbnail != null && (
              <img className="img-responsive col-md-5 me-3"
                src={contenu.image2Thumbnail || "/images/default.jpg"}
                alt={contenu.title}
                style={{ maxWidth: "50%", height: "auto", paddingLeft: "0px" }}
              />
            )}

            {contenu.contenu2 != null && (
              <div className="flex-grow-1 text-justify" dangerouslySetInnerHTML={{ __html: contenu.contenu2 ?? "" }} />
            )}

          </div>
        </div>
        <div className="row">
          {contenu.piecesJointes.length > 0 && (
            <div>
              <h4>Pièces Jointes :</h4>
              <ul>
                {contenu.piecesJointes.map((pj) => (
                  <li key={pj.id}>
                    <a href={`${import.meta.env.VITE_API_BASE_URL}/uploads/pieces_jointes/${pj.fileName}`} target="_blank" rel="noopener noreferrer">
                      {cleanFileName(pj.fileName)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Contenu;