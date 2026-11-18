import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header id="fh5co-header" className="fh5co-cover" role="banner" style={{ backgroundImage: 'url(/images/img_bg_3.jpg)' }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <div className="display-t">
              <div className="display-tc animate-box" data-animate-effect="fadeIn">
                <h1>L'art et l'innovation au service de la créativité.</h1>
                <h2>Créer, innover, transformer le monde | <Link to="/galerie">Notre Galerie d’Art</Link></h2>
                <p>
                  <Link to="/formations" className="btn btn-primary btn-lg btn-learn">Nos Formations</Link>
                  <Link to="/admission" className="btn btn-primary btn-lg popup-vimeo btn-video">
                    <i className="pi pi-user-plus" style={{ fontSize: "1.5rem"}}></i> Admission
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;