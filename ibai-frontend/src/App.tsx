import React from 'react';
import './assets/css/animate.css';
import './assets/css/icomoon.css';
import './assets/css/bootstrap.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/style.css';
import 'jquery';
import 'bootstrap';
import './assets/js/jquery.easing.1.3.js';
//import './assets/js/jquery.stellar.min.js';
import './assets/js/jquery.waypoints.min.js';
import './assets/js/jquery.countTo.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/magnific-popup-options.js';
import './assets/js/main.js';

import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";  
import "primeicons/primeicons.css";  



import $ from 'jquery';

// Déclarer jQuery comme variable globale
(window as any).$ = $;
(window as any).jQuery = $;

import Router from './components/Router';

const App: React.FC = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;