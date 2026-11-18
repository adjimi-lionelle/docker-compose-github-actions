import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import Header2 from '../../includes/Header2';
import { FormationService } from '../../../services/FormationService';
import { Link, useParams } from 'react-router-dom';
import { Formation } from '../../../interfaces/FormationInterface';
import { UnitePedagogique } from '../../../interfaces/UnitePedagogiqueInterface';
import FormationsPage from '../../includes/FormationPage';
import { UnitePedagogiqueService } from '../../../services/UnitePedagogiqueService';
import Spinner from '../../utils/Spinner';

const FormationDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [formation, setFormation] = useState<Formation | null>(null);
    const [unitePedagogique, setUnitePedagogique] = useState<UnitePedagogique | null>();

    useEffect(() => {
        fetchFormation();
        fetchUnitePedagogique();
    }, [id]);

    useEffect(() => {
        fetchUnitePedagogique();
    }, [formation]);


    const fetchFormation = async () => {
        const result = await FormationService.getFormation(parseInt(id ?? "", 10));
        setFormation(result);
    };

    const fetchUnitePedagogique= async () => {
        const result = await UnitePedagogiqueService.getUnitePedagogique(formation?.unitePedagogique.id ?? 0);
        setUnitePedagogique(result);
    };

    if (!formation) {
         return <Spinner />;
    }

    return (
        <div>
            <Navbar />
            <Header2 />
            <div className="container">
                <div className="row py-3">
                    <h2>{formation.nom} ({formation.sigle})</h2>

                    <div className="col-md-5 animate-box d-flex pb-3 pl-0">
                        <div className="col-md-12 pl-0 pb-3">
                            <FormationsPage currentIdDepartement={formation?.unitePedagogique?.id}  currentIdFormation={parseInt(id ?? "", 10)}/> <br />
                            <img className="img-responsive me-3"
                                    src={formation.image1Thumbnail || "/images/default.jpg"}
                                    alt={formation.nom}
                                    style={{ maxWidth: "100%", height: "auto", paddingLeft: "0px" }}
                                />
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        <div className="text-justify" dangerouslySetInnerHTML={{ __html: formation.contenu1 ?? "" }} />
                    </div>

                </div>
                <div className="row animate-box py-3 fh5co-heading">
                    <div className="fh5co-blog animate-box d-flex py-3">
                        {/* Image à gauche, prenant 50% de l'espace */}

                        {formation.image2Thumbnail != null && (
                            <img className="img-responsive col-md-5 me-3"
                                src={formation.image2Thumbnail || "/images/default.jpg"}
                                alt={formation.nom}
                                style={{ maxWidth: "50%", height: "auto", paddingLeft: "0px" }}
                            />
                        )}

                        {formation.contenu2 != null && (
                            <div className="flex-grow-1 text-justify" dangerouslySetInnerHTML={{ __html: formation.contenu2 ?? "" }} />
                        )}

                    </div>
                </div>

                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Liste des formations</h2>
                    </div>
                </div>
                <div className="row">
                    {unitePedagogique?.formations.map((form) => 
                    
                    form.id !== parseInt(id ?? "",10) ?(
                        <div key={form.id} className="col-md-4 col-sm-6 fh5co-project animate-box" data-animate-effect="fadeIn">
                            <Link to={`/formation/${form.id}/${encodeURIComponent(form.nom)}`}>
                                <img
                                    className="img-responsive"
                                    src={
                                        form.image1
                                            ? `${form.image1Thumbnail}` // Le chemin dépendra où tu stockes tes images
                                            : '/images/default.jpg' // Fallback si pas d'image
                                    }
                                    alt={form.nom}
                                />
                                <h3>{form.nom} ({form.sigle})</h3>
                                <span>En savoir plus</span>
                            </Link>
                        </div>
                    ): null
                    )}
                </div>

            </div>
            <Footer />
        </div>

    );
};


export default FormationDetails;