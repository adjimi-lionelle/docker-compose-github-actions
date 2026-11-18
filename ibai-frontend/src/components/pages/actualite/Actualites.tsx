import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import Header2 from '../../includes/Header2';
import { Link } from 'react-router-dom';
import { Actualite } from '../../../interfaces/ActualiteInterface';
import { ActualiteService } from '../../../services/ActualiteService';

const Actualites: React.FC = () => {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const perPage = 9; // Nombre d'actualités par page

  useEffect(() => {
    fetchActualites();
  }, [page]);

  const fetchActualites = async () => {
    const result = await ActualiteService.getActualites(page, perPage, "DESC");
    setActualites(result.data);
    setTotalPages(Math.ceil(result.total / perPage));
  };
  return (
    <div>
      <Navbar />
      <Header2 />
      <div className="container">
        <div className="row animate-box py-3">
          <div className="col-md-8 col-md-offset-2fh5co-heading">
            <h2>Liste des Actualités</h2>
          </div>
        </div>
        <div className="row">
          {actualites.map((actu) => (
            <div key={actu.id} className="col-lg-4 col-md-4">
              <div className="fh5co-blog animate-box">
                <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`}>
                  <img
                    className="img-responsive"
                    src={actu.imageThumbnail || "/images/default.jpg"}
                    alt={actu.titre}
                  />
                </Link>
                <div className="blog-text">
                  <h3>
                    <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`}>
                      {actu.titre.length > 60 ? actu.titre.slice(0, 60) + "..." : actu.titre}
                    </Link>
                  </h3>
                  <span className="posted_on">
                    {new Date(actu.dateActualite).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <p>{actu.details ? actu.details.slice(0, 150) + "..." : ""}</p>
                  <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`} className="btn btn-primary">
                    Lire l'article
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination text-center">
          <button className='btn btn-success btn-lg' onClick={() => setPage(page - 1)} disabled={page === 1}>
            Précédent
          </button>&emsp;
          <span>Page {page} sur {totalPages}</span>&emsp;
          <button className='btn btn-success btn-lg' onClick={() => setPage(page + 1)} disabled={page === totalPages}>
            Suivant
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Actualites;