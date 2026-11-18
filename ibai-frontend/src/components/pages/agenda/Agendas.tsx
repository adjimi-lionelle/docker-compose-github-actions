import React, { useEffect, useState } from 'react';
import Navbar from '../../includes/Navbar';
import Footer from '../../includes/Footer';
import Header2 from '../../includes/Header2';
import { Agenda } from '../../../interfaces/AgendaInterface';
import { AgendaService } from '../../../services/AgendaService';
import { Button } from 'primereact/button';
import AgendaModal from './AgendaModal';

const Agendas: React.FC = () => {
  const [agendas, setAgendas] = useState<Agenda[]>([]);
  const [selectedAgenda, setSelectedAgenda] = useState<Agenda>();
  const [showDialog, setShowDialog] = useState(false);

  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const perPage = 9; // Nombre d'agenalités par page

  useEffect(() => {
    fetchAgendas();
  }, [page]);

  const fetchAgendas = async () => {
    const result = await AgendaService.getAgendas(page, perPage, "DESC");
    setAgendas(result.data);
    setTotalPages(Math.ceil(result.total / perPage));
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
      <Header2 />
      <div className="container">
        <div className="row animate-box py-3">
          <div className="col-md-8 col-md-offset-2fh5co-heading">
            <h2>Liste des Evènements</h2>
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

export default Agendas;