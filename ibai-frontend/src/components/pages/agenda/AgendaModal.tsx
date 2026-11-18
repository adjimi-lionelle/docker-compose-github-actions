import React from "react";
import { Dialog } from "primereact/dialog";
import { Agenda } from "../../../interfaces/AgendaInterface";

interface AgendaModalProps {
    show: boolean;
    onClose: () => void;
    agenda: Agenda | undefined;
}

const AgendaModal: React.FC<AgendaModalProps> = ({ show, onClose, agenda }) => {
    return (
        <Dialog visible={show} onHide={onClose} header={agenda?.titre} style={{ width: "60vw" }} modal>
            {agenda && (
                <div className="row animate-box p-3">
                    <h2>{agenda.titre}</h2>
                    <span className="posted_on pb-2">Evènement le: <b>
                        {new Date(agenda.dateEvenement).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}</b>
                    </span>
                    <div className="fh5co-blog animate-box d-flex py-3">
                        {/* Image à gauche, prenant 50% de l'espace */}
                        <img className="img-responsive col-md-6 me-3"
                            src={agenda.imageThumbnail || "/images/default.jpg"}
                            alt={agenda.titre}
                            style={{ maxWidth: "50%", height: "auto", paddingLeft: "0px" }}
                        />

                        {/* Texte qui entoure l'image */}
                        <div className="flex-grow-1 text-justify" dangerouslySetInnerHTML={{ __html: agenda.details ?? "" }} />
                    </div>
                </div>
            )}
        </Dialog>
    );
};

export default AgendaModal;
