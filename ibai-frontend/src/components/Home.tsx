import React, { useEffect, useState } from "react";
import Navbar from './includes/Navbar';
import Header from './includes/Header';
import Footer from './includes/Footer';

import { Actualite } from "../interfaces/ActualiteInterface";
import { ActualiteService } from "../services/ActualiteService";
import { Link } from "react-router-dom";
import { Agenda } from "../interfaces/AgendaInterface";
import { AgendaService } from "../services/AgendaService";
import { UnitePedagogique } from "../interfaces/UnitePedagogiqueInterface";
import { UnitePedagogiqueService } from "../services/UnitePedagogiqueService";
import { Button } from "primereact/button";

import AgendaModal from "./pages/agenda/AgendaModal";

const Home: React.FC = () => {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [agendas, setAgendas] = useState<Agenda[]>([]);
  const [unitePedagogiques, setUnitePedagogiques] = useState<UnitePedagogique[]>([]);
  const [selectedAgenda, setSelectedAgenda] = useState<Agenda>();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    fetchActualites();
    fetchAgendas();
    fetchUnitePedegogiques();
  }, []);

  const fetchActualites = async () => {
    const result = await ActualiteService.getActualites(1, 3, 'DESC');
    setActualites(result.data);
  };

  const fetchAgendas = async () => {
    const result = await AgendaService.getAgendas(1, 3, 'DESC');
    setAgendas(result.data);
  };
  const fetchUnitePedegogiques = async () => {
    const result = await UnitePedagogiqueService.getAllUnitesPedagogiques();
    setUnitePedagogiques(result.data);
  };

  const openDialog = (agenda: Agenda) => {
    setSelectedAgenda(agenda);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    setSelectedAgenda(undefined);
  };


  return (
    <div>
      <Navbar />
      <Header />

      {/* Section Counter */}
      <div id="fh5co-counter" className="fh5co-counters">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center animate-box">
              <span className="fh5co-counter js-counter" data-from="0" data-to="347" data-speed="5000" data-refresh-interval="50"></span>
              <span className="fh5co-counter-label">Etudiants</span>
            </div>
            <div className="col-md-4 text-center animate-box">
              <span className="fh5co-counter js-counter" data-from="0" data-to="16" data-speed="5000" data-refresh-interval="50"></span>
              <span className="fh5co-counter-label">Formations</span>
            </div>
            <div className="col-md-4 text-center animate-box">
              <span className="fh5co-counter js-counter" data-from="0" data-to="50" data-speed="5000" data-refresh-interval="50"></span>
              <span className="fh5co-counter-label">Enseignants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Section Actualités */}
      <div id="fh5co-blog">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Actualités</h2>
            </div>
          </div>
          <div className="row">
            {actualites.map((actu) => (
              <div key={actu.id} className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">
                  <a href="#">
                    <img
                      className="img-responsive"
                      src={
                        actu.image
                          ? `${actu.imageThumbnail}` // Le chemin dépendra où tu stockes tes images
                          : '/images/default.jpg' // Fallback si pas d'image
                      }
                      alt={actu.titre}
                    />
                  </a>
                  <div className="blog-text">
                    <h3>
                      <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`}>{actu.titre.length > 60 ? actu.titre.slice(0, 60) + '...' : actu.titre}</Link>
                    </h3>
                    <span className="posted_on">
                      {new Date(actu.dateActualite).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <p>{actu.details ? actu?.details?.slice(0, 150) + '...' : ''}</p>
                    <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`} className="btn btn-primary">
                      Lire l'article
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 text-center">
            <Link to="/actualites" className="btn btn-success btn-lg">
              <i className="pi pi-shield" style={{ fontSize: "1.5rem"}}></i> Plus d'articles
            </Link>
          </div>
        </div>
      </div>

      {/* Section Agenda */}
      <div id="fh5co-blog">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>AGENDA</h2>
            </div>
          </div>
          <div className="row">
            {agendas.map((agen) => (
              <div key={agen.id} className="col-lg-4 col-md-4">
                <div className="fh5co-blog animate-box">

                  <div className="blog-text">
                    <span className="posted_on">
                      {new Date(agen.dateEvenement).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <h1>
                      <a href="#">{agen.titre.length > 60 ? agen.titre.slice(0, 60) + '...' : agen.titre}</a>
                    </h1>
                    <p>{agen.details ? agen?.details?.slice(0, 150) + '...' : ''}</p>
                    <Button onClick={() => openDialog(agen)} className="btn btn-primary">
                      Voir l'évènement
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Utilisation du composant modal */}
            <AgendaModal show={showDialog} onClose={closeDialog} agenda={selectedAgenda} />
            {/* Ajoutez d'autres événements ici */}
          </div>
          <div className="col-md-12 text-center">
            <Link to="/agendas" className="btn btn-success btn-lg">
              <i className="pi pi-calendar" style={{ fontSize: "1.5rem"}}></i> Tous les évènements
            </Link>
          </div>
        </div>
      </div>

      {/* Section Départements */}
      <div id="fh5co-project">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Départements</h2>
              <p>L'Institut est structuré de manière à garantir une organisation optimale des différents départements.</p>
            </div>
          </div>
          <div className="container-fluid proj-bottom">
            <div className="row">
              {unitePedagogiques.map((unitp) => (
              <div key={unitp.id} className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                <Link to={`/unite-pedagogique/${unitp.id}/${encodeURIComponent(unitp.nom)}`}>
                <img
                      className="img-responsive"
                      src={
                        unitp.image1
                          ? `${unitp.image1Thumbnail}` // Le chemin dépendra où tu stockes tes images
                          : '/images/default.jpg' // Fallback si pas d'image
                      }
                      alt={unitp.nom}
                    />
                  <h3>{unitp.nom} ({unitp.sigle})</h3>
                  <span>En savoir plus</span>
                </Link>
              </div>
            ))}
              {/* Ajoutez d'autres départements ici */}
            </div>
          </div>
        </div>
      </div>

      {/* Section Centre d’expérimentation et d’innovation (CEI) */}
      <div id="fh5co-steps">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Centre d’expérimentation et d’innovation (CEI)</h2>
              <p>Le CEI de l'IBAI est un espace dédié à la recherche créative et au développement de projets novateurs.</p>
            </div>
            <div className="col-md-12 text-center animate-box">
              <p><a className="btn btn-primary btn-lg btn-learn" href="#">En savoir plus</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Partenaires */}
      <div id="fh5co-testimonial" className="fh5co-bg-section">
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
              <h2>Nos Partenaires</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row animate-box">
                <div className="owl-carousel owl-carousel-fullwidth">
                  <div className="item">
                    <div className="testimony-slide active text-center">
                      <figure>
                        <img src="/images/logo_uga.png" alt="Université de Garoua" />
                      </figure>
                      <span>Université de Garoua</span>
                    </div>
                  </div>
                  {/* Ajoutez d'autres partenaires ici */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Admission */}
      <div id="fh5co-started" style={{ backgroundImage: 'url(/images/img_bg_2.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2>Admission</h2>
              <p>Rejoignez l'Institut des Beaux-Arts et de l'Innovation en passant notre concours d'entrée.</p>
            </div>
          </div>
          <div className="row animate-box">
            <div className="col-md-8 col-md-offset-2 text-center">
              <p><a href="http://concours.ibai.univ-garoua.cm/" target="_blank" className="btn btn-default btn-lg">Je Candidate</a></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div >
  );
};

export default Home;