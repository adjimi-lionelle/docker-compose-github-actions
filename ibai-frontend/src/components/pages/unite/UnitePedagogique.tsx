import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import Header2 from '../../includes/Header2';
import { Link } from 'react-router-dom';
import { UnitePedagogique } from '../../../interfaces/UnitePedagogiqueInterface';
import { UnitePedagogiqueService } from '../../../services/UnitePedagogiqueService';

const UnitePedagogiques: React.FC = () => {
  const [unitePedagogiques, setUnitePedagogiques] = useState<UnitePedagogique[]>([]);

  useEffect(() => {
    fetchUnitePedagogiques();
  }, []);

  const fetchUnitePedagogiques = async () => {
    const result = await UnitePedagogiqueService.getAllUnitesPedagogiques();
    setUnitePedagogiques(result.data);
  };
  return (
    <div>
      <Navbar />
      <Header2 />
      <div className="container">
        <div className="row animate-box py-3">
          <div className="col-md-8 col-md-offset-2fh5co-heading">
            <h2>Liste des Unités Pédagogiques</h2>
          </div>
        </div>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UnitePedagogiques;