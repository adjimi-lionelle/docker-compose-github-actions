import React from 'react';
import { useLocation } from 'react-router-dom';

const Header2: React.FC = () => {
  const location = useLocation();

  const pageName = location.pathname
  .split('/')[1] // Récupère uniquement la première partie après le premier "/"
  ?.split('-') // Sépare les mots s'il y a des tirets
  .join(' ') // Remplace les tirets par des espaces
  .toUpperCase() || 'ACCEUIL'; // Par défaut, afficher "HOME" si l'URL est vide

  return (
    <header
      id="fh5co-header"
      className="fh5co-cover fh5co-cover-sm"
      role="banner"
      style={{ 
        backgroundImage: 'url(/images/img_bg_2.jpg)', 
        backgroundPosition: 'center center', // Centrage horizontal et vertical
        backgroundSize: 'cover', // Pour que l'image couvre tout l'espace
        backgroundRepeat: 'no-repeat' // Empêche la répétition
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t">
              <div className="display-tc animate-box" data-animate-effect="fadeIn">
                <h1>{pageName}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header2;
