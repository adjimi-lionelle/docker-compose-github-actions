import React from 'react';
import './Spinner.css'; // Ajoutez un fichier CSS pour le style du spinner

const Spinner: React.FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;