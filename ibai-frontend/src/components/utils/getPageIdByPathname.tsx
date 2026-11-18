const getPageIdByPathname = (pathname: string): number | null => {
    switch (pathname) {
        case '/institut':
          return 1;
        case '/institut/a-propos/mot-du-directeur':
          return 1;
        case '/institut/a-propos/presentation-ibai':
          return 3;
        case '/institut/a-propos/organisation-et-contact':
          return 4;
        case '/vie-etudiante':
          return 6;
        case '/vie-etudiante/information/informations-et-demarches-administratives':
          return 6;
        case '/vie-etudiante/representation-ibai/election-delegues-de-niveaux':
          return 7;
        case '/vie-etudiante/representation-ibai/election-bureau-clubs-associations':
          return 8;
        case '/vie-etudiante/representation-ibai/election-bureau-association-etudiants':
          return 9;
        case '/vie-etudiante/representation-ibai/conseil-discipline':
          return 10;
        case '/vie-etudiante/representation-ibai/conseil-institut':
          return 11;
        case '/vie-etudiante/sante-et-securite/centre-medico-social':
          return 12;
        case '/vie-etudiante/sante-et-securite/bon-reflexes':
          return 13;
        case '/vie-etudiante/sante-et-securite/bourses-et-aide-sociale':
          return 14;
        case '/vie-etudiante/sante-et-securite/bourse-excellence':
          return 15;
        case '/vie-etudiante/sante-et-securite/programme-workstudy':
          return 16;
        case '/vie-etudiante/offres-et-activites/vie-associatives':
          return 17;
        case '/vie-etudiante/offres-et-activites/activites-sportives-culturelles':
          return 18;
        case '/vie-etudiante/guides-pratiques/prospectus':
          return 19;
        case '/formations':
          return 20;
        case '/formations/inital/presentation-tronc-commun':
          return 20;
        case '/formations/inital/mentions-parcours':
          return 21;
        case '/formations/inital/evaluations':
          return 22;
        case '/formations/inital/diplomes':
          return 23;
        case '/formations/continue-et-distance/presentation-tronc-commun':
          return 24;
        case '/formations/continue-et-distance/mentions-parcours':
          return 25;
        case '/formations/continue-et-distance/evaluations':
          return 26;
        case '/formations/continue-et-distance/diplomes':
          return 27;
        case '/formations/3e-cycle/presentation':
          return 29;
        case '/admission':
          return 29;
        case '/admission/concours-premiere-annee':
          return 29;
        case '/admission/concours-troisieme-annee':
          return 30;
        case '/admission/etudes-ddossier':
          return 31;
        case '/admission/appel-candidatures-3e-cycle':
          return 32;
        default:
          return null; // Retourne null si le pathname ne correspond à aucune route
    }
  };
  
  export default getPageIdByPathname;