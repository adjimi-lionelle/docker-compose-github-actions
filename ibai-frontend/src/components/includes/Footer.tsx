import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="fh5co-footer" role="contentinfo">
      <div className="container">
        <div className="row row-pb-md">
          <div className="col-md-4 fh5co-widget">
            <h4>IBAI</h4>
            <p>Email: <b>iba[at]univ-garoua.cm</b></p>
            <p>Téléphone: (+237) 6 20 07 36 36</p>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 col-md-push-1">
            <h4>Autres Menus</h4>
            <ul className="fh5co-footer-links">
              <li>
                <Link to="/actualite">Actualités</Link>
              </li>
              <li>
                <Link to="/agenda">Agenda</Link>
              </li>
              <li>
                <a href="https://webmail.example.com" target="_blank" rel="noopener noreferrer">Webmail</a>
              </li>
              <li>
                <Link to="/bibliotheque">Bibliothèque</Link>
              </li>
              <li>
                <Link to="/alumni">Alumni</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-6 col-md-push-1">
            <h4>Liens utiles</h4>
            <ul className="fh5co-footer-links">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/offres-stage">Déposer une offre de stage</Link>
              </li>
              <li>
                <Link to="/soutenir">Nous soutenir</Link>
              </li>
              <li>
                <Link to="/presse">Presse</Link>
              </li>
              <li>
                <Link to="/mentions-legales">Mentions légales</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; 2024 IBAI. Tous droits réservés.</small>
            </p>
            <p>
              <ul className="fh5co-social-icons">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                    <i className="icon-dribbble"></i>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;