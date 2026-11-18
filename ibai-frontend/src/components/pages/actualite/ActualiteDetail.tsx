import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import Header2 from '../../includes/Header2';
import { ActualiteService } from '../../../services/ActualiteService';
import { Link, useParams } from 'react-router-dom';
import { Actualite } from '../../../interfaces/ActualiteInterface';
import Spinner from '../../utils/Spinner';

const Actualites: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [actualite, setActualite] = useState<Actualite | null>(null);
    const [actualites, setActualites] = useState<Actualite[]>([]);

    useEffect(() => {
        fetchActualites();
    }, []);

    const fetchActualites = async () => {
        const result = await ActualiteService.getActualites(1, 3, 'DESC');
        setActualites(result.data);
    };

    useEffect(() => {
        fetchActualite();
    }, []);

    const fetchActualite = async () => {
        const result = await ActualiteService.getActualite(parseInt(id ?? "", 10));
        setActualite(result);
    };

    if (!actualite) {
        return <Spinner />;
    }
    const cleanFileName = (fileName: string) => {
        return fileName.replace(/-\w{12,}\./, '.'); // Supprime UUID avant l'extension
    };

    return (
        <div>
            <Navbar />
            <Header2 />
            <div className="container">
                <div className="row animate-box py-3">
                    <h2>{actualite.titre}</h2>
                    <span className="posted_on pb-2">Publié le:
                        {new Date(actualite.dateActualite).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </span>
                    <div className="fh5co-blog animate-box d-flex py-3">
                        {/* Image à gauche, prenant 50% de l'espace */}
                        <img className="img-responsive col-md-6 me-3"
                            src={actualite.imageThumbnail || "/images/default.jpg"}
                            alt={actualite.titre}
                            style={{ maxWidth: "50%", height: "auto", paddingLeft: "0px" }}
                        />

                        {/* Texte qui entoure l'image */}
                        <div className="flex-grow-1 text-justify" dangerouslySetInnerHTML={{ __html: actualite.description ?? "" }} />
                    </div>
                    {actualite.piecesJointes.length > 0 && (
                        <div>
                            <h4>Pièces Jointes :</h4>
                            <ul>
                                {actualite.piecesJointes.map((pj) => (
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
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Dernières Actualités</h2>
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
                                        <a href="#">{actu.titre.length > 60 ? actu.titre.slice(0, 60) + '...' : actu.titre}</a>
                                    </h3>
                                    <span className="posted_on">
                                        {new Date(actu.dateActualite).toLocaleDateString('fr-FR', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </span>
                                    <p>{actu.description ? actu?.details?.slice(0, 150) + '...' : ''}</p>
                                    <Link to={`/actualite/${actu.id}/${encodeURIComponent(actu.titre)}`} className="btn btn-primary">
                                        Lire l'article
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-12 text-center pb-2">
                    <Link to="/actualites" className="btn btn-success btn-lg">
                        <i className="icon-shield"></i> Plus d'articles
                    </Link>
                </div>

            </div>
            <Footer />
        </div>

    );
};


export default Actualites;